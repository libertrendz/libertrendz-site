// app/sites/page.tsx
export default function SitesPage() {
  const CTA_TEXT = "Descobrir o caminho certo (2 min)";

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/35 p-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent-500/14 via-accent-400/8 to-transparent" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Sites e Landing Pages
            </p>

            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Sites que vendem. Landing pages que convertem.
            </h1>

            <p className="text-sm text-slate-200 max-w-2xl">
              Se o teu site está bonito e não traz negócio, falta estrutura de conversão.
              Aqui o foco é simples: mensagem clara, prova, CTA e rastreio.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/diagnostico"
                className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
              >
                {CTA_TEXT}
              </a>

              <a
                href="/cases"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Ver casos
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
                Formulário, UTM, WhatsApp e estrutura para medir conversão.
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
                Funil de entrada
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Site como porta para a operação
              </p>
              <p className="mt-2 text-slate-300">
                Quando o projeto cresce, o site vira entrada para processos, apps e produto.
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
              <p className="mb-1 font-semibold text-slate-50">Tráfego existe, mas lead não</p>
              <p className="text-slate-300">
                Normalmente é mensagem, prova e CTA. Resolve-se com estrutura e rastreio.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Oferta confusa</p>
              <p className="text-slate-300">
                Um bom site explica o que fazes e para quem é, em segundos.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Precisas de campanhas</p>
              <p className="text-slate-300">
                Uma landing por campanha evita misturar mensagens e melhora conversão.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Queres preparar escala</p>
              <p className="text-slate-300">
                O site vira a porta de entrada para processos, equipa e crescimento com controlo.
              </p>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Queres um site que traga negócio?
          </h2>

          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Primeiro entendemos o ponto de situação. Depois definimos a página certa para converter.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              {CTA_TEXT}
            </a>

            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Falar por mensagem
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
