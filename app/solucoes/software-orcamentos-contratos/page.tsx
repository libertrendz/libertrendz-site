export default function SoftwareOrcamentosContratosPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Comercial com método
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Software de orçamentos e contratos
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-200">
            Orçamento lento e contrato solto custa negócio e gera disputa depois. Um sistema decente
            reduz fricção comercial e aumenta previsibilidade no pós-venda.
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
            Sinais de comercial sem estrutura
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Orçamentos demoram e perdem timing",
              "Modelos e anexos espalhados em pastas",
              "Condições mudam e ninguém controla versão",
              "Depois vira discussão sobre “o combinado”",
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

        {/* O QUE PRECISA TER */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            O que resolve (na prática)
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Velocidade
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Orçamentos rápidos e consistentes
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Menos fricção para responder e fechar.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Versão e prova
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Histórico do que foi enviado
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Adeus “mandei a última versão, juro”.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Contrato
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Condições claras para reduzir disputa
              </p>
              <p className="mt-2 text-sm text-slate-300">
                O pós-venda melhora quando o combinado está explícito.
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
                Bizz
              </p>
              <p className="text-sm text-slate-300">
                Orçamentos, propostas e contratos num fluxo único e rastreável.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50 mb-2">
                Docs
              </p>
              <p className="text-sm text-slate-300">
                Documentos organizados por módulo e por contexto, sem caça ao ficheiro.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/35 p-6">
            <p className="text-sm text-slate-200">
              Comercial sem processo é funil furado. Processo leve e rastreável é margem.
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
            Quer responder mais rápido e fechar com menos fricção?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Diz como fazem hoje e eu devolvo o caminho mais lógico para organizar.
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
