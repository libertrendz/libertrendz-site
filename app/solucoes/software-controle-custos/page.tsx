export default function SoftwareControleCustosPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Margem com visibilidade
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Software de controlo de custos
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-200">
            Quando a margem some, quase nunca é “azar”. É falta de registo, rotina e visibilidade.
            Um sistema de controlo de custos corta desperdício e dá previsibilidade.
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
            Sinais clássicos de custo fora de controlo
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Custo aparece só no fim do mês",
              "Compras sem padrão e sem histórico",
              "Horas e despesas sem rastreio",
              "Discussões com cliente por “surpresas”",
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

        {/* O QUE UM BOM CONTROLO PRECISA */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            O que um controlo de custos decente faz
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Registo simples
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Custos e eventos capturados na origem
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Menos “lembrar depois”, mais realidade em tempo útil.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Padrão e rotina
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Categorias e regras mínimas
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Comparação consistente, sem cada um registrar de um jeito.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Visibilidade
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Decisão com dados, não feeling
              </p>
              <p className="mt-2 text-sm text-slate-300">
                A margem vira previsível quando o controlo vira rotina.
              </p>
            </div>
          </div>
        </div>

        {/* COMO O MODUZ+ ENTRA */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Onde o Moduz+ ajuda no controlo de custos
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50 mb-2">
                Finance e registos básicos
              </p>
              <p className="text-sm text-slate-300">
                Lançamentos organizados, visão simples e rotina de registo.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50 mb-2">
                Operação, horas e campo
              </p>
              <p className="text-sm text-slate-300">
                Quando há equipa em campo, o custo “real” aparece no registo do dia a dia.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/35 p-6">
            <p className="text-sm text-slate-200">
              Custo fora de controlo é imposto invisível. A solução é método e sistema.
            </p>
            <a
              href="/cases"
              className="mt-3 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              Ver casos →
            </a>
          </div>
        </div>

        {/* CTA FINAL ÚNICO */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer descobrir onde a margem está a vazar?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Diz como operas hoje e eu aponto o caminho mais lógico para ganhar previsibilidade.
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
