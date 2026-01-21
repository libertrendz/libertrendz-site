export default function ControloPontoObrasPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">

        {/* HERO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Operação em campo
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Software de controlo de ponto em obras
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-200">
            Registo em campo, auditoria clara e impacto direto no custo real da obra.
            Sem planilhas, sem ruído, sem discussão no fim do mês.
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
            Problemas comuns em obras e equipas externas
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              Equipa marca ponto fora do local ou horário real
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              Divergências de horas no fecho do mês
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              Falta de evidência para auditoria e clientes
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              Gestão depende de WhatsApp e confiança cega
            </div>
          </div>
        </div>

        {/* SOLUÇÃO — LIGADA AO MODUZ */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Como resolvemos isto na prática
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Track
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Ponto mobile com controlo real
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Registo em campo, horário validado e histórico confiável.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                People
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Pessoas ligadas à obra certa
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Quem trabalhou, onde trabalhou e com que vínculo.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Finance
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Impacto direto no custo da obra
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Horas viram custo real, sem estimativa no escuro.
              </p>
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
              <li>• Tens equipas em campo ou obras simultâneas</li>
              <li>• Já tiveste conflitos por horas trabalhadas</li>
              <li>• Precisas de controlo sem travar a operação</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <p className="text-sm font-semibold text-slate-50 mb-2">
              Não faz sentido se:
            </p>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>• A operação é muito pequena e informal</li>
              <li>• Não existe rotina nem equipa fixa</li>
            </ul>
          </div>
        </div>

        {/* PROVA LEVE */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/35 p-6">
          <p className="text-sm text-slate-200">
            Usado em operações reais de obras, serviços e equipas distribuídas.
            O foco é previsibilidade operacional, não software pelo software.
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
            Quer controlo real do ponto em obra?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Falamos do teu cenário e mostramos como o Moduz+ se adapta à tua operação.
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
