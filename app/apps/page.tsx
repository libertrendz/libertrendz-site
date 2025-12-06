import React from "react";

export default function AppsPage(): JSX.Element {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        {/* HERO */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Apps & Tiny ERPs
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Sistemas sob medida para quando o Excel já não chega — sem virar refém de um ERP gigante.
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Desenvolvemos apps e ERPs leves, modulares e orientados ao resultado: controles que funcionam no dia a dia, com
            implantação faseada e custo previsível.
          </p>
        </div>

        {/* RESUMO EM CARDS */}
        <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Para quem</p>
            <p className="mt-1 text-sm text-slate-200">PMEs e equipas que cresceram além do Excel e de ferramentas soltas.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Tipo de solução</p>
            <p className="mt-1 text-sm text-slate-200">Apps web, painéis e ERPs leves, focados em fluxo real de trabalho.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Abordagem</p>
            <p className="mt-1 text-sm text-slate-200">Descoberta, desenho de fluxo, protótipo funcional e iteração.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Exemplo</p>
            <p className="mt-1 text-sm text-slate-200">CONFIANCE, Ekklyn, Legistor — base modular reutilizável.</p>
          </div>
        </div>

        {/* QUANDO FAZ SENTIDO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Quando faz sentido falar de um app ou ERP leve</h2>
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Planilhas demais, controlo de menos</p>
              <p className="text-slate-300">A operação vive em vários ficheiros e versões. Erros começam a custar tempo e dinheiro.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Softwares genéricos que atrapalham</p>
              <p className="text-slate-300">Soluções “para tudo” exigem adaptação excessiva da equipa e entregam pouco valor real.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Crescimento sem estrutura</p>
              <p className="text-slate-300">Clientes e operação crescem, mas o controlo de obras, contratos, faturas e ponto não acompanha.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Visão consolidada necessária</p>
              <p className="text-slate-300">Tomar decisões exige ver financeiro, operação e equipa num só lugar sem “caça” manual de dados.</p>
            </div>
          </div>
        </div>

        {/* TIPOS DE SOLUÇÃO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Tipos de solução que desenvolvemos</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">ERP leve</p>
              <p className="font-semibold text-slate-50">ERPs modulares para PMEs</p>
              <p className="mt-1 text-slate-300">Obras, contratos, faturação, ponto e equipas sem a complexidade de um monstro ERP.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Apps internos</p>
              <p className="font-semibold text-slate-50">Aplicações de fluxo</p>
              <p className="mt-1 text-slate-300">Registo de ponto, timesheets, requisições e processos operacionais com UX prática.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Painéis & integrações</p>
              <p className="font-semibold text-slate-50">Dashboards e automações</p>
              <p className="mt-1 text-slate-300">Consolidação de dados e pequenas automações para acabar com o trabalho manual.</p>
            </div>
          </div>
        </div>

        {/* MINI-APPS & AUTOMAÇÃO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Mini-apps & automação — soluções rápidas que funcionam</h2>
          <p className="text-sm text-slate-200 max-w-3xl">
            Além de ERPs modulares, criamos mini-apps que resolvem pontos críticos imediatos. Implantação rápida, custo baixo e integração com teu sistema.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Agendamento de serviços</p>
              <p className="text-slate-300 mt-1">Calendário, reservas, notificações e gestão de disponibilidade.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Controle de tarefas</p>
              <p className="text-slate-300 mt-1">Quadros simples, prioridades, checklists e relatórios de conclusão.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Loja online / Catálogo</p>
              <p className="text-slate-300 mt-1">Catálogo de produtos/serviços, carrinho simples e integrações de pagamento.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Landing pages & campanhas</p>
              <p className="text-slate-300 mt-1">Landing de conversão, formulários e rastreamento de leads para vendas.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Serviços por vertical</p>
              <p className="text-slate-300 mt-1">Ex.: salão de beleza, pizzaria, oficinas — templates prontos adaptáveis.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">SaaS leve</p>
              <p className="text-slate-300 mt-1">MVPs SaaS com cobrança por assinatura e painel administrativo.</p>
            </div>
          </div>

          <p className="mt-3 text-sm text-slate-300 max-w-3xl">
            Cada mini-app pode ser entregue isoladamente ou integrado ao ERP principal. O objetivo: resolver o problema operacional hoje, e escalar amanhã.
          </p>
        </div>

        {/* CASOS PRÁTICOS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Casos práticos</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* CONFIANCE */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">CONFIANCE</p>
              <h3 className="mt-2 font-semibold text-slate-50">ERP modular para construção</h3>
              <p className="mt-2 text-slate-300">
                Plataforma orientada a obras: ponto, colaboradores, fornecedores, obras e financeiro. Projeto piloto com foco em entrega incremental.
              </p>
              <div className="mt-4">
                <a href="/cases#confiance" className="text-xs font-semibold text-accent-300 hover:underline">Ver case →</a>
              </div>
            </article>

            {/* EKKLYN */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Ekklyn</p>
              <h3 className="mt-2 font-semibold text-slate-50">App comercial / piloto interno</h3>
              <p className="mt-2 text-slate-300">
                Piloto de fábrica de apps: reuso de componentes, templates de fluxo e aceleração no delivery de produtos mínimos viáveis.
              </p>
              <div className="mt-4">
                <a href="/cases#ekklyn" className="text-xs font-semibold text-accent-300 hover:underline">Ver case →</a>
              </div>
            </article>

            {/* LEGISTOR */}
            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Legistor</p>
              <h3 className="mt-2 font-semibold text-slate-50">Gestão documental & workflows</h3>
              <p className="mt-2 text-slate-300">
                Sistema para gestão de processos e documentos com telas administrativas e integrações de importação de catálogos.
              </p>
              <div className="mt-4">
                <a href="/cases#legistor" className="text-xs font-semibold text-accent-300 hover:underline">Ver case →</a>
              </div>
            </article>
          </div>
        </div>

        {/* COMO TRABALHAMOS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Como fazemos (fluxo)</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Fase 1</p>
              <p className="mt-2 font-semibold text-slate-50">Descoberta</p>
              <p className="mt-1 text-slate-300">Mapeamos fluxo, dados e prioridades reais.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Fase 2</p>
              <p className="mt-2 font-semibold text-slate-50">Desenho & protótipo</p>
              <p className="mt-1 text-slate-300">Protótipo funcional validado com utilizadores-chave.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Fase 3</p>
              <p className="mt-2 font-semibold text-slate-50">Construção iterativa</p>
              <p className="mt-1 text-slate-300">Sprints curtos, entregas incrementais e testes de uso.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Fase 4</p>
              <p className="mt-2 font-semibold text-slate-50">Evolução & suporte</p>
              <p className="mt-1 text-slate-300">Ajustes pós-uso, módulos adicionais e roadmap de valor.</p>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Quer discutir um app ou ERP leve para a tua empresa?</h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Se a tua PME já passou do ponto de se apoiar só em planilhas e ferramentas soltas, podemos conversar sobre uma solução à medida, com escopo claro e foco em resultado real.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Falar sobre um app / ERP para a minha empresa
          </a>
        </div>
      </section>
    </main>
  );
}