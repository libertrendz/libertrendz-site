import { NextResponse } from "next/server";

type WizardPayload = {
  nome?: string;
  email: string;
  dores: string[];
  cenario: string;
  prioridade: string;
  recomendacaoPrincipal: string;
  recomendacaoAlternativa: string;
  resumo: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as WizardPayload;

    if (!body.email || !body.resumo) {
      return NextResponse.json(
        { error: "Payload inválido" },
        { status: 400 }
      );
    }

    // === EMAIL PARA VOCÊ ===
    await fetch(process.env.MAIL_WEBHOOK_URL as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "contato@libertrendz.eu",
        subject: `[Wizard] Novo lead — ${body.recomendacaoPrincipal}`,
        text: `
Novo diagnóstico preenchido no site Libertrendz.

Nome: ${body.nome || "Não informado"}
Email: ${body.email}

Dores:
- ${body.dores.join("\n- ")}

Cenário atual:
- ${body.cenario}

Prioridade:
- ${body.prioridade}

Recomendação principal:
- ${body.recomendacaoPrincipal}

Alternativa:
- ${body.recomendacaoAlternativa}

Resumo completo:
${body.resumo}

Status:
- Lead capturado
- Diagnóstico NÃO agendado ainda

SLA prometido ao prospect: até 24 horas.
        `,
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Wizard error:", err);
    return NextResponse.json(
      { error: "Erro ao processar wizard" },
      { status: 500 }
    );
  }
}
