"use client";

import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/351939250661?text=Olá%20Libertrendz,%20vim%20pelo%20Instagram.";

const SITUACOES = [
  "Tudo passa por mim",
  "Crescemos sem planeamento",
  "Falta controlo de equipa ou campo",
  "Temos ferramentas demais",
  "Não sabemos onde perdemos dinheiro",
] as const;

export default function BioPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [situacao, setSituacao] = useState("");

  const emailOk = /^\S+@\S+\.\S+$/.test(email.trim());
  const nomeOk = nome.trim().length >= 2;
  const canSubmit = nomeOk && emailOk && !!situacao;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    try {
      const payload = {
        tipo: "wizard" as const,
        nome: nome.trim(),
        email: email.trim(),
        assunto: "Lead Instagram (Bio)",
        dores: [situacao],
        resumo: `Lead Instagram (Bio)\nSituação: ${situacao}`,
        mensagem: `Lead Instagram (Bio)\nSituação: ${situacao}`,
      };

      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        alert("Não foi possível enviar agora. Tenta novamente em instantes.");
        return;
      }

      setNome("");
      setEmail("");
      setSituacao("");
      alert("Recebido. Vamos responder por email.");
    } catch {
      alert("Falha de rede. Tenta novamente.");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4 py-8">
      <section className="w-full max-w-md space-y-4">
        {/* HEADLINE (com leve glow igual ao site) */}
        <div className="relative text-center rounded-2xl border border-slate-800 bg-slate-900/35 px-4 py-5 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-700/12 via-cyan-600/8 to-transparent" />
          <div className="relative z-10 space-y-1">
            <h1 className="text-1xl font-bold leading-tight">
              CRESCEU E PERDEU O CONTROLO?
            </h1>
            <p className="text-sm text-slate-300">
              Em 30 segundos, devolvemos um caminho claro.
            </p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={submit}
          className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
        >
          <div className="space-y-1">
            <label className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
              Nome
            </label>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Teu nome ou nome da empresa"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/25"
            />
            {!nomeOk && nome.length > 0 && (
              <p className="text-xs text-rose-400">Escreve pelo menos 2 caracteres.</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="contato@empresa.com"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/25"
            />
            {!emailOk && email.length > 0 && (
              <p className="text-xs text-rose-400">Confere o email.</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
              Ponto de situação
            </label>
            <select
              value={situacao}
              onChange={(e) => setSituacao(e.target.value)}
              required
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/25"
            >
              <option value="" disabled>
                Seleciona uma opção…
              </option>
              {SITUACOES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className="inline-flex w-full items-center justify-center rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400 disabled:opacity-60"
          >
            Descobrir o caminho certo
          </button>

          <p className="text-center text-[11px] text-slate-500">
            Resposta por email e proposta de solução
          </p>
        </form>

        {/* LINKS — MESMA LINGUAGEM VISUAL */}
        <div className="grid gap-3">
          {/* SITE */}
          <a
            href="/"
            className="block rounded-2xl border border-slate-800 bg-slate-900/40 p-3 transition hover:border-slate-700 hover:bg-slate-900/55"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Libertrendz | Moduz+
            </p>
            <p className="mt-0.5 text-sm text-slate-100">
              Ver soluções e casos.
            </p>
          </a>

          {/* WHATSAPP (2 linhas) */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-800 bg-slate-900/40 p-3 transition hover:border-slate-700 hover:bg-slate-900/55"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              WhatsApp direto
            </p>
            <p className="mt-0.5 text-sm text-slate-100">
              Recebe respostas rapidamente.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
