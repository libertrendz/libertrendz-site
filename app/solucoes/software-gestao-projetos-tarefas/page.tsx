export default function SoftwareGestaoProjetosTarefasPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Execução com controlo
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Software de gestão de projetos e tarefas
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-200">
            Quando tudo é urgente, nada anda. Gestão de projetos não é “fazer quadro bonito”.
            É reduzir ruído, criar previsibilidade e garantir que o trabalho termina.
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
            Sinais de execução sem sistema
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Muitas frentes e pouca conclusão",
              "Dependências e prioridades confusas",
              "Reuniões a mais, decisão a menos",
              "Prazos estouram sem aviso",
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

        {/* O QUE FUNCIONA */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            O que funciona (e o que não)
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Priorização
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Menos coisas, mais conclusão
              </p>
              <p className="mt-2 text-sm text-slate-300">
                A empresa não precisa de mais backlog. Precisa de finalizar.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Visibilidade
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Estado real do trabalho
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Sem “tá quase”. Ou está feito, ou não está.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Métricas simples
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Lead time e capacidade
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Se não mede o fluxo, você só está a “sentir”.
              </p>
            </div>
          </div>
        </div>

        {/* MODUZ+ */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Como o Moduz+ entra aqui
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50 mb-2">
                Flow
              </p>
              <p className="text-sm text-slate-300">
                Projetos e tarefas com visão do todo, rotina e cadência sem teatro.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50 mb-2">
                Docs
              </p>
              <p className="text-sm text-slate-300">
                Documentação organizada por contexto, sem “pasta final_final_v3”.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/35 p-6">
            <p className="text-sm text-slate-200">
              Gestão de projetos não é cerimónia. É execução previsível.
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
            Quer reduzir ruído e aumentar entrega?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Diz como o trabalho entra hoje e eu devolvo o caminho mais lógico para organizar.
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
