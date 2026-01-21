///app/solucoes/gestao-obras/

export default function GestaoObrasPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">

        {/* HERO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Operação e execução
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Software de gestão de obras
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-200">
            Planeamento, execução, equipa e custos com visibilidade real. Para parar de gerir
            obra por WhatsApp, memória e “vamos vendo”.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/moduz"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              Ver como funciona no Moduz+
            </a>
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Falar do meu cenário
            </a>
          </div>
        </div>

        {/* PROBLEMAS — CARDS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            O que normalmente está a matar a margem
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              Falta de plano diário e o dia vira reação
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              Horas e custos “aparecem” tarde demais
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              O dono vira o sistema, e tudo passa por ele
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              Informação dispersa, sem rasto e sem histórico
            </div>
          </div>
        </div>

        {/* SOLUÇÃO — BLOCO MODULAR */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Como fica a gestão quando existe sistema
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Flow
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Obra com tarefas e prioridades claras
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Planeamento simples, execução acompanhada e menos improviso.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Track
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Registo de equipa em campo
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Ponto e auditoria para reduzir erro e discussão.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Assets + Finance
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Custos, manutenção e previsibilidade
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Custos mais visíveis, menos surpresa e decisão com base em dados.
              </p>
            </div>
          </div>
        </div>

        {/* O QUE A PESSOA GANHA — compacto */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            O que melhora na prática
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50 mb-2">
                Direção e execução
              </p>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>• Prioridades claras por obra</li>
                <li>• Menos urgência fabricada</li>
                <li>• Menos dependência do dono</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50 mb-2">
                Controlo de margem
              </p>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>• Custos mais cedo, não no fim</li>
                <li>• Horas com rasto e auditoria</li>
                <li>• Menos desvios escondidos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* QUANDO FAZ SENTIDO */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <p className="text-sm font-semibold text-slate-50 mb-2">
              Faz sentido se:
            </p>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>• Tens várias obras ou equipas simultâneas</li>
              <li>• Queres previsibilidade e menos “apagar incêndio”</li>
              <li>• Precisas de visibilidade sem burocracia</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <p className="text-sm font-semibold text-slate-50 mb-2">
              Não faz sentido se:
            </p>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>• Só tens uma obra pequena ocasional</li>
              <li>• Não existe rotina nem equipa fixa</li>
            </ul>
          </div>
        </div>

        {/* PROVA LEVE */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/35 p-6">
          <p className="text-sm text-slate-200">
            O foco é gerir obra como operação: menos ruído, mais controlo e execução previsível.
          </p>
          <a
            href="/cases"
            className="mt-3 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200"
          >
            Ver casos reais →
          </a>
        </div>

        {/* CTA FINAL — ÚNICO */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer gestão de obra com previsibilidade?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Diz-me o teu cenário e eu aponto a ativação mais lógica no Moduz+.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
          >
            Falar do meu cenário
          </a>
        </div>

      </section>
    </main>
  );
}
