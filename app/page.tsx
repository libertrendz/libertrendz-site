// app/page.tsx

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-16 md:py-20 space-y-16">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/35 p-8 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-700/12 via-accent-500/8 to-transparent" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.35fr,1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                Libertrendz · websites, apps e direção para o próximo passo
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
                Um site sem estrutura
                <span className="block mt-2 text-cyan-300">
                  não gera negócio. Só ocupa espaço.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base md:text-lg text-slate-200">
                A Libertrendz ajuda empresas a estruturar melhor a presença digital,
                resolver necessidades reais com soluções mais ajustadas e transformar
                confusão em direção mais clara.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/diagnostico"
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm md:text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
                >
                  Descobrir o que está a travar
                </a>

                <a
                  href="https://wa.me/351910287128?text=Olá,%20quero%20entender%20o%20que%20faz%20mais%20sentido%20para%20o%20meu%20caso."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm md:text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
                >
                  Falar no WhatsApp
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-300">
                <span className="rounded-full border border-slate-800 bg-slate-950/40 px-3 py-1">
                  Landing pages a partir de 7 dias
                </span>
                <span className="rounded-full border border-slate-800 bg-slate-950/40 px-3 py-1">
                  Sites completos a partir de 14 dias
                </span>
                <span className="rounded-full border border-slate-800 bg-slate-950/40 px-3 py-1">
                  Menos ruído, mais direção
                </span>
              </div>
            </div>

            <aside className="rounded-2xl border border-slate-800 bg-slate-950/35 p-6 shadow-xl shadow-black/60">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Se isto parece familiar…
              </p>

              <div className="mt-4 space-y-3 text-sm text-slate-200">
                <p className="rounded-xl border border-slate-800 bg-slate-900/30 px-4 py-3">
                  “Temos site, mas não está a trazer clientes.”
                </p>
                <p className="rounded-xl border border-slate-800 bg-slate-900/30 px-4 py-3">
                  “O negócio mudou, mas a presença digital ficou para trás.”
                </p>
                <p className="rounded-xl border border-slate-800 bg-slate-900/30 px-4 py-3">
                  “Precisamos de resolver isto, mas sem entrar em mais confusão.”
                </p>
                <p className="text-xs text-slate-400">
                  O problema raramente é só o design. Normalmente é estrutura, mensagem e direção.
                </p>
              </div>

              <div className="mt-5">
                <a
                  href="/cases"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
                >
                  Ver casos
                </a>
              </div>
            </aside>
          </div>
        </div>

        {/* PROBLEMAS */}
        <section className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-slate-50">
              O problema raramente é só “ter ou não ter site”
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Na maioria dos casos, o que trava o negócio é comunicação fraca, excesso de improviso,
              processos soltos ou falta de direção sobre o que fazer primeiro.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Conversão
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                O site não gera contacto
              </p>
              <p className="mt-2 text-slate-300">
                Existe presença, mas falta mensagem, prova e caminho claro para ação.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Clareza
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                O negócio não está bem explicado
              </p>
              <p className="mt-2 text-slate-300">
                O visitante entra, mas não percebe rapidamente o que fazes ou porque deve confiar.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Operação
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Há rotinas a travar o dia a dia
              </p>
              <p className="mt-2 text-slate-300">
                Processos manuais, ferramentas soltas e pouca visibilidade tornam tudo mais pesado.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Decisão
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Ainda não está claro o que fazer primeiro
              </p>
              <p className="mt-2 text-slate-300">
                Nem sempre a melhor resposta é construir de imediato. Às vezes o primeiro passo é escolher certo.
              </p>
            </div>
          </div>
        </section>

        {/* CAMINHOS */}
        <section className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-slate-50">
              Não existe solução única. Existe o caminho mais certo para o teu cenário.
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              A Libertrendz trabalha em três frentes principais, conforme a necessidade real do negócio.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Websites
              </p>
              <p className="mt-2 text-base font-semibold text-slate-50">
                Quando o problema está na comunicação e na captação
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Sites e landing pages pensados para explicar melhor, gerar confiança e facilitar contacto.
              </p>
              <a
                href="/sites"
                className="mt-4 inline-flex text-sm font-semibold text-accent-300 hover:text-accent-200"
              >
                Ver Websites →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Apps customizados
              </p>
              <p className="mt-2 text-base font-semibold text-slate-50">
                Quando a dor está na rotina, no controlo e na execução
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Soluções digitais mais ajustadas para atacar um ponto operacional específico.
              </p>
              <a
                href="/apps"
                className="mt-4 inline-flex text-sm font-semibold text-accent-300 hover:text-accent-200"
              >
                Ver Apps →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Produto &amp; Execução
              </p>
              <p className="mt-2 text-base font-semibold text-slate-50">
                Quando ainda é preciso perceber melhor o problema antes de construir
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Leitura de cenário, definição de caminho e estruturação do próximo passo.
              </p>
              <a
                href="/agile"
                className="mt-4 inline-flex text-sm font-semibold text-accent-300 hover:text-accent-200"
              >
                Ver Produto &amp; Execução →
              </a>
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section className="space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/35 p-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Como funciona
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-50">
                Primeiro percebemos. Depois decidimos. Só então construímos.
              </h2>
              <p className="mt-2 text-sm text-slate-200">
                O objetivo é evitar erro de direção, excesso de solução e retrabalho desnecessário.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/25 p-5 text-sm text-slate-200">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Etapa 1
                </p>
                <p className="mt-2 font-semibold text-slate-50">Ler o cenário</p>
                <p className="mt-1 text-slate-300">
                  Entender melhor o negócio, o momento e o que realmente está a travar.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/25 p-5 text-sm text-slate-200">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Etapa 2
                </p>
                <p className="mt-2 font-semibold text-slate-50">Escolher o foco</p>
                <p className="mt-1 text-slate-300">
                  Definir o que deve ser resolvido primeiro e qual formato faz mais sentido.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/25 p-5 text-sm text-slate-200">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Etapa 3
                </p>
                <p className="mt-2 font-semibold text-slate-50">Construir com critério</p>
                <p className="mt-1 text-slate-300">
                  Criar a solução de forma mais ajustada, sem peso desnecessário.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/25 p-5 text-sm text-slate-200">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Etapa 4
                </p>
                <p className="mt-2 font-semibold text-slate-50">Avançar melhor</p>
                <p className="mt-1 text-slate-300">
                  Entregar algo mais útil, mais claro e mais coerente com o negócio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROVA */}
        <section className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-slate-50">
              Contextos onde esta lógica já fez sentido
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Sem prender a Libertrendz a um único nicho, mas usando experiência já validada para reduzir fricção e acelerar entendimento.
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

          <div>
            <a
              href="/cases"
              className="text-sm font-semibold text-accent-300 hover:text-accent-200"
            >
              Ver casos →
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="space-y-6 border-t border-slate-800 pt-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-50">
            Se o teu caso precisa de mais clareza, começamos exatamente por aí.
          </h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Primeiro entendemos o cenário. Depois definimos o caminho mais lógico para avançar.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Fazer diagnóstico
            </a>
            <a
              href="https://wa.me/351910287128?text=Olá,%20quero%20entender%20qual%20o%20caminho%20mais%20certo%20para%20o%20meu%20caso."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
