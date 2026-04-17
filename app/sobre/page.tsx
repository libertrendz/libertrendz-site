// app/sobre/page.tsx

import Image from "next/image";

export default function SobrePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50">
          <div className="absolute inset-0">
            <Image
              src="/images/sobre-hero.png"
              alt="Gustavo Santos em ambiente profissional, representando direção, clareza e experiência aplicada"
              fill
              priority
              className="object-cover object-[68%_center]"
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.95)_0%,rgba(2,6,23,0.82)_34%,rgba(2,6,23,0.42)_68%,rgba(2,6,23,0.16)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_28%)]" />

          <div className="relative z-10 min-h-[520px] px-6 py-10 md:px-10 md:py-12 lg:min-h-[580px] lg:px-12 lg:py-14 flex items-end">
            <div className="max-w-3xl space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
                Sobre
              </p>

              <h1 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
                Negócio, produto e execução
                <span className="mt-2 block text-cyan-300">
                  com os pés no chão.
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
                A Libertrendz existe para transformar necessidade real em solução útil,
                sem teatro, sem excesso e sem improviso. O foco nunca foi só construir.
                O foco sempre foi fazer sentido para o negócio.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/diagnostico"
                  className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
                >
                  Fazer diagnóstico
                </a>

                <a
                  href="https://wa.me/351939250661?text=Olá,%20quero%20entender%20melhor%20o%20vosso%20trabalho%20e%20o%20que%20faz%20sentido%20para%20o%20meu%20caso."
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

        {/* POSICIONAMENTO */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/35 p-6 md:p-8">
          <div className="max-w-4xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              O que nos move
            </p>

            <h2 className="text-2xl font-semibold leading-snug text-slate-50">
              Não acreditamos em solução bonita que não resolve.
            </h2>

            <p className="text-base leading-7 text-slate-200">
              Um site só vale a pena se comunicar melhor. Um app só vale a pena se simplificar a operação.
              Um processo só vale a pena se ajudar a decidir e executar com mais clareza.
            </p>
          </div>
        </section>

        {/* QUEM ESTÁ POR TRÁS */}
        <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-4">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Quem está por trás
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-50">
                A cabeça por trás da Libertrendz vem de contexto real de negócio
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-7 text-slate-300">
              <p>
                Por trás da Libertrendz está Gustavo Santos, com experiência em gestão de projetos,
                produto, transformação digital e leitura de negócio em contextos onde clareza,
                coordenação e execução fazem diferença real.
              </p>

              <p>
                O ponto em comum ao longo dessa trajetória nunca foi “tecnologia por si só”.
                Foi perceber o cenário, cortar ruído, estruturar melhor o caminho e transformar
                complexidade em algo mais claro e mais útil.
              </p>

              <p>
                É isso que a Libertrendz leva para cada projeto: menos improviso, mais direção
                e soluções ajustadas ao momento real de quem está do outro lado.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl shadow-black/40">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Em poucas linhas
            </p>

            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p className="rounded-xl border border-slate-800 bg-slate-950/30 px-4 py-3">
                Negócio antes de ferramenta.
              </p>
              <p className="rounded-xl border border-slate-800 bg-slate-950/30 px-4 py-3">
                Clareza antes de construção.
              </p>
              <p className="rounded-xl border border-slate-800 bg-slate-950/30 px-4 py-3">
                Execução com lógica, não com improviso.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section className="space-y-5">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Experiência aplicada
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-50">
              Autoridade construída em ambientes que exigem estrutura
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Projetos
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Coordenação e entrega
              </p>
              <p className="mt-2 text-slate-300">
                Organização de iniciativas, prioridades e execução em contextos exigentes.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Produto
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Estrutura e caminho
              </p>
              <p className="mt-2 text-slate-300">
                Definição do que faz sentido construir e do que não vale a pena empurrar.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Transformação
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Clareza operacional
              </p>
              <p className="mt-2 text-slate-300">
                Processos, presença digital e rotinas mais organizadas e mais funcionais.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Decisão
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Menos ruído
              </p>
              <p className="mt-2 text-slate-300">
                Leitura mais clara para apoiar escolhas com mais critério e menos achismo.
              </p>
            </div>
          </div>
        </section>

        {/* COMO PENSAMOS */}
        <section className="space-y-5">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Como pensamos
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-50">
              A forma de trabalhar é simples, mas não é superficial
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Clareza antes de construir</p>
              <p className="mt-2 text-slate-300">
                Antes de qualquer site, app ou estrutura, é preciso perceber bem o contexto.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Solução ajustada ao cenário</p>
              <p className="mt-2 text-slate-300">
                Nem tudo pede a mesma resposta. O formato certo depende do momento do negócio.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Menos excesso, mais direção</p>
              <p className="mt-2 text-slate-300">
                O objetivo é simplificar, não impressionar com complexidade desnecessária.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="font-semibold text-slate-50">Execução que serve o negócio</p>
              <p className="mt-2 text-slate-300">
                O que se entrega tem de funcionar na prática, não só no discurso.
              </p>
            </div>
          </div>
        </section>

        {/* COM QUEM FAZ SENTIDO */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/35 p-6 md:p-8">
          <div className="max-w-4xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Com quem isto faz sentido
            </p>

            <h2 className="text-2xl font-semibold leading-snug text-slate-50">
              Faz sentido para PMEs e organizações que já perceberam que improviso custa caro.
            </h2>

            <p className="text-base leading-7 text-slate-200">
              Negócios que precisam comunicar melhor, organizar melhor e decidir melhor.
              Não para quem quer “mais uma coisa bonita”, mas para quem quer resolver o que está desalinhado.
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Se queres pôr o teu contexto na mesa e perceber o caminho certo, falamos.
          </h2>

          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Em poucos minutos já conseguimos perceber o que faz sentido e o que não vale a pena complicar.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Fazer diagnóstico
            </a>

            <a
              href="https://wa.me/351939250661?text=Olá,%20quero%20entender%20melhor%20o%20vosso%20trabalho%20e%20o%20que%20faz%20sentido%20para%20o%20meu%20caso."
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
