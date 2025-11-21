    {/* HIGHLIGHTED CASE / HERO CARD */}
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">Destaque</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-50">
            CONFIANCE — ERP leve para construção (Ponto + Obras + Financeiro)
          </h2>
          <p className="mt-3 text-sm text-slate-200 max-w-3xl">
            Implementámos um ERP modular que substituiu dezenas de folhas de cálculo,
            centralizou registos de ponto com foto/geolocalização e integrou obras,
            colaboradores e financeiro. Resultado: redução de 30% no retrabalho administrativo
            e visibilidade diária do estado das obras.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="#case-confiance"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Ver resumo do case
            </a>
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Quero um ERP leve
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-4 text-sm text-slate-200">
          <div className="font-semibold">Impacto Mensurável</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>• −30% retrabalho administrativo</li>
            <li>• Implementação MVP em 6 semanas</li>
            <li>• Exportações financeiras e relatórios CSV/PDF</li>
          </ul>
        </div>
      </div>
    </div>

    {/* GRID DE CASES */}
    <section>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">Seleção</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-50">Alguns projetos recentes</h3>
        </div>
        <div className="text-sm text-slate-400">Filtros: PMEs • Serviços • Construção</div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {/* Case 1 */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-accent-300">ERP Modular</p>
              <h4 className="mt-2 font-semibold text-slate-50">CONFIANCE — Construção</h4>
            </div>
            <div className="text-xs text-slate-400">2025</div>
          </div>
          <p className="mt-3 text-slate-300">
            Ponto com foto + geolocalização, integração de obras e financeiro com fluxo de
            orçamentos e faturas. MVP funcional em 6 semanas.
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-slate-400">Impacto: −30% retrabalho</span>
            <a href="#case-confiance" className="text-xs text-accent-300 hover:underline">Ver case →</a>
          </div>
        </article>

        {/* Case 2 */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-accent-300">Automação</p>
              <h4 className="mt-2 font-semibold text-slate-50">Fluxo de aprovações — PME Serviços</h4>
            </div>
            <div className="text-xs text-slate-400">2024</div>
          </div>
          <p className="mt-3 text-slate-300">
            Automatizámos aprovação de requisições internas com filas e notificações. Resultado:
            ciclo de aprovação −60% e menos interrupções na equipa.
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-slate-400">Impacto: −60% tempo de aprovação</span>
            <a href="#case-automacao" className="text-xs text-accent-300 hover:underline">Ver case →</a>
          </div>
        </article>

        {/* Case 3 */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-accent-300">Landing & Leads</p>
              <h4 className="mt-2 font-semibold text-slate-50">Landing focalizada — Captação</h4>
            </div>
            <div className="text-xs text-slate-400">2025</div>
          </div>
          <p className="mt-3 text-slate-300">
            Landing com copy direta e formulário otimizado; taxa de conversão aumentada em 3x
            comparado com abordagens anteriores.
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-slate-400">Impacto: ×3 conversão</span>
            <a href="#case-landing" className="text-xs text-accent-300 hover:underline">Ver case →</a>
          </div>
        </article>
      </div>
    </section>

    {/* COMO LER ESTES CASES / METODOLOGIA */}
    <section className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">Método</p>
      <h3 className="text-xl font-semibold text-slate-50">Como avaliamos impacto</h3>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
          <div className="font-semibold">Diagnóstico prático</div>
          <div className="mt-2 text-slate-300">Mapeamos processos e métricas chave antes de desenhar solução.</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
          <div className="font-semibold">MVP focado</div>
          <div className="mt-2 text-slate-300">Entrega rápida do essencial para validar valor real com utilizadores.</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
          <div className="font-semibold">Medição e iteração</div>
          <div className="mt-2 text-slate-300">Métricas simples, revisões curtas e roadmap baseado em uso real.</div>
        </div>
      </div>
    </section>

    {/* COMO PREPARAR O TEU CASE (CALL-TO-ACTION PRÁTICO) */}
    <section className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">Preparar</p>
      <h3 className="text-xl font-semibold text-slate-50">O que trazer para uma conversa produtiva</h3>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
          <div className="font-semibold">Contexto</div>
          <div className="mt-2 text-slate-300">Descrição sucinta do negócio e principais dores operacionais.</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
          <div className="font-semibold">Dados</div>
          <div className="mt-2 text-slate-300">Exemplos de folhas/exports, volumes (clientes, obras, faturas).</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
          <div className="font-semibold">Objetivo</div>
          <div className="mt-2 text-slate-300">O que esperas melhorar: tempo, custo, erros ou visibilidade?</div>
        </div>
      </div>
    </section>

    {/* CTA FINAL */}
    <section className="pt-8 border-t bord
