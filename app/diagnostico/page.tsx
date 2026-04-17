// app/diagnostico/page.tsx

"use client";

import { useMemo, useState } from "react";

type PathKey = "sites" | "apps" | "agile";

type SymptomKey =
  | "conversao"
  | "clareza"
  | "presenca"
  | "manual"
  | "controle"
  | "decisao";

type ContextKey =
  | "site_fraco"
  | "negocio_mudou"
  | "operacao_solta"
  | "ideia_em_duvida"
  | "ja_tentou_e_nao_resultou";

type PriorityKey =
  | "gerar_contato"
  | "explicar_melhor"
  | "organizar_rotina"
  | "definir_caminho"
  | "resolver_rapido";

const SYMPTOMS: { key: SymptomKey; title: string; desc: string }[] = [
  {
    key: "conversao",
    title: "O site não gera contacto",
    desc: "Existe presença, mas ela não está a trazer conversas nem oportunidades.",
  },
  {
    key: "clareza",
    title: "O negócio não está bem explicado",
    desc: "Quem entra não percebe rapidamente o que fazes, para quem é ou porque deve confiar.",
  },
  {
    key: "presenca",
    title: "A presença digital ficou para trás",
    desc: "O negócio evoluiu, mas a comunicação e as páginas não acompanharam.",
  },
  {
    key: "manual",
    title: "Há demasiado processo manual",
    desc: "WhatsApp, Excel, notas soltas e demasiado esforço para fazer a rotina andar.",
  },
  {
    key: "controle",
    title: "Falta controlo da operação",
    desc: "A equipa executa, mas falta visibilidade, rastreio e uma forma mais clara de acompanhar.",
  },
  {
    key: "decisao",
    title: "Ainda não está claro o que fazer primeiro",
    desc: "Existe vontade de melhorar, mas ainda há dúvida sobre qual é o próximo passo certo.",
  },
];

const CONTEXTS: { key: ContextKey; title: string; desc: string }[] = [
  {
    key: "site_fraco",
    title: "Já tenho site, mas ele não está a ajudar",
    desc: "A base existe, mas não está a comunicar nem a converter como devia.",
  },
  {
    key: "negocio_mudou",
    title: "O negócio mudou e a presença ficou para trás",
    desc: "Hoje a empresa é outra, mas o site e a comunicação ainda parecem de outra fase.",
  },
  {
    key: "operacao_solta",
    title: "A rotina está demasiado solta",
    desc: "Há trabalho, mas também há demasiada fricção, dispersão e falta de estrutura.",
  },
  {
    key: "ideia_em_duvida",
    title: "Tenho uma ideia, mas ainda não sei o melhor formato",
    desc: "Antes de construir, preciso perceber melhor o que realmente faz sentido.",
  },
  {
    key: "ja_tentou_e_nao_resultou",
    title: "Já tentámos algo, mas não resultou bem",
    desc: "Já houve investimento ou tentativa anterior, mas o resultado ficou aquém.",
  },
];

const PRIORITIES: { key: PriorityKey; title: string; desc: string }[] = [
  {
    key: "gerar_contato",
    title: "Gerar mais contacto",
    desc: "Quero transformar melhor presença em conversas e oportunidades.",
  },
  {
    key: "explicar_melhor",
    title: "Explicar melhor o negócio",
    desc: "Quero uma comunicação mais clara, mais forte e mais confiável.",
  },
  {
    key: "organizar_rotina",
    title: "Organizar melhor a rotina",
    desc: "Quero reduzir fricção, improviso e excesso de processo manual.",
  },
  {
    key: "definir_caminho",
    title: "Perceber o que deve vir primeiro",
    desc: "Antes de investir mais, quero escolher com mais lógica.",
  },
  {
    key: "resolver_rapido",
    title: "Resolver rápido um ponto importante",
    desc: "Quero atacar primeiro o que mais está a travar neste momento.",
  },
];

function routeRecommendation(input: {
  symptoms: SymptomKey[];
  context: ContextKey | null;
  priority: PriorityKey | null;
}): { primary: PathKey; secondary: PathKey; why: string[] } {
  const { symptoms, context, priority } = input;

  const has = (k: SymptomKey) => symptoms.includes(k);
  const score: Record<PathKey, number> = { sites: 0, apps: 0, agile: 0 };
  const why: string[] = [];

  // Websites
  if (has("conversao")) score.sites += 8;
  if (has("clareza")) score.sites += 7;
  if (has("presenca")) score.sites += 6;
  if (context === "site_fraco") score.sites += 8;
  if (context === "negocio_mudou") score.sites += 6;
  if (priority === "gerar_contato") score.sites += 8;
  if (priority === "explicar_melhor") score.sites += 7;

  // Apps
  if (has("manual")) score.apps += 7;
  if (has("controle")) score.apps += 8;
  if (context === "operacao_solta") score.apps += 8;
  if (priority === "organizar_rotina") score.apps += 8;
  if (priority === "resolver_rapido") score.apps += 4;

  // Produto & Execução
  if (has("decisao")) score.agile += 8;
  if (context === "ideia_em_duvida") score.agile += 8;
  if (context === "ja_tentou_e_nao_resultou") score.agile += 6;
  if (priority === "definir_caminho") score.agile += 8;
  if (priority === "resolver_rapido") score.agile += 2;

  // Ajustes finos
  if ((has("conversao") || has("clareza")) && (has("manual") || has("controle"))) {
    score.agile += 2;
  }

  const entries = (Object.keys(score) as PathKey[]).map((k) => [k, score[k]] as const);
  entries.sort((a, b) => b[1] - a[1]);

  const primary = entries[0][0];
  const secondary = entries[1][0];

  if (primary === "sites") {
    why.push("Os sinais apontam mais para comunicação, presença digital e conversão.");
  }
  if (primary === "apps") {
    why.push("Os sinais apontam mais para rotina, controlo e necessidade de resolver um ponto operacional.");
  }
  if (primary === "agile") {
    why.push("Os sinais apontam mais para necessidade de clareza, leitura de cenário e definição do próximo passo.");
  }

  if (secondary === "sites") {
    why.push("Como alternativa, uma página mais bem estruturada pode ajudar a comunicar melhor e abrir mais contacto.");
  }
  if (secondary === "apps") {
    why.push("Como alternativa, um app mais direto pode atacar uma dor específica sem criar peso excessivo.");
  }
  if (secondary === "agile") {
    why.push("Como alternativa, faz sentido ganhar clareza antes de construir qualquer solução.");
  }

  return { primary, secondary, why };
}

function labelForPath(p: PathKey) {
  if (p === "sites") return "Websites";
  if (p === "apps") return "Apps customizados";
  return "Produto & Execução";
}

function linkForPath(p: PathKey) {
  if (p === "sites") return "/sites";
  if (p === "apps") return "/apps";
  return "/agile";
}

function assuntoForPath(p: PathKey) {
  if (p === "sites") return "Websites";
  if (p === "apps") return "Apps customizados";
  return "Produto & Execução";
}

function whatsappText(summaryText: string) {
  return `https://wa.me/351910287128?text=${encodeURIComponent(
    `Olá, fiz o diagnóstico no site da Libertrendz e quero falar sobre isto.\n\n${summaryText}`
  )}`;
}

export default function DiagnosticoPage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  const [symptoms, setSymptoms] = useState<SymptomKey[]>([]);
  const [context, setContext] = useState<ContextKey | null>(null);
  const [priority, setPriority] = useState<PriorityKey | null>(null);

  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadStatus, setLeadStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  const canNext1 = symptoms.length >= 1;
  const canNext2 = !!context;
  const canNext3 = !!priority;

  const leadNameOk = leadName.trim().length >= 2;
  const leadEmailOk = /^\S+@\S+\.\S+$/.test(leadEmail.trim());
  const canNext4 = leadNameOk && leadEmailOk;

  const rec = useMemo(() => routeRecommendation({ symptoms, context, priority }), [
    symptoms,
    context,
    priority,
  ]);

  const summaryText = useMemo(() => {
    const s = symptoms
      .map((k) => SYMPTOMS.find((x) => x.key === k)?.title)
      .filter(Boolean) as string[];

    const c = CONTEXTS.find((x) => x.key === context)?.title;
    const p = PRIORITIES.find((x) => x.key === priority)?.title;

    return [
      "Diagnóstico Libertrendz",
      "",
      `Sinais principais: ${s.join(" · ") || "-"}`,
      `Contexto: ${c || "-"}`,
      `Prioridade: ${p || "-"}`,
      "",
      `Recomendação principal: ${labelForPath(rec.primary)}`,
      `Alternativa: ${labelForPath(rec.secondary)}`,
    ].join("\n");
  }, [symptoms, context, priority, rec.primary, rec.secondary]);

  const contatoHref = useMemo(() => {
    const assunto = encodeURIComponent(assuntoForPath(rec.primary));
    const msg = encodeURIComponent(summaryText);
    return `/contato?assunto=${assunto}&mensagem=${msg}`;
  }, [rec.primary, summaryText]);

  const whatsappHref = useMemo(() => whatsappText(summaryText), [summaryText]);

  async function submitLeadAndContinue() {
    setLeadStatus("loading");

    try {
      if (!leadNameOk || !leadEmailOk) {
        setLeadStatus("error");
        return;
      }

      const dores = symptoms
        .map((k) => SYMPTOMS.find((x) => x.key === k)?.title)
        .filter(Boolean) as string[];

      const cenario = CONTEXTS.find((x) => x.key === context)?.title || "-";
      const prio = PRIORITIES.find((x) => x.key === priority)?.title || "-";

      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo: "wizard",
          nome: leadName.trim(),
          email: leadEmail.trim(),
          assunto: `Diagnóstico — ${assuntoForPath(rec.primary)}`,
          dores,
          cenario,
          prioridade: prio,
          recomendacaoPrincipal: labelForPath(rec.primary),
          recomendacaoAlternativa: labelForPath(rec.secondary),
          resumo: summaryText,
          mensagem: summaryText,
        }),
      });

      if (!res.ok) {
        setLeadStatus("error");
        return;
      }

      setLeadStatus("ok");
      setStep(5);
    } catch {
      setLeadStatus("error");
    }
  }

  const progressStep = step <= 3 ? step : 3;
  const progressWidth = progressStep === 1 ? 33 : progressStep === 2 ? 66 : 100;

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-10">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/35 p-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-700/12 via-accent-500/8 to-transparent" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Diagnóstico (2 minutos)
            </p>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Responde a algumas perguntas e recebe um caminho mais claro.
            </h1>
            <p className="text-sm text-slate-200 max-w-2xl">
              O objetivo aqui não é complicar. É perceber se o teu caso pede Websites,
              Apps customizados ou primeiro mais clareza para decidir melhor.
            </p>
          </div>
        </div>

        {/* PROGRESS */}
        <div className="flex items-center justify-between gap-3 text-xs text-slate-400">
          <span>Passo {progressStep} de 3</span>
          <div className="h-2 flex-1 rounded-full bg-slate-900/60 border border-slate-800 overflow-hidden">
            <div className="h-full bg-cyan-500/80" style={{ width: `${progressWidth}%` }} />
          </div>
          <span className="hidden sm:inline">Resposta em até 24 horas</span>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold text-slate-50">1) O que está mais a travar hoje?</h2>
              <p className="mt-2 text-sm text-slate-200">
                Escolhe tudo o que se aplica. Quanto mais certeiro, melhor fica a recomendação.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {SYMPTOMS.map((s) => {
                const checked = symptoms.includes(s.key);
                return (
                  <label
                    key={s.key}
                    className={`cursor-pointer rounded-2xl border bg-slate-900/40 p-5 transition ${
                      checked
                        ? "border-cyan-500/60 ring-2 ring-cyan-500/20"
                        : "border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 accent-cyan-500"
                        checked={checked}
                        onChange={() => {
                          setSymptoms((prev) =>
                            prev.includes(s.key) ? prev.filter((x) => x !== s.key) : [...prev, s.key]
                          );
                        }}
                      />
                      <div>
                        <p className="text-sm font-semibold text-slate-50">{s.title}</p>
                        <p className="mt-1 text-sm text-slate-300">{s.desc}</p>
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <a href="/" className="text-sm text-slate-300 hover:text-slate-100">
                Voltar
              </a>
              <button
                disabled={!canNext1}
                onClick={() => setStep(2)}
                className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 disabled:opacity-60 whitespace-nowrap"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold text-slate-50">2) Em que cenário te revês mais?</h2>
              <p className="mt-2 text-sm text-slate-200">
                Uma escolha. Isto ajuda a perceber melhor o ponto em que estás.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {CONTEXTS.map((c) => {
                const selected = context === c.key;
                return (
                  <button
                    type="button"
                    key={c.key}
                    onClick={() => setContext(c.key)}
                    className={`text-left rounded-2xl border bg-slate-900/40 p-5 transition ${
                      selected
                        ? "border-accent-500/70 ring-2 ring-accent-500/20"
                        : "border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <p className="text-sm font-semibold text-slate-50">{c.title}</p>
                    <p className="mt-1 text-sm text-slate-300">{c.desc}</p>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button onClick={() => setStep(1)} className="text-sm text-slate-300 hover:text-slate-100">
                Voltar
              </button>
              <button
                disabled={!canNext2}
                onClick={() => setStep(3)}
                className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 disabled:opacity-60 whitespace-nowrap"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold text-slate-50">3) O que queres destravar primeiro?</h2>
              <p className="mt-2 text-sm text-slate-200">
                Isto ajuda a definir o tipo de caminho que faz mais sentido agora.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {PRIORITIES.map((p) => {
                const selected = priority === p.key;
                return (
                  <button
                    type="button"
                    key={p.key}
                    onClick={() => setPriority(p.key)}
                    className={`text-left rounded-2xl border bg-slate-900/40 p-5 transition ${
                      selected
                        ? "border-cyan-500/60 ring-2 ring-cyan-500/20"
                        : "border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <p className="text-sm font-semibold text-slate-50">{p.title}</p>
                    <p className="mt-1 text-sm text-slate-300">{p.desc}</p>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button onClick={() => setStep(2)} className="text-sm text-slate-300 hover:text-slate-100">
                Voltar
              </button>
              <button
                disabled={!canNext3}
                onClick={() => setStep(4)}
                className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400 disabled:opacity-60 whitespace-nowrap"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold text-slate-50">Antes de ver a recomendação</h2>
              <p className="mt-2 text-sm text-slate-200">
                Deixa o teu nome e email. Assim enviamos o resumo e podemos responder com contexto.
              </p>
            </div>

            <div className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 max-w-2xl">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Nome
                  </label>
                  <input
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="mt-2 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-accent-400 focus:ring-2 focus:ring-accent-500/30"
                    placeholder="Ex.: Gustavo"
                    required
                  />
                  {!leadNameOk && leadName.length > 0 && (
                    <p className="mt-2 text-xs text-rose-400">Indica um nome válido.</p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    E-mail
                  </label>
                  <input
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    type="email"
                    className="mt-2 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-accent-400 focus:ring-2 focus:ring-accent-500/30"
                    placeholder="contato@empresa.com"
                    required
                  />
                  {!leadEmailOk && leadEmail.length > 0 && (
                    <p className="mt-2 text-xs text-rose-400">Confere o e-mail.</p>
                  )}
                </div>
              </div>

              {leadStatus === "error" && (
                <p className="text-xs text-rose-400">
                  Não foi possível enviar agora. Tenta novamente.
                </p>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button onClick={() => setStep(3)} className="text-sm text-slate-300 hover:text-slate-100">
                  Voltar
                </button>

                <button
                  disabled={!canNext4 || leadStatus === "loading"}
                  onClick={submitLeadAndContinue}
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 disabled:opacity-60 whitespace-nowrap"
                >
                  {leadStatus === "loading" ? "A enviar…" : "Ver recomendação"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Resultado do diagnóstico
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-slate-50">
                Recomendação principal:{" "}
                <span className={rec.primary === "sites" ? "text-cyan-300" : "text-accent-300"}>
                  {labelForPath(rec.primary)}
                </span>
              </h2>

              <p className="mt-3 text-sm text-slate-200 max-w-3xl">
                Pelo que respondeste, este parece ser o caminho mais lógico neste momento:
              </p>

              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {rec.why.map((w, i) => (
                  <li key={i}>• {w}</li>
                ))}
              </ul>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/35 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Alternativa
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-50">{labelForPath(rec.secondary)}</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Se o contexto mudar ou surgir outra prioridade, este pode ser o próximo passo.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/35 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Próximo passo
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Podes seguir para a página correspondente ou falar comigo já com este diagnóstico.
                  </p>

                  <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-3">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 whitespace-nowrap"
                    >
                      Falar comigo agora
                    </a>

                    <a
                      href={linkForPath(rec.primary)}
                      className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60 whitespace-nowrap"
                    >
                      Ver detalhes
                    </a>

                    <a
                      href={contatoHref}
                      className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60 whitespace-nowrap"
                    >
                      Enviar por formulário
                    </a>
                  </div>
                </div>
              </div>

              <details className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/25 p-5">
                <summary className="cursor-pointer text-sm font-semibold text-slate-200 hover:text-slate-50">
                  Ver resumo enviado
                </summary>
                <pre className="mt-3 whitespace-pre-wrap text-xs text-slate-300">{summaryText}</pre>
              </details>
            </div>

            <div className="flex items-center justify-between gap-3">
              <button onClick={() => setStep(1)} className="text-sm text-slate-300 hover:text-slate-100">
                Recomeçar
              </button>
              <a href="/" className="text-sm text-slate-300 hover:text-slate-100">
                Voltar para a Home
              </a>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
