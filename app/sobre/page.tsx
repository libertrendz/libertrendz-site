// repo: libertrendz-site/app/sobre/page.tsx
import Image from "next/image";

const FOTO_URL = "/images/GUSTAVO.png";

export default function SobrePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        {/* HERO */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Sobre
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Libertrendz — produto e execução para PMEs: Moduz+, apps, sites e consultoria ágil.
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Construímos soluções digitais que viram operação: o Moduz+ como ERP modular, apps customizados quando o problema é específico,
            sites/landing pages quando a prioridade é conversão, e consultoria ágil para tornar a entrega previsível.
          </p>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid gap-10 lg:grid-cols-[2.2fr,1.8fr] lg:items-start">
          {/* TEXTO */}
          <div className="space-y-6 text-sm text-slate-200">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50">Quem é o Gustavo Santos</h2>
              <p>
                Tenho experiência em gestão e contexto corporativo, e transformei essa bagagem em produto e execução:
                menos discurso, mais implementação que funciona no dia a dia.
              </p>
              <p>
                A Libertrendz nasceu para resolver um problema comum nas PMEs: muita urgência, pouca visibilidade,
                e decisões no escuro. A resposta é simplificar, modularizar e entregar por fases — com prioridade real.
              </p>
              <p>
                Hoje atuo em quatro frentes: <strong>Moduz+ (ERP modular)</strong>, <strong>apps customizados</strong>,{" "}
                <strong>sites e landing pages</strong> e <strong>consultoria ágil</strong>.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50">Como penso e trabalho</h2>
              <ul className="space-y-2 text-slate-300">
                <li>
                  • <span className="font-semibold text-slate-100">Zero teatro:</span> método é meio, resultado é fim.
                </li>
                <li>
                  • <span className="font-semibold text-slate-100">Contexto primeiro:</span> antes da solução, entendimento do problema real.
                </li>
                <li>
                  • <span className="font-semibold text-slate-100">Franqueza necessária:</span> quando algo não faz sentido, eu digo.
                </li>
                <li>
                  • <span className="font-semibold text-slate-100">Caminho claro:</span> tudo vira próximos passos executáveis.
                </li>
              </ul>
            </div>
          </div>

          {/* LATERAL */}
          <aside className="space-y-4">
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
                <p className="text-sm font-semibold text-slate-50">Gustavo Santos</p>
                <p className="text-xs text-slate-400">
                  Gestor de Projetos · Consultor Ágil · Produto & Execução
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Em poucas linhas
              </p>
              <p>
                A Libertrendz junta produto e entrega: modularidade com Moduz+, soluções sob medida quando necessário,
                e foco em conversão quando o objetivo é vender.
              </p>
              <div className="mt-2 text-sm text-slate-300 space-y-1">
                <div>• <strong>Moduz+:</strong> ERP modular para PMEs.</div>
                <div>• <strong>Apps:</strong> automações, dashboards, ferramentas internas.</div>
                <div>• <strong>Sites/Landing:</strong> performance e conversão.</div>
                <div>• <strong>Consultoria Ágil:</strong> fluxo, prioridade e previsibilidade.</div>
              </div>
            </div>
          </aside>
        </div>

        {/* SOBRE A LIBERTRENDZ */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-xl font-semibold text-slate-50">Sobre a Libertrendz</h2>
          <p className="text-sm text-slate-200">
            A Libertrendz é o “guarda-chuva” que organiza quatro pilares que se conectam: sites e landing pages podem ser a porta de entrada,
            apps resolvem necessidades específicas, e o Moduz+ escala a operação com governança modular. A consultoria ágil garante que a entrega
            não vire caos.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Foco em PMEs que querem organização real, não promessas.</li>
            <li>• Projetos enxutos, com entregas por fase e clareza de prioridade.</li>
            <li>• Linguagem direta, execução pragmática.</li>
            <li>• Tecnologia aplicada ao operacional (não “tech por vaidade”).</li>
          </ul>
        </div>

        {/* MISSÃO • VISÃO • VALORES */}
        <section id="missao-visao-valores" className="space-y-6 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
            Identidade
          </p>
          <h2 className="text-xl font-semibold text-slate-50">Missão, visão e valores</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Missão
              </p>
              <p className="mt-2 text-slate-100 font-semibold">
                Tornar PMEs mais produtivas e previsíveis com produto e execução.
              </p>
              <p className="mt-2 text-slate-300 text-sm">
                Modularidade, clareza e entregas por fases que viram uso real.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Visão
              </p>
              <p className="mt-2 text-slate-100 font-semibold">
                Ser referência em ERP modular e soluções digitais pragmáticas para PMEs.
              </p>
              <p className="mt-2 text-slate-300 text-sm">
                Crescer com casos comprovados e clientes reais.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Valores
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  <span className="font-semibold text-slate-100">Praticidade:</span> soluções que funcionam no dia a dia.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Clareza:</span> comunicação direta e decisões mensuráveis.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Propósito:</span> construir com empatia e sentido para o utilizador real.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-3 text-sm text-slate-300">
            <a href="/cases" className="font-semibold text-accent-400 hover:text-accent-300">
              Ver casos que comprovam a nossa abordagem →
            </a>
          </div>
        </section>

        {/* CTA FINAL */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer trazer o teu contexto para a mesa?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Começamos por uma conversa simples. Depois disso: prioridades, plano e execução.
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