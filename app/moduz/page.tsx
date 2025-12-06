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
            Moduz+ é um conjunto de módulos práticos (Ponto, Obras, Financeiro,
            Fornecedores, Timesheets) desenhados para funcionar desde o primeiro
            dia — sem processos intermináveis nem customizações que nunca
            terminam.
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
              <p className="text-slate-300">Módulos prioritários prontos para implantação em semanas, não meses.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Modular</p>
              <p className="text-slate-300">Paga e ativa apenas o que precisa: ponto, obras, financeiro, CRM leve.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Previsível</p>
              <p className="text-slate-300">Escopo definido com entregas e critérios de aceite claros — sem surpresas.</p>
            </div>
          </div>
        </div>

        {/* O QUE COMPÕE O MODUZ+ */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Módulos principais</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Ponto</p>
              <p className="mt-2 font-semibold text-slate-50">Registo móvel e desktop</p>
              <p className="mt-1 text-slate-300">Foto + geolocalização + auditoria e exportes CSV.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Obras & Projetos</p>
              <p className="mt-2 font-semibold text-slate-50">Fases, tarefas, custo por obra</p>
              <p className="mt-1 text-slate-300">Planeamento simples para equipas de terreno e gestão financeira por obra.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Financeiro</p>
              <p className="mt-2 font-semibold text-slate-50">Faturas, recibos e conciliação</p>
              <p className="mt-1 text-slate-300">Registos simples com exportes e integrações básicas.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Fornecedores & Stocks</p>
              <p className="mt-2 font-semibold text-slate-50">Catálogo e compras</p>
              <p className="mt-1 text-slate-300">Importação via Excel e upsert idempotente para listas de materiais.</p>
            </div>
          </div>
        </div>

        {/* QUANDO FAZ SENTIDO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Quando o Moduz+ faz sentido</h2>
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Crescimento além do Excel</p>
              <p className="text-slate-300">Se a operação vive em ficheiros e o erro custa tempo e dinheiro.</p>
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