// app/apps/page.tsx

export default function AppsPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        
        {/* HERO */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Apps & Tiny ERPs
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Sistemas sob medida para quando o Excel já não chega — 
            sem virar refém de um ERP gigante.
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            A frente de Apps & Tiny ERPs da Libertrendz é voltada para 
            profissionais e PMEs que precisam organizar operações, obras, 
            finanças ou equipas com soluções vivas, modulares e alinhadas 
            ao fluxo real do negócio.
          </p>
        </div>

        {/* RESUMO EM CARDS */}
        <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent-300">
              Para quem
            </p>
            <p className="mt-1 text-sm text-slate-200">
              PMEs e equipas que cresceram além do Excel e de ferramentas dispersas.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent-300">
              Tipo de solução
            </p>
            <p className="mt-1 text-sm text-slate-200">
              Apps web, painéis e ERPs leves, focados em fluxo de trabalho real.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent-300">
              Abordagem
            </p>
            <p className="mt-1 text-sm text-slate-200">
              Descoberta, desenho de fluxo, protótipo funcional e iterações.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent-300">
              Exemplo
            </p>
            <p className="mt-1 text-sm text-slate-200">
              CONFIANCE — ERP modular para construção, ponto, obras e financeiro.
            </p>
          </div>
        </div>

        {/* QUANDO FAZ SENTIDO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Quando faz sentido falar de um app ou ERP leve
          </h2>
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="font-semibold text-slate-50 mb-1">
                Planilhas demais, controlo de menos
              </p>
              <p className="text-slate-300">
                Várias versões, pastas, anexos e confusão operacional começam 
                a custar dinheiro e tempo.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="font-semibold text-slate-50 mb-1">
                Softwares genéricos que atrapalham
              </p>
              <p className="text-slate-300">
                ERPs grandes que obrigam a equipa a se adaptar — e não o contrário.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="font-semibold text-slate-50 mb-1">
                Crescimento sem estrutura
              </p>
              <p className="text-slate-300">
                A empresa cresce, mas o controlo não acompanha: obras, contratos, 
                faturas, equipas, ponto.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="font-semibold text-slate-50 mb-1">
                Necessidade de visão consolidada
              </p>
              <p className="text-slate-300">
                Gestão exige ver tudo num só lugar — financeiro, operação e
                equipas — sem “caça” manual de dados.
              </p>
            </div>

          </div>
        </div>

        {/* TIPOS DE SOLUÇÃO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Tipos de soluções que desenvolvo
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {/* 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                ERP leve
              </p>
              <p className="font-semibold text-slate-50 mt-1">
                ERPs modulares para PMEs
              </p>
              <p className="mt-1 text-slate-300">
                Organizam obras, faturação, ponto, equipas e fluxo real da operação.
              </p>
            </div>

            {/* 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Apps internos
              </p>
              <p className="font-semibold text-slate-50 mt-1">
                Apps focados em fluxo de trabalho
              </p>
              <p className="mt-1 text-slate-300">
                Registro de ponto, pedidos, tarefas, requisições e controlo operacional.
              </p>
            </div>

            {/* 3 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Painéis & integrações
              </p>
              <p className="font-semibold text-slate-50 mt-1">
                Dashboards e integrações leves
              </p>
              <p className="mt-1 text-slate-300">
                Consolidação de dados e automações simples entre sistemas.
              </p>
            </div>
          </div>
        </div>

        {/* SITES & LANDING PAGES — REINTRODUZIDO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Sites & Landing Pages
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Visual premium
              </p>
              <p className="font-semibold text-slate-50 mt-1">
                Site institucional sob medida
              </p>
              <p className="mt-1 text-slate-300">
                Páginas rápidas, limpas e elegantes — mesmas escolhas estéticas 
                que uso aqui no site da Libertrendz.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Para PMEs e profissionais
              </p>
              <p className="font-semibold text-slate-50 mt-1">
                Landing pages focadas em conversão
              </p>
              <p className="mt-1 text-slate-300">
                Páginas únicas para serviços, produtos ou campanhas — rápidas e diretas.
              </p>
            </div>
          </div>
        </div>

        {/* CONFIANCE — EXEMPLO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            CONFIANCE — exemplo de ERP modular em construção civil
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 max-w-4xl space-y-3 text-sm text-slate-200">
            <p>
              O CONFIANCE é um ERP leve em desenvolvimento para uma empresa 
              de construção e remodelação. Modular, vivo e alinhado à realidade do terreno.
            </p>
            <p className="text-slate-300">
              A abordagem pode ser replicada em outras PMEs que precisam de 
              estrutura, mas não querem um software genérico.
            </p>
          </div>
        </div>

        {/* COMO TRABALHO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Como funciona um projeto de app / ERP leve
          </h2>

          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Fase 1
              </p>
              <p className="mt-2 font-semibold text-slate-50">Descoberta</p>
              <p className="mt-1 text-slate-300">
                Entendimento real do negócio antes de qualquer solução.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Fase 2
              </p>
              <p className="mt-2 font-semibold text-slate-50">Desenho e priorização</p>
              <p className="mt-1 text-slate-300">
                Fluxos, módulos essenciais e corte do supérfluo para um MVP realista.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Fase 3
              </p>
              <p className="mt-2 font-semibold text-slate-50">Construção e validação</p>
              <p className="mt-1 text-slate-300">
                Desenvolvimento iterativo e ajustes baseados no uso real.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Fase 4
              </p>
              <p className="mt-2 font-semibold text-slate-50">Evolução controlada</p>
              <p className="mt-1 text-slate-300">
                Crescimento do sistema conforme o negócio cresce.
              </p>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer discutir um app, ERP leve ou site?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Se a tua PME já passou do ponto de se apoiar em planilhas e ferramentas
            soltas, podemos conversar sobre uma solução sob medida, sem exageros
            e sem enrolação.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Falar comigo sobre um projeto
          </a>
        </div>

      </section>
    </main>
  );
}