export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-16 space-y-16">
        {/* HERO */}
        <div className="grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
              Libertrendz
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Estratégia, tecnologia e transição de carreira
              <span className="block text-accent-400">para profissionais e PMEs que não têm tempo a perder.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-200">
              Mentoria Tech Reload, consultoria ágil e soluções digitais (apps, ERPs e websites) pensadas para resultados reais.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/mentoria#libertrail"
                className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
              >
                Começar pelo LiberTrail
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Ver serviços
              </a>
            </div>
          </div>

          {/* Bloco “Em poucas linhas” */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl shadow-black/60 lg:translate-y-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Em poucas linhas
            </p>
            <p className="text-sm text-slate-200">
              Juntamos gestão, projetos e tecnologia para entregar: orientação de carreira, organização de equipas e sistemas sob medida.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>• Direção para profissionais em transição.</li>
              <li>• Estrutura para equipas e projetos funcionarem.</li>
              <li>• Sistemas práticos quando o Excel já não chega.</li>
            </ul>
          </div>
        </div>

        {/* SERVIÇOS PRINCIPAIS */}
        <section id="servicos" className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-50">O que a Libertrendz faz hoje</h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-200">Mentoria, consultoria e produtos digitais para profissionais e PMEs com foco em resultado.</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {/* MENTORIA */}
            <a href="/mentoria" className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm transition hover:border-accent-400 hover:bg-slate-900/70">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Mentoria</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Tech Reload + LiberTrail</h3>
                <p className="mt-2 text-slate-200">Diagnóstico e plano prático para transição de carreira com acompanhamento objetivo.</p>
              </div>
              <span className="mt-4 text-xs text-accent-300">Ver mentoria →</span>
            </a>

            {/* CONSULTORIA */}
            <a href="/agile" className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm transition hover:border-accent-400 hover:bg-slate-900/70">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Consultoria Ágil</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Projetos sem teatro</h3>
                <p className="mt-2 text-slate-200">Fluxos, métricas e rituais úteis para equipas e PME que precisam entregar com previsibilidade.</p>
              </div>
              <span className="mt-4 text-xs text-accent-300">Ver consultoria →</span>
            </a>

            {/* APPS & WEBSITES */}
            <a href="/apps" className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm transition hover:border-accent-400 hover:bg-slate-900/70">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Apps & Websites</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Sistemas e presença digital</h3>
                <p className="mt-2 text-slate-200">ERPs leves, apps internos e websites focados em negócio e conversão.</p>
              </div>
              <span className="mt-4 text-xs text-accent-300">Ver soluções →</span>
            </a>

            {/* MODUZ+ */}
            <a href="/moduz" className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm transition hover:border-accent-400 hover:bg-slate-900/70">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">Moduz+</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Ecossistema modular para PMEs</h3>
                <p className="mt-2 text-slate-200">Ative módulos (ponto, people, finance, docs) conforme a necessidade da empresa — sem projetos eternos.</p>
              </div>
              <span className="mt-4 text-xs text-cyan-400">Ver Moduz+ →</span>
            </a>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="space-y-4 border-t border-slate-800 pt-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-50">Pronto para avançar?</h2>
          <p className="text-sm text-slate-200">Comece pelo LiberTrail, agende uma demo do Moduz+ ou fale sobre um projeto específico. Vamos direto ao que importa.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a href="/mentoria#libertrail" className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400">Começar pelo LiberTrail</a>
            <a href="/moduz" className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-cyan-400 transition hover:border-cyan-300 hover:bg-slate-900/60">Ver Moduz+</a>
            <a href="/contato" className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60">Entrar em contato</a>
          </div>
        </section>
      </section>
    </main>
  );
}