// app/moduz/page.tsx

const CONTACT_MODUZ_DEMO_URL =
  "/contato?assunto=Moduz%2B&mensagem=Quero%20ver%20o%20Moduz%2B%20na%20minha%20empresa.%0A%0AModulos%20de%20interesse%3A%20____%0AContexto%3A%20____";

type ModuleItem = {
  key: string;
  title: string;
  desc: string;
  pill: { label: string; className: string };
};

const MODULES_AVAILABLE: ModuleItem[] = [
  {
    key: "core",
    title: "Core",
    desc: "Cadastro de empresas, utilizadores e permissões.",
    pill: { label: "Base", className: "bg-accent-400/20 text-accent-200 ring-1 ring-accent-400/30" },
  },
  {
    key: "people",
    title: "People",
    desc: "Gestão de colaboradores, contratos e vínculos.",
    pill: { label: "Equipa", className: "bg-accent-400/20 text-accent-200 ring-1 ring-accent-400/30" },
  },
  {
    key: "track",
    title: "Track",
    desc: "Registo de ponto, auditoria e jornada mobile.",
    pill: { label: "Campo", className: "bg-emerald-400/20 text-emerald-200 ring-1 ring-emerald-400/30" },
  },
  {
    key: "docs",
    title: "Docs",
    desc: "Repositório organizado de documentos por módulo.",
    pill: { label: "Arquivo", className: "bg-accent-400/20 text-accent-200 ring-1 ring-accent-400/30" },
  },
  {
    key: "finance",
    title: "Finance",
    desc: "Lançamentos básicos, contas e relatórios simples.",
    pill: { label: "Gestão", className: "bg-cyan-400/20 text-cyan-200 ring-1 ring-cyan-400/30" },
  },
  {
    key: "bizz",
    title: "Bizz",
    desc: "Orçamentos, propostas e contratos básicos.",
    pill: { label: "Comercial", className: "bg-cyan-400/20 text-cyan-200 ring-1 ring-cyan-400/30" },
  },
  {
    key: "flow",
    title: "Flow",
    desc: "Gestão de projetos e tarefas integradas.",
    pill: { label: "Fluxo", className: "bg-indigo-400/20 text-indigo-200 ring-1 ring-indigo-400/30" },
  },
  {
    key: "assets",
    title: "Assets",
    desc: "Gestão de ativos, manutenção e custos.",
    pill: { label: "Ativos", className: "bg-indigo-400/20 text-indigo-200 ring-1 ring-indigo-400/30" },
  },
];

const MODULES_SOON: ModuleItem[] = [
  {
    key: "stock",
    title: "Stock",
    desc: "Gestão de inventário e movimentos.",
    pill: { label: "Em breve", className: "bg-slate-700/35 text-slate-200 ring-1 ring-slate-700" },
  },
  {
    key: "payroll",
    title: "Payroll",
    desc: "Folha e cálculo de vencimentos (planeado).",
    pill: { label: "Em breve", className: "bg-slate-700/35 text-slate-200 ring-1 ring-slate-700" },
  },
  {
    key: "crm",
    title: "CRM & BI",
    desc: "Gestão comercial e painéis analíticos.",
    pill: { label: "Em breve", className: "bg-slate-700/35 text-slate-200 ring-1 ring-slate-700" },
  },
];

export default function ModuzPage() {
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
                Ativa por módulos, implementa por fases e cresce conforme a tua empresa cresce. Sem big bang,
                sem promessa vaga, sem confusão.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-slate-200">
                <li>• Implementação por módulos. Ativa só o que precisas.</li>
                <li>• Integração nativa entre People, Track e Finance.</li>
                <li>• Serve operações em campo, serviços, obras e equipas distribuídas.</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={CONTACT_MODUZ_DEMO_URL}
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
                >
                  Marcar demo
                </a>
                <a
                  href="/contato?assunto=Moduz%2B&mensagem=Quero%20falar%20sobre%20o%20meu%20contexto%20e%20ver%20se%20o%20Moduz%2B%20faz%20sentido.%0A%0AContexto%3A%20____%0AUrgencia%3A%20____"
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
                    <p className="text-slate-300 text-[13px]">Começa pequeno. Escala com segurança.</p>
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
              <article
                key={m.key}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-emerald-300 px-2 py-0.5 text-[11px] font-semibold text-slate-900 shadow-sm ring-1 ring-emerald-200">
                  Pronto
                </span>

                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold text-slate-50">{m.title}</h3>
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${m.pill.className}`}
                    aria-label={m.pill.label}
                  >
                    {m.pill.label}
                  </span>
                </div>

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
              <article
                key={m.key}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <span
                  className={`absolute right-4 top-4 inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${m.pill.className}`}
                >
                  {m.pill.label}
                </span>

                <h3 className="text-base font-semibold text-slate-50">{m.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{m.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* PLANOS / COMO COMEÇAMOS (sem wizard) */}
        <div id="planos" className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-50">Planos e como começamos</h2>
            <p className="text-sm text-slate-200">
              Implementação por fases. Começa pelo essencial e ativa o resto quando a operação pede.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Starter</p>
                <p className="mt-2 font-semibold text-slate-50">Core · People · Docs</p>
                <p className="mt-1 text-slate-300 text-[13px]">Organização rápida do básico.</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Operacional</p>
                <p className="mt-2 font-semibold text-slate-50">Starter · Track · Finance</p>
                <p className="mt-1 text-slate-300 text-[13px]">Operação para equipas e campo.</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Comercial</p>
                <p className="mt-2 font-semibold text-slate-50">Operacional · Bizz</p>
                <p className="mt-1 text-slate-300 text-[13px]">Orçamentos e contratos integrados.</p>
              </div>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Implementação
            </p>
            <h3 className="text-base font-semibold text-slate-50">
              Começa pequeno. Ganha controlo. Escala sem travar.
            </h3>

            <div className="grid gap-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-sm text-slate-200">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Fase 1</p>
                <p className="mt-1 font-semibold text-slate-50">Ativar o essencial</p>
                <p className="mt-1 text-slate-300 text-[13px]">
                  Contexto, módulos mínimos e fluxo inicial. Sem big bang.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-sm text-slate-200">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Fase 2</p>
                <p className="mt-1 font-semibold text-slate-50">Rotina operacional</p>
                <p className="mt-1 text-slate-300 text-[13px]">
                  Track e Finance onde fizer sentido. Menos ruído, mais previsibilidade.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-sm text-slate-200">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Fase 3</p>
                <p className="mt-1 font-semibold text-slate-50">Expansão por valor</p>
                <p className="mt-1 text-slate-300 text-[13px]">
                  Bizz, Flow, Assets e o resto conforme a operação pede.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={CONTACT_MODUZ_DEMO_URL}
                className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
              >
                Marcar demo
              </a>
              <a
                href="/cases"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Ver casos
              </a>
            </div>

            <p className="text-xs text-slate-400">
              Se preferires, podes escrever direto para{" "}
              <a
                className="text-cyan-300 hover:text-cyan-200 underline-offset-2 hover:underline"
                href="mailto:contato@libertrendz.eu?subject=Interesse%20Moduz%20Demo"
              >
                contato@libertrendz.eu
              </a>
              .
            </p>
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
            href={CONTACT_MODUZ_DEMO_URL}
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
          >
            Marcar demo
          </a>
        </div>
      </section>
    </main>
  );
}
