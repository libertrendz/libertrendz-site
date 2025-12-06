import Image from "next/image";

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
            Sistemas sob medida para quando o Excel já não chega — sem virar refém de ferramentas pesadas.
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Apps, ERPs leves, sites e landing pages construídos com foco em fluxo real de trabalho e resultado comercial. Projetos rápidos, iterativos e com ROI claro.
          </p>
        </div>

        {/* RESUMO EM CARDS */}
        <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Para quem</p>
            <p className="mt-1 text-sm text-slate-200">PMEs e equipas que cresceram além do Excel e precisam de sistemas práticos.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Tipo de solução</p>
            <p className="mt-1 text-sm text-slate-200">Apps web, painéis e ERPs leves, painéis de gestão e websites que convertem.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Abordagem</p>
            <p className="mt-1 text-sm text-slate-200">Descoberta, protótipo funcional e iteração com utilizadores reais.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Exemplos</p>
            <p className="mt-1 text-sm text-slate-200">CONFIANCE, Ekklyn, Legistor e outros mini-apps (agendamento, tarefas, loja, catálogo, landing pages).</p>
          </div>
        </div>

        {/* QUANDO FAZ SENTIDO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Quando faz sentido</h2>
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Planilhas demais, controlo de menos</p>
              <p className="text-slate-300">Multiplicidade de ficheiros e versões desencontradas que custam tempo e dinheiro.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Websites com objetivo comercial</p>
              <p className="text-slate-300">Landing pages e websites desenhados para conversão, integração com CRM e captação de leads.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Crescimento sem estrutura</p>
              <p className="text-slate-300">Operações que expandiram e precisam de regras, integrações e visibilidade centralizada.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Soluções comerciais</p>
              <p className="text-slate-300">Catálogo de serviços/produtos, loja online, agendamento e CRM leve integrado ao fluxo do negócio.</p>
            </div>
          </div>
        </div>

        {/* TIPOS DE SOLUÇÃO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Soluções que entregamos</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">ERP leve</p>
              <p className="font-semibold text-slate-50">ERPs modulares</p>
              <p className="mt-1 text-slate-300">Foco em obras, ponto, faturação e finanças sem a complexidade de um monstro ERP.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Apps internos</p>
              <p className="font-semibold text-slate-50">Fluxo de trabalho</p>
              <p className="mt-1 text-slate-300">Registo de tarefas, requisições, pontos, timesheets e integrações simples.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Websites & Landing Pages</p>
              <p className="font-semibold text-slate-50">Sites que convertem</p>
              <p className="mt-1 text-slate-300">Design estratégico, copy orientada à conversão e integração com ferramentas de captação.</p>
            </div>
          </div>
        </div>

        {/* EXEMPLO: CONFIANCE */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Exemplo: CONFIANCE</h2>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200 max-w-4xl space-y-3">
            <p>CONFIANCE é um ERP leve em construção para a construção civil — modular, com ponto, colaboradores, fornecedores, obras e financeiro.</p>
            <p className="text-slate-300">Aplicável a outras PMEs que precisam de estrutura sem virar reféns de solução genérica.</p>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Quer discutir um app, ERP ou site?</h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">Se a tua PME já passou do ponto do Excel, podemos definir um MVP com foco em resultado e retorno claro.</p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Falar sobre um projeto
          </a>
        </div>
      </section>
    </main>
  );
}