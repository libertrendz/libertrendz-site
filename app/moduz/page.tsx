// app/moduz/page.tsx

export default function ModuzPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-6xl px-4 py-12 lg:py-20 space-y-16">
        {/* HERO */}
        <header className="relative">
          <div className="absolute -inset-x-10 -top-10 -bottom-8 bg-gradient-to-r from-cyan-500/10 via-sky-500/5 to-transparent blur-3xl pointer-events-none" />
          <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 px-6 py-10 md:px-10 md:py-12 shadow-[0_0_40px_rgba(15,23,42,0.8)]">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-4 max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Libertrendz · ERP modular
                </p>
                <div className="space-y-2">
                  <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
                    MODUZ+
                  </h1>
                  <p className="text-lg md:text-2xl text-slate-200">
                    O ERP modular, escalável e moderno para PME.
                  </p>
                </div>
                <p className="text-sm md:text-base text-slate-300">
                  Um ecossistema de módulos independentes que se conectam
                  quando você precisa. Comece pequeno, ligue novos blocos com o
                  tempo e mantenha sempre a mesma base tecnológica.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                    Multi-módulo
                  </span>
                  <span className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-200">
                    Multi-empresa
                  </span>
                  <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300">
                    Escalável por fases
                  </span>
                </div>
              </div>

              <div className="hidden md:flex flex-col gap-3 min-w-[220px]">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Ecossistema Moduz+
                  </p>
                  <p className="mt-2 text-sm text-slate-200">
                    Core · People · Track · Finance · Bizz · Stock · Assets ·
                    Flow · Docs
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-cyan-500/15 via-sky-500/10 to-slate-900 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    Foco em PME
                  </p>
                  <p className="mt-2 text-sm text-slate-100">
                    Pensado para empresas que precisam de controlo real sem
                    entrar na complexidade dos ERPs pesados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* INTRO MÓDULOS */}
        <section className="space-y-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Um ERP modular. Múltiplos módulos. Total flexibilidade.
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
            Cada módulo do Moduz+ funciona de forma independente, mas foi
            pensado para se integrar nativamente aos demais. Você liga o que
            precisa, na ordem que o seu negócio pede.
          </p>
        </section>

        {/* GRID PRINCIPAL DE MÓDULOS */}
        <section className="space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            {/* CORE */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Core
              </p>
              <h3 className="text-lg font-semibold">Base do ecossistema</h3>
              <p className="text-sm text-slate-300">
                A base do Moduz+. Centraliza utilizadores, permissões e
                configurações para garantir segurança e escalabilidade. Sem
                Core, nada acontece — com Core, tudo flui.
              </p>
            </article>

            {/* PEOPLE */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                People
              </p>
              <h3 className="text-lg font-semibold">Gestão de colaboradores</h3>
              <p className="text-sm text-slate-300">
                Gestão completa de colaboradores e contratos. Funciona sozinho
                ou integrado a Track, Finance e Flow. Organiza o “lado humano”
                da empresa com simplicidade.
              </p>
            </article>

            {/* TRACK */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                Track
              </p>
              <h3 className="text-lg font-semibold">Ponto inteligente</h3>
              <p className="text-sm text-slate-300">
                Registo de ponto moderno com geo, foto e auditoria. Ideal para
                equipas internas e externas. Quando ligado a People e Finance,
                revela o custo real do trabalho.
              </p>
            </article>

            {/* FINANCE */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Finance
              </p>
              <h3 className="text-lg font-semibold">Centro financeiro</h3>
              <p className="text-sm text-slate-300">
                Controle financeiro completo: contas, lançamentos, centros de
                custo e pagamentos. Consolida dados de People, Track, Bizz,
                Stock, Assets e Flow.
              </p>
            </article>

            {/* BIZZ */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
                Bizz
              </p>
              <h3 className="text-lg font-semibold">Negócio em movimento</h3>
              <p className="text-sm text-slate-300">
                Orçamentos, propostas e contratos num só fluxo. Simples, rápido
                e integrado ao Finance. Transforma intenção de venda em receita
                real.
              </p>
            </article>

            {/* STOCK */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
                Stock
              </p>
              <h3 className="text-lg font-semibold">Inventário inteligente</h3>
              <p className="text-sm text-slate-300">
                Gestão de inventário para qualquer PME: entradas, saídas e
                valorização. Com Flow e Finance, entrega controlo operacional e
                impacto financeiro real.
              </p>
            </article>

            {/* ASSETS */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">
                Assets
              </p>
              <h3 className="text-lg font-semibold">Equipamentos e frota</h3>
              <p className="text-sm text-slate-300">
                Gestão completa de equipamentos e frota: disponibilidade,
                manutenção e custos. Integrado a Flow e Finance, transforma
                ativos em estratégia.
              </p>
            </article>

            {/* FLOW */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                Flow
              </p>
              <h3 className="text-lg font-semibold">Projetos e execução</h3>
              <p className="text-sm text-slate-300">
                Execução organizada em etapas: projetos, processos, obras e
                implementações. Quando combinado com os outros módulos, cria um
                ciclo operacional completo.
              </p>
            </article>

            {/* DOCS */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                Docs
              </p>
              <h3 className="text-lg font-semibold">Repositório universal</h3>
              <p className="text-sm text-slate-300">
                O repositório universal do Moduz+. Guarda e organiza documentos
                de todos os módulos com segurança. A única fonte de verdade para
                anexos da empresa.
              </p>
            </article>
          </div>
        </section>

        {/* MÓDULOS FUTUROS */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Módulos futuros
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-3xl">
              O Moduz+ foi desenhado para crescer por camadas. Novos módulos
              podem ser ativados sem recomeçar o sistema, acompanhando o
              crescimento da PME.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* ACCOUNT */}
            <article className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Em desenvolvimento
              </p>
              <h3 className="text-lg font-semibold">Account</h3>
              <p className="text-sm text-slate-300">
                Integração fiscal e contábil: SAFT, e-fatura, SPED e outras
                obrigações. Automatiza rotinas e reduz risco.
              </p>
            </article>

            {/* CRM */}
            <article className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Em desenvolvimento
              </p>
              <h3 className="text-lg font-semibold">CRM</h3>
              <p className="text-sm text-slate-300">
                CRM operacional — leve, integrado ao Bizz e ao Finance. Focado
                em pipeline, oportunidades e relacionamento.
              </p>
            </article>

            {/* BI / AI */}
            <article className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Em desenvolvimento
              </p>
              <h3 className="text-lg font-semibold">BI / AI</h3>
              <p className="text-sm text-slate-300">
                Dashboards avançados, previsões inteligentes e insights
                automáticos. O módulo que transforma dados em vantagem
                competitiva.
              </p>
            </article>
          </div>
        </section>

        {/* INTEROPERABILIDADE */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Interoperabilidade total. Independência total.
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-3xl">
              Todos os módulos podem ser usados de forma independente, mas foram
              concebidos para funcionar em conjunto, como um ecossistema
              coerente.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 text-sm text-slate-300">
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-100">
                Totalmente independentes
              </h3>
              <p>
                Ative apenas o que a sua PME precisa. Cada módulo é útil por si
                só.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-100">
                Totalmente interoperáveis
              </h3>
              <p>
                Quando combinados, os módulos formam um ecossistema unificado:
                People → Track → Finance → Bizz → Stock → Assets → Flow → Docs.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-100">
                Totalmente escaláveis
              </h3>
              <p>
                Comece pequeno. Cresça quando quiser. Um módulo de cada vez, sem
                migrações traumáticas.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-slate-900 px-6 py-10 text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Moduz+ é mais do que um ERP.
          </h2>
          <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto">
            É um ecossistema modular que evolui com o seu negócio. Ative o que
            precisar — conecte quando quiser.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300 transition"
            >
              Solicitar demonstração
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/60 transition"
            >
              Receber apresentação comercial
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}