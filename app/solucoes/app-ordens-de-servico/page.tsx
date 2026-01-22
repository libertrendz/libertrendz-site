export default function AppOrdensDeServicoPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            Apps customizados
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            App de ordens de serviço para equipas em campo
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-200">
            Se a tua operação vive de WhatsApp, fotos soltas e “depois eu lanço”, você já sabe o final:
            retrabalho, discussão com cliente e margem a desaparecer. Um app de OS organiza o trabalho no ponto
            onde ele acontece.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/apps"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Ver Apps customizados
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
            Sinais de que você precisa de ordens de serviço organizadas
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Fotos e evidências ficam perdidas",
              "Cliente pede histórico e ninguém acha",
              "Equipa em campo faz diferente cada vez",
              "Custos e horas não batem no final",
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

        {/* O QUE O APP ENTREGA */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            O que um app de OS resolve na prática
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Execução
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Checklists e evidências
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Foto, assinatura, observações e padrão de qualidade por tipo de serviço.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Controlo
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Status e histórico
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Aberto, em execução, concluído, pendente. Sem adivinhação.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Gestão
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Tempo e custo mais visíveis
              </p>
              <p className="mt-2 text-sm text-slate-300">
                O básico para não perder dinheiro por falta de registo.
              </p>
            </div>
          </div>
        </div>

        {/* COMO TRABALHAMOS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Como entregamos sem virar projeto infinito
          </h2>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              { t: "Semana 1", d: "Mapeamos o fluxo real e definimos o mínimo que precisa existir." },
              { t: "Semana 2", d: "Protótipo funcional com telas principais e fluxo de ponta a ponta." },
              { t: "Semana 3", d: "Ajustes por uso real, evidências e rotinas com a equipa." },
              { t: "Semana 4", d: "Entrega do piloto e plano de evolução por prioridade." },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {x.t}
                </p>
                <p className="mt-2 font-semibold text-slate-50">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/35 p-6">
            <p className="text-sm text-slate-200">
              Se você quer “um app”, você está a comprar rotina. O app só existe para reduzir ruído e erro.
            </p>
            <a
              href="/cases"
              className="mt-3 inline-block text-sm font-semibold text-accent-300 hover:text-accent-200"
            >
              Ver casos →
            </a>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer organizar ordens de serviço sem fricção?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Diz como a tua equipa regista hoje e eu devolvo o caminho mais direto para pôr ordem.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Falar do meu cenário
          </a>
        </div>
      </section>
    </main>
  );
}
