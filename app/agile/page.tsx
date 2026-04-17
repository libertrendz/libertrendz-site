// app/agile/page.tsx

export default function AgilePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/35 p-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent-500/14 via-accent-400/8 to-transparent" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Produto &amp; Execução
            </p>

            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Antes de construir, é preciso perceber o que realmente faz sentido.
            </h1>

            <p className="text-sm text-slate-200 max-w-2xl">
              Nem todo problema pede um site novo. Nem toda dor pede um app. Em muitos
              casos, o que falta primeiro é leitura de cenário, clareza de direção e um
              próximo passo bem escolhido.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/diagnostico"
                className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
              >
                Ver o caminho certo
              </a>

              <a
                href="https://wa.me/351910287128?text=Olá,%20quero%20entender%20melhor%20o%20que%20faz%20mais%20sentido%20para%20o%20meu%20negócio."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* QUANDO ISTO É NECESSÁRIO */}
        <div className="space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-50">
              Quando esta abordagem faz mais sentido
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Há momentos em que o negócio não precisa de correr para uma solução. Precisa
              primeiro de entendimento, estrutura e direção.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">
                Há dúvida sobre o que resolver primeiro
              </p>
              <p className="mt-2 text-slate-300">
                O problema parece grande, mas ainda não está claro qual é o ponto que mais trava.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">
                Já houve investimento, mas o resultado ficou aquém
              </p>
              <p className="mt-2 text-slate-300">
                Site, sistema ou processo anterior não encaixou bem e agora é preciso rever com critério.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">
                O negócio cresceu e a estrutura não acompanhou
              </p>
              <p className="mt-2 text-slate-300">
                Surgem mais pedidos, mais pressão e mais ruído, mas sem um caminho claro para organizar.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">
                A empresa precisa decidir melhor antes de construir
              </p>
              <p className="mt-2 text-slate-300">
                Em vez de sair a fazer, o melhor primeiro passo é reduzir ambiguidade e escolher com mais lógica.
              </p>
            </div>
          </div>
        </div>

        {/* O QUE FAZEMOS */}
        <div className="space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-50">
              O que acontece aqui na prática
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              O objetivo é transformar cenário confuso em direção clara e ação concreta.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 1
              </p>
              <p className="mt-2 font-semibold text-slate-50">Ler o contexto</p>
              <p className="mt-1 text-slate-300">
                Entender a operação, a oferta, os gargalos e o momento do negócio.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 2
              </p>
              <p className="mt-2 font-semibold text-slate-50">Reduzir ruído</p>
              <p className="mt-1 text-slate-300">
                Separar sintoma de problema real para não gastar energia na direção errada.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 3
              </p>
              <p className="mt-2 font-semibold text-slate-50">Definir o caminho</p>
              <p className="mt-1 text-slate-300">
                Escolher se o próximo passo é site, landing page, app ou outra estrutura.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 4
              </p>
              <p className="mt-2 font-semibold text-slate-50">Avançar com clareza</p>
              <p className="mt-1 text-slate-300">
                Seguir para a solução mais ajustada, sem improviso nem excesso.
              </p>
            </div>
          </div>
        </div>

        {/* O QUE ISTO EVITA */}
        <div className="space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-50">
              O que isto ajuda a evitar
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Muitas decisões erradas começam quando se tenta resolver depressa sem perceber bem o problema.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Construção prematura</p>
              <p className="mt-2 text-slate-300">
                Fazer um site, um app ou uma estrutura antes da hora certa.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Retrabalho caro</p>
              <p className="mt-2 text-slate-300">
                Voltar atrás porque o caminho foi decidido com pouca clareza.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Tecnologia sem direção</p>
              <p className="mt-2 text-slate-300">
                Acrescentar ferramenta sem resolver a base do problema.
              </p>
            </div>
          </div>
        </div>

        {/* LIGAÇÃO COM O RESTO DO SITE */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
            <h2 className="text-xl font-semibold text-slate-50">
              O resultado desta etapa pode apontar para caminhos diferentes
            </h2>

            <p className="mt-3 max-w-3xl text-sm text-slate-200">
              Em alguns casos, a resposta será uma landing page para destravar captação.
              Em outros, um site mais bem estruturado. Em outros ainda, um app para atacar
              um ponto operacional específico. O papel aqui é ajudar a escolher certo.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5 text-sm text-slate-200">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Websites
                </p>
                <p className="mt-2 font-semibold text-slate-50">
                  Quando o problema está na comunicação e conversão
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5 text-sm text-slate-200">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Apps customizados
                </p>
                <p className="mt-2 font-semibold text-slate-50">
                  Quando a dor está na rotina, no controlo e na execução
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5 text-sm text-slate-200">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Estrutura
                </p>
                <p className="mt-2 font-semibold text-slate-50">
                  Quando ainda é preciso organizar melhor antes de construir
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Se ainda não está claro qual é o próximo passo, isso é precisamente o ponto de partida
          </h2>

          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Primeiro percebemos melhor o cenário. Depois definimos o caminho mais lógico.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Fazer diagnóstico
            </a>

            <a
              href="https://wa.me/351910287128?text=Olá,%20quero%20entender%20melhor%20qual%20o%20caminho%20mais%20certo%20para%20o%20meu%20caso."
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
