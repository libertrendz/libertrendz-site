// app/api/wizard/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Payload = {
  nome?: string | null;
  email: string;
  symptoms: string[];
  context: string | null;
  priority: string | null;
  primary: string;
  secondary: string;
  summaryText: string;
};

function sanitizeEmail(s: unknown) {
  return String(s || "").trim().toLowerCase();
}

function sanitizeName(s: unknown) {
  const v = String(s || "").trim();
  return v.length ? v : null;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function labelPath(p: string) {
  if (p === "moduz") return "Moduz+ (ERP modular)";
  if (p === "apps") return "Apps customizados (piloto rápido)";
  if (p === "sites") return "Sites & Landing Pages (conversão)";
  if (p === "agile") return "Consultoria (acelerador de execução)";
  return p;
}

function labelContext(c: string | null) {
  if (!c) return "-";
  const map: Record<string, string> = {
    manual: "Manual (Excel/WhatsApp)",
    ferramentas: "Ferramentas desconectadas",
    erp_ruim: "ERP atrapalha",
    mvp_torto: "Sistema/MVP torto",
    trafego_sem_lead: "Há tráfego, mas não há lead",
  };
  return map[c] || c;
}

function labelPriority(p: string | null) {
  if (!p) return "-";
  const map: Record<string, string> = {
    controle: "Controlo e previsibilidade",
    margem_campo: "Margem no campo",
    escala: "Escalar sem caos",
    conversao: "Leads e conversão",
    execucao: "Destravar execução",
  };
  return map[p] || p;
}

function labelSymptoms(symptoms: string[]) {
  const map: Record<string, string> = {
    visibilidade: "Gestão no escuro",
    gargalo: "Dono gargalo",
    crescimento: "Crescer virou risco",
    campo: "Campo sem controlo",
    ruido: "Ferramentas demais",
    conversao: "Leads fracos",
    entrega: "Entrega travada",
  };
  return symptoms.map((s) => map[s] || s);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<Payload>;

    const email = sanitizeEmail(body.email);
    const nome = sanitizeName(body.nome);
    const symptoms = Array.isArray(body.symptoms) ? body.symptoms : [];
    const context = body.context ?? null;
    const priority = body.priority ?? null;
    const primary = String(body.primary || "").trim();
    const secondary = String(body.secondary || "").trim();
    const summaryText = String(body.summaryText || "").trim();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "E-mail inválido." }, { status: 400 });
    }
    if (!primary) {
      return NextResponse.json({ ok: false, error: "Recomendação ausente." }, { status: 400 });
    }

    const notifyTo = process.env.NOTIFY_EMAIL || "contato@libertrendz.eu";

    // SMTP (Vercel envs)
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.MAIL_FROM || process.env.SMTP_FROM || notifyTo;

    if (!host || !user || !pass) {
      // Falha explícita para não “achar que está tudo bem”
      return NextResponse.json(
        {
          ok: false,
          error:
            "SMTP não configurado. Define SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS e (opcional) MAIL_FROM.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const ua = req.headers.get("user-agent") || "-";
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "-";

    const symptomsLabel = labelSymptoms(symptoms);

    const subject = `[Wizard] Novo lead — ${labelPath(primary)}`;

    const text = [
      "Novo diagnóstico preenchido no site Libertrendz.",
      "",
      `Nome: ${nome || "Não informado"}`,
      `Email: ${email}`,
      "",
      "Dores:",
      ...(symptomsLabel.length ? symptomsLabel.map((x) => `- ${x}`) : ["- -"]),
      "",
      "Cenário atual:",
      `- ${labelContext(context)}`,
      "",
      "Prioridade:",
      `- ${labelPriority(priority)}`,
      "",
      "Recomendação principal:",
      `- ${labelPath(primary)}`,
      "",
      "Alternativa:",
      `- ${labelPath(secondary)}`,
      "",
      "Resumo completo:",
      summaryText || "-",
      "",
      "Status:",
      "- Lead capturado",
      "- Diagnóstico NÃO agendado ainda",
      "",
      "SLA prometido ao prospect: até 24 horas.",
      "",
      "Meta:",
      `IP: ${ip}`,
      `UA: ${ua}`,
    ].join("\n");

    await transporter.sendMail({
      from,
      to: notifyTo,
      replyTo: email, // responder direto ao lead
      subject,
      text,
    });

    // (Opcional) email ao prospect — só se quiser ativar via env
    const sendToLead = (process.env.SEND_LEAD_EMAIL || "").toLowerCase() === "true";
    if (sendToLead) {
      const leadSubject = "Teu diagnóstico Libertrendz — próximos passos";
      const leadText = [
        `Olá ${nome || ""}`.trim() || "Olá,",
        "",
        "Recebemos o teu diagnóstico.",
        "",
        "Com base nas tuas respostas, o caminho mais indicado agora é:",
        labelPath(primary),
        "",
        "Resumo:",
        summaryText || "-",
        "",
        "Respondemos em até 24 horas.",
        "",
        "Libertrendz",
      ].join("\n");

      await transporter.sendMail({
        from,
        to: email,
        subject: leadSubject,
        text: leadText,
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Falha ao processar o wizard." }, { status: 500 });
  }
}
