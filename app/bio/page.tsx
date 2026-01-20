// app/bio/page.tsx
"use client";

import { useMemo, useState } from "react";

type ProblemaKey =
  | "tudo_passa_por_mim"
  | "crescemos_sem_planeamento"
  | "falta_controlo_equipa_campo"
  | "muitas_ferramentas"
  | "nao_sabemos_onde_perdemos_dinheiro";

const PROBLEMAS: { key: ProblemaKey; label: string }[] = [
  { key: "tudo_passa_por_mim", label: "Tudo passa por mim" },
  { key: "crescemos_sem_planeamento", label: "Crescemos sem planeamento" },
  { key: "falta_controlo_equipa_campo", label: "Falta controlo de equipa ou campo" },
  { key: "muitas_ferramentas", label: "Temos muitas ferramentas" },
  { key: "nao_sabemos_onde_perdemos_dinheiro", label: "Não sabemos onde perdemos dinheiro" },
];

const WHATSAPP_NUMBER_E164 = "352939250661";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER_E164}`;

function isEmailValid(v: string) {
  return /^\S+@\S+\.\S+$/.test(v.trim());
}

export default function BioPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [problema, setProblema] = useState<ProblemaKey | "">("");

  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const canSubmit = useMemo(() => {
    return nome.trim().length >= 2 && isEmailValid(email) && problema !== "";
  }, [nome, email, problema]);

  const problemaLabel = useMemo(() => {
    return PROBLEMAS.find((p) => p.key === problema)?.label || "";
  }, [problema]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const payload = {
        tipo: "bio_diagnostico",
        nome: nome.trim(),
        email: email.trim(),
        problema_principal: problemaLabel,
        origem: "instagram_bio",

        // Compatibilidade com o endpoint atual (se ele esperar assunto/mensagem)
        assunto: "Diagnóstico Instagram",
        mensagem: [
          "Diagnóstico curto (Instagram /bio)",
          "",
          `Problema principal: ${problemaLabel || "-"}`,
          "Origem: instagram_bio",
        ].join("\n"),
      };

      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setStatus("error");
        setErrorMsg(data?.error || "Não foi possível enviar agora. Tente novamente.");
        return;
      }

      setStatus("ok");
    } catch {
      setStatus("error");
      setErrorMsg("Erro inesperado ao enviar. Tente novamente.");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto w-full max-w-lg px-5 py-10">
        {/* Header minimalista */}
        <div className="space-y-2 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            Libertrendz | Moduz+
          </p>
          <h1 className="text-2xl font-bold leading-tight text-slate-50">
            Escolha como quer avançar.
          </h1>
          <p className="text-sm text-slate-300">Sem compromisso. Sem conversa fiada.</p>
        </div>

        <div className="mt-8 space-y-4">
          {/* Opção 1 — Diagnóstico curto */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/35 p-5">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-700/14 via-transparent to-transparent" />
            <div className="relative z-10 space-y-3">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Diagnóstico rápido (2 min)
                </p>
                <p className="text-sm text-slate-200">
                  Identifique o principal problema da sua empresa.
                </p>
              </div>

              {status !== "ok" ? (
                <form onSubmit={onSubmit} className="space-y-3">
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                      Nome (obrigatório)
                    </label>
                    <input
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="mt-2 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/25"
                      placeholder="O seu nome"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                      Email (obrigatório)
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="mt-2 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/25"
                      placeholder="contato@empresa.com"
                      required
                    />
                    {email.length > 0 && !isEmailValid(email) && (
                      <p className="mt-2 text-xs text-rose-400">Confira o email.</p>
                    )}
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                      Qual é o principal problema hoje? (obrigatório)
                    </label>
                    <select
                      value={problema}
                      onChange={(e) => setProblema(e.target.value as ProblemaKey | "")}
                      className="mt-2 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/25"
                      required
                    >
                      <option value="" disabled>
                        Selecionar…
                      </option>
                      {PROBLEMAS.map((p) => (
                        <option key={p.key} value={p.key}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {status === "error" && <p className="text-xs text-rose-400">{errorMsg}</p>}

                  <button
                    type="submit"
                    disabled={!canSubmit || status === "loading"}
                    className="mt-1 inline-flex w-full items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 disabled:opacity-60"
                  >
                    {status === "loading" ? "A enviar…" : "Enviar diagnóstico"}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    Diagnóstico gratuito · Sem compromisso · Resposta por email em até{" "}
                    <span className="text-slate-200 font-semibold">24 horas</span>
                  </p>
                </form>
              ) : (
                <div className="space-y-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/35 p-4">
                    <p className="text-sm font-semibold text-slate-50">Recebido.</p>
                    <p className="mt-1 text-sm text-slate-300">
                      Vamos analisar e responder por email em até{" "}
                      <span className="text-slate-100 font-semibold">24 horas</span>.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setErrorMsg("");
                      setNome("");
                      setEmail("");
                      setProblema("");
                    }}
                    className="inline-flex w-full items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
                  >
                    Enviar outro diagnóstico
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Opção 2 — Site Libertrendz */}
          <a
            href="/"
            className="block rounded-2xl border border-slate-800 bg-slate-900/25 p-5 transition hover:border-slate-700 hover:bg-slate-900/35"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Conhecer a Libertrendz
            </p>
            <p className="mt-1 text-sm text-slate-200">Ver soluções, produtos e casos.</p>
          </a>

          {/* Opção 3 — WhatsApp direto */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-800 bg-slate-900/15 p-5 transition hover:border-slate-700 hover:bg-slate-900/25"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Falar agora no WhatsApp
            </p>
            <p className="mt-1 text-sm text-slate-200">Atendimento direto.</p>
            <p className="mt-2 text-xs text-slate-400">{`+${WHATSAPP_NUMBER_E164}`}</p>
          </a>

          <div className="pt-2 text-center">
            <p className="text-xs text-slate-500">Libertrendz | Moduz+</p>
          </div>
        </div>
      </section>
    </main>
  );
}