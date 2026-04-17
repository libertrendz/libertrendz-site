// app/apps/page.tsx

import Image from "next/image";

export default function AppsPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50">
          <div className="absolute inset-0">
            <Image
              src="/images/apps-hero.png"
              alt="Profissional a utilizar tablet com app de gestão em contexto de obra"
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
                Apps customizados
              </p>

              <h1 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
                Não precisas de mais software.
                <span className="mt-2 block text-cyan-300">
                  Precisas de controlo sobre o que acontece no terreno.
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
                Criamos apps simples para organizar tarefas, registos, equipas e operações,
                sem complexidade desnecessária e sem depender de ferramentas genéricas.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/diagnostico"
                  className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
                >
                  Ver o que está a travar
                </a>

                <a
                  href="https://wa.me/351939250661?text=Olá,%20quero%20entender%20se%20um%20app%20faz%20sentido%20para%20o%20meu%20negócio."
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
              Quando a operação não está organizada, tudo pesa mais
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Não é falta de esforço. É falta de visibilidade, controlo e estrutura
              no dia a dia.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">
                Informação espalhada
              </p>
              <p className="mt-2 text-slate-300">
                Notas, mensagens, folhas e memória. Nada centralizado.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">
                Falta de controlo
              </p>
              <p className="mt-2 text-slate-300">
                Não sabes exatamente o que foi feito, por quem e quando.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">
                Processos manuais
              </p>
              <p className="mt-2 text-slate-300">
                Tempo perdido em tarefas repetitivas e sem valor.
              </p>
            </div>
          </div>
        </section>

        {/* O QUE FAZEMOS */}
        <section className="space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-50">
              Apps simples, pensados para a realidade do teu negócio
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Nada genérico. Cada app nasce da forma como o teu negócio realmente funciona.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Registos no terreno</p>
              <p className="mt-2 text-slate-300">
                Apontamentos, fotos, checklists e tarefas diretamente no local.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Centralização</p>
              <p className="mt-2 text-slate-300">
                Tudo num só lugar, acessível e organizado.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Visibilidade</p>
              <p className="mt-2 text-slate-300">
                Saber o que está a acontecer sem depender de mensagens ou chamadas.
              </p>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-50">
              Não começamos pelo app. Começamos pelo problema.
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              O app é só a ferramenta. O foco é resolver o que está desalinhado.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Entender</p>
              <p className="mt-2 text-slate-300">
                Como a operação funciona hoje.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Organizar</p>
              <p className="mt-2 text-slate-300">
                Estruturar o processo de forma simples.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Aplicar</p>
              <p className="mt-2 text-slate-300">
                Criar a app certa para aquele cenário.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Se a tua operação depende de improviso, dá para melhorar
          </h2>

          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Em poucos minutos conseguimos perceber se um app faz sentido para o teu caso.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Fazer diagnóstico
            </a>

            <a
              href="https://wa.me/351939250661?text=Olá,%20quero%20organizar%20a%20minha%20operação."
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
