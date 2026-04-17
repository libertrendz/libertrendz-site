// app/sites/page.tsx

import Image from "next/image";

export default function SitesPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50">
          <div className="absolute inset-0">
            <Image
              src="/images/sites-hero.png"
              alt="Profissional a trabalhar num portátil com website moderno em ambiente de escritório com parede verde oliva"
              fill
              priority
              className="object-cover object-[70%_center]"
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.94)_0%,rgba(2,6,23,0.80)_34%,rgba(2,6,23,0.38)_68%,rgba(2,6,23,0.18)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_28%)]" />

          <div className="relative z-10 min-h-[520px] px-6 py-10 md:px-10 md:py-12 lg:min-h-[580px] lg:px-12 lg:py-14 flex items-end">
            <div className="max-w-3xl space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
                Sites e Landing Pages
              </p>

              <h1 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
                Um site não deve só existir.
                <span className="mt-2 block text-cyan-300">
                  Deve ajudar o negócio a avançar.
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
                Um site sem estrutura não gera negócio. Só ocupa espaço.
                O foco aqui é simples: clareza na oferta, mensagem certa, prova,
                CTA e um caminho direto para o contacto.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/diagnostico"
                  className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
                >
                  Ver o que está a travar
                </a>

                <a
                  href="https://wa.me/351939250661?text=Olá,%20quero%20melhorar%20o%20meu%20site."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-600/80 bg-slate-950/20 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur-sm transition hover:border-slate-400 hover:bg-slate-900/50"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMAS */}
        <div className="space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-50">
              Se isto acontece, o problema não é só o design
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Na maioria dos casos, o site falha porque não explica bem, não conduz a
              ação e não está alinhado com a necessidade real do negócio.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Recebes visitas, mas não contactos</p>
              <p className="mt-2 text-slate-300">
                O visitante entra, olha e sai. Falta direção, prova e um CTA claro.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">O site não explica bem o que fazes</p>
              <p className="mt-2 text-slate-300">
                A oferta fica difusa e a pessoa não percebe rapidamente se aquilo é para ela.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">O teu negócio evoluiu, mas o site não</p>
              <p className="mt-2 text-slate-300">
                A empresa mudou, o serviço amadureceu, mas o site continua preso a uma fase antiga.
              </p>
            </div>
          </div>
        </div>

        {/* COMO RESOLVEMOS */}
        <div className="space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-50">
              O foco não é fazer “mais um site”
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              O foco é estruturar a mensagem e o caminho de decisão. O site entra como
              ferramenta para tornar o negócio mais claro, mais confiável e mais fácil de contactar.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 1
              </p>
              <p className="mt-2 font-semibold text-slate-50">Entender</p>
              <p className="mt-1 text-slate-300">
                O negócio, a oferta e o objetivo real da página.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 2
              </p>
              <p className="mt-2 font-semibold text-slate-50">Estruturar</p>
              <p className="mt-1 text-slate-300">
                A mensagem, a prova e o fluxo que conduz ao contacto.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 3
              </p>
              <p className="mt-2 font-semibold text-slate-50">Construir</p>
              <p className="mt-1 text-slate-300">
                A landing page ou o site de acordo com a necessidade.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 4
              </p>
              <p className="mt-2 font-semibold text-slate-50">Entregar</p>
              <p className="mt-1 text-slate-300">
                Pronto para comunicar melhor e gerar mais ação.
              </p>
            </div>
          </div>
        </div>

        {/* COMPARAÇÃO */}
        <div className="space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-50">
              Landing page ou site completo?
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Nem todo negócio precisa da mesma solução. Aqui está a forma mais simples
              de perceber o que faz mais sentido no teu caso.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Landing page
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-50">
                Melhor quando o objetivo é ação rápida
              </p>

              <ul className="mt-4 space-y-2 text-slate-300">
                <li>• Tens uma oferta específica para promover</li>
                <li>• Queres campanhas, tráfego pago ou captação direta</li>
                <li>• Precisas validar uma mensagem ou serviço</li>
                <li>• Queres uma página mais enxuta e focada em conversão</li>
              </ul>

              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-xs text-slate-300">
                Normalmente faz mais sentido quando o foco é captar leads, testar uma
                proposta ou acelerar contacto.
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Site completo
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-50">
                Melhor quando o negócio precisa de presença mais sólida
              </p>

              <ul className="mt-4 space-y-2 text-slate-300">
                <li>• Tens vários serviços ou áreas de atuação</li>
                <li>• Precisas gerar confiança e explicar melhor o negócio</li>
                <li>• Queres páginas institucionais, cases e estrutura mais completa</li>
                <li>• O objetivo é ter presença forte e base para crescer</li>
              </ul>

              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-xs text-slate-300">
                Normalmente faz mais sentido quando já existe operação real e o site
                precisa representar melhor a empresa.
              </div>
            </div>
          </div>
        </div>

        {/* PRAZO */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Rapidez com critério
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-50">
              Sem projetos arrastados sem fim
            </h2>
            <p className="mt-3 text-sm text-slate-200">
              Landing pages a partir de 7 dias.
              <br />
              Sites completos a partir de 14 dias.
            </p>
          </div>
        </div>

        {/* CONTEXTO DE APLICAÇÃO */}
        <div className="space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-50">
              Isto não é teoria
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Este tipo de trabalho já foi pensado para contextos diferentes, com dores e
              rotinas reais.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-center text-sm text-slate-200">
              Remodelações
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-center text-sm text-slate-200">
              Serviços
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-center text-sm text-slate-200">
              Advocacia
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-center text-sm text-slate-200">
              Vendas
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-center text-sm text-slate-200">
              Organizações
            </div>
          </div>
        </div>

        {/* DIFERENCIAL */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
            <h2 className="text-xl font-semibold text-slate-50">
              Não é template. Não é abordagem genérica.
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-slate-200">
              A diferença está em perceber a real necessidade do negócio e traduzir isso
              numa solução mais certeira. O objetivo não é “ter um site”. É fazer a página
              funcionar melhor para a realidade da empresa.
            </p>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Se o teu site não está a ajudar o negócio, isso dá para corrigir
          </h2>

          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Primeiro vemos o que está desalinhado. Depois definimos a solução mais lógica.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Fazer diagnóstico
            </a>

            <a
              href="https://wa.me/351939250661?text=Olá,%20quero%20resolver%20o%20meu%20site."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
