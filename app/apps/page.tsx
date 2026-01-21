// app/apps/page.tsx
export default function AppsPage() {
  const CTA_TEXT = "Definir o app certo (2 min)";

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO — mais vivo (tangerina) */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/35 p-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent-500/14 via-accent-400/8 to-transparent" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Apps customizados
            </p>

            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Apps internos que resolvem dor real e viram rotina.
            </h1>

            <p className="text-sm text-slate-200 max-w-2xl">
              Aqui não tem “app genérico”. A ideia é simples: reduzir erro, retrabalho e tempo
              perdido com processos manuais. Quando fizer sentido, integra com o ecossistema Moduz+.
              Quando não fizer, fica leve e direto.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/diagnostico"
                className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
              >
                {CTA_TEXT}
              </a>

              <a
                href="/cases"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Ver casos
              </a>
            </div>
          </div>
        </div>

        {/* RESUMO */}
        <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Para quem</p>
            <p className="mt-1 text-sm text-slate-200">
              PMEs, equipas de serviço, lojas e operações com rotina repetitiva.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Tipo de solução</p>
            <p className="mt-1 text-sm text-slate-200">
              Apps internos, painéis, integrações, formulários e fluxos de aprovação.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Abordagem</p>
            <p className="mt-1 text-sm text-slate-200">
              Descoberta, protótipo funcional, entrega incremental e iteração por uso real.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Integração</p>
            <p className="mt-1 text-sm text-slate-200">
              Pode integrar com Moduz+ quando a empresa precisa de escala e governança.
            </p>
          </div>
        </div>

        {/* QUANDO FAZ SENTIDO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Quando faz sentido um app customizado
          </h2>

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">
                Planilhas demais, controlo de menos
              </p>
              <p className="text-slate-300">
                Se a operação depende de várias folhas/versões, um app organiza e reduz erros.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Operação móvel</p>
              <p className="text-slate-300">
                Equipa em campo precisa de registo simples, offline mínimo e sincronização confiável.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Atendimento e qualidade</p>
              <p className="text-slate-300">
                Checklists, evidências, ordens de serviço e histórico reduzem falhas e discussões.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Dados consolidados</p>
              <p className="text-slate-300">
                Dashboards e integrações evitam “caça manual” de informação entre sistemas.
              </p>
            </div>
          </div>
        </div>

        {/* EXEMPLOS PRÁTICOS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Exemplos práticos</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Operações
              </p>
              <p className="font-semibold text-slate-50">Ordens de serviço + checklists</p>
              <p className="mt-1 text-slate-300">
                Equipa em campo, evidências, status, histórico e retrabalho menor.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Gestão
              </p>
              <p className="font-semibold text-slate-50">Painéis e dashboards internos</p>
              <p className="mt-1 text-slate-300">
                KPIs simples, visão do todo e decisões com base em dados reais.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Comercial
              </p>
              <p className="font-semibold text-slate-50">Catálogo interno e proposta rápida</p>
              <p className="mt-1 text-slate-300">
                Menos fricção para montar proposta e dar resposta ao cliente.
              </p>
            </div>
          </div>
        </div>

        {/* APPS REAIS (2 LINHAS) */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Alguns apps que já construímos</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50">CONFIANCE</p>
              <p className="mt-1 text-sm text-slate-300">
                App operacional para empresas de obras · ponto, orçamentos e gestão de ativos.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50">LEGISTOR</p>
              <p className="mt-1 text-sm text-slate-300">
                Gestão para escritórios de advocacia · processos, prazos e financeiro.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50">EKKLYN</p>
              <p className="mt-1 text-sm text-slate-300">
                Gestão de congregações · membros, atividades, finanças e mural comunitário.
              </p>
            </article>
          </div>

          <div>
            <a
              href="/cases"
              className="text-sm font-semibold text-accent-300 hover:text-accent-200"
            >
              Ver casos completos →
            </a>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Quer um app que funcione no dia a dia?</h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Definimos prioridade, escopo e entregamos um piloto funcional sem enrolação.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              {CTA_TEXT}
            </a>

            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Falar por mensagem
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
