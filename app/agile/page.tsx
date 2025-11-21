// app/agile/page.tsx

export default function AgilePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        {/* HERO */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Consultoria Ágil
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Projetos ágeis sem teatro — foco em previsibilidade, entrega e clareza.
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            A consultoria ágil da Libertrendz é pensada para profissionais e PMEs
            que precisam organizar projetos, equipas e fluxos de trabalho sem 
            transformar o dia a dia num ritual interminável de post-its e reuniões.
          </p>
        </div>

        {/* PARA QUEM É — EM CARDS */}
        <div className="space-y-4">
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-accent-300 mb-1">
              Para quem é
            </p>
           </div>
          <p className="text-sm text-slate-200 max-w-3xl">
            Para empresas e equipas que se revêem em pelo menos um destes cenários:
          </p>
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="font-semibold text-slate-50 mb-1">
                Muito pedido, pouca visibilidade
              </p>
              <p className="text-slate-300">
                Muitas iniciativas em paralelo, tarefas espalhadas por vários canais
                e nenhuma visão clara do que está realmente em andamento.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="font-semibold text-slate-50 mb-1">
                Prazos estourados e retrabalho
              </p>
              <p className="text-slate-300">
                Entregas atrasadas, escopos a mudar toda hora e sensação constante 
                de que tudo poderia ter sido combinado melhor.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="font-semibold text-slate-50 mb-1">
                “Ágil” só no discurso
              </p>
              <p className="text-slate-300">
                Termos bonitos e rituais rodando, mas pouca ligação com a realidade 
                do negócio e quase nenhum impacto visível na entrega.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="font-semibold text-slate-50 mb-1">
                Falta de critério e métricas
              </p>
              <p className="text-slate-300">
                Tudo parece urgente, nada tem prioridade clara e as decisões 
                são tomadas sem dados mínimos de fluxo e capacidade.
              </p>
            </div>
          </div>
        </div>

        {/* PROBLEMAS TIPICOS */}
        <div className="space-y-4 max-w-3xl">
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-accent-300 mb-1">
              Problemas típicos que ajudamos a resolver
            </p>
            </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="font-semibold text-slate-50 mb-1">
                Falta de visão do todo
              </p>
              <p className="text-slate-300">
                Projetos, demandas e urgências espalhadas em vários canais 
                (e-mail, chat, telefone), sem um quadro único de controlo.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="font-semibold text-slate-50 mb-1">
                Reuniões demais, decisões de menos
              </p>
              <p className="text-slate-300">
                Ritual ágil sem propósito: muita cerimónia, pouca decisão 
                objetiva e quase nenhum follow-up claro.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="font-semibold text-slate-50 mb-1">
                Prioridades confusas
              </p>
              <p className="text-slate-300">
                Tudo parece urgente. Nada tem critério. A equipa alterna contexto 
                o tempo todo e a produtividade real cai.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="font-semibold text-slate-50 mb-1">
                Falta de métricas simples
              </p>
              <p className="text-slate-300">
                Não há indicadores mínimos de fluxo, capacidade ou lead time. 
                A gestão decide “no escuro”.
              </p>
            </div>
          </div>
        </div>

        {/* COMO TRABALHAMOS */}
        <div className="space-y-4">
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-accent-300 mb-1">
              Proposta e Abordagem
            </p>
           </div>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Fase 1
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Diagnóstico rápido
              </p>
              <p className="mt-1 text-slate-300">
                Leitura da operação atual, principais dores, contexto de equipa 
                e expectativas de negócio.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Fase 2
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Desenho do fluxo
              </p>
              <p className="mt-1 text-slate-300">
                Definição de como o trabalho entra, é priorizado, executado e 
                acompanhado — sem complicar.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Fase 3
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Rituais e acordos
              </p>
              <p className="mt-1 text-slate-300">
                Ajuste de reuniões, cadências, papéis e regras de jogo — 
                só o essencial para dar previsibilidade.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Fase 4
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Acompanhamento
              </p>
              <p className="mt-1 text-slate-300">
                Implementação guiada, acompanhamento dos primeiros ciclos e 
                ajustes finos conforme a realidade da equipa.
              </p>
            </div>
          </div>
        </div>

        {/* O QUE ENTREGAMOS */}
        <div className="space-y-4 max-w-3xl">
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-accent-300 mb-1">
              O que fica depois da consultoria
            </p>
            </div>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Fluxo de trabalho claro, visual e compreendido pela equipa.</li>
            <li>• Critérios de priorização objetivos e alinhados com o negócio.</li>
            <li>• Rituais mínimos, com pauta clara e decisões registadas.</li>
            <li>• Métricas simples para acompanhar capacidade e prazos.</li>
            <li>• Linguagem alinhada entre gestão e equipa sobre “o que é prioridade”.</li>
          </ul>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer pôr ordem nos projetos e equipas?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Se fizer sentido, começamos com uma conversa direta sobre a tua 
            realidade atual — sem compromisso, sem proposta automática. 
            Primeiro entendimento, depois decisão.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Falar sobre a minha equipa e projetos
          </a>
        </div>
      </section>
    </main>
  );
}
