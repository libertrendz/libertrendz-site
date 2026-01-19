// app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-16 md:py-20 space-y-16">
        {/* HERO — cola dos 4 pilares, com mais vida */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/35 p-8 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-700/12 via-accent-500/8 to-transparent" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.4fr,1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                Libertrendz · 4 pilares para PMEs
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
                Produto e execução.
                <span className="block mt-2 text-cyan-300">
                  Organizar operação, vender melhor e ganhar previsibilidade.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base md:text-lg text-slate-200">
                O site não é vitrine bonita. É máquina comercial. Aqui tens o
                mapa: Moduz+ como ecossistema modular, apps customizados para
                necessidades específicas, sites e landing pages para conversão,
                e consultoria ágil para pôr ordem na entrega.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/moduz"
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm md:text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
                >
                  Ver Moduz+
                </a>
                <a
                  href="/apps"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm md:text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
                >
                  Apps customizados
                </a>
                <a
                  href="/sites"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm md:text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
                >
                  Sites & Landing Pages
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-slate-800 bg-slate-950/30 p-6 shadow-xl shadow-black/60">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Os 4 pilares
              </p>
              <div className="mt-4 space-y-3 text-sm text-slate-200">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-cyan-300">Moduz+</p>
                    <p className="text-slate-300 text-[13px]">
                      Módulos ativáveis para operação e gestão.
                    </p>
                  </div>
                  <a className="text-cyan-300 text-xs hover:text-cyan-200" href="/moduz">
                    Ver →
                  </a>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-accent-300">Apps customizados</p>
                    <p className="text-slate-300 text-[13px]">
                      Soluções sob medida para dores específicas.
                    </p>
                  </div>
                  <a className="text-accent-300 text-xs hover:text-accent-200" href="/apps">
                    Ver →
                  </a>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-accent-300">Sites & Landing Pages</p>
                    <p className="text-slate-300 text-[13px]">
                      Conversão, campanhas e presença profissional.
                    </p>
                  </div>
                  <a className="text-accent-300 text-xs hover:text-accent-200" href="/sites">
                    Ver →
                  </a>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-accent-300">Consultoria Ágil</p>
                    <p className="text-slate-300 text-[13px]">
                      Fluxo, previsibilidade e entrega sem teatro.
                    </p>
                  </div>
                  <a className="text-accent-300 text-xs hover:text-accent-200" href="/agile">
                    Ver →
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* SEÇÃO — como se conectam */}
        <section className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-slate-50">
              Como estes pilares se conversam
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Sites e landing pages podem ser a porta de entrada comercial. Apps
              customizados resolvem dores específicas. Moduz+ assume quando o
              negócio precisa de um ecossistema modular. E a consultoria ágil
              garante que a entrega e operação não vire caos.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Entrada
              </p>
              <p className="mt-2 font-semibold text-slate-50">Site / Landing</p>
              <p className="mt-2 text-slate-300">
                Capta leads, explica oferta e qualifica o cliente.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Solução
              </p>
              <p className="mt-2 font-semibold text-slate-50">App customizado</p>
              <p className="mt-2 text-slate-300">
                Entrega rápido e resolve um problema específico.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Escala
              </p>
              <p className="mt-2 font-semibold text-slate-50">Moduz+</p>
              <p className="mt-2 text-slate-300">
                Ativa módulos e vira base operacional conforme a empresa cresce.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="space-y-6 border-t border-slate-800 pt-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-50">
            Quer destravar a tua operação e o comercial?
          </h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Sem proposta genérica: primeiro entendemos o contexto, depois
            indicamos o melhor caminho entre Moduz+, app customizado, site/landing
            e consultoria.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Falar sobre o meu caso
            </a>
            <a
              href="/moduz"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Ver Moduz+
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}