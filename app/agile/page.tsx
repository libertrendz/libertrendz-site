// app/agile/page.tsx

export default function AgilePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16">
        {/* HERO */}
        <div className="grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
              Consultoria Ágil Libertrendz
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
              Projetos ágeis sem fantasia.  
              <span className="block text-accent-400">
                Foco em entrega, não em post-it colorido.
              </span>
            </h1>
            <p className="mb-4 text-sm text-slate-200">
              A consultoria ágil da Libertrendz é feita para empresas que querem
              resultados concretos: projetos que andam, equipas que entregam e
              indicadores que fazem sentido para o negócio.
            </p>
            <p className="mb-6 text-sm text-slate-300">
              Scrum, Kanban, OKRs, sprints e rituais são meios. O fim é simples:
              entregar o que foi prometido, com previsibilidade e menos caos.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:contato@libertrendz.eu?subject=Consultoria%20%C3%81gil%20Libertrendz"
                className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
              >
                Falar sobre um projeto ágil
              </a>
              <a
                href="#formatos"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Ver formatos de atuação
              </a>
            </div>
          </div>

          {/* Bloco de “snapshot” de valor */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl shadow-black/50">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Em poucas linhas
            </p>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>• Foco em PMEs e equipas enxutas.</li>
              <li>• Estrutura de projeto clara: backlog, fluxo, critérios de pronto.</li>
              <li>• Rituais ágeis sem teatro: reuniões úteis e objetivas.</li>
              <li>• Métricas que o gestor entende: lead time, throughput, previsibilidade.</li>
            </ul>
          </div>
        </div>

        {/* BLOCO: PROBLEMA REAL */}
        <div className="mt-16 space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            O “ágil de palestra” não resolve o caos do dia a dia.
          </h2>
          <p className="text-sm text-slate-200">
            Muitas empresas já “implantaram ágil” no papel. Nomearam PO, criaram
            squads, colaram post-its e compraram uma ferramenta cara. E, mesmo
            assim:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">O que costuma acontecer:</p>
              <ul className="space-y-1">
                <li>• Projetos continuam atrasando.</li>
                <li>• Equipa vive apagando incêndio.</li>
                <li>• Reuniões cheias, agenda vazia de entregas.</li>
                <li>• “Ágil” vira desculpa para falta de planejamento.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">
                O que a Libertrendz faz diferente:
              </p>
              <ul className="space-y-1">
                <li>• Começa pelo fluxo real de trabalho, não pelo framework.</li>
                <li>• Adapta Scrum/Kanban à realidade da empresa, não o contrário.</li>
                <li>• Define poucos indicadores que importam para a gestão.</li>
                <li>• Trabalha com piloto controlado, depois escala o modelo.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BLOCO: COMO FUNCIONA */}
        <div id="formatos" className="mt-16 space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            Como funciona a Consultoria Ágil Libertrendz
          </h2>
          <p className="text-sm text-slate-200">
            A atuação é modular e direta. Nada de documentos intermináveis ou
            apresentações que ninguém lê. O foco é colocar um fluxo de trabalho
            previsível de pé — e deixar a equipa confortável para rodar sozinha.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Diagnóstico
              </p>
              <p className="mb-3">
                Leitura rápida do momento atual: projetos ativos, equipa, dores,
                ferramentas e expectativas da direção.
              </p>
              <ul className="space-y-1 text-[13px] text-slate-300">
                <li>• 1 a 3 sessões com gestão + equipa.</li>
                <li>• Mapa de fluxo atual (do pedido à entrega).</li>
                <li>• Identificação de gargalos óbvios.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Desenho do fluxo
              </p>
              <p className="mb-3">
                Definição de um fluxo enxuto e claro para um ou dois projetos
                piloto — sem travar a empresa inteira.
              </p>
              <ul className="space-y-1 text-[13px] text-slate-300">
                <li>• Backlog organizado com critérios claros.</li>
                <li>• Definição de políticas (WIP, prioridades, handoffs).</li>
                <li>• Escolha entre Scrum, Kanban ou modelo híbrido.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Acompanhamento
              </p>
              <p className="mb-3">
                Implementação acompanhada por um ciclo fechado (por exemplo,
                6–8 semanas), com ajustes de rota e consolidação do modelo.
              </p>
              <ul className="space-y-1 text-[13px] text-slate-300">
                <li>• Rituais ágeis objetivos (planeamento, review, retro).</li>
                <li>• Leitura de métricas e ajustes semanais.</li>
                <li>• Entrega de um modelo repetível para outros projetos.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BLOCO: PARA QUEM É */}
        <div className="mt-16 space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            Para quem é a Consultoria Ágil Libertrendz
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">
                Empresas que se identificam com:
              </p>
              <ul className="space-y-1">
                <li>• “Estamos sempre ocupados, mas pouco avança.”</li>
                <li>• “Temos muitas prioridades ao mesmo tempo.”</li>
                <li>• “Tentámos implantar ágil, mas ficou no discurso.”</li>
                <li>• “Precisamos de previsibilidade para prometer prazos.”</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">
                Perfil de cliente ideal:
              </p>
              <ul className="space-y-1">
                <li>• PMEs em crescimento (Portugal ou Brasil).</li>
                <li>• Equipas de produto, tecnologia ou operações.</li>
                <li>• Direção disposta a testar um piloto seriamente.</li>
                <li>• Interesse em indicadores simples e acionáveis.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="mt-16 space-y-4 border-t border-slate-800 pt-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer um ágil que funcione na sua empresa, não só no slide?
          </h2>
          <p className="text-sm text-slate-200">
            Começamos pequeno, com um piloto claro e métricas simples. A partir
            daí, ou faz sentido escalar — ou não. Mas a decisão passa a ser
            baseada em dados, não em modas.
          </p>
          <div className="mt-4 flex justify-center">
            <a
              href="mailto:contato@libertrendz.eu?subject=Consultoria%20%C3%81gil%20Libertrendz"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Falar sobre um piloto ágil
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
