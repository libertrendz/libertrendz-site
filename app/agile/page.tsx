// app/agile/page.tsx

export default function AgilePage() {
  const CTA_TEXT = "Descobrir o caminho certo (2 min)";

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/35 p-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent-500/14 via-accent-400/8 to-transparent" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Consultoria Ágil
            </p>

            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Projetos e equipas com previsibilidade, entrega e clareza.
            </h1>

            <p className="text-sm text-slate-200 max-w-2xl">
              Para PMEs e equipas que precisam organizar o trabalho e reduzir retrabalho.
              Menos ritual. Mais decisão. Mais entrega.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/diagnostico"
                className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
              >
                {CTA_TEXT}
              </a>

              <a
                href="/contato"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Falar por mensagem
              </a>
            </div>
          </div>
        </div>

        {/* PARA QUEM É */}
        <div className="space-y-4">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Para quem é
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-50">
              Se isto acontece, a equipa não precisa de motivação. Precisa de sistema.
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Cenários típicos onde a consultoria resolve rápido e com impacto prático.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Muito pedido, pouca visibilidade</p>
              <p className="mt-1 text-slate-300">
                Iniciativas em paralelo, tarefas espalhadas e ninguém sabe o que está realmente em andamento.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Prazos estourados e retrabalho</p>
              <p className="mt-1 text-slate-300">
                Escopo muda, prioridades rodam e a equipa perde tempo a apagar incêndio.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">“Ágil” só no discurso</p>
              <p className="mt-1 text-slate-300">
                Cerimónias existem, mas decisões não ficam claras e o impacto na entrega é mínimo.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Prioridade sem critério</p>
              <p className="mt-1 text-slate-300">
                Tudo parece urgente. Sem regras simples, a equipa alterna contexto e a produtividade cai.
              </p>
            </div>
          </div>
        </div>

        {/* O QUE RESOLVEMOS */}
        <div className="space-y-4">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Problemas que resolvemos
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-50">
              Menos ruído no processo. Mais clareza na execução.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Quadro único de controlo</p>
              <p className="mt-1 text-slate-300">
                Um lugar para ver demanda, estado e bloqueios. Sem caça ao tesouro entre canais.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Reuniões com decisão</p>
              <p className="mt-1 text-slate-300">
                Cadência mínima, pauta objetiva e decisões registadas com responsável e próximo passo.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Prioridade com regra</p>
              <p className="mt-1 text-slate-300">
                Critérios simples para dizer sim, dizer não e evitar urgência fabricada.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Métricas úteis</p>
              <p className="mt-1 text-slate-300">
                Indicadores básicos de fluxo e capacidade para parar de decidir no escuro.
              </p>
            </div>
          </div>
        </div>

        {/* COMO TRABALHAMOS */}
        <div className="space-y-4">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Abordagem
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-50">
              Método simples, aplicado à tua realidade.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 1
              </p>
              <p className="mt-2 font-semibold text-slate-50">Ponto de situação</p>
              <p className="mt-1 text-slate-300">
                Leitura do cenário, dores, contexto da equipa e objetivo imediato.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 2
              </p>
              <p className="mt-2 font-semibold text-slate-50">Desenho do fluxo</p>
              <p className="mt-1 text-slate-300">
                Como o trabalho entra, é priorizado, executado e acompanhado.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 3
              </p>
              <p className="mt-2 font-semibold text-slate-50">Acordos e cadência</p>
              <p className="mt-1 text-slate-300">
                Reuniões essenciais, papéis claros e regras de decisão simples.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 4
              </p>
              <p className="mt-2 font-semibold text-slate-50">Acompanhamento</p>
              <p className="mt-1 text-slate-300">
                Implementação guiada e ajustes finos nos primeiros ciclos.
              </p>
            </div>
          </div>
        </div>

        {/* O QUE FICA */}
        <div className="space-y-4">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              O que fica depois
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-50">
              Resultado prático, não um PDF para arquivar.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Fluxo visual e entendido pela equipa</p>
              <p className="mt-1 text-slate-300">
                O trabalho fica visível. Bloqueios aparecem cedo. A gestão volta a ter controlo.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Prioridade objetiva e alinhada</p>
              <p className="mt-1 text-slate-300">
                Critérios simples para reduzir urgência fabricada e proteger a capacidade da equipa.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Reuniões mínimas com decisão</p>
              <p className="mt-1 text-slate-300">
                Pauta, decisão e responsável. O resto deixa de existir.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Métricas simples que orientam</p>
              <p className="mt-1 text-slate-300">
                Capacidade, prazos e fluxo com indicadores suficientes para decidir sem achismo.
              </p>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Queres pôr ordem em projetos e equipas?
          </h2>

          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Começamos pelo ponto de situação. Depois fechamos um plano curto e executável.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              {CTA_TEXT}
            </a>

            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Falar por mensagem
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
