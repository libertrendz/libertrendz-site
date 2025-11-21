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
            finanças ou equipas com sistemas vivos, modulares e feitos 
            para a realidade do negócio.
          </p>
        </div>

        {/* RESUMO EM CARDS */}
        <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Para quem
            </p>
            <p className="mt-1 text-sm text-slate-200">
              PMEs e equipas que cresceram além do Excel e de ferramentas soltas.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Tipo de solução
            </p>
            <p className="mt-1 text-sm text-slate-200">
              Apps web, painéis e ERPs leves, focados em fluxo real de trabalho.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Abordagem
            </p>
            <p className="mt-1 text-sm text-slate-200">
              Descoberta, desenho de fluxo, protótipo funcional e iteração.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Exemplo
            </p>
            <p className="mt-1 text-sm text-slate-200">
              CONFIANCE — ERP modular para construção, ponto, obras e financeiro.
            </p>
          </div>
        </div>

        {/* QUANDO FAZ SENTIDO FALAR DE APP / ERP */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Quando faz sentido falar de um app ou ERP leve
          </h2>
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">
                Planilhas demais, controlo de menos
              </p>
              <p className="text-slate-300">
                A operação vive em vários ficheiros, versões e pastas. 
                Ninguém tem certeza do que está atualizado, e erros começam a custar caro.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">
                Softwares genéricos que atrapalham
              </p>
              <p className="text-slate-300">
                Sistemas “para tudo” que exigem adaptação demais da equipa 
                e entregam de menos frente ao que o negócio realmente precisa.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">
                Crescimento sem estrutura
              </p>
              <p className="text-slate-300">
                A empresa cresce, os clientes aumentam, mas o controlo 
                de obras, contratos, faturas, ponto ou equipas não acompanha.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">
                Necessidade de visão consolidada
              </p>
              <p className="text-slate-300">
                Decisão de gestão exige ver tudo num só lugar: financeiro, 
                operação, equipas e projetos, sem depender de “caça” manual de dados.
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
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                ERP leve
              </p>
              <p className="font-semibold text-slate-50">
                ERPs modulares para PMEs
              </p>
              <p className="mt-1 text-slate-300">
                Sistemas que organizam obras, contratos, faturação, ponto, 
                equipas e operações sem a complexidade de um ERP gigante.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Apps internos
              </p>
              <p className="font-semibold text-slate-50">
                Apps focados em fluxo de trabalho
              </p>
              <p className="mt-1 text-slate-300">
                Aplicações internas para registo de ponto, gestão de tarefas, 
                requisições, pedidos de cliente ou controlo operacional.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Painéis & integrações
              </p>
              <p className="font-semibold text-slate-50">
                Dashboards e colagem entre sistemas
              </p>
              <p className="mt-1 text-slate-300">
                Consolidação de dados de várias fontes e pequenas automações 
                para que sistemas falem entre si sem malabarismo manual.
              </p>
            </div>
          </div>
        </div>

        {/* EXEMPLO: CONFIANCE */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            CONFIANCE — exemplo de ERP modular em construção civil
          </h2>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200 max-w-4xl space-y-3">
            <p>
              O CONFIANCE é um ERP leve em desenvolvimento para uma empresa 
              de construção e remodelação. Nasce modular, com foco em ponto, 
              colaboradores, fornecedores, obras e financeiro.
            </p>
            <p className="text-slate-300">
              O objetivo não é competir com grandes ERPs, mas oferecer um sistema 
              que respeita o fluxo real da empresa: obras no terreno, equipas em 
              movimento, clientes a acompanhar e decisões diárias de gestão.
            </p>
            <p className="text-slate-300">
              A mesma abordagem pode ser aplicada a outras PMEs que precisam 
              de estrutura, mas não querem ficar presas a software genérico 
              que exige mais adaptação do que entrega.
            </p>
          </div>
        </div>

        {/* COMO TRABALHO NESTA FRENTE */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Como funciona um projeto de app / ERP leve
          </h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Fase 1
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Descoberta
              </p>
              <p className="mt-1 text-slate-300">
                Entendimento da operação, dores, dados existentes e restrições 
                de negócio. Nada de solução pronta antes de ouvir o contexto.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Fase 2
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Desenho e priorização
              </p>
              <p className="mt-1 text-slate-300">
                Desenho dos fluxos principais, definição de módulos prioritários 
                e corte do supérfluo para chegar a um MVP funcional.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Fase 3
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Construção e validação
              </p>
              <p className="mt-1 text-slate-300">
                Desenvolvimento do app/ERP leve com iterações curtas, testes com 
                utilizadores reais e ajustes em cima do uso, não da teoria.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Fase 4
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Evolução controlada
              </p>
              <p className="mt-1 text-slate-300">
                Ajustes, novos módulos e integrações à medida que a empresa 
                cresce e o sistema prova valor no dia a dia.
              </p>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer discutir um app ou ERP leve para a tua empresa?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Se a tua PME já passou do ponto de se apoiar só em planilhas e 
            ferramentas soltas, podemos conversar sobre uma solução à medida, 
            com escopo claro e foco em resultado real.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Falar sobre um app / ERP para a minha empresa
          </a>
        </div>
      </section>
    </main>
  );
}
