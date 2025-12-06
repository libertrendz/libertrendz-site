export default function ModuzPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        {/* HERO */}
        <div className="max-w-3xl space-y-4 relative z-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Moduz+
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Moduz+ — ecossistema modular para PMEs
            <span className="block text-accent-400">Controla pessoas, operações e finanças sem dor.</span>
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Plataforma modular pensada para operações que precisam de praticidade: módulos ativáveis conforme crescimento, permissões claras e integração com processos reais.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
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

        {/* RESUMO RÁPIDO */}
        <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Core</p>
            <p className="mt-1 text-sm text-slate-200">Empresas, utilizadores, roles e permissões por módulo.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">People</p>
            <p className="mt-1 text-sm text-slate-200">Colaboradores, contratos e ligação a user_id.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Track</p>
            <p className="mt-1 text-sm text-slate-200">Ponto, auditoria móvel e regras de jornada.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Finance</p>
            <p className="mt-1 text-sm text-slate-200">Contas, lançamentos e relatórios básicos integrados.</p>
          </div>
        </div>

        {/* ARQUITETURA (detalhe básico) */}
        <div id="arquitetura" className="space-y-4 max-w-4xl">
          <h2 className="text-xl font-semibold text-slate-50">Arquitetura multi-tenant</h2>
          <p className="text-sm text-slate-200">
            Moduz+ opera com uma base única por empresa: todas as tabelas essenciais têm `empresa_id`. Roles e RLS garantem isolamento e regras previsíveis por perfil (admin, interno, externo, técnico).
          </p>

          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Módulos ativáveis por empresa (feature flags).</li>
            <li>• Integração entre módulos via APIs de contexto — nenhum módulo escreve diretamente dados críticos de outro sem contrato.</li>
            <li>• Sequência de implementação documentada: Core → People → Track → Docs → Finance → Bizz → Stock → Assets → Flow.</li>
          </ul>
        </div>

        {/* MVP E COMERCIAL */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">MVP & modelo comercial</h2>
          <p className="text-sm text-slate-200">
            MVP vendável: Core + People + Track + Finance básico + Docs + Bizz (contrato simples) e dashboard geral. Planos modulares com preço por módulo + por utilizador interno.
          </p>
        </div>

        {/* CTA FINAL */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Quer ver o Moduz em ação?</h2>
          <p className="text-sm text-slate-200">Agende uma demo de 15 minutos — mostramos o MVP e o caminho para ativar apenas o que precisa.</p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Agendar demo
          </a>
        </div>
      </section>
    </main>
  );
}