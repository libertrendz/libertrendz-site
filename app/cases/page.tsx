// app/cases/page.tsx

import Image from "next/image";

export default function CasesPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        {/* HERO */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Cases
          </p>

          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Projetos reais pensados para resolver contexto real.
          </h1>

          <p className="text-sm text-slate-200 max-w-2xl">
            Aqui o foco não é mostrar “trabalhos bonitos”. É mostrar como uma necessidade
            concreta foi traduzida numa solução mais clara, mais forte e mais útil para o negócio.
          </p>
        </div>

        {/* CASE RENATO */}
        <article className="space-y-10">
          {/* TITULO */}
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Advocacia · Website institucional
            </p>

            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Renato Ferreira — presença digital mais alinhada com autoridade e clareza
            </h2>

            <p className="text-sm text-slate-300 max-w-2xl">
              O objetivo não era apenas “ter um site”. Era criar uma presença digital
              mais sólida, mais confiável e mais coerente com o nível do serviço prestado.
            </p>
          </div>

          {/* HERO VISUAL */}
          <div className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/cases/renato-ferreira/renatoferreira1desk_site.png"
                alt="Homepage do site Renato Ferreira em desktop"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
          </div>

          {/* CONTEXTO + DECISÃO */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Contexto
              </p>

              <p className="mt-3 text-slate-300 leading-6">
                Era preciso estruturar melhor a comunicação, reforçar a percepção de autoridade
                e criar um caminho mais claro para quem chega ao site e precisa perceber rapidamente
                o posicionamento e as áreas de atuação.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Decisão
              </p>

              <p className="mt-3 text-slate-300 leading-6">
                A estrutura foi pensada para equilibrar credibilidade, clareza e direção.
                O foco foi organizar melhor a narrativa, destacar os pontos certos e facilitar
                o contacto sem poluir a experiência.
              </p>
            </div>
          </div>

          {/* O QUE FOI TRABALHADO */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Posicionamento</p>
              <p className="mt-2 text-slate-300">
                Estrutura visual e textual mais alinhada com um serviço jurídico premium.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Clareza</p>
              <p className="mt-2 text-slate-300">
                Melhor organização das áreas de atuação, leitura mais limpa e navegação mais direta.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Conversão</p>
              <p className="mt-2 text-slate-300">
                Mais coerência entre autoridade, confiança e encaminhamento para contacto.
              </p>
            </div>
          </div>

          {/* GALERIA */}
          <div className="space-y-4">
            <div className="max-w-3xl">
              <h3 className="text-xl font-semibold text-slate-50">
                Desktop e mobile com a mesma lógica de clareza
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                O trabalho não ficou preso ao desktop. A experiência mobile também foi
                tratada com o mesmo cuidado para manter leitura, impacto e consistência.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/cases/renato-ferreira/renatoferreira2desk_site.png"
                    alt="Secção interna do site Renato Ferreira em desktop"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30">
                  <div className="relative aspect-[9/16]">
                    <Image
                      src="/images/cases/renato-ferreira/renatoferreira3mobile_site.png"
                      alt="Versão mobile do site Renato Ferreira - hero"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30">
                  <div className="relative aspect-[9/16]">
                    <Image
                      src="/images/cases/renato-ferreira/renatoferreira4mobile_site.png"
                      alt="Versão mobile do site Renato Ferreira - conteúdo"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30">
                  <div className="relative aspect-[9/16]">
                    <Image
                      src="/images/cases/renato-ferreira/renatoferreira5mobile_site.png"
                      alt="Versão mobile do site Renato Ferreira - página interna"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RESULTADO */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Resultado
            </p>

            <p className="mt-3 text-slate-300 leading-6">
              O resultado foi uma presença digital mais alinhada com o posicionamento do projeto,
              com comunicação mais forte, melhor leitura do valor oferecido e um caminho mais claro
              para o visitante avançar para contacto.
            </p>
          </div>

          {/* LINK EXTERNO */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-5 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Projeto online
            </p>

            <p className="mt-3 text-slate-300">
              O website está publicado e acessível publicamente.
            </p>

            <div className="mt-4">
              <a
                href="https://www.renatoferreira360.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Ver website
              </a>
            </div>
          </div>
        </article>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Se o teu contexto também pede algo mais claro e mais forte, começamos por perceber isso.
          </h2>

          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Primeiro entendemos o cenário. Depois definimos o caminho mais lógico.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Fazer diagnóstico
            </a>

            <a
              href="https://wa.me/351939250661?text=Olá,%20vi%20o%20case%20da%20Libertrendz%20e%20quero%20entender%20o%20que%20faz%20sentido%20para%20o%20meu%20caso."
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
