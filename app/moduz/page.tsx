// app/moduz/page.tsx
"use client";

import { useState } from "react";

const MODULE_COLORS: Record<string, string> = {
  core: "bg-cyan-400",
  people: "bg-violet-400",
  track: "bg-emerald-400",
  docs: "bg-sky-400",
  finance: "bg-amber-400",
  bizz: "bg-orange-400",
  flow: "bg-pink-400",
  assets: "bg-lime-400",
  stock: "bg-teal-400",
  payroll: "bg-indigo-400",
  crm: "bg-fuchsia-400",
};

const MODULES_AVAILABLE = [
  { key: "core", title: "Core", desc: "Cadastro de empresas, utilizadores e permissões." },
  { key: "people", title: "People", desc: "Gestão de colaboradores, contratos e vínculos." },
  { key: "track", title: "Track", desc: "Registo de ponto, auditoria e jornada mobile." },
  { key: "docs", title: "Docs", desc: "Repositório organizado de documentos por módulo." },
  { key: "finance", title: "Finance", desc: "Lançamentos básicos, contas e relatórios simples." },
  { key: "bizz", title: "Bizz", desc: "Orçamentos · propostas · contratos básicos." },
  { key: "flow", title: "Flow", desc: "Gestão de projetos e tarefas integradas." },
  { key: "assets", title: "Assets", desc: "Gestão de ativos, manutenção e custos." },
];

const MODULES_SOON = [
  { key: "stock", title: "Stock", desc: "Gestão de inventário e movimentos." },
  { key: "payroll", title: "Payroll", desc: "Folha e cálculo de vencimentos (planeado)." },
  { key: "crm", title: "CRM & BI", desc: "Gestão comercial e painéis analíticos." },
];

function ModuleTitle({
  moduleKey,
  title,
}: {
  moduleKey: string;
  title: string;
}) {
  const dot = MODULE_COLORS[moduleKey] || "bg-slate-400";
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2.5 w-2.5 rounded-full ${dot}`} aria-hidden="true" />
      <span className="text-base font-semibold text-slate-50">{title}</span>
    </div>
  );
}

export default function ModuzPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  // CONTEXTO INICIAL (substitui o "starter/operacional/comercial")
  const [interest, setInterest] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    if (!email || !name || !interest) {
      setStatus({ ok: false, msg: "Por favor, preenche o teu nome, e-mail e contexto inicial." });
      return;
    }

    setLoading(true);
    try {
      const payload = {
        nome: name,
        email,
        empresa: company,
        mensagem: `Interesse Moduz+ · contexto: ${interest}`,
        assunto: "Interesse Moduz+ · demo / orientação",
      };

      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus({ ok: true, msg: "Recebemos · vamos responder em até 2 dias úteis." });
        setName("");
        setEmail("");
        setCompany("");
        setInterest("");
      } else {
        setStatus({ ok: false, msg: "Não foi possível enviar. Usa contato@libertrendz.eu." });
      }
    } catch {
      setStatus({ ok: false, msg: "Erro ao enviar. Tenta novamente ou escreve para contato@libertrendz.eu." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-12">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-700/12 via-cyan-600/10 to-transparent" />
          <div className="relative z-10 lg:flex lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Moduz+
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                Ecossistema modular para PMEs que precisam de controlo sem travar a operação.
              </h1>
              <p className="mt-4 text-sm text-slate-200">
                Ativa por módulos, implementa por fases e cresce conforme a tua empresa cresce. Sem “big bang”,
                sem promessa vaga, sem confusão.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-slate-200">
                <li>• Implementação por módulos. Ativa só o que precisas.</li>
                <li>• Integração nativa entre People, Track e Finance.</li>
                <li>• Serve operações em campo, serviços, obras e equipas distribuídas.</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#planos"
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
                >
                  Agendar demo
                </a>
                <a
                  href="/contato"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
                >
                  Falar sobre a minha empresa
                </a>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:w-80">
              <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-4 text-sm text-slate-200">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Vantagens rápidas
                </p>
                <div className="space-y-2">
                  <div>
                    <p className="font-semibold text-slate-50">Entrega rápida</p>
                    <p className="text-slate-300 text-[13px]">MVP funcional em semanas, não meses.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50">Modularidade</p>
                    <p className="text-slate-300 text-[13px]">Começa pequeno e escala com segurança.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50">Custos previsíveis</p>
                    <p className="text-slate-300 text-[13px]">Ativação por módulo e utilizador interno.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MÓDULOS DISPONÍVEIS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Módulos disponíveis</h2>
          <p className="text-sm text-slate-200 max-w-2xl">
            O núcleo está pronto. Escolhes módulos conforme a tua realidade.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {MODULES_AVAILABLE.map((m) => (
              <article key={m.key} className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-emerald-300 px-2 py-0.5 text-[11px] font-semibold text-slate-900 shadow-sm ring-1 ring-emerald-200">
                  Pronto
                </span>
                <ModuleTitle moduleKey={m.key} title={m.title} />
                <p className="mt-2 text-sm text-slate-300">{m.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* MÓDULOS EM DESENVOLVIMENTO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Módulos em desenvolvimento</h2>
          <p className="text-sm text-slate-200 max-w-2xl">
            Roadmap em curso. Priorizado por valor comercial e operação real.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {MODULES_SOON.map((m) => (
              <article key={m.key} className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-slate-700/40 px-2 py-0.5 text-[11px] font-semibold text-slate-200 border border-slate-700">
                  Em breve
                </span>
                <ModuleTitle moduleKey={m.key} title={m.title} />
                <p className="mt-2 text-sm text-slate-300">{m.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* PLANOS / FORM — AJUSTE DE PROPORÇÃO */}
        <div id="planos" className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* ESQUERDA AGORA É CARD (mesmo peso do form) */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 h-full flex flex-col">
            <div>
              <h2 className="text-xl font-semibold text-slate-50">Planos e como começamos</h2>
              <p className="mt-2 text-sm text-slate-200">
                Descoberta rápida, prova de conceito e ativação por módulos. Começa enxuto e escala com método.
              </p>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/25 p-4 text-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Starter</p>
                <p className="mt-2 font-semibold text-slate-50">Core · People · Docs</p>
                <p className="mt-1 text-slate-300 text-[13px]">Organização rápida do básico.</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/25 p-4 text-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Operacional</p>
                <p className="mt-2 font-semibold text-slate-50">Starter · Track · Finance</p>
                <p className="mt-1 text-slate-300 text-[13px]">Operação para equipas em campo.</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/25 p-4 text-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Comercial</p>
                <p className="mt-2 font-semibold text-slate-50">Operacional · Bizz</p>
                <p className="mt-1 text-slate-300 text-[13px]">Orçamentos e contratos integrados.</p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/25 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Implementação em fases
              </p>
              <ul className="mt-2 space-y-1 text-slate-300">
                <li>• Setup e permissões</li>
                <li>• Ativação dos módulos prioritários</li>
                <li>• Ajustes finos e rotinas</li>
              </ul>
            </div>

            {/* empurra para baixo para equilibrar altura */}
            <div className="mt-auto pt-6 flex flex-wrap gap-3">
              <a
                href="#planos"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow shadow-cyan-500/30 transition hover:bg-cyan-400"
              >
                Marcar demo
              </a>
              <a
                href="/contato"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Falar do meu cenário
              </a>
            </div>
          </div>

          {/* DIREITA — FORM (igual altura, botões no fundo) */}
          <aside className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 h-full flex flex-col">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Interesse</p>
              <h3 className="mt-2 text-base font-semibold text-slate-50">Fala connosco sobre Moduz+</h3>
              <p className="mt-2 text-sm text-slate-300">Preenche e marcamos uma demo curta.</p>
            </div>

            <form className="mt-4 space-y-3 flex-1" onSubmit={handleSubmit}>
              <div>
                <label className="sr-only">Nome</label>
                <input
                  className="w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/25"
                  style={{ colorScheme: "dark" }}
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="sr-only">E-mail</label>
                <input
                  className="w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/25"
                  style={{ colorScheme: "dark" }}
                  placeholder="E-mail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="sr-only">Empresa</label>
                <input
                  className="w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/25"
                  style={{ colorScheme: "dark" }}
                  placeholder="Empresa (opcional)"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div>
                <label className="sr-only">Contexto inicial</label>
                <select
                  className="w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/25"
                  style={{ colorScheme: "dark" }}
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  required
                >
                  <option value="" disabled className="bg-slate-950 text-slate-100">
                    Qual o teu contexto inicial?
                  </option>
                  <option value="Quero organizar operação e equipa" className="bg-slate-950 text-slate-100">
                    Quero organizar operação e equipa
                  </option>
                  <option value="Quero controlo de ponto e campo" className="bg-slate-950 text-slate-100">
                    Quero controlo de ponto e campo
                  </option>
                  <option value="Quero financeiro e previsibilidade" className="bg-slate-950 text-slate-100">
                    Quero financeiro e previsibilidade
                  </option>
                  <option value="Quero orçamentos e contratos" className="bg-slate-950 text-slate-100">
                    Quero orçamentos e contratos
                  </option>
                  <option value="Ainda não sei, preciso de orientação" className="bg-slate-950 text-slate-100">
                    Ainda não sei, preciso de orientação
                  </option>
                </select>
              </div>

              {/* BOTÕES NO FUNDO */}
              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow shadow-cyan-500/30 disabled:opacity-60"
                >
                  {loading ? "A enviar…" : "Marcar demo"}
                </button>
                <a
                  href="mailto:contato@libertrendz.eu?subject=Interesse%20Moduz%20Demo"
                  className="text-sm text-slate-300 underline-offset-2 hover:text-slate-100"
                >
                  Ou escreve por e-mail
                </a>
              </div>

              {status && (
                <div
                  className={`mt-2 text-sm ${status.ok ? "text-green-400" : "text-rose-400"}`}
                  role="status"
                  aria-live="polite"
                >
                  {status.msg}
                </div>
              )}
            </form>
          </aside>
        </div>

        {/* CTA FINAL */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer ver como o Moduz+ funciona na tua empresa?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Marcamos uma demo curta para entender o teu contexto e sugerir a melhor ativação de módulos.
          </p>
          <a
            href="#planos"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
          >
            Marcar demo
          </a>
        </div>
      </section>
    </main>
  );
}
