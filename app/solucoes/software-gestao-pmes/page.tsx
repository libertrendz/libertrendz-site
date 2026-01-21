///app/solucoes/software-gestao-pmes/page.tsx


export default function SoftwareGestaoPMEsPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Operação com controlo
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Software de gestão para PMEs
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-200">
            Menos ruído, mais previsibilidade. Um sistema modular para organizar equipa,
            rotinas e controlo sem virar burocracia.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/moduz"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              Ver como funciona no Moduz+
            </a>
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Falar do meu cenário
            </a>
          </div>
        </div>

        {/* DORES (cards compactos) */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Sinais de que a empresa cresceu sem sistema
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              Tudo passa por uma pessoa só
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              Excel e WhatsApp viraram “ERP”
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              Falta visibilidade do que está em curso
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              Margem some e ninguém sabe onde
            </div>
          </div>
        </div>

        {/* O QUE UM BOM SISTEMA PRECISA TER (sem lenga-lenga) */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            O que um bom software de gestão precisa entregar
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Pessoas e acesso
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Quem faz o quê, com que permissão
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Utilizadores, papéis, responsabilidades e histórico.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Rotina e execução
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Trabalho organizado, não “apagar incêndio”
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Processos claros, tarefas e acompanhamento simples.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Controlo e previsibilidade
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Visibilidade de custos e decisões melhores
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Registos consistentes, relatórios práticos e menos surpresa.
              </p>
            </div>
          </div>
        </div>

        {/* COMO ENTRA O MODUZ+ (mapeamento curto, sem “wizard”) */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Como o Moduz+ encaixa nisto
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50 mb-2">
                Modular por natureza
              </p>
              <p className="text-sm text-slate-300">
                Ativas apenas o que resolve o teu problema agora, e evoluis por fases.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50 mb-2">
                Foco em operação real
              </p>
              <p className="text-sm text-slate-300">
                Menos promessas genéricas, mais rotina organizada e controlo do dia a dia.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/35 p-6">
            <p className="text-sm text-slate-200">
              Se a tua empresa cresceu e perdeu controlo, o problema raramente é “falta de ferramenta”.
              É falta de sistema.
            </p>
            <a
              href="/cases"
              className="mt-3 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              Ver casos reais →
            </a>
          </div>
        </div>

        {/* FAQ curto (SEO sem virar bíblia) */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Perguntas rápidas</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50">
                “Software de gestão” é ERP?
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Pode ser. A diferença é começar pelo essencial e crescer com método, sem “big bang”.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50">
                Quanto tempo demora para ver valor?
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Quando há foco, dá para organizar rotinas e ganhar visibilidade cedo.
              </p>
            </div>
          </div>
        </div>

        {/* CTA FINAL — ÚNICO */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer organizar a empresa sem virar refém de processo?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Conta o cenário atual e eu aponto o caminho mais lógico.
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
