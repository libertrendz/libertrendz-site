export default function AppsPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        {/* HERO */}
        <div className="relative max-w-3xl space-y-4">
          {/* overlay laranja suave — personalidade sem exagero */}
          <div className="pointer-events-none absolute -inset-x-6 -top-8 -bottom-8 -z-10 mx-auto w-[calc(100%+48px)] rounded-2xl bg-gradient-to-r from-accent-600/6 via-accent-500/4 to-transparent blur-[12px]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Apps & Websites
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Apps leves e websites que fazem o trabalho — não ocupam o tempo.
            <span className="block mt-2 text-accent-400 text-2xl">
              Agendamento, operações, vendas e automação — prontos para usar.
            </span>
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Soluções sob medida para PMEs: aplicações focadas em fluxo real de trabalho e websites/landing pages desenhados para conversão e operação. Integram com processos humanos — e se quiseres, com Moduz+.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Pedir proposta
            </a>
            <a
              href="/moduz"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Ver integração com Moduz+
            </a>
          </div>
        </div>

        {/* RESUMO EM CARDS */}
        <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Para quem</p>
            <p className="mt-1 text-sm text-slate-200">PMEs e equipas que precisam resolver fluxo operacional sem processos manuais.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Tipo de solução</p>
            <p className="mt-1 text-sm text-slate-200">Apps web, painéis, integrações e websites com foco em resultado.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Abordagem</p>
            <p className="mt-1 text-sm text-slate-200">Descoberta rápida → protótipo funcional → iteração com utilizadores.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Exemplos</p>
            <p className="mt-1 text-sm text-slate-200">Agendamento, ordens de serviço, lojas, landing pages e apps operacionais.</p>
          </div>
        </div>

        {/* QUANDO FAZ SENTIDO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Quando faz sentido uma app leve</h2>
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Planilhas a dez veículos</p>
              <p className="text-slate-300">Se os dados vivem em vários ficheiros e versões, uma app única reduz erros e tempo perdido.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Processos repetitivos</p>
              <p className="text-slate-300">Automatizar tarefas rotineiras (agendamento, notificações, faturação) devolve tempo ao negócio.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Conversão fraca</p>
              <p className="text-slate-300">Landing pages e sites com foco em conversão e UX melhoram leads qualificados e reduzem CAC.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Crescimento sem controle</p>
              <p className="text-slate-300">Quando o negócio cresce, processos simples precisam de estrutura — é aí que entram apps modulares.</p>
            </div>
          </div>
        </div>

        {/* TIPOS DE SOLUÇÕES QUE ENTREGAMOS (união de "tipos" + "exemplos práticos") */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Tipos de soluções que entregamos</h2>
          <p className="text-sm text-slate-200 max-w-3xl">Abordagens práticas e entregáveis: cada solução é desenhada para resolver um problema operacional ou comercial específico — sem complexidade desnecessária.</p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Apps Operacionais</p>
              <p className="font-semibold text-slate-50">Agendamento & Ordens de Serviço</p>
              <p className="mt-1 text-slate-300">Reservas, atribuição de tarefas, checklists e histórico de atendimentos para equipas em campo.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Gestão Comercial</p>
              <p className="font-semibold text-slate-50">Catálogo & Loja</p>
              <p className="mt-1 text-slate-300">Catálogo de produtos/serviços, checkout e integrações de pagamento com fluxo simples de vendas.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Sites & Landing Pages</p>
              <p className="font-semibold text-slate-50">Conversão & Captura</p>
              <p className="mt-1 text-slate-300">Páginas otimizadas para captar e qualificar leads, com formulários, tracking e integração para follow-up.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Operações Internas</p>
              <p className="font-semibold text-slate-50">Controle de Tarefas & Timesheets</p>
              <p className="mt-1 text-slate-300">Quadros, prazos, horas e notificações para manter a equipa alinhada e produtiva.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Processos Comerciais</p>
              <p className="font-semibold text-slate-50">Propostas & Orçamentos</p>
              <p className="mt-1 text-slate-300">Geração de propostas, gestão de versões e export para documentos — integrado ao fluxo comercial.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Setores & Casos</p>
              <p className="font-semibold text-slate-50">Exemplos por sector</p>
              <p className="mt-1 text-slate-300">Soluções aplicadas a salão de beleza, pizzaria, serviços locais e SaaS com onboarding simplificado.</p>
            </div>
          </div>
        </div>

        {/* PROJETOS & REFERÊNCIAS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Projetos & referências</h2>
          <p className="text-sm text-slate-200 max-w-3xl">Alguns trabalhos e produtos que inspiram as nossas soluções.</p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs uppercase tracking-[0.18em] text-accent-300">CONFIANCE</p>
              <p className="mt-2 font-semibold text-slate-50">App modular para gestão de obras e remodelações</p>
              <p className="mt-1 text-slate-300">Integra ponto, controlo de ativos, orçamentos e financeiro para dar visibilidade operacional e reduzir retrabalho no terreno.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs uppercase tracking-[0.18em] text-accent-300">LEGISTOR</p>
              <p className="mt-2 font-semibold text-slate-50">App para gestão de escritórios de advocacia</p>
              <p className="mt-1 text-slate-300">Acompanhe processos, prazos e documentos; centralize receitas e pagamentos e mantenha histórico de interações com tribunais e órgãos.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs uppercase tracking-[0.18em] text-accent-300">EKKLYN</p>
              <p className="mt-2 font-semibold text-slate-50">Fábrica de apps & acelerador</p>
              <p className="mt-1 text-slate-300">Plataforma piloto que acelera a criação de apps modulares reutilizáveis e reduz o time-to-market para PMEs.</p>
            </div>
          </div>
        </div>

        {/* COMO TRABALHAMOS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Como trabalhamos</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Fase 1</p>
              <p className="mt-2 font-semibold text-slate-50">Descoberta</p>
              <p className="mt-1 text-slate-300">Entendemos os processos e o objetivo do negócio.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Fase 2</p>
              <p className="mt-2 font-semibold text-slate-50">Prototipo funcional</p>
              <p className="mt-1 text-slate-300">Construímos um MVP que já resolve fluxo crítico.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Fase 3</p>
              <p className="mt-2 font-semibold text-slate-50">Teste com utilizadores</p>
              <p className="mt-1 text-slate-300">Validações rápidas para ajustar antes de escalar.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Fase 4</p>
              <p className="mt-2 font-semibold text-slate-50">Entrega & evolução</p>
              <p className="mt-1 text-slate-300">Acompanhamento e evolução por uso real.</p>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Quer um app que realmente funcione no dia a dia?</h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">Agende uma conversa — mostramos exemplos práticos e uma proposta realista de tempo e investimento.</p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Pedir proposta / Agendar
          </a>
        </div>
      </section>
    </main>
  );
}