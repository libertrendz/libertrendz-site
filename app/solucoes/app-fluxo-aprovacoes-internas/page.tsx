export default function AppFluxoAprovacoesInternasPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            Apps customizados
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            App para fluxos de aprovação internos
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-200">
            Compras, pedidos, reembolsos, pedidos de cliente, solicitações internas.
            Se tudo depende de favores no chat, você não tem processo. Você tem sorte.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/apps"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Ver Apps customizados
            </a>
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Falar do meu cenário
            </a>
          </div>
        </div>

        {/* PROBLEMAS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            O que isso resolve
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Pedidos sem dono e sem prazo",
              "Aprovação vira gargalo invisível",
              "Regras mudam a cada pessoa",
              "Auditoria e rastreio inexistentes",
            ].map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200"
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* COMPONENTES DO PILOTO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Componentes do piloto
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Solicitação
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Formulário com regras
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Campos mínimos, anexos e validação por tipo de pedido.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Aprovação
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Fluxo e responsáveis
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Quem aprova, em que ordem, com registo do motivo.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Visibilidade
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Lista e status claros
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Aberto, pendente, aprovado, rejeitado, concluído.
              </p>
            </div>
          </div>
        </div>

        {/* EXEMPLOS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Exemplos comuns de fluxos
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { t: "Compras e fornecedores", d: "Pedido, cotação, aprovação, evidência e registo." },
              { t: "Reembolsos e despesas", d: "Solicitação, anexos, aprovação e histórico." },
              { t: "Pedidos de cliente", d: "Escopo, aprovação interna e confirmação ao cliente." },
              { t: "Mudanças e exceções", d: "Regra clara para não virar conversa infinita." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="text-sm font-semibold text-slate-50">{x.t}</p>
                <p className="mt-2 text-sm text-slate-300">{x.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer transformar pedidos em processo?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Diz qual fluxo mais dói hoje e quem precisa aprovar.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Falar do meu cenário
          </a>
        </div>
      </section>
    </main>
  );
}
