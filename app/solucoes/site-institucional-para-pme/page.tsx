export default function SiteInstitucionalParaPmePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            Sites & Landing Pages
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Site institucional para PME
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-200">
            Site institucional não é “cartão de visita digital”. É clareza de oferta, prova e um caminho de contato
            sem fricção. Se o seu site não gera conversa, ele só ocupa domínio.
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

        {/* O QUE PRECISA EXISTIR */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            O que um site institucional precisa ter
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Oferta clara e específica",
              "Prova e credibilidade",
              "CTA e contato rápido",
              "SEO básico bem feito",
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

        {/* ESTRUTURA */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Estrutura enxuta e objetiva
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { t: "Home", d: "Mensagem direta, prova, benefícios, CTA." },
              { t: "Serviços", d: "Oferta clara, exemplos, como funciona." },
              { t: "Cases", d: "Resultados e prova social, sem exagero." },
              { t: "Contato", d: "Form simples e opções rápidas." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="text-sm font-semibold text-slate-50">{x.t}</p>
                <p className="mt-2 text-sm text-slate-300">{x.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RESULTADO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/35 p-6 space-y-2">
          <p className="text-sm text-slate-200">
            O objetivo não é “ficar bonito”. É aumentar confiança e facilitar o próximo passo.
          </p>
          <a
            href="/cases"
            className="text-sm font-semibold text-accent-300 hover:text-accent-200"
          >
            Ver casos →
          </a>
        </div>

        {/* CTA */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer um site que ajude a vender?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Diz o que você vende e para quem. Eu devolvo a estrutura certa para o seu caso.
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
