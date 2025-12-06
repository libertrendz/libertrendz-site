import React from "react";

export default function AppsPage(): JSX.Element {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        {/* HERO (ATUALIZADO) */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Apps & Soluções
          </p>

          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Soluções digitais que resolvem hoje — e escalam amanhã.
            <span className="block text-accent-400">
              Mini-apps, integrações e plataformas modulares para PMEs.
            </span>
          </h1>

          <p className="text-sm text-slate-200 max-w-2xl">
            Entregamos valor desde o primeiro rollout: protótipos funcionais em
            dias, implantação faseada e integração com os teus processos e dados.
            Menos custo, menos ruído, mais controlo operacional.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Solicitar demo
            </a>

            <a
              href="#mini-apps"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Ver mini-apps
            </a>

            <span className="ml-2 hidden text-xs text-slate-400 md:inline">
              Usado em:{" "}
              <a href="/cases#confiance" className="text-accent-300 hover:underline">
                CONFIANCE
              </a>{" "}
              ·{" "}
              <a href="/cases#ekklyn" className="text-accent-300 hover:underline">
                Ekklyn
              </a>{" "}
              ·{" "}
              <a href="/cases#legistor" className="text-accent-300 hover:underline">
                Legistor
              </a>
            </span>
          </div>

          <div className="mt-4 flex flex-col gap-2 text-sm text-slate-300 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-accent-400" />
              <div>
                <div className="font-semibold text-slate-50">Rápido</div>
                <div className="text-xs text-slate-300">Protótipo funcional em dias</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-accent-400" />
              <div>
                <div className="font-semibold text-slate-50">Previsível</div>
                <div className="text-xs text-slate-300">Escopo e custo definidos desde o início</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-accent-400" />
              <div>
                <div className="font-semibold text-slate-50">Integrado</div>
                <div className="text-xs text-slate-300">Dados reais, sem duplicação manual</div>
              </div>
            </div>
          </div>
        </div>

        {/* RESUMO EM CARDS */}
        <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Para quem</p>
            <p className="mt-1 text-sm text-slate-200">PMEs e equipas que precisam de controlo sem projetos intermináveis.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Tipo de solução</p>
            <p className="mt-1 text-sm text-slate-200">Sistemas web, painéis e mini-apps integráveis ao fluxo real de trabalho.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Abordagem</p>
            <p className="mt-1 text-sm text-slate-200">Descoberta objetiva → protótipo funcional → entregas curtas e iterativas.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Exemplos</p>
            <p className="mt-1 text-sm text-slate-200">Confiance, Ekklyn, Legistor — módulos reutilizáveis e prontos para adaptar.</p>
          </div>
        </div>

        {/* QUANDO FAZ SENTIDO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Quando vale a pena falar de uma solução</h2>
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Planilhas e silos</p>
              <p className="text-slate-300">Dados dispersos, versões e retrabalho. A solução é organizar o processo, não comprar mais ferramentas.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Softwares que complicam</p>
              <p className="text-slate-300">Soluções generalistas que pedem adaptação contínua. Preferimos: menos ajustes, mais resultados.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Crescimento sem processo</p>
              <p className="text-slate-300">Operação cresce mas o controlo não. Organizamos fluxo, não adicionamos complexidade.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Decisão baseada em dados</p>
              <p className="text-slate-300">Relatórios práticos e painéis que tiram a luta de achar informação manualmente.</p>
            </div>
          </div>
        </div>

        {/* TIPOS DE SOLUÇÃO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">O que entregamos (exemplos)</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Plataforma modular</p>
              <p className="font-semibold text-slate-50">Soluções por módulos</p>
              <p className="mt-1 text-slate-300">People, Track, Finance, Docs e módulos comerciais — ativáveis conforme necessidade.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Apps internos</p>
              <p className="font-semibold text-slate-50">Fluxos operacionais</p>
              <p className="mt-1 text-slate-300">Timesheets, requisições, controlo de tarefas e painéis de acompanhamento.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Dashboards & integrações</p>
              <p className="font-semibold text-slate-50">Dados consolidados</p>
              <p className="mt-1 text-slate-300">Conectores e automações que reduzem trabalho manual e entregam visão única.</p>
            </div>
          </div>
        </div>

        {/* MINI-APPS & AUTOMAÇÃO */}
        <div id="mini-apps" className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Mini-apps & automação — exemplos práticos</h2>
          <p className="text-sm text-slate-200 max-w-3xl">
            Soluções entregues rapidamente para problemas concretos, integráveis ao sistema principal.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Agendamento de serviços</p>
              <p className="text-slate-300 mt-1">Calendário, reservas, notificações e bloqueios de disponibilidade.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Controle de tarefas</p>
              <p className="text-slate-300 mt-1">Quadros, checklists, prioridades e relatórios de execução.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Loja online / Catálogo</p>
              <p className="text-slate-300 mt-1">Catálogo, carrinho simples e integrações de pagamento.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Landing pages</p>
              <p className="text-slate-300 mt-1">Páginas de conversão com formulários e integração com o CRM/lead flow.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Templates por vertical</p>
              <p className="text-slate-300 mt-1">Ex.: salão de beleza, pizzaria, oficinas — prontas para adaptar.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">MVP SaaS</p>
              <p className="text-slate-300 mt-1">Produto mínimo viável com subscrição e painel admin.</p>
            </div>
          </div>

          <p className="mt-3 text-sm text-slate-300 max-w-3xl">
            Cada mini-app pode ser entregue isoladamente ou integrado ao sistema central. O objetivo: tirar a dor de hoje com caminho claro para escalar.
          </p>
        </div>

        {/* CASOS PRÁTICOS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Casos práticos</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">CONFIANCE</p>
              <h3 className="mt-2 font-semibold text-slate-50">Plataforma para construção</h3>
              <p className="mt-2 text-slate-300">
                Módulos para ponto, colaboradores, fornecedores, obras e finanças. Entregas iterativas com foco operacional.
              </p>
              <div className="mt-4">
                <a href="/cases#confiance" className="text-xs font-semibold text-accent-300 hover:underline">Ver case →</a>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Ekklyn</p>
              <h3 className="mt-2 font-semibold text-slate-50">Fábrica de apps</h3>
              <p className="mt-2 text-slate-300">
                Reuso de componentes, aceleração do delivery e modelos de protótipo para clientes-piloto.
              </p>
              <div className="mt-4">
                <a href="/cases#ekklyn" className="text-xs font-semibold text-accent-300 hover:underline">Ver case →</a>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Legistor</p>
              <h3 className="mt-2 font-semibold text-slate-50">Gestão documental</h3>
              <p className="mt-2 text-slate-300">
                Workflows documentais, importação de catálogos e telas administrativas para processos.
              </p>
              <div className="mt-4">
                <a href="/cases#legistor" className="text-xs font-semibold text-accent-300 hover:underline">Ver case →</a>
              </div>
            </article>
          </div>
        </div>

        {/* COMO TRABALHAMOS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Fluxo de trabalho</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Fase 1</p>
              <p className="mt-2 font-semibold text-slate-50">Descoberta</p>
              <p className="mt-1 text-slate-300">Mapeamos fluxo, dados e prioridades reais.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Fase 2</p>
              <p className="mt-2 font-semibold text-slate-50">Protótipo</p>
              <p className="mt-1 text-slate-300">Protótipo funcional validado com utilizadores-chave.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Fase 3</p>
              <p className="mt-2 font-semibold text-slate-50">Construção</p>
              <p className="mt-1 text-slate-300">Sprints curtos, entregas incrementais e testes com utilizadores reais.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Fase 4</p>
              <p className="mt-2 font-semibold text-slate-50">Evolução</p>
              <p className="mt-1 text-slate-300">Ajustes pós-uso, módulos adicionais e roadmap de valor.</p>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Quer discutir uma solução para a tua empresa?</h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Trabalhamos com objetivos claros: resolver uma dor real, entregar valor e garantir caminho para escalar.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Falar sobre uma solução
          </a>
        </div>
      </section>
    </main>
  );
}