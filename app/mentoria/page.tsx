// app/mentoria/page.tsx

export default function MentoriaPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        {/* HERO */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Mentoria Tech Reload
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Estruturar a tua transição para tecnologia sem recomeçar a vida do zero.
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            A mentoria Tech Reload é pensada para profissionais que querem migrar para
            tecnologia com estratégia — aproveitando a experiência que já têm, em vez
            de jogar tudo fora e começar como se nunca tivessem trabalhado.
          </p>
        </div>

        {/* QUADRO-RESUMO EM CARDS */}
        <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-4">
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-300">
              Para quem
            </p>
            <p className="text-sm text-slate-200">
              Profissionais 30+ / 40+ que querem entrar em tech sem perder anos de
              trajetória anterior.
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-300">
              Ferramenta
            </p>
            <p className="text-sm text-slate-200">
              Um diagnóstico estruturado (LiberTrail) e encontros focados em clareza
              de rota, não em fórmulas mágicas.
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-300">
              Formato
            </p>
            <p className="text-sm text-slate-200">
              Sessões individuais online, com plano de ação entre encontros e
              acompanhamento por um período definido.
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-300">
              Objetivo
            </p>
            <p className="text-sm text-slate-200">
              Sair do “sei que quero mudar” para “sei em que trilha faz sentido apostar
              e o que preciso fazer nos próximos meses”.
            </p>
          </div>
        </div>

        {/* O QUE É TECH RELOAD */}
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-400">
              Visão geral
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
              O que é a mentoria Tech Reload
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl text-sm text-slate-200">
            <p>
              A Tech Reload não é um curso técnico, nem um “pacote motivacional”.
              É uma mentoria para profissionais que já têm estrada, mas precisam
              traduzir essa experiência para um caminho concreto dentro do universo
              de tecnologia.
            </p>
            <p>
              Em vez de prometer uma mudança instantânea, o foco é alinhar as tuas
              competências, interesses e limites de vida real com uma rota possível:
              produto, gestão, dados, operações, delivery, liderança de squads ou
              outro desdobramento que faça sentido.
            </p>
          </div>
        </div>

        {/* LIBERTRAIL — DIAGNÓSTICO OFICIAL */}
        <div className="space-y-5" id="libertrail">
          <div className="space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-400">
              Núcleo da mentoria
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
              LiberTrail — Diagnóstico Oficial
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.8fr,1.2fr] lg:items-start">
            {/* Texto LiberTrail */}
            <div className="space-y-3 text-sm text-slate-200">
              <p>
                O LiberTrail é o diagnóstico oficial da mentoria. Um questionário
                estruturado que analisa o que fizeste até aqui, como pensas,
                como lidas com risco, rotina, estudo, equipa, e o que realmente
                te atrai em tecnologia.
              </p>
              <p>
                A ideia não é encaixar-te numa caixa, mas evitar o erro clássico:
                escolher uma área de tech só porque está “em alta”, e descobrir
                depois que o dia a dia não tem nada a ver contigo.
              </p>
              <p className="text-slate-300">
                Com base nas tuas respostas, o LiberTrail gera uma leitura inicial
                da tua inclinação: mais produto, mais operação, mais delivery,
                mais técnica, mais liderança, etc. Esta leitura não é sentença,
                é ponto de partida para a conversa séria.
              </p>
            </div>

            {/* Cards Perfil 1 e 2 */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-300 mb-1.5">
                  Perfil Trail 1
                </p>
                <p className="font-semibold text-slate-50 mb-1">
                  Já tens alguma vivência com tecnologia
                </p>
                <p className="text-slate-300">
                  Para quem já tocou projetos, produtos, suporte, operações ou
                  áreas próximas de tech, mas quer reorganizar a carreira de forma
                  mais intencional.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-300 mb-1.5">
                  Perfil Trail 2
                </p>
                <p className="font-semibold text-slate-50 mb-1">
                  Estás praticamente a começar do zero
                </p>
                <p className="text-slate-300">
                  Para quem está a dar os primeiros passos, vindo de áreas sem
                  ligação direta com tecnologia, e precisa de clareza sobre por
                  onde começar sem se perder em excesso de opções.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA NA PRÁTICA */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
            Como funciona na prática
          </h2>
          <div className="grid gap-4 md:grid-cols-4 text-sm text-slate-200">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-300">
                Fase 1
              </p>
              <p className="mt-2 font-semibold text-slate-50">Diagnóstico</p>
              <p className="mt-1 text-slate-300">
                Preenchimento do LiberTrail e leitura inicial do teu contexto,
                sem prometer nada que não faça sentido.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-300">
                Fase 2
              </p>
              <p className="mt-2 font-semibold text-slate-50">Rota principal</p>
              <p className="mt-1 text-slate-300">
                Definição conjunta da trilha mais provável para ti, com
                prazos realistas e passos claros.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-300">
                Fase 3
              </p>
              <p className="mt-2 font-semibold text-slate-50">Plano de ação</p>
              <p className="mt-1 text-slate-300">
                Conversão da rota em ações concretas: estudo, networking,
                prática, projetos, posicionamento.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-300">
                Fase 4
              </p>
              <p className="mt-2 font-semibold text-slate-50">Ajustes</p>
              <p className="mt-1 text-slate-300">
                Revisão da rota à medida que avanças, sem apego a plano “perfeito
                no papel”.
              </p>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer começar pelo LiberTrail?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Se estás a considerar uma transição para tecnologia e queres estruturar
            isso com seriedade, podemos começar pelo diagnóstico oficial e decidir
            juntos se a mentoria faz sentido para ti.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Falar sobre a mentoria Tech Reload
          </a>
        </div>
      </section>
    </main>
  );
}