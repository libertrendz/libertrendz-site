export default function ModuzPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        {/* HERO */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Moduz+
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Moduz+ — ecossistema modular para PMEs
            <span className="block text-cyan-400">Ative apenas o que precisa. Cresça sem trabalho manual.</span>
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Uma plataforma pensada para operações reais: módulos ativáveis, roles claros e integrações controladas. Ideal para PMEs que querem digitalizar sem virar reféns de software.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              Agendar demo Moduz+
            </a>
            <a
              href="#arquitetura"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Ver arquitetura
            </a>
          </div>
        </div>

        {/* CARDS DE MÓDULOS (únicos — sem duplicação) */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* CORE */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-4">
              <span className="inline-block h-3 w-10 rounded-full bg-cyan-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Core</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Empresa · Users · Flags</h3>
                <p className="mt-2 text-sm text-slate-300">Empresa única, roles e feature flags. Todas as tabelas de negócio usam <code className="bg-slate-800/50 rounded px-1 py-0.5">empresa_id</code>.</p>
              </div>
            </div>
          </div>

          {/* PEOPLE */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-4">
              <span className="inline-block h-3 w-10 rounded-full bg-emerald-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">People</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Colaboradores & Contratos</h3>
                <p className="mt-2 text-sm text-slate-300">Ficha, vínculos e ligação ao user_id. Pivot para Track, Flow e Payroll futuro.</p>
              </div>
            </div>
          </div>

          {/* TRACK */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-4">
              <span className="inline-block h-3 w-10 rounded-full bg-rose-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Track</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Ponto & Auditoria</h3>
                <p className="mt-2 text-sm text-slate-300">Registo móvel com foto/geo, auditoria e regras de jornada. Export CSV/PDF para folha administrativa.</p>
              </div>
            </div>
          </div>

          {/* FINANCE */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-4">
              <span className="inline-block h-3 w-10 rounded-full bg-amber-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Finance</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Contas & Lançamentos</h3>
                <p className="mt-2 text-sm text-slate-300">Plano de contas simples, lançamentos, centros de custo e relatórios consolidados por empresa.</p>
              </div>
            </div>
          </div>

          {/* BIZZ */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-4">
              <span className="inline-block h-3 w-10 rounded-full bg-violet-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Bizz</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Orçamentos & Contratos</h3>
                <p className="mt-2 text-sm text-slate-300">Fluxo comercial integrado com Finance e Docs — orçamentos, propostas e contratos simples.</p>
              </div>
            </div>
          </div>

          {/* DOCS */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-4">
              <span className="inline-block h-3 w-10 rounded-full bg-sky-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Docs</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Storage & Evidências</h3>
                <p className="mt-2 text-sm text-slate-300">Bucket por empresa com permissões por pasta, integrado com Track/Bizz/Finance.</p>
              </div>
            </div>
          </div>

          {/* STOCK */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-4">
              <span className="inline-block h-3 w-10 rounded-full bg-lime-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Stock</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Inventário & Movimentos</h3>
                <p className="mt-2 text-sm text-slate-300">Entradas/saídas, valorização e integração com Finance.</p>
              </div>
            </div>
          </div>

          {/* ASSETS */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-4">
              <span className="inline-block h-3 w-10 rounded-full bg-slate-500 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Assets</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Frota & Manutenção</h3>
                <p className="mt-2 text-sm text-slate-300">Gestão de ativos, calendários de manutenção e custos integrados com Finance.</p>
              </div>
            </div>
          </div>

          {/* FLOW */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-4">
              <span className="inline-block h-3 w-10 rounded-full bg-indigo-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Flow</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Projetos & Tarefas</h3>
                <p className="mt-2 text-sm text-slate-300">Estrutura de projetos ligada a People, Stock e Finance — entregas, fases e apontamentos quando aplicável.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ARQUITETURA (resumo comercial) */}
        <div id="arquitetura" className="space-y-4 max-w-4xl">
          <h2 className="text-xl font-semibold text-slate-50">Arquitetura multi-tenant</h2>
          <p className="text-sm text-slate-200">
            Moduz+ é multi-módulo com banco único por instância e isolamento por <code className="bg-slate-800/50 rounded px-1 py-0.5">empresa_id</code>. Roles padrão: <strong>admin, interno, externo, técnico</strong>. Módulos ativáveis por empresa (feature flags). Integração entre módulos é feita por APIs de contexto, sem escrita direta em dados críticos de outro módulo.
          </p>

          <ul className="mt-2 space-y-2 text-sm text-slate-300">
            <li>• Implementação recomendada (sequência): Core → People → Track → Docs → Finance → Bizz → Stock → Assets → Flow.</li>
            <li>• MVP ideal: Core + People + Track + Finance básico + Docs + Bizz (contratos simples) + dashboard.</li>
            <li>• Modelo comercial: preço por módulo + custo por utilizador interno; Track com preço próprio.</li>
          </ul>
        </div>

        {/* CTA FINAL */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Quer ver o Moduz em ação?</h2>
          <p className="text-sm text-slate-200">Agende uma demo de 15 minutos — mostramos o MVP e o plano de ativação por módulo.</p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
          >
            Agendar demo
          </a>
        </div>
      </section>
    </main>
  );
}