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
    const nome = clamp(String(body.nome || "").trim(),
