// app/api/contato/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function clamp(s: string, max: number) {
  const v = String(s || "");
  return v.length > max ? v.slice(0, max) : v;
}

// Escape simples para evitar quebrar HTML
function escapeHtml(input: string) {
  return String(input || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

type WizardPayload = {
  tipo: "wizard";
  nome?: string;
  email: string;
  dores?: string[]; // títulos das dores
  cenario?: string;
  prioridade?: string;
  recomendacaoPrincipal?: string;
  recomendacaoAlternativa?: string;
  resumo?: string;
};

type ContatoPayload = {
  tipo?: "contato";
  nome: string;
  email: string;
  assunto?: string;
  mensagem: string;
};

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY não configurada.");
      return NextResponse.json(
        { ok: false, error: "Configuração de e-mail ausente." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = (await req.json()) as Partial<WizardPayload & ContatoPayload>;

    const tipo = (body.tipo || "contato") as "contato" | "wizard";

    // Campos comuns
    const nome = clamp(String(body.nome || "").trim(), 120);
    const email = clamp(String(body.email || "").trim(), 160);

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "E-mail inválido." },
        { status: 400 }
      );
    }

    // FROM: se você tiver domínio verificado no Resend, use algo tipo contato@libertrendz.eu
    // Mantive fallback para onboarding@resend.dev (funciona em dev, mas é menos ideal para produção)
    const from =
      process.env.RESEND_FROM?.trim() || "Libertrendz <onboarding@resend.dev>";

    // ====== MODO WIZARD ======
    if (tipo === "wizard") {
      const dores = Array.isArray(body.dores) ? body.dores.map((d) => clamp(String(d), 120)) : [];
      const cenario = clamp(String(body.cenario || "-"), 160);
      const prioridade = clamp(String(body.prioridade || "-"), 160);
      const recomendacaoPrincipal = clamp(String(body.recomendacaoPrincipal || "-"), 160);
      const recomendacaoAlternativa = clamp(String(body.recomendacaoAlternativa || "-"), 160);
      const resumo = clamp(String(body.resumo || "").trim(), 4000);

      // Aqui nome é opcional; se vier vazio, tudo bem
      const assuntoEmail = `[Wizard] Novo lead — ${recomendacaoPrincipal !== "-" ? recomendacaoPrincipal : "Diagnóstico"}`;

      const texto = `
Novo diagnóstico preenchido no site Libertrendz.

Nome: ${nome || "Não informado"}
E-mail: ${email}

Dores:
- ${dores.length ? dores.join("\n- ") : "(não informado)"}

Cenário atual:
- ${cenario}

Prioridade:
- ${prioridade}

Recomendação principal:
- ${recomendacaoPrincipal}

Alternativa:
- ${recomendacaoAlternativa}

Resumo completo:
${resumo || "(sem resumo)"}

Status:
- Lead capturado
- Diagnóstico NÃO agendado ainda

SLA prometido ao prospect: até 24 horas.
`.trim();

      const html = `
        <h2>Novo lead (Wizard) — Libertrendz</h2>
        <p><strong>Nome:</strong> ${escapeHtml(nome || "Não informado")}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>

        <p><strong>Dores:</strong></p>
        <ul>
          ${
            dores.length
              ? dores.map((d) => `<li>${escapeHtml(d)}</li>`).join("")
              : "<li>(não informado)</li>"
          }
        </ul>

        <p><strong>Cenário atual:</strong> ${escapeHtml(cenario)}</p>
        <p><strong>Prioridade:</strong> ${escapeHtml(prioridade)}</p>
        <p><strong>Recomendação principal:</strong> ${escapeHtml(recomendacaoPrincipal)}</p>
        <p><strong>Alternativa:</strong> ${escapeHtml(recomendacaoAlternativa)}</p>

        <p><strong>Resumo completo:</strong></p>
        <pre style="white-space:pre-wrap; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; background:#0b1220; color:#e5e7eb; padding:12px; border-radius:10px;">${escapeHtml(
          resumo || "(sem resumo)"
        )}</pre>

        <p><strong>Status:</strong> Lead capturado; diagnóstico não agendado ainda.</p>
        <p><strong>SLA prometido ao prospect:</strong> até 24 horas.</p>
      `.trim();

      await resend.emails.send({
        from,
        to: ["contato@libertrendz.eu"],
        replyTo: email,
        subject: assuntoEmail,
        text: texto,
        html,
      });

      return NextResponse.json({ ok: true });
    }

    // ====== MODO CONTATO (padrão atual) ======
    const assunto = clamp(String(body.assunto || "").trim(), 160);
    const mensagem = clamp(String(body.mensagem || "").trim(), 6000);

    if (!nome || !mensagem) {
      return NextResponse.json(
        { ok: false, error: "Campos obrigatórios em falta." },
        { status: 400 }
      );
    }

    const assuntoEmail =
      assunto && assunto !== ""
        ? `[Libertrendz] ${assunto}`
        : "[Libertrendz] Novo contato pelo site";

    const texto = `
Novo contato pelo site Libertrendz:

Nome: ${nome}
E-mail: ${email}
Assunto: ${assunto || "(não informado)"}

Mensagem:
${mensagem}
`.trim();

    const html = `
      <h2>Novo contato pelo site Libertrendz</h2>
      <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Assunto:</strong> ${escapeHtml(assunto || "(não informado)")}</p>
      <p><strong>Mensagem:</strong></p>
      <p style="white-space:pre-line;">${escapeHtml(mensagem)}</p>
    `.trim();

    await resend.emails.send({
      from,
      to: ["contato@libertrendz.eu"],
      replyTo: email,
      subject: assuntoEmail,
      text: texto,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { ok: false, error: "Erro ao enviar e-mail." },
      { status: 500 }
    );
  }
}
