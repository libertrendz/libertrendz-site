// app/sobre/page.tsx
import Image from "next/image";

const FOTO_URL = "/images/GUSTAVO.png";

export default function SobrePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-12">
        {/* HERO */}
        <div className="relative max-w-3xl space-y-4">
          <div className="pointer-events-none absolute -inset-x-6 -top-8 -bottom-8 -z-10 rounded-2xl bg-gradient-to-r from-accent-500/12 via-accent-400/6 to-transparent blur-[16px]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Sobre
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Produto e execução para PMEs que precisam de controlo.
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            A Libertrendz atua quando a operação começa a doer. Crescimento sem
            estrutura gera ruído, retrabalho e decisões no escuro. O foco aqui é
            clareza, previsibilidade e execução prática.
          </p>
        </div>

        {/* CARD 1 — GUSTAVO + CREDIBILIDADE */}
        <section className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/35">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent-500/12 via-cyan-700/8 to-transparent" />
          <div className="relative z-10 grid gap-10 p-8 lg:grid-cols-[2.1fr,1fr] lg:items-start">
            {/* TEXTO */}
            <div className="space-y-8 text-sm text-slate-200">
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-slate-50">
                  Quem é o Gustavo Santos
                </h2>
                <p>
                  Trago quase três décadas de experiência em gestão, operações e
                  projetos, em contextos onde erro custa caro, atraso gera impacto
                  real e decisões precisam de critério.
                </p>
                <p>
                  Trabalhei em ambientes exigentes, sempre com o mesmo objetivo:
                  transformar complexidade em decisões claras e executáveis.
                </p>
                <p>
                  O meu trabalho começa onde normalmente se falha: entender o
                  cenário real, cortar ruído e criar estrutura suficiente para
                  sustentar crescimento sem burocracia.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-slate-50">
                  Como penso e trabalho
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>
                    •{" "}
                    <span className="font-semibold text-slate-100">
                      Zero teatro:
                    </span>{" "}
                    método é meio, não fim.
                  </li>
                  <li>
                    •{" "}
                    <span className="font-semibold text-slate-100">
                      Contexto primeiro:
                    </span>{" "}
                    leitura honesta da operação antes da solução.
                  </li>
                  <li>
                    •{" "}
                    <span className="font-semibold text-slate-100">
                      Decisão com critério:
                    </span>{" "}
                    fluxo visível, prioridades claras e métricas simples.
                  </li>
                  <li>
                    •{" "}
                    <span className="font-semibold text-slate-100">
                      Próximo passo explícito:
                    </span>{" "}
                    tudo termina em ação concreta.
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/30 px-4 py-3 text-slate-200">
                <p className="text-sm">
                  <span className="font-semibold text-slate-50">
                    Promessa simples:
                  </span>{" "}
                  menos ruído, mais controlo. E um caminho claro para o teu próximo
                  passo.
                </p>
              </div>
            </div>

            {/* LATERAL */}
            <aside className="space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/35 p-6 flex flex-col items-center text-center gap-4 shadow-xl shadow-black/60">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border border-slate-700 bg-slate-900">
                  <Image
                    src={FOTO_URL}
                    alt="Foto de Gustavo Santos"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-50">
                    Gustavo Santos
                  </p>
                  <p className="text-xs text-slate-400">
                    Gestor de Projetos · Consultor Operacional
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Em poucas linhas
                </p>
                <p>
                  Produto e execução para PMEs. O site atrai, o app organiza, o
                  Moduz+ escala e a consultoria mantém previsibilidade.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* CARD 2 — LIBERTRENDZ NA PRÁTICA */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/35 p-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              Libertrendz na prática
            </p>
            <h2 className="text-2xl font-semibold text-slate-50">
              Não existe solução padrão. Existe o caminho certo para cada cenário.
            </h2>
            <p className="text-sm text-slate-200">
              A Libertrendz integra produto e execução conforme a maturidade e o
              problema do cliente. Sem empurrar ferramenta errada para dor errada.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Moduz+
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Controlo e escala operacional
              </p>
              <p className="mt-2 text-slate-300">
                Quando a operação cresceu e precisas de governança, visão do todo
                e rotina previsível.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Apps customizados
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Piloto rápido para dor real
              </p>
              <p className="mt-2 text-slate-300">
                Quando existe uma dor específica que precisa ser resolvida rápido,
                sem entrar num ERP completo.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Sites & Landing Pages
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Mensagem, prova e conversão
              </p>
              <p className="mt-2 text-slate-300">
                Quando o problema é aquisição, proposta confusa e lead que não
                acontece.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Consultoria
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Execução sem ruído
              </p>
              <p className="mt-2 text-slate-300">
                Quando o bloqueio é decisão, fluxo e prioridade. Organiza antes de
                gastar de novo.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="/cases"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Ver casos
            </a>
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              Descobrir o caminho certo (2 min)
            </a>
          </div>
        </section>

        {/* MISSÃO · VISÃO · VALORES — MANTÉM */}
        <section id="missao-visao-valores" className="space-y-6 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            Identidade
          </p>
          <h2 className="text-xl font-semibold text-slate-50">
            Missão, visão e valores
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Missão
              </p>
              <p className="mt-2 text-slate-100 font-semibold">
                Tornar PMEs mais produtivas e previsíveis com soluções práticas.
              </p>
              <p className="mt-2 text-slate-300 text-sm">
                Produto e execução com foco em valor real.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Visão
              </p>
              <p className="mt-2 text-slate-100 font-semibold">
                Ser referência em soluções que escalam sem virar burocracia.
              </p>
              <p className="mt-2 text-slate-300 text-sm">
                Crescer com clientes reais e casos comprovados.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Valores
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  <span className="font-semibold text-slate-100">Praticidade:</span>{" "}
                  funciona no dia a dia.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Clareza:</span>{" "}
                  comunicação direta e decisões mensuráveis.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Empatia com rigor:</span>{" "}
                  resolver o real sem ignorar pessoas.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-3 text-sm text-slate-300">
            <a
              href="/cases"
              className="font-semibold text-accent-400 hover:text-accent-300"
            >
              Ver casos →
            </a>
          </div>
        </section>

        {/* CTA FINAL */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer trazer o teu contexto para a mesa?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Começamos com uma conversa simples e saímos com um caminho prático.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Ir para o contato
          </a>
        </div>
      </section>
    </main>
  );
}
