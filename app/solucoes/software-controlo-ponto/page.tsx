export default function SoftwarecontroloPontoPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Equipa e campo sob controlo
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Software de controlo de ponto
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-200">
            Ponto mal feito vira custo invisível e conflito. Um controlo de ponto decente dá rastreio,
            auditoria e rotina simples para escritório e equipa em campo.
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
            Sinais de que o ponto está a virar problema
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Horas fechadas “no olho” no fim do mês",
              "Discussões sobre atrasos e faltas",
              "Equipa em campo sem rastreio confiável",
              "Sem auditoria e sem histórico",
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

        {/* O QUE UM BOM PONTO PRECISA */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            O que um controlo de ponto sério entrega
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Registo simples
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Entrar e sair sem fricção
              </p>
              <p className="mt-2 text-sm text-slate-300">
                O ponto tem de ser rápido. Se é chato, vira “jeitinho”.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Auditoria
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Histórico e rastreio de alterações
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Ajustes ficam registados. Acaba a discussão infinita.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Campo
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Rotina para equipas distribuídas
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Quando há deslocação, o ponto tem de funcionar na realidade, não no PowerPoint.
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
                Track
              </p>
              <p className="text-sm text-slate-300">
                Registo de ponto, auditoria e suporte à operação em campo.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50 mb-2">
                People
              </p>
              <p className="text-sm text-slate-300">
                Colaboradores, vínculos e estrutura mínima para gerir a equipa sem ruído.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/35 p-6">
            <p className="text-sm text-slate-200">
              Ponto não é “controlo”. É previsibilidade, custo certo e menos conflito.
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
            Quer parar de fechar horas no improviso?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Diz como registam hoje e eu aponto o caminho mais direto para organizar.
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
