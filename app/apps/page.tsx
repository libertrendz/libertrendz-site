// app/apps/page.tsx

export default function AppsPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/35 p-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent-500/14 via-accent-400/8 to-transparent" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Apps customizados
            </p>

            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Quando a operação começa a travar, um app certo pode destravar o negócio.
            </h1>

            <p className="text-sm text-slate-200 max-w-2xl">
              Nem toda empresa precisa de um sistema grande. Muitas vezes, o que resolve
              é um app mais direto, desenhado para a dor certa, com foco em rotina,
              controlo e menos retrabalho.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/diagnostico"
                className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
              >
                Ver o que faz sentido
              </a>

              <a
                href="https://wa.me/351910287128?text=Olá,%20quero%20entender%20se%20um%20app%20faz%20sentido%20para%20o%20meu%20negócio."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* QUANDO FAZ SENTIDO */}
        <div className="space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-50">
              Quando faz sentido investir num app customizado
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              O app certo entra quando o problema está na rotina, no controlo e na
              execução do dia a dia.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">
                Tens processos manuais demais
              </p>
              <p className="mt-2 text-slate-300">
                Excel, WhatsApp, notas soltas e dependência excessiva de pessoas tornam
                a operação lenta e frágil.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">
                A equipa precisa de simplicidade
              </p>
              <p className="mt-2 text-slate-300">
                Em vez de dezenas de ferramentas, faz mais sentido ter um fluxo claro e
                objetivo para a tarefa certa.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">
                Falta visibilidade da operação
              </p>
              <p className="mt-2 text-slate-300">
                O problema não é só executar. É saber o que aconteceu, quem fez, em que
                ponto está e o que precisa de atenção.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">
                Precisas resolver uma dor específica
              </p>
              <p className="mt-2 text-slate-300">
                Nem sempre o caminho é um sistema completo. Às vezes o melhor é atacar
                primeiro o ponto que mais está a travar o negócio.
              </p>
            </div>
          </div>
        </div>

        {/* QUANDO NÃO FAZ SENTIDO */}
        <div className="space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-50">
              Quando um app não é o melhor primeiro passo
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Nem sempre a resposta é construir. Em alguns casos, antes disso, é preciso
              clareza sobre o problema real.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">
                Quando o problema ainda está mal definido
              </p>
              <p className="mt-2 text-slate-300">
                Se nem a dor principal está clara, construir rápido pode gerar retrabalho.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">
                Quando o bloqueio é mais de decisão do que de ferramenta
              </p>
              <p className="mt-2 text-slate-300">
                Às vezes o negócio precisa primeiro de organizar fluxo, prioridade e processo.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">
                Quando querem “um app” sem saber para quê
              </p>
              <p className="mt-2 text-slate-300">
                Tecnologia sem direção só cria mais uma camada de confusão.
              </p>
            </div>
          </div>
        </div>

        {/* COMO TRABALHAMOS */}
        <div className="space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-50">
              Como o trabalho acontece
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              O caminho começa pelo entendimento da rotina e termina numa solução mais
              prática para o teu cenário.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 1
              </p>
              <p className="mt-2 font-semibold text-slate-50">Ler o cenário</p>
              <p className="mt-1 text-slate-300">
                Entender a dor, a rotina e o que realmente está a falhar.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 2
              </p>
              <p className="mt-2 font-semibold text-slate-50">Definir o foco</p>
              <p className="mt-1 text-slate-300">
                Escolher o que o app precisa resolver primeiro, sem exagero nem excesso.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 3
              </p>
              <p className="mt-2 font-semibold text-slate-50">Construir</p>
              <p className="mt-1 text-slate-300">
                Criar a solução com base no uso real e não numa ideia genérica.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 4
              </p>
              <p className="mt-2 font-semibold text-slate-50">Ajustar</p>
              <p className="mt-1 text-slate-300">
                Refinar o que for necessário para o app encaixar melhor na rotina.
              </p>
            </div>
          </div>
        </div>

        {/* EXEMPLOS */}
        <div className="space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-50">
              Tipos de apps que fazem sentido
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Não se trata de tecnologia pela tecnologia. Trata-se de resolver pontos concretos.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Operação
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Registo e controlo de rotina
              </p>
              <p className="mt-2 text-slate-300">
                Checklists, ordens de serviço, etapas de execução, histórico e acompanhamento.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Gestão
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Painéis e organização interna
              </p>
              <p className="mt-2 text-slate-300">
                Visão do que está a acontecer, prioridades, estados e informação num só lugar.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Comercial
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Proposta, catálogo e resposta mais rápida
              </p>
              <p className="mt-2 text-slate-300">
                Fluxos que ajudam a vender melhor e a responder com mais consistência.
              </p>
            </div>
          </div>
        </div>

        {/* CONTEXTOS */}
        <div className="space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-50">
              Aplicado em contextos diferentes
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              A lógica muda conforme o negócio, mas a base é a mesma: resolver a necessidade real.
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
              O diferencial não é só construir
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-slate-200">
              O diferencial está em perceber a real necessidade do negócio, cortar excesso
              e trazer uma solução mais ajustada ao que realmente vai gerar resultado.
            </p>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Se a tua operação precisa de mais controlo, isso pode começar por um app certo
          </h2>

          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Primeiro entendemos o cenário. Depois decidimos se um app é mesmo o melhor caminho.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Fazer diagnóstico
            </a>

            <a
              href="https://wa.me/351910287128?text=Olá,%20quero%20entender%20se%20um%20app%20faz%20sentido%20para%20o%20meu%20negócio."
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
