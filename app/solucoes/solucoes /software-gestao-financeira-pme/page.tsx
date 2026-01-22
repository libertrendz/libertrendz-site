export default function SoftwareGestaoFinanceiraPmePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Previsibilidade sem drama
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Software de gestão financeira para PMEs
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-200">
            Sem controlo financeiro, a empresa parece crescer mas sangra por baixo. O objetivo aqui é simples:
            ver o dinheiro, controlar rotinas e decidir com base em números que fazem sentido.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/moduz"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              Ver no Moduz+
            </a>
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Falar do meu cenário
            </a>
          </div>
        </div>

        {/* SINAIS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Sinais de finanças fora de controlo
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Saldo existe, mas ninguém confia nele",
              "Contas e despesas espalhadas",
              "Fecho mensal lento e impreciso",
              "Decisões com base em “achismo”",
            ].map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200"
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* O QUE UM BOM FINANCEIRO ENTREGA */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            O que muda quando o financeiro vira sistema
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Rotina
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Lançamentos e categorias sem bagunça
              </p>
              <p className="mt-2 text-sm text-slate-300">
                O básico bem feito ganha do “relatório bonito” que ninguém usa.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Previsão
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Fluxo de caixa e compromissos visíveis
              </p>
              <p className="mt-2 text-sm text-slate-300">
                O risco real aparece antes de virar crise.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Decisão
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Relatórios simples e úteis
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Menos opinião. Mais evidência.
              </p>
            </div>
          </div>
        </div>

        {/* MODUZ+ */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Como o Moduz+ resolve isto
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50 mb-2">
                Finance
              </p>
              <p className="text-sm text-slate-300">
                Lançamentos, contas e relatórios práticos para tirar o financeiro do improviso.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50 mb-2">
                Core
              </p>
              <p className="text-sm text-slate-300">
                Estrutura base, utilizadores e permissões para governança sem travar a operação.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/35 p-6">
            <p className="text-sm text-slate-200">
              Financeiro não é “departamento”. É o painel de instrumentos da empresa.
            </p>
            <a
              href="/cases"
              className="mt-3 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              Ver casos →
            </a>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer previsibilidade em vez de susto?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Diz como controlam hoje e eu devolvo o caminho mais direto para organizar.
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
