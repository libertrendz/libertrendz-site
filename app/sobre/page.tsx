// libertrendz-site/app/sobre/page.tsx
import Image from "next/image";

const FOTO_URL = "/images/GUSTAVO.png";

export default function SobrePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        {/* HERO */}
        <div className="relative max-w-3xl space-y-4">
          <div className="pointer-events-none absolute -inset-x-6 -top-8 -bottom-8 -z-10 rounded-2xl bg-gradient-to-r from-accent-500/12 via-accent-400/6 to-transparent blur-[16px]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Sobre
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Libertrendz: produto + execução para PMEs.
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            A Libertrendz une quatro frentes que se complementam: Moduz+ (módulos ativáveis),
            Apps customizados, Sites & Landing Pages e Consultoria Ágil.
          </p>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid gap-10 lg:grid-cols-[2.2fr,1.8fr] lg:items-start">
          {/* TEXTO */}
          <div className="space-y-6 text-sm text-slate-200">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50">
                Quem é o Gustavo Santos
              </h2>
              <p>
                Trago experiência prática de gestão e contexto corporativo para um objetivo simples:
                transformar operação em clareza, previsibilidade e resultado.
              </p>
              <p>
                O meu trabalho é pragmático: entender o cenário real, cortar ruído e construir o que sustenta
                o crescimento (processo, tecnologia e execução).
              </p>
              <p>
                Hoje atuo em quatro frentes:{" "}
                <strong className="text-slate-100">Moduz+</strong>,{" "}
                <strong className="text-slate-100">Apps customizados</strong>,{" "}
                <strong className="text-slate-100">Sites & Landing Pages</strong> e{" "}
                <strong className="text-slate-100">Consultoria Ágil</strong>.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50">Como penso e trabalho</h2>
              <ul className="space-y-2 text-slate-300">
                <li>
                  • <span className="font-semibold text-slate-100">Zero teatro:</span> método é meio, não fim.
                </li>
                <li>
                  • <span className="font-semibold text-slate-100">Contexto primeiro:</span> antes da solução, entendimento real da operação.
                </li>
                <li>
                  • <span className="font-semibold text-slate-100">Clareza e empatia:</span> comunicação direta sem desumanizar o processo.
                </li>
                <li>
                  • <span className="font-semibold text-slate-100">Caminho claro:</span> tudo vira próximos passos mensuráveis.
                </li>
              </ul>
            </div>
          </div>

          {/* CARD LATERAL */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center gap-4">
              <div className="relative h-36 w-36 overflow-hidden rounded-full border border-slate-700 bg-slate-900">
                <Image
                  src={FOTO_URL}
                  alt="Foto de Gustavo Santos"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-50">Gustavo Santos</p>
                <p className="text-xs text-slate-400">Gestor de Projetos · Consultor Ágil</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Em poucas linhas
              </p>
              <p>
                Produto e execução para PMEs: o site atrai, o app organiza, o Moduz+ escala e a consultoria
                mantém previsibilidade.
              </p>
              <div className="mt-2 text-sm text-slate-300 space-y-1">
                <div>• <strong>Moduz+:</strong> módulos ativáveis para escalar.</div>
                <div>• <strong>Apps customizados:</strong> soluções sob medida.</div>
                <div>• <strong>Sites & Landing Pages:</strong> conversão e presença.</div>
                <div>• <strong>Consultoria Ágil:</strong> fluxo, prioridade e entrega.</div>
              </div>
            </div>
          </aside>
        </div>

        {/* SOBRE A LIBERTRENDZ */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-xl font-semibold text-slate-50">Sobre a Libertrendz</h2>
          <p className="text-sm text-slate-200">
            A Libertrendz é o guarda-chuva que integra produto e execução: Moduz+, Apps customizados,
            Sites & Landing Pages e Consultoria Ágil — tudo pensado para reduzir ruído e aumentar controlo.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Foco em operações reais de pequenas e médias empresas.</li>
            <li>• Entrega incremental, com valor desde o início.</li>
            <li>• Linguagem direta, sem “venda de fumaça”.</li>
            <li>• Tecnologia aplicada para resolver rotina, não para impressionar.</li>
          </ul>
        </div>

        {/* MISSÃO • VISÃO • VALORES */}
        <section id="missao-visao-valores" className="space-y-6 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            Identidade
          </p>
          <h2 className="text-xl font-semibold text-slate-50">Missão, visão e valores</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Missão
              </p>
              <p className="mt-2 text-slate-100 font-semibold">
                Tornar PMEs mais produtivas e previsíveis com soluções digitais práticas.
              </p>
              <p className="mt-2 text-slate-300 text-sm">
                Produto + execução com métricas simples e foco em valor.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Visão
              </p>
              <p className="mt-2 text-slate-100 font-semibold">
                Ser referência em soluções operacionais que escalam sem virar burocracia.
              </p>
              <p className="mt-2 text-slate-300 text-sm">
                Crescer com clientes reais e casos comprovados.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Valores
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  <span className="font-semibold text-slate-100">Praticidade:</span>{" "}
                  soluções que funcionam no dia a dia.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Clareza:</span>{" "}
                  comunicação direta e decisões mensuráveis.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Propósito com empatia:</span>{" "}
                  resolver o real sem esquecer pessoas.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-3 text-sm text-slate-300">
            <a
              href="/cases"
              className="font-semibold text-accent-400 hover:text-accent-300"
            >
              Ver casos → 
            </a>
          </div>
        </section>

        {/* CTA FINAL */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer trazer o teu contexto para a mesa?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Começamos com uma conversa simples e saímos com um caminho prático.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Ir para o contato
          </a>
        </div>
      </section>
    </main>
  );
}
