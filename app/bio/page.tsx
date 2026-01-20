"use client";

import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/351939250661?text=Olá%20Libertrendz,%20vim%20pelo%20Instagram.";

export default function BioPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [situacao, setSituacao] = useState("");

  const emailOk = /^\S+@\S+\.\S+$/.test(email);
  const canSubmit = nome.trim() && emailOk && situacao;

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    if (!canSubmit) return;

    await fetch("/api/contato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tipo: "wizard",
        nome: nome.trim(),
        email: email.trim(),
        dores: [situacao],
        resumo: `Lead Instagram\nSituação: ${situacao}`,
      }),
    });

    setNome("");
    setEmail("");
    setSituacao("");
    alert("Recebido. Vamos responder por email.");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4">
      <section className="w-full max-w-md space-y-6">

        {/* HEADLINE */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold leading-tight">
            Cresceu — e perdeu controlo?
          </h1>
          <p className="text-sm text-slate-300">
            Identifica o problema principal da tua operação em 30 segundos.
          </p>
        </div>

        {/* FORM DIAGNÓSTICO */}
        <form
          onSubmit={submit}
          className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
        >
          <div>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/30"
            />
          </div>

          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/30"
            />
          </div>

          <div>
            <select
              value={situacao}
              onChange={(e) => setSituacao(e.target.value)}
              required
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/30"
            >
              <option value="">Qual situação descreve melhor a tua empresa?</option>
              <option value="Tudo passa por mim">
                Tudo passa por mim
              </option>
              <option value="Crescemos sem planeamento">
                Crescemos sem planeamento
              </option>
              <option value="Falta controlo de equipa ou campo">
                Falta controlo de equipa ou campo
              </option>
              <option value="Temos ferramentas demais">
                Temos ferramentas demais
              </option>
              <option value="Não sabemos onde perdemos dinheiro">
                Não sabemos onde perdemos dinheiro
              </option>
            </select>
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className="inline-flex w-full items-center justify-center rounded-lg bg-[#F97316] px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/30 transition hover:bg-[#FB923C] disabled:opacity-60"
          >
            Ver diagnóstico
          </button>
        </form>

        {/* LINKS SECUNDÁRIOS */}
        <div className="grid gap-3">

          {/* SITE */}
          <a
            href="/"
            className="block rounded-2xl border border-yellow-500/40 bg-yellow-400/30 p-3 transition hover:bg-yellow-300/40 hover:border-yellow-400"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900">
              Libertrendz | Moduz+
            </p>
            <p className="mt-0.5 text-sm text-slate-900">
              Conhecer soluções e casos.
            </p>
          </a>

          {/* WHATSAPP */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-emerald-500/40 bg-emerald-500/25 p-3 transition hover:bg-emerald-400/35 hover:border-emerald-400"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900">
              WhatsApp direto
            </p>
            <p className="mt-0.5 text-sm text-slate-900">
              Mensagem rápida.
            </p>
            <p className="mt-1 text-xs text-slate-800">
              Atendimento em horário comercial.
            </p>
          </a>

        </div>

        {/* FOOTER MIN */}
        <p className="text-center text-xs text-slate-500">
          Diagnóstico gratuito · Resposta por email
        </p>
      </section>
    </main>
  );
}