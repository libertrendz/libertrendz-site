// app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-16 md:py-20 space-y-16">
        {/* HERO — impacto + decisão (sem “pilares”) */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/35 p-8 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-700/12 via-accent-500/8 to-transparent" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.35fr,1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                Libertrendz · produto + execução para PMEs
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
                Quando a empresa cresce sem sistema, 
                <span className="block mt-2 text-cyan-300">
                  o caos cobra juros.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base md:text-lg text-slate-200">
                Falta de visibilidade, retrabalho, decisões no escuro e margem a
                desaparecer. A Libertrendz organiza a operação antes que isso
                vire prejuízo estrutural.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/diagnostico"
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm md:text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
                >
                  Descobrir o caminho certo (2 min)
                </a>
                <a
                  href="/cases"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm md:text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
                >
                  Ver casos reais
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-300">
                <span className="rounded-full border border-slate-800 bg-slate-950/40 px-3 py-1">
                  Clareza e previsibilidade
                </span>
                <span className="rounded-full border border-slate-800 bg-slate-950/40 px-3 py-1">
                  Menos ruído, mais controlo
                </span>
                <span className="rounded-full border border-slate-800 bg-slate-950/40 px-3 py-1">
                  Execução sem teatro
                </span>
              </div>
            </div>

            {/* Card lateral — identificação + gancho (sem virar “catálogo”) */}
            <aside className="rounded-2xl border border-slate-800 bg-slate-950/35 p-6 shadow-xl shadow-black/60">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Se isto parece contigo…
              </p>
              <div className="mt-4 space-y-3 text-sm text-slate-200">
                <p className="rounded-xl border border-slate-800 bg-slate-900/30 px-4 py-3">
                  “Trabalhamos muito, mas não sabemos onde estamos.”
                </p>
                <p className="rounded-xl border border-slate-800 bg-slate-900/30 px-4 py-3">
                  “Tudo passa por mim. Se eu paro, a empresa trava.”
                </p>
                <p className="rounded-xl border border-slate-800 bg-slate-900/30 px-4 py-3">
                  “Crescemos, mas o sistema não acompanhou.”
                </p>
                <p className="text-xs text-slate-400">
                  Não é falta de esforço. É falta de estrutura.
                </p>
              </div>

              <div className="mt-5">
                <a
                  href="/diagnostico"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
                >
                  Fazer diagnóstico agora
                </a>
              </div>
            </aside>
          </div>
        </div>

        {/* DORES — identificação rápida */}
        <section className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-slate-50">
              Se alguma destas dores é tua, o próximo passo é decidir com método.
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              A maioria das empresas não precisa de mais ferramentas. Precisa de
              direção, estrutura e execução consistente.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Visibilidade
              </p>
              <p className="mt-2 font-semibold text-slate-50">Gestão no escuro</p>
              <p className="mt-2 text-slate-300">
                Dados espalhados, relatórios atrasados e decisões sem visão do
                todo.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Gargalo
              </p>
              <p className="mt-2 font-semibold text-slate-50">Tudo passa pelo dono</p>
              <p className="mt-2 text-slate-300">
                A empresa não escala porque falta sistema e autonomia para a
                equipa.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Crescimento
              </p>
              <p className="mt-2 font-semibold text-slate-50">Crescer virou risco</p>
              <p className="mt-2 text-slate-300">
                Mais clientes, mais erros, mais retrabalho. O “crescer” começa a
                doer.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Campo
              </p>
              <p className="mt-2 font-semibold text-slate-50">Margem a desaparecer</p>
              <p className="mt-2 text-slate-300">
                Obras/serviços sem controlo: horas infladas, custos invisíveis e
                discussões com clientes.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Ruído
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Ferramentas a mais, sistema a menos
              </p>
              <p className="mt-2 text-slate-300">
                WhatsApp, Excel e softwares desconectados: muito movimento, pouca
                organização.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Conversão
              </p>
              <p className="mt-2 font-semibold text-slate-50">O site não traz negócio</p>
              <p className="mt-2 text-slate-300">
                Tráfego existe, mas lead não. Falta mensagem, prova, CTA e
                rastreio.
              </p>
            </div>
          </div>
        </section>

        {/* CAMINHOS — sem “pilares”, com clareza */}
        <section className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-slate-50">
              Não existe solução única. Existe o caminho certo para o teu cenário.
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              O erro é escolher antes de entender. O diagnóstico define se o teu
              próximo passo é produto, build rápido, conversão ou execução.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Conversão
              </p>
              <p className="mt-2 text-base font-semibold text-slate-50">
                Sites & Landing Pages
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Quando o problema é mensagem, aquisição e lead. Site bonito não
                paga contas. Conversão sim.
              </p>
              <a
                href="/sites"
                className="mt-4 inline-flex text-sm font-semibold text-accent-300 hover:text-accent-200"
              >
                Ver Sites →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Piloto
              </p>
              <p className="mt-2 text-base font-semibold text-slate-50">
                Apps customizados
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Quando existe uma dor específica que precisa ser resolvida rápido
                — sem reinventar a empresa.
              </p>
              <a
                href="/apps"
                className="mt-4 inline-flex text-sm font-semibold text-accent-300 hover:text-accent-200"
              >
                Ver Apps →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Estrutura
              </p>
              <p className="mt-2 text-base font-semibold text-slate-50">Moduz+</p>
              <p className="mt-2 text-sm text-slate-300">
                Quando a operação cresceu e precisa de controlo, integração e
                escala sem burocracia.
              </p>
              <a
                href="/moduz"
                className="mt-4 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200"
              >
                Ver Moduz+ →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Acelerador
              </p>
              <p className="mt-2 text-base font-semibold text-slate-50">
                Consultoria (sem teatro)
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Quando o problema não é ferramenta, é decisão e execução. Põe
                ordem no fluxo antes de gastar de novo.
              </p>
              <a
                href="/agile"
                className="mt-4 inline-flex text-sm font-semibold text-accent-300 hover:text-accent-200"
              >
                Ver Consultoria →
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/35 p-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Funil rápido
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-50">
                  Faz o diagnóstico e recebe uma recomendação clara.
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  3 passos. Sem compromisso. Contato em até 24 horas.
                </p>
              </div>
              <a
                href="/diagnostico"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
              >
                Fazer diagnóstico (2 min)
              </a>
            </div>
          </div>
        </section>

        {/* PROVA — sem inflar */}
        <section className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-slate-50">
              Provas de valor — o que já entregámos
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              Projetos com foco em operação real: menos ruído, mais controlo e
              decisões melhores.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                CONFIANCE
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-50">
                Obras e equipas em campo
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Ponto, operação e gestão com visão do todo.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                LEGISTOR
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-50">
                Escritórios e processos
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Prazos, financeiro e centralização de informação.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                EKKLYN
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-50">
                Comunidades e gestão
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Membros, atividades, finanças e mural.
              </p>
            </article>
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

        {/* CTA FINAL */}
        <section className="space-y-6 border-t border-slate-800 pt-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-50">
            Queres clareza antes de tomar a próxima decisão?
          </h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Sem proposta automática. Primeiro entendemos o contexto. Depois
            indicamos o melhor caminho — Moduz+, app, site/landing ou consultoria.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Agendar diagnóstico
            </a>
            <a
              href="/cases"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Ver casos
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
