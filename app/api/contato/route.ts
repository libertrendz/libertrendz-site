// app/api/contato/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY não configurada.");
      return NextResponse.json(
        { ok: false, error: "Configuração de e-mail ausente." },
        { status: 500 }
      );
    }

    const body = await req.json();

    const nome = String(body.nome || "").trim();
    const email = String(body.email || "").trim();
    const assunto = String(body.assunto || "").trim();
    const mensagem = String(body.mensagem || "").trim();

    if (!nome || !email || !mensagem) {
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
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Assunto:</strong> ${assunto || "(não informado)"}</p>
      <p><strong>Mensagem:</strong></p>
      <p style="white-space:pre-line;">${mensagem}</p>
    `.trim();

    await resend.emails.send({
      from: "Libertrendz <contato@libertrendz.eu>",
      to: ["contato@libertrendz.eu"],
      reply_to: email,
      subject: assuntoEmail,
      text: texto,
      html
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail de contato:", error);
    return NextResponse.json(
      { ok: false, error: "Erro ao enviar e-mail de contato." },
      { status: 500 }
    );
  }
}
