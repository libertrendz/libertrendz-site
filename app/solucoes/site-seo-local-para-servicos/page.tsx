export default function SiteSeoLocalParaServicosPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            Sites & Landing Pages
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Site com SEO local para serviços
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-200">
            Para serviço local, o jogo é simples: aparecer quando alguém procura na sua zona.
            Não é magia. É estrutura, páginas certas e consistência.
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

        {/* O QUE MUDA O JOGO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            O que faz você aparecer mais
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Páginas por serviço, com termos reais",
              "Página por cidade ou região atendida",
              "Prova, fotos e casos reais",
              "Contato rápido e rastreável",
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

        {/* MODELO DE ESTRUTURA */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Estrutura recomendada
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { t: "Serviços", d: "Uma página por serviço, com exemplos e escopo." },
              { t: "Áreas atendidas", d: "Uma página por cidade ou região, sem conteúdo genérico." },
              { t: "Cases", d: "Antes e depois, fotos, contexto e resultado." },
              { t: "Contato", d: "Form simples, WhatsApp e tracking básico." },
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
            Quer ser encontrado na sua zona?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Diz quais serviços você vende e onde atende. Eu devolvo uma estrutura enxuta para SEO local.
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
