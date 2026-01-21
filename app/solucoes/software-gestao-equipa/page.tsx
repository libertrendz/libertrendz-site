export default function SoftwareGestaoEquipaPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Equipa com autonomia
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Software de gestão de equipa
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-200">
            Quando tudo passa pelo dono, a empresa não escala. Um sistema de gestão de equipa
            organiza responsabilidades, rotinas e execução com visibilidade.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/moduz"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              Ver no Moduz+
            </a>
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Falar do meu cenário
            </a>
          </div>
        </div>

        {/* SINAIS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Se isto acontece, a gestão de equipa está no improviso
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Tudo depende de validação manual",
              "Tarefas e pedidos ficam perdidos",
              "Não existe dono por assunto",
              "A equipa trabalha, mas ninguém vê avanço",
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

        {/* O QUE RESOLVE */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            O que resolve de verdade (sem complicar)
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Papéis claros
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Responsáveis e permissões
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Cada tema tem dono. Acesso e decisão deixam de ser “depende”.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Rotina visível
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Lista única do que importa
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Pedidos viram trabalho rastreável, com estado e prioridade.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Menos gargalo
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Autonomia com controlo
              </p>
              <p className="mt-2 text-sm text-slate-300">
                A empresa continua segura, mas deixa de travar por aprovação constante.
              </p>
            </div>
          </div>
        </div>

        {/* COMO ENTRA O MODUZ+ */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Como o Moduz+ entra na gestão de equipa
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50 mb-2">
                Base de utilizadores e permissões
              </p>
              <p className="text-sm text-slate-300">
                Define papéis e acessos para reduzir dependência do “dono”.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50 mb-2">
                Fluxo e rotinas
              </p>
              <p className="text-sm text-slate-300">
                Organização prática do trabalho que a equipa executa no dia a dia.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/35 p-6">
            <p className="text-sm text-slate-200">
              A meta é simples: parar de “pagar juros” por falta de estrutura.
            </p>
            <a
              href="/cases"
              className="mt-3 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              Ver casos →
            </a>
          </div>
        </div>

        {/* CTA FINAL ÚNICO */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer tirar a empresa do modo “depende do dono”?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Diz onde está a fricção e eu devolvo um caminho claro.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
          >
            Falar do meu cenário
          </a>
        </div>
      </section>
    </main>
  );
}
