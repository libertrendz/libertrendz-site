export default function ModuzPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-14 lg:py-18 space-y-16">
        {/* HERO COMERCIAL — sombreado cian */}
        <div className="relative max-w-3xl space-y-4">
          <div className="pointer-events-none absolute -inset-x-6 -top-8 -bottom-8 -z-10 mx-auto w-[calc(100%+48px)] rounded-2xl bg-gradient-to-r from-cyan-600/10 via-cyan-500/6 to-transparent blur-[18px]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Moduz+</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Moduz+ — módulos ativáveis para PMEs.
            <span className="block mt-2 text-cyan-400 text-2xl">Comece com o essencial. Escale por módulos.</span>
          </h1>

          <p className="text-lg text-slate-200 max-w-2xl">
            Um ecossistema modular pensado para operações reais: ative só o que a tua empresa precisa — People, Track, Finance, Docs, Flow e muito mais — sem surpresas ou projetos intermináveis.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              Agendar demo
            </a>
            <a
              href="#planos"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Ver planos
            </a>
          </div>
        </div>

        {/* MÓDULOS DISPONÍVEIS */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-50">Módulos disponíveis</h2>
          <p className="text-sm text-slate-200 max-w-3xl">
            Módulos já implementados e prontos para ativação. Cada módulo entrega valor isolado e integra com o resto do ecossistema.
          </p>

          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3">
                <span className="inline-block h-2 w-10 rounded bg-cyan-400" />
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">CORE</p>
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-50">Conta & Gestão</h3>
              <p className="mt-2 text-sm text-slate-300">Conta corporativa, gestão de utilizadores, ativação de módulos e settings centrais — o painel de controlo da empresa.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3">
                <span className="inline-block h-2 w-10 rounded bg-amber-400" />
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">PEOPLE</p>
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-50">Colaboradores & Contratos</h3>
              <p className="mt-2 text-sm text-slate-300">Fichas, contratos, histórico e vínculos para gerir a equipa com clareza.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3">
                <span className="inline-block h-2 w-10 rounded bg-emerald-400" />
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">TRACK</p>
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-50">Ponto & Auditoria</h3>
              <p className="mt-2 text-sm text-slate-300">Registo móvel com evidência e auditoria — exportações prontas para RH.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3">
                <span className="inline-block h-2 w-10 rounded bg-sky-400" />
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">DOCS</p>
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-50">Storage & Evidências</h3>
              <p className="mt-2 text-sm text-slate-300">Anexos centralizados por empresa, controle de versões e provas digitais para auditoria.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3">
                <span className="inline-block h-2 w-10 rounded bg-violet-400" />
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">FINANCE</p>
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-50">Contas & Lançamentos</h3>
              <p className="mt-2 text-sm text-slate-300">Financeiro básico com centros de custo e relatórios práticos para decisões rápidas.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3">
                <span className="inline-block h-2 w-10 rounded bg-rose-400" />
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">BIZZ</p>
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-50">Orçamentos & Contratos</h3>
              <p className="mt-2 text-sm text-slate-300">Fluxo completo: orçamento → proposta → contrato simples, integrado com Finance.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3">
                <span className="inline-block h-2 w-10 rounded bg-cyan-300" />
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">FLOW</p>
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-50">Projetos & Fases</h3>
              <p className="mt-2 text-sm text-slate-300">Gestão de projetos operacionais com integração a People, Finance e Docs.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3">
                <span className="inline-block h-2 w-10 rounded bg-lime-400" />
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">ASSETS</p>
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-50">Frota & Ativos</h3>
              <p className="mt-2 text-sm text-slate-300">Gestão de ativos, manutenção e custos — visibilidade operacional e financeira.</p>
            </div>
          </div>
        </div>

        {/* MÓDULOS EM DESENVOLVIMENTO */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-xl font-semibold text-slate-50">Módulos em desenvolvimento</h2>
          <p className="text-sm text-slate-200">Funcionalidades planeadas para fases seguintes, ativação conforme demanda comercial.</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-300">
            <li>• Stock — inventário e movimentos (planeado).</li>
            <li>• Payroll (avançado) — regras locais e integração folha (planeado).</li>
            <li>• CRM & BI — evolução para gestão comercial e reporting avançado (planeado).</li>
          </ul>
        </div>

        {/* PLANOS COMERCIAIS */}
        <div id="planos" className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm font-semibold text-slate-50">Starter</p>
            <p className="mt-2 text-sm text-slate-300">Core + People + Docs — ideal para organizar equipa e processos.</p>
            <p className="mt-4 text-sm text-accent-300">Preço: contacte para proposta.</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm font-semibold text-slate-50">Operacional</p>
            <p className="mt-2 text-sm text-slate-300">Starter + Track + Finance — para operações que precisam de controlo diário.</p>
            <p className="mt-4 text-sm text-accent-300">Preço: contacte para proposta.</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm font-semibold text-slate-50">Comercial</p>
            <p className="mt-2 text-sm text-slate-300">Operacional + Bizz (+ Flow/Assets) — para empresas com necessidades comerciais integradas.</p>
            <p className="mt-4 text-sm text-accent-300">Preço: contacte para proposta.</p>
          </div>
        </div>

        {/* DIFERENCIAIS CURTOS */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-xl font-semibold text-slate-50">Por que escolher o Moduz+</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Modularidade real</p>
              <p>Ative apenas os módulos que a tua empresa usa — reduza custo e complexidade.</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Implementação prática</p>
              <p>MVPs curtos e melhoria contínua baseada em uso real, não em teoria.</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Produto + serviço</p>
              <p>Fornecemos produto e apoio à adoção (implementação, formação e suporte inicial).</p>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Quer ver o Moduz+ em ação?</h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">Agende uma demo dirigida — mostramos como ativar os módulos que resolvem o problema da tua PME sem promessas vazias.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              Agendar demo
            </a>
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Pedir proposta
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}