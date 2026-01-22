export default function LandingPageGerarLeadsPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            Sites & Landing Pages
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Landing page para gerar leads
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-200">
            Tráfego sem conversão é vaidade cara. Uma landing page decente faz três coisas:
            explica a oferta em segundos, prova que você entrega e pede ação sem fricção.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/sites"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Ver Sites & Landing Pages
            </a>
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Falar do meu cenário
            </a>
          </div>
        </div>

        {/* QUANDO FAZ SENTIDO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Quando uma landing page é a decisão certa
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Você tem tráfego mas não tem leads",
              "Oferta confusa e mensagem fraca",
              "Campanhas precisam de página por objetivo",
              "Você quer medir e otimizar conversão",
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

        {/* O QUE ENTREGAMOS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            O que uma landing page boa entrega
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Mensagem
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Clareza em 15 segundos
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Para quem é, qual promessa, qual prova e qual próximo passo.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Conversão
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                CTA sem fricção
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Form simples, WhatsApp opcional, e foco em uma ação.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Medição
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Rastreio e melhoria
              </p>
              <p className="mt-2 text-sm text-slate-300">
                UTM, eventos e métricas para otimizar campanha com base em dados.
              </p>
            </div>
          </div>
        </div>

        {/* ESTRUTURA EM CARDS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Estrutura enxuta que converte
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { t: "Headline e subheadline", d: "Promessa clara e específica, sem palavras vazias." },
              { t: "Prova e credibilidade", d: "Cases, números, depoimentos ou exemplos concretos." },
              { t: "Oferta e escopo", d: "O que está incluído e como funciona o processo." },
              { t: "CTA e contacto", d: "Form simples e opção de contacto rápido." },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <p className="text-sm font-semibold text-slate-50">{x.t}</p>
                <p className="mt-2 text-sm text-slate-300">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/35 p-6">
            <p className="text-sm text-slate-200">
              Landing page não é “página bonita”. É máquina simples de conversão.
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
            Quer uma página que gere lead de verdade?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Diz qual oferta você quer vender e eu devolvo a estrutura certa para converter.
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
