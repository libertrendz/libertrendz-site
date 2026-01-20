// app/contato/page.tsx
"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type Status = "idle" | "loading" | "success" | "error";

export default function ContatoPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const searchParams = useSearchParams();

  const prefill = useMemo(() => {
    const assunto = String(searchParams.get("assunto") || "").trim();
    const mensagem = String(searchParams.get("mensagem") || "").trim();
    return { assunto, mensagem };
  }, [searchParams]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const nome = String(formData.get("nome") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const assunto = String(formData.get("assunto") || "").trim();
    const mensagem = String(formData.get("mensagem") || "").trim();

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, assunto, mensagem }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const detail =
          data?.error || data?.message || "Algo correu mal ao enviar a mensagem.";
        setStatus("error");
        setErrorMsg(detail);
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Não foi possível enviar no momento. Tente novamente em instantes.");
    }
  }

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-12">
        {/* HERO */}
        <div className="relative max-w-3xl space-y-4">
          <div className="pointer-events-none absolute -inset-x-6 -top-8 -bottom-8 -z-10 rounded-2xl bg-gradient-to-r from-accent-500/12 via-accent-400/6 to-transparent blur-[16px]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Contato
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Vamos falar sobre o teu contexto — direto ao ponto.
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Moduz+, Apps customizados, Sites & Landing Pages ou Consultoria.
            Escreve o que está a acontecer e o que precisas destravar.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-start">
          {/* FORMULÁRIO */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl shadow-black/50">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-1.5">
                <label
                  htmlFor="nome"
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300"
                >
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-accent-400 focus:ring-2 focus:ring-accent-500/40"
                  placeholder="Como devo chamar-te?"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-accent-400 focus:ring-2 focus:ring-acc
