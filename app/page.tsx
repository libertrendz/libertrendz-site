// repo: libertrendz-site/app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-20 space-y-20">
        {/* HERO — Moduz em primeiro plano com sombreado cian */}
        <div className="grid gap-12 lg:grid-cols-[3fr,1.8fr] lg:items-start">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-x-6 -top-8 -bottom-8 -z-10 mx-auto w-[calc(100%+48px)] rounded-2xl bg-gradient-to-r from-cyan-600/8 via-cyan-500/5 to-transparent blur-[14px]" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Moduz+ • Apps • Sites • Consultoria
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Moduz+ — o ERP modular para PMEs.
              <span className="block mt-2 text-cyan-400 text-2xl md:text-3xl">
                Ative só o que precisa. Comece pequeno. Escale rápido.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-200">
              Produto + implementação. O Moduz+ organiza operação por módulos. E quando
              precisa de algo específico, entregamos apps customizados e sites/landing pages
              com foco em conversão e execução real.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/moduz"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
              >
                Ver Moduz+ (demo)
              </a>

              <a
                href="/apps"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Apps & Websites
              </a>

              <a
                href="/contato"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Falar sobre um projeto
              </a>
            </div>
          </div>

          {/* BOX LATERAL */}
          <aside className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl shadow-black/60 lg:translate-y-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Em poucas linhas
            </p>
            <p className="text-sm text-slate-200">
              Entregamos quatro pilares: Moduz+ (ERP modular), apps customizados, sites/landing pages e consultoria ágil.
              Foco em implementação pragmática e valor mensurável.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>• Modularidade: pague pelo que ativa.</li>
              <li>• Execução rápida: MVP em ciclos curtos.</li>
              <li>• Clareza operacional: menos caos, mais controlo.</li>
            </ul>
          </aside>
        </div>

        {/* SERVIÇOS — 4 pilares */}
        <section id="servicos" className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50">O que fazemos</h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-200">
                Quatro pilares que se encaixam: sites e landing pages abrem a porta, apps resolvem o específico,
                e o Moduz+ escala a operação. A consultoria ágil garante previsibilidade na entrega e no dia a dia.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {/* MODUZ */}
            <a
              href="/moduz"
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm transition hover:border-cyan-400 hover:bg-slate-900/70"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  Moduz+
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">
                  ERP modular para PMEs
                </h3>
                <p className="mt-2 text-slate-200">
                  People, Track, Finance, Docs, Bizz, Flow e Assets. Ative por fases, com governança e clareza.
                </p>
              </div>
              <span className="mt-4 text-xs text-cyan-400">Ver Moduz+ →</span>
            </a>

            {/* APPS */}
            <a
              href="/apps"
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm transition hover:border-accent-400 hover:bg-slate-900/70"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Apps customizados
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">
                  Soluções sob medida
                </h3>
                <p className="mt-2 text-slate-200">
                  Agendamentos, OS, dashboards, portais, integrações, ferramentas internas e automações.
                </p>
              </div>
              <span className="mt-4 text-xs text-accent-300">Ver apps →</span>
            </a>

            {/* SITES */}
            <a
              href="/apps"
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm transition hover:border-accent-400 hover:bg-slate-900/70"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Sites & Landing Pages
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">
                  Conversão com propósito
                </h3>
                <p className="mt-2 text-slate-200">
                  Sites rápidos, landing pages de campanha, captação com formulário e integrações.
                </p>
              </div>
              <span className="mt-4 text-xs text-accent-300">Ver websites →</span>
            </a>

            {/* CONSULTORIA */}
            <a
              href="/agile"
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm transition hover:border-accent-400 hover:bg-slate-900/70"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Consultoria Ágil
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">
                  Previsibilidade sem teatro
                </h3>
                <p className="mt-2 text-slate-200">
                  Fluxo, priorização, rituais mínimos e métricas simples para gerir de verdade.
                </p>
              </div>
              <span className="mt-4 text-xs text-accent-300">Ver consultoria →</span>
            </a>
          </div>
        </section>

        {/* POR QUE */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">Por que trabalhar connosco</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Foco em resultado</p>
              <p>Escopo claro, prioridade real, entrega que vira uso no dia a dia.</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Produto + serviço</p>
              <p>Moduz+ quando é escala. App/site quando é específico. Sem forcing.</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Implementação pragmática</p>
              <p>Menos promessa, mais piloto funcional e iteração baseada em uso real.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="space-y-6 border-t border-slate-800 pt-8 text-center">
          <h2 className="text-3xl font-semibold text-slate-50">Quer ver o Moduz+ em ação?</h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Fazemos uma demo dirigida: entendemos o contexto e mostramos quais módulos fazem sentido, sem enrolação.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/moduz"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              Agendar demo Moduz+
            </a>
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Falar comigo
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}