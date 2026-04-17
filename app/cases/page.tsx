// app/cases/page.tsx

export default function CasesPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Cases
          </p>

          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Projetos pensados para resolver contexto real, não só para parecer bonitos.
          </h1>

          <p className="text-sm text-slate-200 max-w-2xl">
            Cada caso parte de uma necessidade concreta. O foco nunca foi “ter mais um
            projeto”. O foco foi organizar melhor, comunicar melhor ou tornar a rotina
            mais funcional.
          </p>
        </div>

        {/* INTRO */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                O que vais ver aqui
              </p>
              <p className="mt-2 text-slate-300">
                Casos ligados a organização, operação, presença digital e estruturação de produto.
              </p>
            </div>

            <div className="text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                O que interessa
              </p>
              <p className="mt-2 text-slate-300">
                O problema que existia, a lógica da solução e o tipo de impacto gerado.
              </p>
            </div>

            <div className="text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Próxima evolução
              </p>
              <p className="mt-2 text-slate-300">
                Esta página já fica preparada para receber prints e exemplos visuais depois.
              </p>
            </div>
          </div>
        </div>

        {/* CASE 1 */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/35 overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1.4fr,0.9fr]">
            <div className="p-8 space-y-5">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Remodelações · Operação
                </p>
                <h2 className="text-2xl font-semibold text-slate-50">
                  CONFIANCE
                </h2>
                <p className="text-sm text-slate-300">
                  Estrutura para empresas que precisam de mais controlo na operação, no
                  campo e na organização da rotina.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-sm">
                  <p className="font-semibold text-slate-50">Desafio</p>
                  <p className="mt-2 text-slate-300">
                    Informação dispersa, controlo frágil, comunicação entre frente e retaguarda
                    com demasiado atrito.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-sm">
                  <p className="font-semibold text-slate-50">Solução</p>
                  <p className="mt-2 text-slate-300">
                    App operacional pensado para apoiar execução, registo, gestão de equipa
                    e visão mais clara da operação.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-sm">
                  <p className="font-semibold text-slate-50">Impacto</p>
                  <p className="mt-2 text-slate-300">
                    Mais rastreio, mais controlo e melhor base para decisão no dia a dia.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 lg:border-t-0 lg:border-l bg-slate-950/20 p-8 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Leitura rápida
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>• Contexto de remodelações e operação real</li>
                <li>• Foco em rotina, execução e visibilidade</li>
                <li>• Caso forte para futura prova visual</li>
              </ul>
            </div>
          </div>
        </article>

        {/* CASE 2 */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/35 overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1.4fr,0.9fr]">
            <div className="p-8 space-y-5">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Advocacia · Gestão
                </p>
                <h2 className="text-2xl font-semibold text-slate-50">
                  LTZ-JUS
                </h2>
                <p className="text-sm text-slate-300">
                  Estrutura para escritórios que precisam de mais organização, visibilidade
                  e menos dispersão administrativa.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-sm">
                  <p className="font-semibold text-slate-50">Desafio</p>
                  <p className="mt-2 text-slate-300">
                    Processos, prazos e rotinas com demasiada dispersão e fricção na gestão.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-sm">
                  <p className="font-semibold text-slate-50">Solução</p>
                  <p className="mt-2 text-slate-300">
                    Estrutura digital para centralizar acompanhamento, apoio administrativo
                    e organização do fluxo.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-sm">
                  <p className="font-semibold text-slate-50">Impacto</p>
                  <p className="mt-2 text-slate-300">
                    Menos esforço manual, mais centralização e melhor previsibilidade da rotina.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 lg:border-t-0 lg:border-l bg-slate-950/20 p-8 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Leitura rápida
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>• Aplicável a serviços intensivos em informação</li>
                <li>• Forte ligação com organização e rotina</li>
                <li>• Reforça presença no nicho jurídico</li>
              </ul>
            </div>
          </div>
        </article>

        {/* CASE 3 */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/35 overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1.4fr,0.9fr]">
            <div className="p-8 space-y-5">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Organizações · Comunidade
                </p>
                <h2 className="text-2xl font-semibold text-slate-50">
                  LTZ-CHURCH
                </h2>
                <p className="text-sm text-slate-300">
                  Estrutura digital pensada para comunidades e organizações que precisam
                  de centralização, comunicação e acompanhamento.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-sm">
                  <p className="font-semibold text-slate-50">Desafio</p>
                  <p className="mt-2 text-slate-300">
                    Informação fragmentada, gestão descentralizada e dificuldade de manter
                    a comunidade alinhada.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-sm">
                  <p className="font-semibold text-slate-50">Solução</p>
                  <p className="mt-2 text-slate-300">
                    Plataforma com área institucional e organização de informação, atividades
                    e pontos de contacto.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-sm">
                  <p className="font-semibold text-slate-50">Impacto</p>
                  <p className="mt-2 text-slate-300">
                    Mais clareza para liderança, melhor comunicação e menos dispersão operacional.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 lg:border-t-0 lg:border-l bg-slate-950/20 p-8 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Leitura rápida
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>• Fortalece o nicho de igrejas e organizações</li>
                <li>• Liga site + estrutura + comunidade</li>
                <li>• Tem grande potencial visual para case futuro</li>
              </ul>
            </div>
          </div>
        </article>

        {/* CASE 4 */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/35 overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1.4fr,0.9fr]">
            <div className="p-8 space-y-5">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Estratégia · Produto
                </p>
                <h2 className="text-2xl font-semibold text-slate-50">
                  BLACKFLOW
                </h2>
                <p className="text-sm text-slate-300">
                  Sistema privado de apoio a decisão, pensado para reduzir ruído e ajudar
                  a transformar informação em ação mais consistente.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-sm">
                  <p className="font-semibold text-slate-50">Desafio</p>
                  <p className="mt-2 text-slate-300">
                    Excesso de estímulos, dispersão e dificuldade em manter um processo
                    estratégico consistente.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-sm">
                  <p className="font-semibold text-slate-50">Solução</p>
                  <p className="mt-2 text-slate-300">
                    Estrutura privada para organizar sinais, oportunidades, critérios e decisões.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-sm">
                  <p className="font-semibold text-slate-50">Impacto</p>
                  <p className="mt-2 text-slate-300">
                    Mais consistência estratégica, menos dispersão e melhor leitura de prioridades.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 lg:border-t-0 lg:border-l bg-slate-950/20 p-8 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Leitura rápida
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>• Reforça autoridade em produto e estrutura</li>
                <li>• Mostra raciocínio além do operacional</li>
                <li>• Sustenta bem a frente “Produto &amp; Execução”</li>
              </ul>
            </div>
          </div>
        </article>

        {/* BLOCOS DE FORÇA */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Nichos já validados
            </p>
            <p className="mt-3 text-slate-300">
              Remodelações, advocacia, serviços, vendas e organizações.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              O ponto em comum
            </p>
            <p className="mt-3 text-slate-300">
              Resolver melhor a necessidade real do negócio, sem empurrar solução errada.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Próxima camada
            </p>
            <p className="mt-3 text-slate-300">
              Inserir prints, mockups e evidências visuais para aumentar ainda mais a prova.
            </p>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Se o teu contexto pede algo mais ajustado, começamos por perceber isso.
          </h2>

          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Em vez de adivinhar a solução, primeiro definimos o caminho mais lógico.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Fazer diagnóstico
            </a>

            <a
              href="https://wa.me/351910287128?text=Olá,%20vi%20os%20cases%20da%20Libertrendz%20e%20quero%20entender%20o%20que%20faz%20sentido%20para%20o%20meu%20caso."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
