// app/api/contato/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Tipo = "contato" | "wizard";

type ContatoPayload = {
  tipo?: Tipo;
  nome?: string;
  email?: string;
  assunto?: string;
  mensagem?: string;
};

type WizardPayload = ContatoPayload & {
  dores?: string[]; // títulos
  cenario?: string;
  prioridade?: string;
  recomendacaoPrincipal?: string;
  recomendacaoAlternativa?: string;
  resumo?: string;
};

function clamp(s: string, max: number) {
  const v = String(s || "");
  return v.length > max ? v.slice(0, max) : v;
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toInternal = process.env.CONTACT_TO || "contato@libertrendz.eu";

    // Importante: quando o domínio já está verificado, usa remetente do teu domínio.
    // Ex.: "Libertrendz <contato@libertrendz.eu>" (ou "no-reply@libertrendz.eu").
    const from = process.env.RESEND_FROM || "Libertrendz <contato@libertrendz.eu>";

    if (!apiKey) {
      console.error("RESEND_API_KEY não configurada.");
      return NextResponse.json(
        { ok: false, error: "Configuração de e-mail ausente." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = (await req.json()) as WizardPayload;

    const tipo: Tipo = (body.tipo || "contato") as Tipo;

    const nome = clamp(String(body.nome || "").trim(), 120);
    const email = clamp(String(body.email || "").trim(), 200);
    const assunto = clamp(String(body.assunto || "").trim(), 140);

    // Wizard pode mandar "resumo" ou "mensagem". Para contato normal é "mensagem".
    const mensagemRaw = String(body.mensagem || body.resumo || "").trim();
    const mensagem = clamp(mensagemRaw, 20000);

    const emailOk = /^\S+@\S+\.\S+$/.test(email);

    // Regras:
    // - Contato: nome + email + mensagem obrigatórios
    // - Wizard: nome + email obrigatórios e pelo menos um conteúdo (resumo/mensagem ou campos)
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

    const isWizard = tipo === "wizard";

    // Campos do wizard (podem vir vazios se frontend não mandar — mas agora vamos mandar)
    const doresArr = Array.isArray(body.dores) ? body.dores.filter(Boolean) : [];
    const doresText = doresArr.length ? doresArr.join(" · ") : "(não informado)";
    const cenario = clamp(String(body.cenario || "-").trim(), 180) || "-";
    const prioridade = clamp(String(body.prioridade || "-").trim(), 180) || "-";
    const recP = clamp(String(body.recomendacaoPrincipal || "-").trim(), 220) || "-";
    const recA = clamp(String(body.recomendacaoAlternativa || "-").trim(), 220) || "-";
    const resumo = String(body.resumo || mensagem || "").trim();

    // Assunto interno
    const assuntoEmail = (() => {
      if (isWizard) {
        const a = assunto || "Diagnóstico (Wizard)";
        return `[Libertrendz] ${a}`;
      }
      return assunto ? `[Libertrendz] ${assunto}` : "[Libertrendz] Novo contato pelo site";
    })();

    // Texto interno
    const textoInterno = isWizard
      ? `
Novo lead via Wizard (Diagnóstico Libertrendz)

Nome: ${nome}
E-mail: ${email}

Dores: ${doresText}
Cenário atual: ${cenario}
Prioridade: ${prioridade}

Recomendação principal: ${recP}
Alternativa: ${recA}

Resumo completo:
${resumo || "(vazio)"}
`.trim()
      : `
Novo contato pelo site Libertrendz:

Nome: ${nome}
E-mail: ${email}
Assunto: ${assunto || "(não informado)"}

Mensagem:
${mensagem}
`.trim();

    // HTML interno
    const htmlInterno = isWizard
      ? `
<h2>Novo lead via Wizard (Diagnóstico Libertrendz)</h2>
<p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
<p><strong>E-mail:</strong> ${escapeHtml(email)}</p>

<p><strong>Dores:</strong> ${escapeHtml(doresText)}</p>
<p><strong>Cenário atual:</strong> ${escapeHtml(cenario)}</p>
<p><strong>Prioridade:</strong> ${escapeHtml(prioridade)}</p>

<p><strong>Recomendação principal:</strong> ${escapeHtml(recP)}</p>
<p><strong>Alternativa:</strong> ${escapeHtml(recA)}</p>

<p><strong>Resumo completo:</strong></p>
<p style="white-space:pre-line;">${escapeHtml(resumo || "(vazio)")}</p>
`.trim()
      : `
<h2>Novo contato pelo site Libertrendz</h2>
<p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
<p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
<p><strong>Assunto:</strong> ${escapeHtml(assunto || "(não informado)")}</p>
<p><strong>Mensagem:</strong></p>
<p style="white-space:pre-line;">${escapeHtml(mensagem)}</p>
`.trim();

    // 1) Email interno (para Libertrendz)
    await resend.emails.send({
      from,
      to: [toInternal],
      replyTo: email, // responder direto ao lead
      subject: assuntoEmail,
      text: textoInterno,
      html: htmlInterno,
    });

    // 2) Auto-resposta (só para wizard — e opcionalmente para contato também, se quiser)
    if (isWizard) {
      const assuntoProspect = "Recebemos o teu diagnóstico — Libertrendz";
      const textoProspect = `
Olá ${nome},

Recebemos o teu diagnóstico.
A equipa Libertrendz vai analisar e responder em até 24 horas.

Se quiseres acelerar, podes responder este e-mail com:
- link do site (se existir)
- nº de pessoas na operação
- o que está a doer mais hoje

Obrigado,
Libertrendz
`.trim();

      const htmlProspect = `
<h2>Recebemos o teu diagnóstico</h2>
<p>Olá ${escapeHtml(nome)},</p>
<p>Recebemos o teu diagnóstico. A equipa Libertrendz vai analisar e responder em <strong>até 24 horas</strong>.</p>
<p>Se quiseres acelerar, responde este e-mail com:</p>
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
        replyTo: toInternal, // resposta volta para vocês
        subject: assuntoProspect,
        text: textoProspect,
        html: htmlProspect,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { ok: false, error: "Erro ao enviar e-mail." },
      { status: 500 }
    );
  }
}
