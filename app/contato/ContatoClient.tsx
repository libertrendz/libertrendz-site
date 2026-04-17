// app/contato/ContatoClient.tsx

"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type Status = "idle" | "loading" | "success" | "error";

const WHATSAPP_URL =
  "https://wa.me/351910287128?text=Olá,%20quero%20entender%20qual%20o%20caminho%20mais%20certo%20para%20o%20meu%20caso.";

export default function ContatoClient() {
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
      setErrorMsg("Não foi possível enviar no momento. Tenta novamente em instantes.");
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
            Se quiseres avançar, começamos por perceber o teu cenário.
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Podes enviar contexto pelo formulário ou falar diretamente no WhatsApp.
            O objetivo aqui não é complicar. É chegar mais depressa ao que faz sentido para o teu caso.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-start">
          {/* FORMULÁRIO */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl shadow-black/50">
            <div className="mb-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Formulário
              </p>
              <h2 className="text-lg font-semibold text-slate-50">
                Envia o contexto com calma
              </h2>
              <p className="text-sm text-slate-300">
                Ideal para quando queres explicar melhor o cenário, o objetivo e o que está a travar.
              </p>
            </div>

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
                  defaultValue={prefill.assunto || ""}
                >
                  <option value="" disabled>
                    Seleciona uma opção
                  </option>
                  <option value="Websites">Websites</option>
                  <option value="Apps customizados">Apps customizados</option>
                  <option value="Produto & Execução">Produto &amp; Execução</option>
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
                  rows={6}
                  defaultValue={prefill.mensagem || ""}
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-accent-400 focus:ring-2 focus:ring-accent-500/40"
                  placeholder="Em poucas linhas: cenário atual, principal dificuldade e resultado que queres alcançar."
                />
              </div>

              {status === "success" && (
                <p className="text-xs text-emerald-400">
                  Recebido. Vamos analisar e responder por e-mail em até 24 horas.
                </p>
              )}

              {status === "error" && (
                <p className="text-xs text-red-400">
                  {errorMsg ||
                    "Algo correu mal ao enviar. Tenta novamente em instantes ou escreve diretamente para contato@libertrendz.eu."}
                </p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? "A enviar…" : "Enviar mensagem"}
                </button>
              </div>
            </form>
          </div>

          {/* LATERAL */}
          <div className="space-y-5 text-sm text-slate-200">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Caminho mais rápido
              </p>
              <h2 className="mt-2 text-base font-semibold text-slate-50">
                Queres falar diretamente?
              </h2>
              <p className="mt-2 text-slate-300">
                Se preferires ir direto ao ponto, o WhatsApp é o caminho mais rápido para começarmos.
              </p>

              <div className="mt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-50">
                O que ajuda a tornar a resposta mais útil
              </h2>
              <p className="mt-2 text-slate-300">
                Quanto mais contexto objetivo, mais direta e mais útil será a resposta.
              </p>
              <ul className="mt-3 space-y-1 text-slate-300">
                <li>• Em que fase estás e o que queres destravar</li>
                <li>• O que já tentaste e onde travou</li>
                <li>• Se precisas de um site, landing page, app ou ainda estás a decidir</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-300">
              <p className="mb-1 font-semibold text-slate-50">
                Preferes enviar direto por e-mail?
              </p>
              <p>
                Também podes escrever para{" "}
                <a
                  href="mailto:contato@libertrendz.eu"
                  className="text-accent-400 hover:text-accent-300"
                >
                  contato@libertrendz.eu
                </a>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Diagnóstico (2 min)
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-50">
                Ainda não sabes qual é o caminho certo?
              </p>
              <p className="mt-1 text-xs text-slate-300">
                Responde a algumas perguntas rápidas e recebe uma recomendação mais clara.
              </p>

              <div className="mt-3">
                <a
                  href="/diagnostico"
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
                >
                  Fazer diagnóstico
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
