export default function AppDashboardKpisOperacionaisPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            Apps customizados
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Dashboard operacional com KPIs simples
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-200">
            Se a sua “gestão” depende de pedir print no grupo, você não tem visibilidade.
            Um dashboard bom não é BI sofisticado. É decisão mais rápida com menos ruído.
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

        {/* O QUE VAI PARA O DASH */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            O que costuma entrar
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Trabalho em curso e pendências",
              "Prazos, atrasos e gargalos",
              "Custos e desvios básicos",
              "Produtividade por equipa",
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

        {/* COMO FAZEMOS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Como construímos sem virar “projeto de dados”
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Fonte
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Primeiro, onde está o dado
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Excel, ERP, WhatsApp, sistemas soltos. A gente consolida o mínimo.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Métrica
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Poucas métricas, bem escolhidas
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Melhor 6 métricas confiáveis do que 30 que ninguém usa.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Rotina
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Uso real, não slide
              </p>
              <p className="mt-2 text-sm text-slate-300">
                O dashboard tem que encaixar no dia a dia e puxar decisão.
              </p>
            </div>
          </div>
        </div>

        {/* MODELOS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Modelos comuns por tipo de negócio
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { t: "Serviços e campo", d: "OS abertas, concluídas, atrasos, retrabalho, evidências." },
              { t: "Obras e projetos", d: "Fases, custos, horas, desvios e entregas." },
              { t: "Comercial", d: "Leads, propostas, taxa de conversão, motivo de perda." },
              { t: "Operação interna", d: "Backlog, SLA, aprovações e gargalos." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="text-sm font-semibold text-slate-50">{x.t}</p>
                <p className="mt-2 text-sm text-slate-300">{x.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer ver a tua operação num ecrã só?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Diz que decisões você toma “no escuro” hoje e quais números faltam.
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
