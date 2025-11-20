// app/sobre/page.tsx
import Image from "next/image";

const FOTO_GUSTAVO_URL =
  "https://ncglfknuaugpkmkbsiyf.supabase.co/storage/v1/object/public/Imagens/3x4%20(9).png";

export default function SobrePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        {/* HERO */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            Sobre
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            A história, os princípios e a visão por trás da Libertrendz.
          </h1>
          <p className="mt-4 text-sm text-slate-200 max-w-2xl">
            Uma empresa construída a partir de experiência real, transição de
            carreira, visão prática e a busca por soluções que funcionam — sem
            teatro, sem buzzwords, sem fantasia.
          </p>
        </div>

        {/* SOBRE A LIBERTRENDZ */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            Sobre a Libertrendz
          </h2>
          <div className="space-y-4 text-sm text-slate-200 max-w-3xl">
            <p>
              A Libertrendz nasce com uma proposta clara: ser um braço de
              estratégia e execução em tecnologia para pessoas e PMEs que não
              têm tempo nem paciência para complexidade desnecessária.
            </p>
            <p>Atuamos em três frentes que se complementam:</p>

            <ul className="space-y-1 text-slate-300">
              <li>
                • <strong>Mentoria Tech</strong>: ajudar adultos em transição de
                carreira a encontrarem uma rota coerente e sustentável em
                tecnologia.
              </li>
              <li>
                • <strong>Projetos Ágeis</strong>: estruturar equipas, fluxos e
                previsibilidade, substituindo caos por clareza.
              </li>
              <li>
                • <strong>Apps & Tiny ERPs</strong>: criar soluções digitais
                modulares e sob medida para PMEs.
              </li>
            </ul>

            <p>
              A filosofia é simples e direta:{" "}
              <strong>menos fantasia, mais entrega</strong>. Menos jargão, mais
              clareza. Menos teoria de palco, mais prática que move o negócio.
            </p>
          </div>
        </div>

        {/* BLOCO GUSTAVO + FOTO */}
        <div className="grid gap-8 lg:grid-cols-[3fr,2fr] lg:items-start">
          <div className="space-y-6 max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-50">
              Sobre Gustavo Santos
            </h2>
            <div className="space-y-4 text-sm text-slate-200">
              <p>
                A maior parte da carreira do Gustavo foi construída em gestão,
                operações e liderança de equipas. Em 2022, aos 49 anos, decidiu
                fazer o que muita gente adia: migrar para tecnologia.
              </p>

              <p>
                Ao invés de recomeçar do zero, conectou o que já carregava —
                visão de negócio, maturidade, experiência humana — com práticas
                modernas de tecnologia, produto e agilidade. Dessa combinação
                nasce a Libertrendz.
              </p>

              <p>Hoje atua principalmente em três frentes:</p>

              <ul className="space-y-1 text-slate-300">
                <li>• Mentoria de transição para tecnologia para adultos;</li>
                <li>
                  • Estruturação de projetos, equipas e rotinas com base em
                  agilidade;
                </li>
                <li>
                  • Concepção e gestão de apps e ERPs modulares (como o
                  CONFIANCE).
                </li>
              </ul>

              <p>
                A Libertrendz é o reflexo dessa jornada: um espaço onde
                tecnologia e maturidade coexistem, onde a experiência de vida
                vale tanto quanto a técnica — e onde o objetivo final é sempre o
                mesmo: <strong>clareza, método e entrega real</strong>.
              </p>
            </div>

            {/* Manifesto */}
            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Manifesto Libertrendz
              </p>
              <p className="text-sm text-slate-200">
                Eu acredito que tecnologia não é um fim, mas um meio para
                devolver clareza, direção e controle às pessoas e às empresas.
                Acredito que maturidade importa. Que método importa. Que verdade
                importa. E que não existe nada mais poderoso do que alguém que
                decide recomeçar — de forma consciente, honesta e com propósito.
              </p>
            </div>
          </div>

          {/* FOTO REAL DO GUSTAVO */}
          <div className="flex flex-col items-center gap-4 lg:items-end">
            <div className="relative h-44 w-44 overflow-hidden rounded-full border border-slate-700 bg-slate-900 shadow-xl shadow-black/60">
              <Image
                src={FOTO_GUSTAVO_URL}
                alt="Gustavo Santos"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center text-xs text-slate-400 lg:text-right">
              <p className="font-semibold text-slate-200">Gustavo Santos</p>
              <p>Gestão, transição para tecnologia e produtos digitais.</p>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer falar comigo?
          </h2>
          <p className="text-sm text-slate-200">
            Seja sobre mentoria, consultoria ou apps — começamos com uma
            conversa simples.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Entrar em contato
          </a>
          <p className="text-[11px] text-slate-500">
            Se preferir, pode escrever diretamente para{" "}
            <a
              href="mailto:contato@libertrendz.eu"
              className="text-accent-400 hover:text-accent-300"
            >
              contato@libertrendz.eu
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
