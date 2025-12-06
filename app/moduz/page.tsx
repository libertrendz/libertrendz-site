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
            <span className="block text-cyan-400">Controla pessoas, operações e finanças sem drama.</span>
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Plataforma modular pensada para operações: módulos ativáveis conforme crescimento, permissões claras e integração com processos reais.
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

        {/* MÓDULOS (visual mais rico, com badges de cor) */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* CORE */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-3">
              <span className="inline-block h-3 w-10 rounded-full bg-cyan-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Core</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Empresa, usuários e permissões</h3>
                <p className="mt-2 text-sm text-slate-300">Cadastro de empresas, perfis, roles e flags de módulos. Base imutável <code className="bg-slate-800/50 rounded px-1 py-0.5">empresa_id</code>.</p>
              </div>
            </div>
          </div>

          {/* PEOPLE */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-3">
              <span className="inline-block h-3 w-10 rounded-full bg-emerald-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">People</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Colaboradores e contratos</h3>
                <p className="mt-2 text-sm text-slate-300">Gestão de colaboradores, vínculos, contratos e ligação ao user_id — pivot usado por vários módulos.</p>
              </div>
            </div>
          </div>

          {/* TRACK */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-3">
              <span className="inline-block h-3 w-10 rounded-full bg-rose-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Track</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Ponto & auditoria móvel</h3>
                <p className="mt-2 text-sm text-slate-300">Registo de ponto móvel com evidência foto/geo, regras de jornada e auditoria que respeita RLS por empresa.</p>
              </div>
            </div>
          </div>

          {/* FINANCE */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-3">
              <span className="inline-block h-3 w-10 rounded-full bg-amber-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Finance</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Contas, lançamentos, fluxos</h3>
                <p className="mt-2 text-sm text-slate-300">Contabilidade simplificada: centros de custo, lançamentos e relatórios consolidados por empresa.</p>
              </div>
            </div>
          </div>

          {/* BIZZ */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-3">
              <span className="inline-block h-3 w-10 rounded-full bg-violet-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Bizz</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Orçamentos & contratos</h3>
                <p className="mt-2 text-sm text-slate-300">Fluxo comercial: orçamentos, propostas e contratos integrados com Finance e Docs.</p>
              </div>
            </div>
          </div>

          {/* DOCS */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-3">
              <span className="inline-block h-3 w-10 rounded-full bg-sky-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Docs</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Storage & evidências</h3>
                <p className="mt-2 text-sm text-slate-300">Repositório por empresa, permissões por pasta e integração com Track / Bizz / Finance.</p>
              </div>
            </div>
          </div>

          {/* STOCK (visual curto) */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-3">
              <span className="inline-block h-3 w-10 rounded-full bg-lime-400 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Stock</p>
                <h3 className="mt-2 text-base font-semibold text-slate-50">Inventário e movimentos</h3>
                <p className="mt-2 text-sm text-slate-300">Inventário leve, entradas/saídas e valorização integrada com Finance.</p>
              </div>
            </div>
          </div>

        </div>

        {/* ARQUITETURA (resumo) */}
        <div id="arquitetura" className="space-y-4 max-w-4xl">
          <h2 className="text-xl font-semibold text-slate-50">Arquitetura multi-tenant</h2>
          <p className="text-sm text-slate-200">
            Moduz+ usa um banco único por instância do produto, com <code className="bg-slate-800/50 rounded px-1 py-0.5">empresa_id</code> em todas as tabelas de negócio. Roles (admin, interno, externo, técnico) e flags de módulo ativam permissões e UI. Integração entre módulos via APIs de contexto, sem escrita direta em dados críticos de outro módulo.
          </p>
        </div>

        {/* CTA FINAL */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Quer ver o Moduz em ação?</h2>
          <p className="text-sm text-slate-200">Agende uma demo de 15 minutos — mostramos o MVP e o caminho para ativar apenas o que precisa.</p>
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