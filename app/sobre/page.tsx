// app/sobre/page.tsx
import Image from "next/image";

const FOTO_URL = "/images/GUSTAVO.png";

export default function SobrePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
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

        {/* GRID PRINCIPAL */}
        <div className="grid gap-10 lg:grid-cols-[2.2fr,1.8fr] lg:items-start">
          {/* TEXTO PRINCIPAL */}
          <div className="space-y-8 text-sm text-slate-200">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50">
                Quem é o Gustavo Santos
              </h2>
              <p>
                Trago quase três décadas de experiência em gestão, operações e
                projetos, em contextos onde erro custa caro, atraso gera impacto
                real e decisões precisam de critério.
              </p>
              <p>
                Atuei em ambientes exigentes como administração pública, banca,
                indústria, retalho e operações de campo, sempre com o mesmo
                objetivo: transformar complexidade em decisões claras e
                executáveis.
              </p>
              <p>
                O meu trabalho começa onde normalmente se falha: entender o
                cenário real, cortar ruído e construir estrutura suficiente para
                sustentar crescimento sem burocracia.
              </p>
              <p className="text-slate-300">
                Não vendo atalhos. Organizo caminhos.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50">
                Como penso e trabalho
              </h2>
              <ul className="space-y-2 text-slate-300">
                <li>
                  • <span className="font-semibold text-slate-100">Zero teatro:</span>{" "}
                  método é meio, não fim.
                </li>
                <li>
                  • <span className="font-semibold text-slate-100">Contexto primeiro:</span>{" "}
                  leitura honesta da operação antes da solução.
                </li>
                <li>
                  • <span className="font-semibold text-slate-100">Decisão com critério:</span>{" "}
                  KPIs simples, fluxo visível e prioridades claras.
                </li>
                <li>
                  • <span className="font-semibold text-slate-100">Próximo passo explícito:</span>{" "}
                  tudo termina em ação concreta.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50">
                O que é a Libertrendz, na prática
              </h2>
              <p>
                A Libertrendz é um guarda-chuva operacional que integra produto e
                execução conforme a maturidade e o problema de cada cliente.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>
                  • <strong className="text-slate-100">Moduz+:</strong> quando a
                  operação cresceu e precisa de controlo e escala.
                </li>
                <li>
                  • <strong className="text-slate-100">Apps customizados:</strong>{" "}
                  quando existe uma dor específica que precisa ser resolvida
                  rápido.
                </li>
                <li>
                  • <strong className="text-slate-100">Sites & Landing Pages:</strong>{" "}
                  quando o problema é mensagem, aquisição e conversão.
                </li>
                <li>
                  • <strong className="text-slate-100">Consultoria Ágil:</strong>{" "}
                  quando o bloqueio está na decisão e na execução.
                </li>
              </ul>
              <p className="text-slate-300">
                Não existe solução padrão. Existe o caminho certo para cada
                cenário.
              </p>
            </section>
          </div>

          {/* CARD LATERAL */}
          <aside className="space-y-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center gap-4">
              <div className="relative h-36 w-36 overflow-hidden rounded-full border border-slate-700 bg-slate-900">
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

        {/* MISSÃO · VISÃO · VALORES */}
        <section className="space-y-6 max-w-4xl">
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
              <p className="mt-2 text-slate-300">
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
              <p className="mt-2 text-slate-300">
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
