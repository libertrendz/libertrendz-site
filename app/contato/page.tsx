// app/contato/page.tsx
"use client";

import { FormEvent, useState } from "react";

export default function ContatoPage() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      nome: data.get("nome"),
      email: data.get("email"),
      assunto: data.get("assunto"),
      mensagem: data.get("mensagem")
    };

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        console.error(await res.json().catch(() => ({})));
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16">
        {/* Cabeçalho */}
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Contato
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Vamos falar sobre a sua situação real.
          </h1>
          <p className="text-sm text-slate-200">
            Use este formulário para falar sobre mentoria, consultoria ágil ou
            apps/ERPs. Pode explicar o contexto com calma — a ideia é entender
            onde você está hoje e o que está a tentar resolver.
          </p>
        </div>

        {/* Conteúdo */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-start">
          {/* Formulário */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl shadow-black/60">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Nome */}
              <div className="space-y-1.5 text-sm">
                <label
                  htmlFor="nome"
                  className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300"
                >
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-accent-400"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* E-mail */}
              <div className="space-y-1.5 text-sm">
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-accent-400"
                  placeholder="seuemail@exemplo.com"
                />
              </div>

              {/* Assunto / Interesse */}
              <div className="space-y-1.5 text-sm">
                <label
                  htmlFor="assunto"
                  className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300"
                >
                  Sobre o que quer falar?
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-accent-400"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="Mentoria Tech Reload">Mentoria Tech Reload</option>
                  <option value="LiberTrail">LiberTrail (diagnóstico)</option>
                  <option value="Consultoria Ágil">Consultoria Ágil</option>
                  <option value="Apps / Tiny ERPs">Apps / Tiny ERPs</option>
                  <option value="Outro">Outro assunto</option>
                </select>
              </div>

              {/* Mensagem */}
              <div className="space-y-1.5 text-sm">
                <label
                  htmlFor="mensagem"
                  className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-300"
                >
                  Conte-me o contexto
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={6}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-accent-400"
                  placeholder="Fale em poucas linhas sobre onde você está hoje, o que está a tentar resolver e em que posso ajudar."
                />
              </div>

              {/* Rodapé form */}
              <div className="flex flex-col gap-2 pt-2 text-xs text-slate-400">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? "Enviando..." : "Enviar mensagem"}
                </button>

                {status === "success" && (
                  <p className="text-[11px] text-emerald-400">
                    Mensagem enviada com sucesso. Em breve você recebe resposta
                    em{" "}
                    <span className="font-semibold">contato@libertrendz.eu</span>.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-[11px] text-red-400">
                    Algo correu mal ao enviar. Tente novamente em instantes ou
                    envie diretamente para{" "}
                    <a
                      href="mailto:contato@libertrendz.eu"
                      className="underline"
                    >
                      contato@libertrendz.eu
                    </a>
                    .
                  </p>
                )}
                {status === "idle" && (
                  <p className="text-[11px] text-slate-500">
                    Ao enviar, você autoriza contato de resposta para o e-mail
                    informado. Sem spam, sem partilha com terceiros.
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Lado direito – contexto e alternativa */}
          <div className="space-y-6 text-sm text-slate-200">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Como uso as suas mensagens
              </p>
              <p className="text-sm text-slate-200">
                Cada contato é lido com calma. A ideia é entender se faz
                sentido eu te ajudar via mentoria, consultoria, desenvolvimento
                de solução — ou se o melhor é recomendar outro caminho.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Se preferir, pode falar direto
              </p>
              <p className="text-sm">
                E-mail:{" "}
                <a
                  href="mailto:contato@libertrendz.eu"
                  className="text-accent-400 hover:text-accent-300"
                >
                  contato@libertrendz.eu
                </a>
              </p>
              <p className="text-sm">
                Telemóvel (Portugal):{" "}
                <span className="text-slate-100">+351 939 250 661</span>
              </p>
              <p className="text-[11px] text-slate-500">
                Se enviar mensagem por WhatsApp ou e-mail com contexto direto,
                mencione que chegou pelo site da Libertrendz. Facilita a leitura.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Dica para mentoria
              </p>
              <p className="text-sm text-slate-200">
                Se o assunto for mentoria Tech Reload, o melhor ponto de partida
                continua sendo o{" "}
                <a
                  href="/mentoria#libertrail-personas"
                  className="text-accent-400 hover:text-accent-300"
                >
                  LiberTrail
                </a>
                . Este formulário serve mais para alinhamento e dúvidas gerais.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
