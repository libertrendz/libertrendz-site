// repo: libertrendz-site/app/contato/page.tsx
"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContatoPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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
        body: JSON.stringify({ nome, email, assunto, mensagem })
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
    } catch (err) {
      setStatus("error");
      setErrorMsg("Não foi possível enviar no momento. Tente novamente em instantes.");
    }
  }

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-12">
        {/* HERO */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Contato
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Vamos falar sobre o teu contexto — direto ao ponto.
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Diz em poucas linhas o que precisas: Moduz+, app customizado, site/landing page ou consultoria ágil.
            A resposta é objetiva, sem copy&paste.
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
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-accent-400 focus:ring-2 focus:ring-accent-500/40"
                  placeholder="contato@exemplo.com"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="assunto"
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300"
                >
                  Assunto
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-accent-400 focus:ring-2 focus:ring-accent-500/40"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Seleciona uma opção
                  </option>
                  <option value="Moduz+ (ERP modular)">Moduz+ (ERP modular)</option>
                  <option value="Apps customizados">Apps customizados</option>
                  <option value="Sites e Landing Pages">Sites e Landing Pages</option>
                  <option value="Consultoria Ágil">Consultoria Ágil</option>
                  <option value="Outro">Outro tema relacionado</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="mensagem"
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300"
                >
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-accent-400 focus:ring-2 focus:ring-accent-500/40"
                  placeholder="Conta-me o contexto, o objetivo e o que seria um bom resultado."
                />
              </div>

              {/* FEEDBACK */}
              {status === "success" && (
                <p className="text-xs text-emerald-400">
                  Mensagem enviada com sucesso. Vou ler e responder assim que possível.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-red-400">
                  {errorMsg ||
                    "Algo correu mal ao enviar. Tente novamente em instantes ou envie para contato@libertrendz.eu."}
                </p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? "Enviando..." : "Enviar mensagem"}
                </button>
              </div>
            </form>
          </div>

          {/* LATERAL */}
          <div className="space-y-5 text-sm text-slate-200">
            <div>
              <h2 className="text-base font-semibold text-slate-50">
                O que ajuda a tornar a resposta mais útil
              </h2>
              <p className="mt-2 text-slate-300">
                Não precisa ser longo. Só preciso do essencial:
              </p>
              <ul className="mt-2 space-y-1 text-slate-300">
                <li>• O que faz a tua empresa e qual é o problema real.</li>
                <li>• O que já tentaste e por que não funcionou.</li>
                <li>• O que seria um resultado bom em 30–60 dias.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-300">
              <p className="mb-1 font-semibold text-slate-50">
                Preferes enviar direto por e-mail?
              </p>
              <p>
                Escreve para{" "}
                <a
                  href="mailto:contato@libertrendz.eu"
                  className="text-accent-400 hover:text-accent-300"
                >
                  contato@libertrendz.eu
                </a>{" "}
                e seguimos por lá.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}