// app/page.tsx

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
              Estratégia, tecnologia e transição de carreira{" "}
              <span className="block text-accent-400">
                para adultos e PMEs que não têm tempo a perder.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-200">
              Mentoria tech para adultos, consultoria ágil sem fantasia e
              apps/ERPs modulares para empresas. Uma casa só para alinhar
              carreira, projetos e sistemas com o que realmente importa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/mentoria#libertrail"
                className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
              >
                Começar pelo LiberTrail
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Ver serviços
              </a>
            </div>
          </div>

          {/* Bloco “Em poucas linhas” — AJUSTADO PARA BAIXO */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl shadow-black/60 lg:translate-y-1">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Em poucas linhas
            </p>
            <p className="text-sm text-slate-200">
              A Libertrendz junta experiência de gestão, prática de projetos
              e tecnologia moderna para oferecer três coisas:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>• Direção clara para quem quer migrar para tech.</li>
              <li>• Estrutura para equipas e projetos ágeis funcionarem.</li>
              <li>• Sistemas sob medida quando o Excel já não chega.</li>
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
                LiberTrail — o ponto de partida da Tech Reload
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-200">
                Um diagnóstico pensado para adultos que querem mudar para
                tecnologia com seriedade: duas portas de entrada, leitura
                profissional do seu perfil e indicação de trilhas possíveis,
                sem empurrar “dev” como solução única.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-slate-200 md:text-right">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Como funciona
              </p>
              <p className="text-[13px] text-slate-300">
                Você escolhe o perfil que mais se parece com você, responde ao
                LiberTrail e, a partir daí, a mentoria Tech Reload entra com
                plano e acompanhamento.
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
              <h2 className="text-xl font-semibold text-slate-50">
                O que a Libertrendz faz hoje
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-200">
                Três eixos que se complementam: pessoas em transição, empresas
                a organizar projetos e negócios a precisar de sistemas que
                realmente ajudem o dia a dia.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* CARD: MENTORIA */}
            <a
              href="/mentoria"
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm transition hover:border-accent-400 hover:bg-slate-900/70"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Mentoria
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">
                  Tech Reload + LiberTrail
                </h3>
                <p className="mt-2 text-slate-200">
                  Mentoria de transição para tecnologia pensada para adultos.
                  Começa com o diagnóstico LiberTrail e segue com plano de 90
                  dias e acompanhamento.
                </p>
              </div>
              <span className="mt-4 text-xs text-accent-300">
                Ver mentoria →
              </span>
            </a>

            {/* CARD: CONSULTORIA ÁGIL */}
            <a
              href="/agile"
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm transition hover:border-accent-400 hover:bg-slate-900/70"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Consultoria Ágil
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">
                  Projetos ágeis sem fantasia
                </h3>
                <p className="mt-2 text-slate-200">
                  Estruturação de fluxo, rituais e métricas para equipas e
                  projetos. Menos teatro, mais previsibilidade e entrega real
                  para PMEs.
                </p>
              </div>
              <span className="mt-4 text-xs text-accent-300">
                Ver consultoria →
              </span>
            </a>

            {/* CARD: APPS & ERPs */}
            <a
              href="/apps"
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm transition hover:border-accent-400 hover:bg-slate-900/70"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Apps & Tiny ERPs
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">
                  Sistemas sob medida, sem drama
                </h3>
                <p className="mt-2 text-slate-200">
                  Apps e ERPs leves construídos em cima de módulos já testados,
                  como o CONFIANCE. Ideal para negócios que cresceram além do
                  Excel, mas não querem um monstro de ERP.
                </p>
              </div>
              <span className="mt-4 text-xs text-accent-300">
                Ver soluções →
              </span>
            </a>
          </div>
        </section>

        {/* POR QUE LIBERTRENDZ */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            Por que trabalhar com a Libertrendz
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">
                Foco em adultos e PMEs
              </p>
              <p>
                A linguagem, os planos e as soluções são pensados para quem já
                viveu o suficiente para não ter paciência para modinha e
                promessa vazia.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">
                Tecnologia como meio, não fim
              </p>
              <p>
                Nada de empurrar stack, metodologia ou ferramenta só porque está
                na moda. A tecnologia entra onde faz sentido para o objetivo.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">
                Experiência + método
              </p>
              <p>
                A combinação de percurso real em gestão, projetos e tech com
                método claro: diagnóstico, plano, execução e ajuste.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="space-y-4 border-t border-slate-800 pt-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-50">
            Pronto para avançar?
          </h2>
          <p className="text-sm text-slate-200">
            Pode começar pelo LiberTrail, explorar um serviço específico ou
            simplesmente usar a página de contato para contar o teu contexto. A
            partir daí, a conversa fica séria.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href="/mentoria#libertrail-perfis"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Começar pelo LiberTrail
            </a>
            <a
              href="/sobre"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Saber mais sobre a Libertrendz
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
