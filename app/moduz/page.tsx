// app/moduz/page.tsx
export default function ModuzPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        {/* HERO */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Moduz+
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Moduz+ — ERP modular e leve para PMEs que querem ordem, não
            complexidade.
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Moduz+ junta módulos prontos para operações do dia a dia — ponto,
            obra, financeiro e compras — com implantação rápida e foco em
            resultados tangíveis. Paga só o que precisa e cresce sem surpresas.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              Solicitar demo
            </a>
            <a
              href="/apps"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Voltar a Apps & Websites
            </a>
          </div>
        </div>

        {/* RAZÕES PARA O MODUZ */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Por que escolher Moduz+</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Rápido para usar</p>
              <p className="text-slate-300">Módulos prontos e parametrizáveis que habilitam valor em semanas.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Modular</p>
              <p className="text-slate-300">Ativas apenas as funcionalidades que a tua empresa precisa — sem custos escondidos.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Previsível</p>
              <p className="text-slate-300">Escopo e entregas definidas com critérios de aceite claros — sem surpresas no custo ou no tempo.</p>
            </div>
          </div>
        </div>

        {/* O QUE COMPÕE O MODUZ+ */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Módulos principais</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {/* PONTO */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Ponto</p>
              <p className="mt-2 font-semibold text-slate-50">Registo móvel e desktop, com auditoria.</p>
              <p className="mt-1 text-slate-300">Regista presença com foto e geolocalização; exportes rápidos e regras de jornada configuráveis.</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                <li>• Foto + geolocalização para validação no terreno.</li>
                <li>• Regras de jornada e sinopses por período (export CSV).</li>
                <li>• Auditoria e histórico para conformidade e controlo.</li>
              </ul>
            </div>

            {/* OBRAS & PROJETOS */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Obras & Projetos</p>
              <p className="mt-2 font-semibold text-slate-50">Gestão de fases, tarefas e custos por obra.</p>
              <p className="mt-1 text-slate-300">Planeamento simples para equipas no terreno com mapas de atividades e ligação a custos.</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                <li>• Fases e checklists de obra para controlo operacional.</li>
                <li>• Associação de recursos e materiais por tarefa.</li>
                <li>• Visão de custo por obra para decisão financeira rápida.</li>
              </ul>
            </div>

            {/* FINANCEIRO */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Financeiro</p>
              <p className="mt-2 font-semibold text-slate-50">Lançamentos, contas e faturas básicas integradas com docs.</p>
              <p className="mt-1 text-slate-300">Controlo financeiro essencial com exportes e integração de comprovativos.</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                <li>• Registo rápido de faturas e recibos com anexos.</li>
                <li>• Centros de custo básicos e relatórios exportáveis.</li>
                <li>• Integração com evidências em Docs (anexos PDF/IMG).</li>
              </ul>
            </div>

            {/* FORNECEDORES & STOCK */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Fornecedores & Stock</p>
              <p className="mt-2 font-semibold text-slate-50">Catálogo, compras e movimentos de stock básicos.</p>
              <p className="mt-1 text-slate-300">Importação via Excel e upsert idempotente para listas de materiais — operação prática e sem ruído.</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                <li>• Importação e deduplicação de catálogo via Excel.</li>
                <li>• Movimentos simples de entrada/saída com referência de obra.</li>
                <li>• Pesquisa rápida de SKUs e histórico de consumo.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* QUANDO FAZ SENTIDO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Quando o Moduz+ faz sentido</h2>
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Crescimento além do Excel</p>
              <p className="text-slate-300">Processos espalhados por ficheiros, versões e erros manuais que custam tempo e dinheiro.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Necessidade de visão consolidada</p>
              <p className="text-slate-300">Decisões exigem dados confiáveis: financeiro, obra e equipa num só lugar.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Projetos com equipas no terreno</p>
              <p className="text-slate-300">Registo fácil de ponto e tarefas — sem papel e sem demora.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Quer evitar monstro de ERP</p>
              <p className="text-slate-300">Modularidade evita custos desnecessários e longos projetos de customização.</p>
            </div>
          </div>
        </div>

        {/* PROCESSO DE TRABALHO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Como implementamos</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Fase 1</p>
              <p className="mt-2 font-semibold text-slate-50">Descoberta</p>
              <p className="mt-1 text-slate-300">Mapeamos operação, dores e dados existentes.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Fase 2</p>
              <p className="mt-2 font-semibold text-slate-50">Priorizar</p>
              <p className="mt-1 text-slate-300">Selecionamos módulos MVP para valor rápido.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Fase 3</p>
              <p className="mt-2 font-semibold text-slate-50">Deploy & treino</p>
              <p className="mt-1 text-slate-300">Instalamos, treinamos e validamos com utilizadores reais.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Fase 4</p>
              <p className="mt-2 font-semibold text-slate-50">Evolução</p>
              <p className="mt-1 text-slate-300">Ajustes e novos módulos à medida que o negócio prova valor.</p>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Quer ver o Moduz+ em ação?</h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Agendamos uma demo prática com os teus dados e mostramos como o Moduz+
            resolve o problema sem criar mais trabalho para a equipa.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              Agendar demo
            </a>
            <a
              href="/contato#brief"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Enviar briefing
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}