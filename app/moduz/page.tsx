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
            <span className="block text-cyan-400">
              Controla pessoas, operações e finanças sem drama.
            </span>
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Plataforma modular pensada para operações: módulos ativáveis conforme crescimento, permissões claras e integrações que respeitam o fluxo real do negócio.
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

        {/* RÁPIDO — O QUE COMPÕE */}
        <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Core</p>
            <p className="mt-1 text-sm text-slate-200">Empresa, utilizadores, roles e feature flags — base imutável por <code className="bg-slate-800/50 rounded px-1 py-0.5">empresa_id</code>.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">People</p>
            <p className="mt-1 text-sm text-slate-200">Gestão de colaboradores, contratos e ligação a user_id — pivot central para vários módulos.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Track</p>
            <p className="mt-1 text-sm text-slate-200">Ponto móvel com evidência (foto/geo), auditoria e regras de jornada configuráveis.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Finance</p>
            <p className="mt-1 text-sm text-slate-200">Lançamentos, centros de custo e relatórios consolidados por empresa.</p>
          </div>
        </div>

        {/* MÓDULOS — CARDS COM BADGES COLORIDOS */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* CORE */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-4">
              <span className="inline-block h-3 w-10 rounded-full bg-cyan-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Core</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Empresa · Users · Flags</h3>
                <p className="mt-2 text-sm text-slate-300">Registo de empresa, administração de perfis e activação de módulos por contrato. Todas as tabelas de negócio exigem <code className="bg-slate-800/50 rounded px-1 py-0.5">empresa_id</code>.</p>
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
                <p className="mt-2 text-sm text-slate-300">Ficha de colaborador, vínculos, planos de cargos, e ligação segura ao auth user_id — base para Track, Flow e Payroll futuro.</p>
              </div>
            </div>
          </div>

          {/* TRACK */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-4">
              <span className="inline-block h-3 w-10 rounded-full bg-rose-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Track</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Ponto · Auditoria</h3>
                <p className="mt-2 text-sm text-slate-300">Registo móvel com foto/geo, auditoria por auditor e regras configuráveis de jornada e tolerâncias. Export CSV/PDF para folha administrativa.</p>
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
                <p className="mt-2 text-sm text-slate-300">Plano de contas simples, lançamentos, centros de custo e relatórios consolidados (balanço reduzido para PMEs).</p>
              </div>
            </div>
          </div>

          {/* BIZZ */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-4">
              <span className="inline-block h-3 w-10 rounded-full bg-violet-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Bizz</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Orçamentos, Propostas, Contratos</h3>
                <p className="mt-2 text-sm text-slate-300">Fluxo comercial integrado com Finance e Docs — orçamentos com geração de propostas e contratos simples (assinatura digital futura).</p>
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
                <p className="mt-2 text-sm text-slate-300">Bucket por empresa, pastas com permissões e integração com Track / Bizz / Finance para anexar provas e documentos.</p>
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
                <p className="mt-2 text-sm text-slate-300">Entradas/saídas, valorização de stock e integração com Finance para impacto em custos.</p>
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
                <p className="mt-2 text-sm text-slate-300">Gestão de ativos, calendarização de manutenções e custo total de posse integrado com Finance.</p>
              </div>
            </div>
          </div>

          {/* FLOW (projetos) */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-4">
              <span className="inline-block h-3 w-10 rounded-full bg-indigo-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Flow</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Projetos & Tarefas</h3>
                <p className="mt-2 text-sm text-slate-300">Estrutura de projetos ligada a People, Stock e Finance — entregas, fases e apontamentos de horas quando necessário.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ARQUITETURA (resumo) */}
        <div id="arquitetura" className="space-y-4 max-w-4xl">
          <h2 className="text-xl font-semibold text-slate-50">Arquitetura multi-tenant</h2>
          <p className="text-sm text-slate-200">
            Moduz+ usa um único banco por instância do produto com isolamento por <code className="bg-slate-800/50 rounded px-1 py-0.5">empresa_id</code>. Roles padrão: <strong>admin, interno, externo, técnico</strong>. Módulos são activáveis por empresa (feature flags) e integração entre módulos ocorre via APIs de contexto — nenhum módulo escreve diretamente dados críticos de outro sem contrato explícito.
          </p>

          <ul className="mt-2 space-y-2 text-sm text-slate-300">
            <li>• Sequência de implementação recomendada: Core → People → Track → Docs → Finance → Bizz → Stock → Assets → Flow.</li>
            <li>• Modelo comercial modular: preço por módulo + custo por utilizador interno; track com precificação própria.</li>
            <li>• MVP recomendável: Core + People + Track + Finance básico + Docs + Bizz (contratos simples) + dashboard.</li>
          </ul>
        </div>

        {/* CTA FINAL */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Quer ver o Moduz em ação?</h2>
          <p className="text-sm text-slate-200">Agende uma demo de 15 minutos — mostramos o MVP e o caminho para ativar apenas o que realmente precisa.</p>
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