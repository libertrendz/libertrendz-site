export default function LandingPageParaGoogleAdsPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            Sites & Landing Pages
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Landing page para Google Ads
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-200">
            Anúncio bom mandando para página genérica é desperdício.
            Google Ads pede alinhamento de intenção, mensagem e ação.
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

        {/* REGRAS DO JOGO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            O que uma landing de Ads precisa respeitar
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Uma intenção por página",
              "Mensagem alinhada com a keyword",
              "CTA evidente e simples",
              "Rastreio desde o primeiro clique",
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

        {/* COMPONENTES */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Componentes que costumam converter
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Mensagem
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Headline objetiva
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Promessa clara, contexto e resultado esperado.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Prova
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Credibilidade rápida
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Cases, números, exemplos e escopo do que você entrega.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Medição
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                UTM e eventos
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Para otimizar com base em dados, não em opinião.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer parar de pagar por clique perdido?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Diz a oferta e a campanha. Eu devolvo uma estrutura de página alinhada com intenção.
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
