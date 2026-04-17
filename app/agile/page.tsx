// app/agile/page.tsx

import Image from "next/image";

export default function AgilePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50">
          <div className="absolute inset-0">
            <Image
              src="/images/agile-hero.png"
              alt="Reunião de trabalho com foco em decisão, organização e definição de próximos passos"
              fill
              priority
              className="object-cover object-[65%_center]"
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.94)_0%,rgba(2,6,23,0.80)_34%,rgba(2,6,23,0.38)_68%,rgba(2,6,23,0.18)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_28%)]" />

          <div className="relative z-10 min-h-[520px] px-6 py-10 md:px-10 md:py-12 lg:min-h-[580px] lg:px-12 lg:py-14 flex items-end">
            <div className="max-w-3xl space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
                Produto &amp; Execução
              </p>

              <h1 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
                Não é falta de esforço.
                <span className="mt-2 block text-cyan-300">
                  É falta de direção e consistência na execução.
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
                Antes de construir sites ou apps, é preciso perceber o que faz sentido fazer,
                o que não fazer e como executar de forma consistente no dia a dia.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/diagnostico"
                  className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
                >
                  Ver o que está desalinhado
                </a>

                <a
                  href="https://wa.me/351939250661?text=Olá,%20quero%20organizar%20melhor%20a%20execução%20do%20meu%20negócio."
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
        <section className="space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-50">
              Quando não há direção clara, tudo fica mais pesado
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              O problema raramente é capacidade. Normalmente é falta de clareza
              no que fazer e inconsistência na execução.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Prioridades difusas</p>
              <p className="mt-2 text-slate-300">
                Tudo parece importante e nada avança com consistência.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Execução irregular</p>
              <p className="mt-2 text-slate-300">
                Começa-se bem, mas perde-se ritmo no dia a dia.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Decisões adiadas</p>
              <p className="mt-2 text-slate-300">
                Falta clareza para decidir e avançar com confiança.
              </p>
            </div>
          </div>
        </section>

        {/* O QUE FAZEMOS */}
        <section className="space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-50">
              Estrutura antes de execução
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              O objetivo é organizar o caminho antes de acelerar. Isso evita retrabalho,
              desperdício e decisões erradas.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Clareza</p>
              <p className="mt-2 text-slate-300">
                Definir o que faz sentido agora e o que não faz.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Foco</p>
              <p className="mt-2 text-slate-300">
                Reduzir ruído e concentrar no que realmente move o negócio.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Execução</p>
              <p className="mt-2 text-slate-300">
                Criar ritmo e consistência no dia a dia.
              </p>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-50">
              Simples e direto
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Entender</p>
              <p className="mt-2 text-slate-300">
                O contexto atual e os pontos de bloqueio.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Organizar</p>
              <p className="mt-2 text-slate-300">
                O caminho, as prioridades e o processo.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Executar</p>
              <p className="mt-2 text-slate-300">
                Com consistência e acompanhamento.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Se sentes que estás a fazer muito mas a avançar pouco, isso tem solução
          </h2>

          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Em poucos minutos conseguimos perceber onde está o bloqueio e qual o caminho mais lógico.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Fazer diagnóstico
            </a>

            <a
              href="https://wa.me/351939250661?text=Olá,%20quero%20melhorar%20a%20execução%20do%20meu%20negócio."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>

      </section>
    </main>
  );
}
