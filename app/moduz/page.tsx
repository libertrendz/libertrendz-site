export default function ModuzPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-14 lg:py-18 space-y-16">
        {/* HERO COMERCIAL — com sombreado cian charmoso */}
        <div className="relative max-w-3xl space-y-4">
          {/* overlay cian suave — efeito visual, pointer-events-none */}
          <div className="pointer-events-none absolute -inset-x-6 -top-8 -bottom-8 -z-10 mx-auto w-[calc(100%+48px)] rounded-2xl bg-gradient-to-r from-cyan-600/10 via-cyan-500/6 to-transparent blur-[18px]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Moduz+</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Moduz+ — módulos ativáveis para PMEs
            <span className="block mt-2 text-cyan-400 text-2xl">Ative apenas o que precisa. Escale com segurança.</span>
          </h1>

          <p className="text-lg text-slate-200 max-w-2xl">
            Um ecossistema modular pensado para operações reais: gestão de colaboradores, registo de ponto, financeiro básico, documentos e fluxos comerciais — tudo ativável por módulo, com planos claros.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contato" className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400">
              Agendar demo
            </a>
            <a href="#planos" className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60">
              Ver planos
            </a>
          </div>
        </div>

        {/* MÓDULOS — cartões com acentos de cor */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-10 rounded bg-cyan-400" />
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">CORE</p>
            </div>
            <h3 className="mt-3 text-base font-semibold text-slate-50">Empresa • Users • Billing</h3>
            <p className="mt-2 text-sm text-slate-300">Conta corporativa, gestão de utilizadores, ativação de módulos e cobrança.</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-10 rounded bg-amber-400" />
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">PEOPLE</p>
            </div>
            <h3 className="mt-3 text-base font-semibold text-slate-50">Colaboradores & Contratos</h3>
            <p className="mt-2 text-sm text-slate-300">Fichas, contratos, anotações e integração com Track (ponto).</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-10 rounded bg-emerald-400" />
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">TRACK</p>
            </div>
            <h3 className="mt-3 text-base font-semibold text-slate-50">Ponto & Auditoria</h3>
            <p className="mt-2 text-sm text-slate-300">Registo móvel com evidência, auditoria e exports prontos para RH.</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-10 rounded bg-violet-400" />
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">FINANCE</p>
            </div>
            <h3 className="mt-3 text-base font-semibold text-slate-50">Contas & Lançamentos</h3>
            <p className="mt-2 text-sm text-slate-300">Financeiro básico, centros de custo e relatórios consolidados.</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-10 rounded bg-sky-400" />
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">DOCS</p>
            </div>
            <h3 className="mt-3 text-base font-semibold text-slate-50">Storage & Evidências</h3>
            <p className="mt-2 text-sm text-slate-300">Anexos por empresa, fluxos de aprovação e integração com Track/Finance.</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-10 rounded bg-rose-400" />
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">BIZZ</p>
            </div>
            <h3 className="mt-3 text-base font-semibold text-slate-50">Orçamentos & Contratos</h3>
            <p className="mt-2 text-sm text-slate-300">Fluxo comercial: orçamento → proposta → contrato simples (integra com Finance).</p>
          </div>
        </div>

        {/* MÓDULOS FUTUROS — comercial, curto */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-xl font-semibold text-slate-50">Módulos previstos</h2>
          <p className="text-sm text-slate-200">Módulos planeados para fases posteriores — ativados conforme demanda e modelo comercial.</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-300">
            <li>• Stock — inventário e ligação com compras.</li>
            <li>• Assets — frota, manutenções e custos.</li>
            <li>• Flow — projetos e fases operacionais.</li>
            <li>• Payroll (avançado) — regras locais e integração folha.</li>
          </ul>
        </div>

        {/* PLANOS COMERCIAIS — direto e curto */}
        <div id="planos" className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm font-semibold text-slate-50">Starter</p>
            <p className="mt-2 text-sm text-slate-300">Core + People + Docs — ideal para validar processos e organizar a equipa.</p>
            <p className="mt-4 text-sm text-accent-300">Preço: a partir de € / mês (contactar).</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm font-semibold text-slate-50">Operacional</p>
            <p className="mt-2 text-sm text-slate-300">Starter + Track + Finance básico — para operações que precisam de controlo diário.</p>
            <p className="mt-4 text-sm text-accent-300">Preço: a partir de € / mês (contactar).</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm font-semibold text-slate-50">Comercial</p>
            <p className="mt-2 text-sm text-slate-300">Operacional + Bizz — ideal para empresas que precisam de funil e contratos integrados.</p>
            <p className="mt-4 text-sm text-accent-300">Preço: a partir de € / mês (contactar).</p>
          </div>
        </div>

        {/* LINK discreto para a ficha técnica (TI) */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <p className="text-sm text-slate-300">Para especificações técnicas e sequência de implementação consulte a <a href="/moduz/tech" className="text-cyan-400 hover:underline">Ficha técnica do Moduz+</a> (documento técnico).</p>
          <a href="/contato" className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400">Agendar demo</a>
        </div>
      </section>
    </main>
  );
}