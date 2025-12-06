export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-16 space-y-16">
        {/* HERO */}
        <div className="grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
              Libertrendz
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Soluções digitais e mentoria para quem exige resultado — não artifício.
              <span className="block text-accent-400">
                Moduz+ · Apps & Websites · Mentoria Tech Reload
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm text-slate-200">
              Projetos e produtos pensados para PMEs que precisam de controlo operacional e profissionais que querem migrar com estratégia.
              Entregas práticas, prioridades claras e tecnologia a favor da operação.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/moduz"
                className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
              >
                Conhecer o Moduz+
              </a>

              <a
                href="/apps"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Apps & Websites
              </a>

              <a
                href="/mentoria"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Mentoria Tech Reload
              </a>
            </div>

            <div className="mt-6 flex gap-6 text-sm text-slate-300">
              <div>
                <div className="font-semibold text-slate-50">Entrega rápida</div>
                <div className="text-xs">Protótipos funcionais em poucas semanas.</div>
              </div>
              <div>
                <div className="font-semibold text-slate-50">Foco em resultado</div>
                <div className="text-xs">Escopo definido, valor mensurável.</div>
              </div>
              <div>
                <div className="font-semibold text-slate-50">Operacional</div>
                <div className="text-xs">Soluções que se encaixam no dia a dia da equipa.</div>
              </div>
            </div>
          </div>

          {/* Bloco “Em poucas linhas” */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl shadow-black/60 lg:translate-y-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Em poucas linhas
            </p>
            <p className="text-sm text-slate-200">
              A Libertrendz junta estratégia, tecnologia e execução para três necessidades claras:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>• Moduz+ — ecossistema modular para PMEs (gestão de pessoas, finance, track, docs e vendas).</li>
              <li>• Apps & Websites — mini-apps, painéis e landing pages para resolver dores imediatas.</li>
              <li>• Mentoria Tech Reload — transição de carreira com diagnóstico LiberTrail, plano e acompanhamento.</li>
            </ul>
          </div>
        </div>

        {/* DESTAQUE LIBERTRAIL */}
        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
                Diagnóstico de carreira
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-50">
                LiberTrail — ponto de partida da Tech Reload
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-200">
                Questionário estruturado que orienta a transição realista para tecnologia (perfil, rota e próximos passos).
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-slate-200 md:text-right">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Como funciona</p>
              <p className="text-[13px] text-slate-300">
                Escolhes um perfil, respondes ao LiberTrail e recebês uma rota prática — sem promessas vazias.
              </p>
              <div className="mt-1 flex flex-wrap justify-start gap-2 md:justify-end">
                <a
                  href="/mentoria#libertrail-perfis"
                  className="inline-flex items-center justify-center rounded-md bg-accent-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow shadow-accent-500/40 transition hover:bg-accent-400"
                >
                  Fazer o LiberTrail
                </a>
                <a
                  href="/mentoria"
                  className="inline-flex items-center justify-center rounded-md border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
                >
                  Ver detalhes da mentoria
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SERVIÇOS PRINCIPAIS */}
        <section id="servicos" className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-50">O que a Libertrendz faz hoje</h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-200">
                Soluções práticas para PMEs e profissionais: produtos claros, entregas rápidas e foco no que gera resultado.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* CARD: MODUZ */}
            <a
              href="/moduz"
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm transition hover:border-accent-400 hover:bg-slate-900/70"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Plataforma</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Moduz+</h3>
                <p className="mt-2 text-slate-200">
                  Ecossistema modular para PMEs: People, Track, Finance, Docs e módulos comerciais ativáveis conforme necessidade.
                </p>
              </div>
              <span className="mt-4 text-xs text-accent-300">Ver Moduz+ →</span>
            </a>

            {/* CARD: APPS & WEBSITES */}
            <a
              href="/apps"
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm transition hover:border-accent-400 hover:bg-slate-900/70"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Apps & Websites</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Soluções sob medida</h3>
                <p className="mt-2 text-slate-200">
                  Mini-apps, painéis, landing pages e websites focados em resolver problemas concretos da operação.
                </p>
              </div>
              <span className="mt-4 text-xs text-accent-300">Ver soluções →</span>
            </a>

            {/* CARD: MENTORIA */}
            <a
              href="/mentoria"
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm transition hover:border-accent-400 hover:bg-slate-900/70"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Mentoria</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Tech Reload + LiberTrail</h3>
                <p className="mt-2 text-slate-200">
                  Programa de transição com diagnóstico, plano de 90 dias e acompanhamento prático.
                </p>
              </div>
              <span className="mt-4 text-xs text-accent-300">Ver mentoria →</span>
            </a>
          </div>
        </section>

        {/* POR QUE LIBERTRENDZ */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">Por que trabalhar com a Libertrendz</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Foco em profissionais e PMEs</p>
              <p>Linguagem, decisões e propostas pensadas para quem precisa de resultado sem teatro.</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Tecnologia como meio</p>
              <p>Ferramentas e processos escolhemos por utilidade e retorno, não por moda.</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Experiência + método</p>
              <p>Diagnóstico, plano, execução e ajuste: processo simples e replicável para cada cliente.</p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="space-y-4 border-t border-slate-800 pt-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-50">Pronto para avançar?</h2>
          <p className="text-sm text-slate-200">
            Começa por conhecer o Moduz+, explorar uma solução rápida ou fazer o LiberTrail — a conversa começa prática.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href="/moduz"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Conhecer o Moduz+
            </a>
            <a
              href="/apps"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Ver Apps & Websites
            </a>
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Entrar em contato
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}