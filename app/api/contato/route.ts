// app/api/contato/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Tipo = "contato" | "wizard" | "bio_diagnostico";

type ContatoPayload = {
  tipo?: Tipo;
  nome?: string;
  email?: string;
  assunto?: string;
  mensagem?: string;
};

// Wizard completo (já existe no teu site)
type WizardPayload = ContatoPayload & {
  dores?: string[]; // títulos
  cenario?: string;
  prioridade?: string;
  recomendacaoPrincipal?: string;
  recomendacaoAlternativa?: string;
  resumo?: string;
};

// Bio diagnóstico curto (Instagram)
type BioPayload = ContatoPayload & {
  problema_principal?: string;
  origem?: string; // ex: instagram_bio
};

type Payload = WizardPayload & BioPayload;

function clamp(s: string, max: number) {
  const v = String(s || "");
  return v.length > max ? v.slice(0, max) : v;
}

function escapeHtml(input: string) {
  return String(input || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isEmailValid(email: string) {
  return /^\S+@\S+\.\S+$/.test(String(email || "").trim());
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toInternal = process.env.CONTACT_TO || "contato@libertrendz.eu";

    // Quando domínio está verificado, use remetente do domínio.
    const from = process.env.RESEND_FROM || "Libertrendz <contato@libertrendz.eu>";

    if (!apiKey) {
      console.error("RESEND_API_KEY não configurada.");
      return NextResponse.json(
        { ok: false, error: "Configuração de e-mail ausente." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = (await req.json()) as Partial<Payload>;

    const tipo: Tipo = (body.tipo || "contato") as Tipo;

    const nome = clamp(String(body.nome || "").trim(), 120);
    const email = clamp(String(body.email || "").trim(), 200);
    const assunto = clamp(String(body.assunto || "").trim(), 140);

    // Mensagem pode vir de:
    // - contato: mensagem
    // - wizard: resumo ou mensagem
    // - bio: mensagem (compat) ou problema_principal
    const mensagemFallback = String(
      body.mensagem ||
        body.resumo ||
        (body.problema_principal ? `Problema principal: ${body.problema_principal}` : "") ||
        ""
    ).trim();
    const mensagem = clamp(mensagemFallback, 20000);

    // Validações comuns
    const emailOk = isEmailValid(email);

    // Regras:
    // - contato: nome + email + mensagem obrigatórios
    // - wizard: nome + email obrigatórios (conteúdo pode vir em resumo/mensagem/campos)
    // - bio_diagnostico: nome + email obrigatórios + problema_principal OU mensagem
    if (!nome || !emailOk) {
      return NextResponse.json(
        { ok: false, error: "Nome e e-mail válidos são obrigatórios." },
        { status: 400 }
      );
    }

    if (tipo === "contato" && !mensagem) {
      return NextResponse.json(
        { ok: false, error: "Mensagem obrigatória." },
        { status: 400 }
      );
    }

    if (tipo === "bio_diagnostico") {
      const problema = String(body.problema_principal || "").trim();
      if (!problema && !mensagem) {
        return NextResponse.json(
          { ok: false, error: "Indica o problema principal." },
          { status: 400 }
        );
      }
    }

    const isWizard = tipo === "wizard";
    const isBio = tipo === "bio_diagnostico";
    const wantsAutoReply = isWizard || isBio; // auto-resposta para ambos

    // Campos wizard (podem vir vazios, então fazemos fallback)
    const doresArr = Array.isArray(body.dores) ? body.dores.filter(Boolean) : [];
    const doresText = doresArr.length ? doresArr.join(" · ") : "(não informado)";
    const cenario = clamp(String(body.cenario || "-").trim(), 180) || "-";
    const prioridade = clamp(String(body.prioridade || "-").trim(), 180) || "-";
    const recP = clamp(String(body.recomendacaoPrincipal || "-").trim(), 220) || "-";
    const recA = clamp(String(body.recomendacaoAlternativa || "-").trim(), 220) || "-";
    const resumo = String(body.resumo || "").trim();

    // Campos bio
    const problemaPrincipal = clamp(String(body.problema_principal || "").trim(), 220);
    const origem = clamp(String(body.origem || "").trim(), 120) || (isBio ? "instagram_bio" : "");

    // Assunto interno
    const assuntoEmail = (() => {
      if (isBio) return "[Libertrendz] Diagnóstico Instagram";
      if (isWizard) return `[Libertrendz] ${assunto || "Diagnóstico (Wizard)"}`;
      return assunto ? `[Libertrendz] ${assunto}` : "[Libertrendz] Novo contato pelo site";
    })();

    // Texto interno (rico e útil)
    const textoInterno = (() => {
      if (isBio) {
        return `
Novo lead — Diagnóstico curto (Instagram)

Nome: ${nome}
E-mail: ${email}
Origem: ${origem || "-"}

Problema principal: ${problemaPrincipal || "(não informado)"}

Mensagem/Resumo:
${mensagem || "(vazio)"}
`.trim();
      }

      if (isWizard) {
        // Se resumo vier vazio, monta um resumo mínimo a partir dos campos
        const resumoFinal =
          resumo ||
          [
            "Diagnóstico Libertrendz",
            "",
            `Dores: ${doresText}`,
            `Cenário atual: ${cenario}`,
            `Prioridade: ${prioridade}`,
            "",
            `Recomendação principal: ${recP}`,
            `Alternativa: ${recA}`,
            "",
            `Mensagem: ${mensagem || "(vazio)"}`,
          ].join("\n");

        return `
Novo lead via Wizard (Diagnóstico Libertrendz)

Nome: ${nome}
E-mail: ${email}

Dores: ${doresText}
Cenário atual: ${cenario}
Prioridade: ${prioridade}

Recomendação principal: ${recP}
Alternativa: ${recA}

Resumo completo:
${resumoFinal}
`.trim();
      }

      return `
Novo contato pelo site Libertrendz:

Nome: ${nome}
E-mail: ${email}
Assunto: ${assunto || "(não informado)"}

Mensagem:
${mensagem}
`.trim();
    })();

    // HTML interno
    const htmlInterno = (() => {
      if (isBio) {
        return `
<h2>Novo lead — Diagnóstico curto (Instagram)</h2>
<p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
<p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
<p><strong>Origem:</strong> ${escapeHtml(origem || "-")}</p>
<p><strong>Problema principal:</strong> ${escapeHtml(problemaPrincipal || "(não informado)")}</p>
<p><strong>Mensagem/Resumo:</strong></p>
<p style="white-space:pre-line;">${escapeHtml(mensagem || "(vazio)")}</p>
`.trim();
      }

      if (isWizard) {
        const resumoFinal =
          resumo ||
          [
            "Diagnóstico Libertrendz",
            "",
            `Dores: ${doresText}`,
            `Cenário atual: ${cenario}`,
            `Prioridade: ${prioridade}`,
            "",
            `Recomendação principal: ${recP}`,
            `Alternativa: ${recA}`,
            "",
            `Mensagem: ${mensagem || "(vazio)"}`,
          ].join("\n");

        return `
<h2>Novo lead via Wizard (Diagnóstico Libertrendz)</h2>
<p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
<p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
<p><strong>Dores:</strong> ${escapeHtml(doresText)}</p>
<p><strong>Cenário atual:</strong> ${escapeHtml(cenario)}</p>
<p><strong>Prioridade:</strong> ${escapeHtml(prioridade)}</p>
<p><strong>Recomendação principal:</strong> ${escapeHtml(recP)}</p>
<p><strong>Alternativa:</strong> ${escapeHtml(recA)}</p>
<p><strong>Resumo completo:</strong></p>
<p style="white-space:pre-line;">${escapeHtml(resumoFinal)}</p>
`.trim();
      }

      return `
<h2>Novo contato pelo site Libertrendz</h2>
<p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
<p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
<p><strong>Assunto:</strong> ${escapeHtml(assunto || "(não informado)")}</p>
<p><strong>Mensagem:</strong></p>
<p style="white-space:pre-line;">${escapeHtml(mensagem)}</p>
`.trim();
    })();

    // 1) Email interno (para Libertrendz)
    await resend.emails.send({
      from,
      to: [toInternal],
      replyTo: email, // responder direto ao lead
      subject: assuntoEmail,
      text: textoInterno,
      html: htmlInterno,
    });

    // 2) Auto-resposta (wizard + bio)
    if (wantsAutoReply) {
      const assuntoProspect = "Recebemos o teu pedido — Libertrendz";

      const textoProspect = `
Olá ${nome},

Recebemos o teu pedido e já ficou registado.
A equipa Libertrendz vai analisar e responder por email em até 24 horas.

Se quiseres acelerar, responde a este email com:
- link do site (se existir)
- nº de pessoas na operação
- o que está a doer mais hoje

Obrigado,
Libertrendz
`.trim();

      const htmlProspect = `
<h2>Recebemos o teu pedido</h2>
<p>Olá ${escapeHtml(nome)},</p>
<p>Recebemos o teu pedido e já ficou registado.</p>
<p>A equipa Libertrendz vai analisar e responder por email em <strong>até 24 horas</strong>.</p>
<p>Se quiseres acelerar, responde a este email com:</p>
<ul>
  <li>link do site (se existir)</li>
  <li>nº de pessoas na operação</li>
  <li>o que está a doer mais hoje</li>
</ul>
<p>Obrigado,<br/>Libertrendz</p>
`.trim();

      await resend.emails.send({
        from,
        to: [email],
        replyTo: toInternal,
        subject: assuntoProspect,
        text: textoProspect,
        html: htmlProspect,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json({ ok: false, error: "Erro ao enviar e-mail." }, { status: 500 });
  }
}