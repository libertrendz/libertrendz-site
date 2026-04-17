// app/sobre/page.tsx

import Image from "next/image";

const FOTO_URL = "/images/GUSTAVO.png";

export default function SobrePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-12">
        {/* HERO */}
        <div className="relative max-w-3xl space-y-4">
          <div className="pointer-events-none absolute -inset-x-6 -top-8 -bottom-8 -z-10 rounded-2xl bg-gradient-to-r from-accent-500/12 via-accent-400/6 to-transparent blur-[16px]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Sobre
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Estratégia, produto e execução para negócios que precisam de clareza.
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            A Libertrendz existe para ajudar empresas e organizações a sair do ruído,
            estruturar melhor a presença digital e resolver necessidades reais com mais
            critério, mais lógica e mais resultado.
          </p>
        </div>

        {/* BLOCO PRINCIPAL */}
        <section className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/35">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent-500/12 via-cyan-700/8 to-transparent" />

          <div className="relative z-10 grid gap-10 p-8 lg:grid-cols-[2.2fr,1fr] lg:items-start">
            {/* TEXTO */}
            <div className="space-y-8 text-sm text-slate-200">
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-slate-50">
                  Quem está por trás da Libertrendz
                </h2>

                <p>
                  Sou Gustavo Santos. Trabalho na interseção entre negócio, produto,
                  operação e transformação digital.
                </p>

                <p>
                  Ao longo da minha trajetória, atuei em contextos exigentes, com pressão
                  real por entrega, previsibilidade, alinhamento entre áreas e tomada de
                  decisão mais estruturada.
                </p>

                <p>
                  O ponto em comum sempre foi o mesmo: perceber o cenário com honestidade,
                  cortar ruído e transformar complexidade em algo mais claro, executável e útil.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-slate-50">
                  O que isso significa na prática
                </h3>

                <p>
                  Hoje, isso traduz-se em sites, landing pages, soluções digitais e apps
                  customizados desenhados a partir da necessidade real do negócio — e não de modas,
                  templates genéricos ou soluções excessivas.
                </p>

                <p>
                  O objetivo não é entregar “mais uma peça digital”. É criar algo que faça
                  sentido para o momento da empresa e ajude o negócio a comunicar melhor,
                  organizar melhor e avançar com mais consistência.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-slate-50">
                  Como penso e como trabalho
                </h3>

                <ul className="space-y-2 text-slate-300">
                  <li>
                    • <span className="font-semibold text-slate-100">Leitura real do cenário:</span>{" "}
                    antes de propor qualquer coisa, é preciso perceber o que realmente está a doer.
                  </li>
                  <li>
                    • <span className="font-semibold text-slate-100">Solução ajustada:</span>{" "}
                    nem tudo pede um site grande, um app complexo ou uma estrutura pesada.
                  </li>
                  <li>
                    • <span className="font-semibold text-slate-100">Clareza de decisão:</span>{" "}
                    menos confusão, menos excesso, mais direção.
                  </li>
                  <li>
                    • <span className="font-semibold text-slate-100">Execução com propósito:</span>{" "}
                    aquilo que se entrega precisa servir o negócio de verdade.
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/30 px-4 py-3 text-slate-200">
                <p className="text-sm">
                  <span className="font-semibold text-slate-50">Em resumo:</span>{" "}
                  experiência para perceber a real necessidade do negócio e traduzir isso
                  numa solução mais útil, mais clara e mais ajustada ao resultado.
                </p>
              </div>
            </div>

            {/* LATERAL */}
            <aside className="space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/35 p-6 flex flex-col items-center text-center gap-4 shadow-xl shadow-black/60">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border border-slate-700 bg-slate-900">
                  <Image
                    src={FOTO_URL}
                    alt="Foto de Gustavo Santos"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-50">
                    Gustavo Santos
                  </p>
                  <p className="text-xs text-slate-400">
                    Gestão de Projetos · Produto · Transformação Digital
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Em poucas linhas
                </p>
                <p>
                  Estruturo presença digital, páginas de conversão e soluções mais práticas
                  para empresas que precisam de mais clareza e menos improviso.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/35 p-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Experiência que sustenta o trabalho
            </p>
            <h2 className="text-2xl font-semibold text-slate-50">
              Autoridade construída em ambientes que exigem estrutura e resultado
            </h2>
            <p className="text-sm text-slate-200">
              A experiência acumulada não vem de teoria. Vem de atuação em contextos onde
              clareza, coordenação, decisão e execução fazem diferença real.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Financeiro
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Banca e produtos digitais
              </p>
              <p className="mt-2 text-slate-300">
                Projetos, produto, reporting e alinhamento entre negócio e tecnologia.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Setor Público
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Transformação digital
              </p>
              <p className="mt-2 text-slate-300">
                Contextos mais exigentes, com necessidade de previsibilidade, coordenação e entrega.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Projetos
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                PMO, Agile e gestão
              </p>
              <p className="mt-2 text-slate-300">
                Organização de iniciativas, prioridades, backlogs, fluxos e execução.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                BI e decisão
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Dados com utilidade
              </p>
              <p className="mt-2 text-slate-300">
                Indicadores e leitura mais clara para apoiar decisões e reduzir achismo.
              </p>
            </div>
          </div>
        </section>

        {/* LIBERTRENDZ NA PRÁTICA */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/35 p-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Libertrendz na prática
            </p>
            <h2 className="text-2xl font-semibold text-slate-50">
              O que a Libertrendz entrega hoje
            </h2>
            <p className="text-sm text-slate-200">
              A solução certa depende do momento do negócio. O papel da Libertrendz é
              ajudar a perceber isso e propor algo mais coerente.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Websites
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Presença mais clara e mais forte
              </p>
              <p className="mt-2 text-slate-300">
                Sites e landing pages pensados para comunicar melhor e gerar ação.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Apps customizados
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Solução para dores operacionais específicas
              </p>
              <p className="mt-2 text-slate-300">
                Apps desenhados para rotina, controlo, execução e menos retrabalho.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Desenvolvimento de produto
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Ideia, estrutura e caminho
              </p>
              <p className="mt-2 text-slate-300">
                Quando o negócio precisa de clareza antes de investir mais tempo ou dinheiro.
              </p>
            </div>
          </div>
        </section>

        {/* CONTEXTOS */}
        <section className="space-y-6 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            Contextos onde isto já faz sentido
          </p>
          <h2 className="text-xl font-semibold text-slate-50">
            Diferentes negócios, a mesma lógica: resolver com mais critério
          </h2>

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
        </section>

        {/* CTA FINAL */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Se quiseres trazer o teu contexto para a mesa, começamos por aí
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Primeiro entendemos melhor o cenário. Depois definimos o caminho mais lógico.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Fazer diagnóstico
            </a>

            <a
              href="https://wa.me/351910287128?text=Olá,%20quero%20entender%20qual%20o%20caminho%20mais%20certo%20para%20o%20meu%20caso."
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
