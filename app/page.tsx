export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-20 space-y-20">
        {/* HERO — Moduz em primeiro plano com sombreado cian */}
        <div className="grid gap-12 lg:grid-cols-[3fr,1.8fr] lg:items-start">
          <div className="relative">
            {/* overlay cian suave — efeito visual, pointer-events-none */}
            <div className="pointer-events-none absolute -inset-x-6 -top-8 -bottom-8 -z-10 mx-auto w-[calc(100%+48px)] rounded-2xl bg-gradient-to-r from-cyan-600/8 via-cyan-500/5 to-transparent blur-[14px]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Moduz+ • Produtos & Serviços
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Moduz+ — módulos ativáveis para PMEs.
              <span className="block mt-2 text-cyan-400 text-2xl md:text-3xl">
                Ative só o que precisa. Comece pequeno. Escale rápido.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-200">
              Plataforma modular + serviços: Moduz+ (produto ativável por módulo), apps e websites feitos para gerar resultado real, e mentoria prática para profissionais que querem avançar.
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

          {/* BOX LATERAL — resumo objetivo */}
          <aside className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl shadow-black/60 lg:translate-y-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Em poucas linhas
            </p>
            <p className="text-sm text-slate-200">
              Entregamos produto + serviço: Moduz+ (ativação por módulo), apps/ERPs leves, websites e mentoria. Foco em implementação prática e valor mensurável.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>• Módulos ativáveis: pague só pelo que precisa.</li>
              <li>• MVP em ciclos curtos — feedback real antes de escalar.</li>
              <li>• Mentoria e consultoria para operacionalizar a solução.</li>
            </ul>
          </aside>
        </div>

        {/* SERVIÇOS — todos em mesmo patamar, Moduz primeiro */}
        <section id="servicos" className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-50">O que fazemos</h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-200">
                Produto + serviços para PMEs e profissionais: modularidade que reduz risco, apps e websites que convertem, e mentoria orientada a resultado.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {/* CARD: MODUZ */}
            <a
              href="/moduz"
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm transition hover:border-cyan-400 hover:bg-slate-900/70"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  Moduz+
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">
                  Ecossistema modular para PMEs
                </h3>
                <p className="mt-2 text-slate-200">
                  Módulos ativáveis: People, Track, Finance, Docs, Bizz. Comece com o core e adicione módulos conforme necessidade.
                </p>
              </div>
              <span className="mt-4 text-xs text-cyan-400">Ver Moduz+ →</span>
            </a>

            {/* CARD: APPS & WEBSITES */}
            <a
              href="/apps"
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm transition hover:border-accent-400 hover:bg-slate-900/70"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Apps & Websites
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">
                  Produtos digitais que funcionam
                </h3>
                <p className="mt-2 text-slate-200">
                  ERPs leves, apps internos, landing pages e sites com foco em conversão e operação eficiente.
                </p>
              </div>
              <span className="mt-4 text-xs text-accent-300">Ver soluções →</span>
            </a>

            {/* CARD: CONSULTORIA ÁGIL */}
            <a
              href="/agile"
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm transition hover:border-accent-400 hover:bg-slate-900/70"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Consultoria Ágil
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">
                  Entrega previsível, sem ritualismo
                </h3>
                <p className="mt-2 text-slate-200">
                  Rituais e métricas úteis para equipas que querem resultado, não teatro.
                </p>
              </div>
              <span className="mt-4 text-xs text-accent-300">Ver consultoria →</span>
            </a>

            {/* CARD: MENTORIA */}
            <a
              href="/mentoria"
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm transition hover:border-accent-400 hover:bg-slate-900/70"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Mentoria Tech Reload
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">
                  Diagnóstico e plano prático
                </h3>
                <p className="mt-2 text-slate-200">
                  LiberTrail inicia o processo; mentoria foca execução e transição de carreira.
                </p>
              </div>
              <span className="mt-4 text-xs text-accent-300">Ver mentoria →</span>
            </a>
          </div>
        </section>

        {/* POR QUE LIBERTRENDZ — curto */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">Por que trabalhar connosco</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Foco em resultado</p>
              <p>Propostas práticas, com escopo claro e prioridades reais para o negócio.</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Produto + serviço</p>
              <p>Combinação de produto (Moduz+) e serviço (consultoria/mentoria/implementação).</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Implementação pragmática</p>
              <p>MVPs rápidos, iteração com utilizadores e melhorias orientadas por uso real.</p>
            </div>
          </div>
        </section>

        {/* CTA FINAL — foco comercial em Moduz */}
        <section className="space-y-6 border-t border-slate-800 pt-8 text-center">
          <h2 className="text-3xl font-semibold text-slate-50">Quer ver o Moduz+ em ação?</h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">Agende uma demo dirigida: mostramos como o conjunto de módulos resolve o problema operacional da tua PME sem promessas vazias.</p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="/moduz" className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400">Agendar demo Moduz+</a>
            <a href="/contato" className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60">Falar comigo</a>
          </div>
        </section>
      </section>
    </main>
  );
}