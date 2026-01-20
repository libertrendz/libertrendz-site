// app/diagnostico/page.tsx
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
  { key: "visibilidade", title: "Gestão no escuro", desc: "Dados espalhados e pouca visão do todo." },
  { key: "gargalo", title: "Dono gargalo", desc: "Tudo passa por uma pessoa, a empresa trava." },
  { key: "crescimento", title: "Crescer virou risco", desc: "Mais erros, retrabalho e confusão." },
  { key: "campo", title: "Campo sem controlo", desc: "Horas, custos e evidências sem rastreio." },
  { key: "ruido", title: "Ferramentas demais", desc: "WhatsApp/Excel/softwares soltos sem sistema." },
  { key: "conversao", title: "Leads fracos", desc: "Site não converte, mensagem/CTA/rastreio falham." },
  { key: "entrega", title: "Entrega travada", desc: "Projetos emperram, prioridades confusas." },
];

const CONTEXTS: { key: ContextKey; title: string; desc: string }[] = [
  { key: "manual", title: "Manual (Excel/WhatsApp)", desc: "Processos soltos e controlo por planilhas." },
  { key: "ferramentas", title: "Ferramentas desconectadas", desc: "Cada uma resolve um pedaço, ninguém resolve o todo." },
  { key: "erp_ruim", title: "ERP atrapalha", desc: "Existe sistema, mas não escala ou trava a operação." },
  { key: "mvp_torto", title: "Sistema/MVP torto", desc: "Já investiu e agora ficou caro ajustar." },
  { key: "trafego_sem_lead", title: "Há tráfego, mas não há lead", desc: "Precisa de conversão e campanha." },
];

const PRIORITIES: { key: PriorityKey; title: string; desc: string }[] = [
  { key: "controle", title: "Controlo e previsibilidade", desc: "Saber onde estamos e decidir com clareza." },
  { key: "margem_campo", title: "Margem no campo", desc: "Horas, custos, evidências e execução em campo." },
  { key: "escala", title: "Escalar sem caos", desc: "Crescer com sistema e governança." },
  { key: "conversao", title: "Leads e conversão", desc: "Mensagem, prova, CTA e rastreio." },
  { key: "execucao", title: "Destravar execução", desc: "Fluxo, prioridade e entrega sem ruído." },
];

function routeRecommendation(input: {
  symptoms: SymptomKey[];
  context: ContextKey | null;
  priority: PriorityKey | null;
}): { primary: PathKey; secondary: PathKey; why: string[] } {
  const { symptoms, context, priority } = input;

  const has = (k: SymptomKey) => symptoms.includes(k);

  // Scores simples e previsíveis (sem IA).
  // Nota de negócio: Sites/Landing tem caixa imediato, mas só ganha quando há sinais claros de conversão.
  const score: Record<PathKey, number> = { moduz: 0, apps: 0, sites: 0, agile: 0 };
  const why: string[] = [];

  // Sites: conversão / caixa rápido quando o gargalo é funil
  if (has("conversao")) score.sites += 8;
  if (context === "trafego_sem_lead") score.sites += 8;
  if (priority === "conversao") score.sites += 9;

  // Consultoria/Agile: execução / decisões tortas
  if (has("entrega")) score.agile += 7;
  if (context === "mvp_torto") score.agile += 9;
  if (priority === "execucao") score.agile += 8;

  // Moduz: estrutura operacional (controlo, escala, campo)
  if (has("campo")) score.moduz += 8;
  if (has("ruido")) score.moduz += 6;
  if (has("visibilidade")) score.moduz += 6;
  if (has("gargalo")) score.moduz += 6;
  if (has("crescimento")) score.moduz += 7;
  if (context === "erp_ruim") score.moduz += 7;
  if (priority === "controle") score.moduz += 6;
  if (priority === "margem_campo") score.moduz += 9;
  if (priority === "escala") score.moduz += 7;

  // Apps: dor específica / piloto rápido
  if (context === "manual") score.apps += 6;
  if (context === "ferramentas") score.apps += 6;

  // Se não há sinais fortes de Moduz e não é conversão, apps ganha tração
  if (
    !has("campo") &&
    !has("crescimento") &&
    !has("gargalo") &&
    !has("visibilidade") &&
    !has("ruido") &&
    !has("conversao")
  ) {
    score.apps += 5;
  }

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

  // Explicação curta (por que)
  if (primary === "sites") {
    why.push("O gargalo é conversão (mensagem, prova, CTA e rastreio).");
    why.push("Landing/site bem feito destrava caixa rápido e qualifica leads.");
  }
  if (primary === "moduz") {
    why.push("Dores operacionais de controlo, escala e/ou campo apontam para sistema modular.");
    why.push("Objetivo é previsibilidade e margem, sem travar a operação.");
  }
  if (primary === "apps") {
    why.push("Dor específica pede piloto rápido, leve e direto (sem big bang).");
    why.push("Quando a operação exigir escala, Moduz+ pode virar o próximo passo.");
  }
  if (primary === "agile") {
    why.push("Problema central é execução/decisão; melhor pôr ordem antes de investir mais.");
    why.push("Reduce retrabalho, ruído e acelera previsibilidade de entrega.");
  }

  if (secondary && secondary !== primary) {
    if (secondary === "moduz") why.push("Alternativa: Moduz+ como base quando a operação exigir governança.");
    if (secondary === "apps") why.push("Alternativa: app customizado resolve uma parte rapidamente.");
    if (secondary === "sites") why.push("Alternativa: melhorar conversão pode destravar o funil.");
    if (secondary === "agile") why.push("Alternativa: consultoria acelera execução e evita retrabalho.");
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
  // 1-3 = perguntas
  // 4 = captura de lead
  // 5 = resultado
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [symptoms, setSymptoms] = useState<SymptomKey[]>([]);
  const [context, setContext] = useState<ContextKey | null>(null);
  const [priority, setPriority] = useState<PriorityKey | null>(null);

  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadStatus, setLeadStatus] = useState<{ ok: boolean; msg: string } | null>(null);
  const [sendingLead, setSendingLead] = useState(false);

  const canNext1 = symptoms.length >= 1;
  const canNext2 = !!context;
  const canNext3 = !!priority;

  const rec = useMemo(() => {
    return routeRecommendation({ symptoms, context, priority });
  }, [symptoms, context, priority]);

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

  async function submitLead() {
    setLeadStatus(null);

    const email = leadEmail.trim().toLowerCase();
    const nome = leadName.trim();

    if (!email) {
      setLeadStatus({ ok: false, msg: "Preenche o teu e-mail para receber o resumo." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setLeadStatus({ ok: false, msg: "E-mail inválido. Confere e tenta novamente." });
      return;
    }

    setSendingLead(true);
    try {
      const res = await fetch("/api/wizard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: nome || null,
          email,
          symptoms,
          context,
          priority,
          primary: rec.primary,
          secondary: rec.secondary,
          summaryText,
        }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        const detail = data?.error || "Não foi possível registrar o diagnóstico agora. Tenta novamente.";
        setLeadStatus({ ok: false, msg: detail });
        return;
      }

      setLeadStatus({ ok: true, msg: "Perfeito. Vamos responder em até 24 horas." });
      setStep(5);
    } catch {
      setLeadStatus({ ok: false, msg: "Falha de rede. Tenta novamente." });
    } finally {
      setSendingLead(false);
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
              e podes agendar a conversa.
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
                      checked ? "border-cyan-500/60 ring-2 ring-cyan-500/20" : "border-slate-800 hover:border-slate-700"
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
                      selected ? "border-accent-500/70 ring-2 ring-accent-500/20" : "border-slate-800 hover:border-slate-700"
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
              <p className="mt-2 text-sm text-slate-200">Isto define a prioridade imediata (o que resolve primeiro).</p>
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
                      selected ? "border-cyan-500/60 ring-2 ring-cyan-500/20" : "border-slate-800 hover:border-slate-700"
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
                className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400 disabled:opacity-60"
              >
                Ver recomendação
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 — CAPTURA LEVE */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Antes do resultado
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-50">
                Para onde enviamos o resumo do diagnóstico?
              </h2>
              <p className="mt-2 text-sm text-slate-200 max-w-2xl">
                Sem spam. Resposta em até <span className="text-cyan-300 font-semibold">24 horas</span>.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Nome (opcional)
                  </label>
                  <input
                    className="mt-2 w-full rounded-md border border-slate-800 bg-transparent px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400"
                    placeholder="Nome"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    E-mail (obrigatório)
                  </label>
                  <input
                    className="mt-2 w-full rounded-md border border-slate-800 bg-transparent px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400"
                    placeholder="contato@exemplo.com"
                    type="email"
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                  />
                </div>
              </div>

              {leadStatus && (
                <div className={`mt-4 text-sm ${leadStatus.ok ? "text-emerald-400" : "text-rose-400"}`} role="status">
                  {leadStatus.msg}
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <button onClick={() => setStep(3)} className="text-sm text-slate-300 hover:text-slate-100">
                  Voltar
                </button>
                <button
                  disabled={sendingLead}
                  onClick={submitLead}
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 disabled:opacity-60"
                >
                  {sendingLead ? "A enviar…" : "Continuar e ver recomendação"}
                </button>
              </div>
            </div>

            <details className="rounded-2xl border border-slate-800 bg-slate-950/25 p-5">
              <summary className="cursor-pointer text-sm font-semibold text-slate-200 hover:text-slate-50">
                Ver o resumo que será enviado
              </summary>
              <pre className="mt-3 whitespace-pre-wrap text-xs text-slate-300">{summaryText}</pre>
            </details>
          </div>
        )}

        {/* STEP 5 — RESULT */}
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
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Alternativa</p>
                  <p className="mt-2 text-sm font-semibold text-slate-50">{labelForPath(rec.secondary)}</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Se aparecer outro gargalo dominante, este pode ser o próximo passo.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/35 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Próximo passo</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Agenda o diagnóstico e já vais com contexto pronto. Respondemos em até{" "}
                    <span className="text-cyan-300 font-semibold">24 horas</span>.
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
                  </div
