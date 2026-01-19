// app/sites/page.tsx
export default function SitesPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO — tangerina com presença */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/35 p-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent-500/14 via-accent-400/8 to-transparent" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Sites & Landing Pages
            </p>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Sites que vendem. Landing pages que convertem.
            </h1>
            <p className="text-sm text-slate-200 max-w-2xl">
              Se o teu site está bonito mas não traz negócio, é só decoração
              cara. Aqui o foco é conversão: mensagem clara, prova, CTA e
              rastreio.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contato"
                className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
              >
                Quero um site/landing
              </a>
              <a
                href="/moduz"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Ver Moduz+
              </a>
            </div>
          </div>
        </div>

        {/* O QUE ENTREGAMOS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">O que entregamos</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Landing pages
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Campanhas com CTA e rastreio
              </p>
              <p className="mt-2 text-slate-300">
                Formulário, UTM, WhatsApp, e estrutura para medir conversão.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Sites institucionais
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Presença forte e objetiva
              </p>
              <p className="mt-2 text-slate-300">
                Clareza de oferta, prova, SEO básico e navegação limpa.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Portas para produto
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Site como entrada para apps e Moduz+
              </p>
              <p className="mt-2 text-slate-300">
                Quando o projeto cresce, o site vira o funil do ecossistema.
              </p>
            </div>
          </div>
        </div>

        {/* QUANDO FAZ SENTIDO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Quando faz sentido investir nisto
          </h2>
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">
                Tráfego existe, mas lead não
              </p>
              <p className="text-slate-300">
                O problema normalmente é mensagem, prova e CTA. Corrige-se com
                estrutura.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">
                Oferta confusa
              </p>
              <p className="text-slate-300">
                Um bom site “fala por ti” em 15 segundos. O resto é ruído.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">
                Precisas de campanhas
              </p>
              <p className="text-slate-300">
                Landing page separada por campanha evita misturar mensagens.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">
                Queres preparar escala
              </p>
              <p className="text-slate-300">
                O site pode ser o “front door” de apps e do Moduz+.
              </p>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer um site que traga negócio?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Falamos do teu contexto, da oferta e do objetivo. Depois, desenhamos
            a página certa para converter.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Falar sobre site/landing
          </a>
        </div>
      </section>
    </main>
  );
}
