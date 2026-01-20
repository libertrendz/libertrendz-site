///app/diagnostico/page.tsx

"use client";

import { useMemo, useState } from "react";

type PathKey = "moduz" | "apps" | "sites" | "agile";

type SymptomKey =
  | "visibilidade"
  | "gargalo"
  | "crescimento"
  | "campo"
  | "ruido"
  | "conversao"
  | "entrega";

type ContextKey =
  | "manual"
  | "ferramentas"
  | "erp_ruim"
  | "mvp_torto"
  | "trafego_sem_lead";

type PriorityKey =
  | "controle"
  | "margem_campo"
  | "escala"
  | "conversao"
  | "execucao";

const SYMPTOMS: { key: SymptomKey; title: string; desc: string }[] = [
  {
    key: "visibilidade",
    title: "Pouca visibilidade do negócio",
    desc: "Dados espalhados, relatórios atrasados e decisões no “achismo”.",
  },
  {
    key: "gargalo",
    title: "Dependência de uma pessoa",
    desc: "Tudo passa por ti (ou por alguém) e a operação trava quando essa pessoa trava.",
  },
  {
    key: "crescimento",
    title: "Crescimento desorganizado",
    desc: "Mais clientes e equipa, mas também mais erros, retrabalho e ruído.",
  },
  {
    key: "campo",
    title: "Campo sem controlo",
    desc: "Horas, custos e evidências sem rastreio; margem a desaparecer.",
  },
  {
    key: "ruido",
    title: "Ferramentas demais, sistema de menos",
    desc: "WhatsApp + Excel + softwares soltos: muito ruído, pouca organização.",
  },
  {
    key: "conversao",
    title: "Marketing não vira lead",
    desc: "Há visitas, mas não há conversão (mensagem, prova, CTA e rastreio falham).",
  },
  {
    key: "entrega",
    title: "Execução travada",
    desc: "Projetos emperram, prioridades mudam e tudo anda devagar.",
  },
];

const CONTEXTS: { key: ContextKey; title: string; desc: string }[] = [
  {
    key: "manual",
    title: "Manual (Excel/WhatsApp)",
    desc: "Processos soltos e controlo na base da disciplina e planilhas.",
  },
  {
    key: "ferramentas",
    title: "Ferramentas desconectadas",
    desc: "Cada uma resolve um pedaço; ninguém resolve o todo.",
  },
  {
    key: "erp_ruim",
    title: "Já existe ERP, mas atrapalha",
    desc: "É pesado, não encaixa na operação ou não escala com o crescimento.",
  },
  {
    key: "mvp_torto",
    title: "Sistema/MVP mal construído",
    desc: "Já investiu e agora ficou caro ajustar (retrabalho e decisões tortas).",
  },
  {
    key: "trafego_sem_lead",
    title: "Há tráfego, mas não há lead",
    desc: "Precisa de conversão e campanha com rastreio e proposta clara.",
  },
];

const PRIORITIES: { key: PriorityKey; title: string; desc: string }[] = [
  {
    key: "controle",
    title: "Controlo e previsibilidade",
    desc: "Saber onde estamos e decidir com clareza, sem ruído.",
  },
  {
    key: "margem_campo",
    title: "Margem no campo",
    desc: "Horas, custos, evidências e execução em campo sob controlo.",
  },
  {
    key: "escala",
    title: "Escalar sem caos",
    desc: "Crescer com sistema e governança — sem virar bombeiro.",
  },
  {
    key: "conversao",
    title: "Leads e conversão",
    desc: "Mensagem, prova, CTA e rastreio para gerar caixa.",
  },
  {
    key: "execucao",
    title: "Destravar execução",
    desc: "Fluxo, prioridade e entrega — com menos retrabalho.",
  },
];

function routeRecommendation(input: {
  symptoms: SymptomKey[];
  context: ContextKey | null;
  priority: PriorityKey | null;
}): { primary: PathKey; secondary: PathKey; why: string[] } {
  const { symptoms, context, priority } = input;

  const has = (k: SymptomKey) => symptoms.includes(k);

  const score: Record<PathKey, number> = { moduz: 0, apps: 0, sites: 0, agile: 0 };
  const why: string[] = [];

  // SITES: conversão e caixa imediato
  if (has("conversao")) score.sites += 7;
  if (context === "trafego_sem_lead") score.sites += 7;
  if (priority === "conversao") score.sites += 8;

  // CONSULTORIA: execução travada / decisões tortas / reduzir retrabalho
  if (has("entrega")) score.agile += 6;
  if (context === "mvp_torto") score.agile += 8;
  if (priority === "execucao") score.agile += 8;

  // MODUZ: estrutura operacional e escala
  if (has("campo")) score.moduz += 8;
  if (has("ruido")) score.moduz += 6;
  if (has("visibilidade")) score.moduz += 6;
  if (has("gargalo")) score.moduz += 6;
  if (has("crescimento")) score.moduz += 7;
  if (context === "erp_ruim") score.moduz += 7;
  if (priority === "controle") score.moduz += 6;
  if (priority === "margem_campo") score.moduz += 8;
  if (priority === "escala") score.moduz += 7;

  // APPS: piloto rápido para dor específica (quando não precisa ERP agora)
  if (context === "manual") score.apps += 5;
  if (context === "ferramentas") score.apps += 5;

  const sinaisModuz =
    has("campo") || has("crescimento") || has("gargalo") || has("visibilidade") || has("ruido");
  const sinaisSites = has("conversao") || context === "trafego_sem_lead" || priority === "conversao";

  if (!sinaisModuz && !sinaisSites) score.apps += 5;

  if (priority === "controle" || priority === "escala") score.apps += 1;
  if (priority === "margem_campo") score.apps += 1;

  // Ajuste: se contexto é “mvp torto”, prioriza consultoria antes de produto
  if (context === "mvp_torto") {
    score.agile += 2;
    score.moduz -= 1;
    score.apps -= 1;
  }

  const entries = (Object.keys(score) as PathKey[]).map((k) => [k, score[k]] as const);
  entries.sort((a, b) => b[1] - a[1]);

  const primary = entries[0][0];
  const secondary = entries[1][0];

  // Explicação curta
  if (primary === "sites") {
    why.push(
      "Sinais fortes de conversão: proposta, prova, CTA e rastreio precisam de ajuste imediato."
    );
  }
  if (primary === "moduz") {
    why.push("Dores operacionais de controlo, escala e/ou campo pedem sistema modular e governança.");
  }
  if (primary === "apps") {
    why.push("Dor específica com necessidade de piloto rápido e leve, sem entrar num ERP completo agora.");
  }
  if (primary === "agile") {
    why.push("O gargalo é execução/decisão: melhor pôr ordem antes de investir mais em tecnologia.");
  }

  if (secondary && secondary !== primary) {
    if (secondary === "moduz")
      why.push("Alternativa: Moduz+ como próximo passo quando a operação exigir escala e controlo total.");
    if (secondary === "apps")
      why.push("Alternativa: app customizado resolve uma parte rapidamente e valida o caminho.");
    if (secondary === "sites")
      why.push("Alternativa: melhorar conversão pode destravar caixa e pipeline.");
    if (secondary === "agile")
      why.push("Alternativa: consultoria acelera execução e evita retrabalho caro.");
  }

  return { primary, secondary, why };
}

function labelForPath(p: PathKey) {
  if (p === "moduz") return "Moduz+ (ERP modular)";
  if (p === "apps") return "Apps customizados (piloto rápido)";
  if (p === "sites") return "Sites & Landing Pages (conversão)";
  return "Consultoria (acelerador de execução)";
}

function linkForPath(p: PathKey) {
  if (p === "moduz") return "/moduz";
  if (p === "apps") return "/apps";
  if (p === "sites") return "/sites";
  return "/agile";
}

function assuntoForPath(p: PathKey) {
  if (p === "moduz") return "Moduz+";
  if (p === "apps") return "Apps customizados";
  if (p === "sites") return "Sites & Landing Pages";
  return "Consultoria Ágil";
}

export default function DiagnosticoPage() {
  // 1,2,3 perguntas + 4 captura lead + 5 resultado
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  const [symptoms, setSymptoms] = useState<SymptomKey[]>([]);
  const [context, setContext] = useState<ContextKey | null>(null);
  const [priority, setPriority] = useState<PriorityKey | null>(null);

  // Captura lead (antes do resultado)
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
      `Dores: ${s.join(" · ") || "-"}`,
      `Cenário atual: ${c || "-"}`,
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

          // Campos estruturados (para o email interno NÃO vir em branco)
          dores,
          cenario,
          prioridade: prio,
          recomendacaoPrincipal: labelForPath(rec.primary),
          recomendacaoAlternativa: labelForPath(rec.secondary),
          resumo: summaryText,

          // Compatibilidade com validação antiga
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
              Decide o próximo passo certo — sem chute.
            </h1>
            <p className="text-sm text-slate-200 max-w-2xl">
              3 passos. No final, recebes uma recomendação clara (Moduz+, app, site/landing ou consultoria)
              e podes avançar para uma conversa objetiva.
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
              <h2 className="text-xl font-semibold text-slate-50">1) O que está a travar hoje?</h2>
              <p className="mt-2 text-sm text-slate-200">
                Escolhe tudo o que se aplica. Quanto mais preciso, mais certeiro fica o caminho.
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
                            prev.includes(s.key)
                              ? prev.filter((x) => x !== s.key)
                              : [...prev, s.key]
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
                className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 disabled:opacity-60"
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
              <h2 className="text-xl font-semibold text-slate-50">2) Como é o teu cenário hoje?</h2>
              <p className="mt-2 text-sm text-slate-200">
                Uma escolha. Isto ajuda a distinguir “piloto rápido” de “estrutura”.
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
              <button
                onClick={() => setStep(1)}
                className="text-sm text-slate-300 hover:text-slate-100"
              >
                Voltar
              </button>
              <button
                disabled={!canNext2}
                onClick={() => setStep(3)}
                className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 disabled:opacity-60"
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
              <h2 className="text-xl font-semibold text-slate-50">3) O que precisas destravar primeiro?</h2>
              <p className="mt-2 text-sm text-slate-200">
                Isto define a prioridade imediata (o que resolve primeiro).
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
              <button
                onClick={() => setStep(2)}
                className="text-sm text-slate-300 hover:text-slate-100"
              >
                Voltar
              </button>
              <button
                disabled={!canNext3}
                onClick={() => setStep(4)}
                className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400 disabled:opacity-60"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 — CAPTURA LEAD */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold text-slate-50">Antes de ver a recomendação</h2>
              <p className="mt-2 text-sm text-slate-200">
                Enviamos o resumo por e-mail e respondemos em{" "}
                <span className="text-slate-50 font-semibold">até 24 horas</span>.
              </p>
            </div>

            <div className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 max-w-2xl">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Nome (obrigatório)
                  </label>
                  <input
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="mt-2 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-accent-400 focus:ring-2 focus:ring-accent-500/30"
                    placeholder="Ex.: Gustavo"
                    required
                  />
                  {!leadNameOk && leadName.length > 0 && (
                    <p className="mt-2 text-xs text-rose-400">Escreve pelo menos 2 caracteres.</p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    E-mail (obrigatório)
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
                  Não foi possível registar agora. Podes tentar novamente ou seguir para o contato manual.
                </p>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  onClick={() => setStep(3)}
                  className="text-sm text-slate-300 hover:text-slate-100"
                >
                  Voltar
                </button>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={contatoHref}
                    className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
                  >
                    Ir direto ao contato
                  </a>

                  <button
                    disabled={!canNext4 || leadStatus === "loading"}
                    onClick={submitLeadAndContinue}
                    className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 disabled:opacity-60"
                  >
                    {leadStatus === "loading" ? "A enviar…" : "Ver recomendação"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5 — RESULTADO */}
        {step === 5 && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Resultado do diagnóstico
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-slate-50">
                Recomendação principal:{" "}
                <span className={rec.primary === "moduz" ? "text-cyan-300" : "text-accent-300"}>
                  {labelForPath(rec.primary)}
                </span>
              </h2>

              <p className="mt-3 text-sm text-slate-200 max-w-3xl">Por que isto faz sentido:</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
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
                    Se surgir outro gargalo dominante, este pode ser o próximo passo.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/35 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Próximo passo
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Se quiseres acelerar: agenda um diagnóstico curto. Nós já vamos com contexto (sem conversa genérica).
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={contatoHref}
                      className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
                    >
                      Agendar diagnóstico
                    </a>

                    <a
                      href={linkForPath(rec.primary)}
                      className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
                    >
                      Ver detalhes
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
              <button
                onClick={() => setStep(1)}
                className="text-sm text-slate-300 hover:text-slate-100"
              >
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
