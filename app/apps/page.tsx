import React from 'react';

export default function AppsPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        {/* HERO */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Apps & Websites
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Soluções digitais práticas: apps internos, painéis e websites que funcionam
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Criamos aplicações e sites pensados para resolver problemas reais de operação,
            vendas e atendimento — sem complexidade desnecessária. Produtos modulares que
            integram com o ecossistema Moduz+ quando necessário.
          </p>
        </div>

        {/* RESUMO EM CARDS (EXEMPLOS PRÁTICOS) */}
        <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Para quem</p>
            <p className="mt-1 text-sm text-slate-200">PMEs, equipas de serviço, lojas e organizações que precisam de soluções objetivas.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Tipo de solução</p>
            <p className="mt-1 text-sm text-slate-200">Apps internos, painéis, integrações e websites/landing pages comerciais.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Abordagem</p>
            <p className="mt-1 text-sm text-slate-200">Descoberta, protótipo funcional, entrega incremental e iteração baseada no uso.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Integração</p>
            <p className="mt-1 text-sm text-slate-200">Compatível com Moduz+ (módulos) para empresas que precisam de escala e governança.</p>
          </div>
        </div>

        {/* QUANDO FAZ SENTIDO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Quando faz sentido um app</h2>
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Planilhas demais, controlo de menos</p>
              <p className="text-slate-300">Se a operação depende de várias folhas/versões, um app organiza e reduz erros.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Operação móvel</p>
              <p className="text-slate-300">Equipa em campo precisa de registo simples, offline mínimo e sincronização confiável.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Pontos de contacto com cliente</p>
              <p className="text-slate-300">Agendamentos, filas, pagamentos e lojas online com UX direta aumentam conversão.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Dados consolidados</p>
              <p className="text-slate-300">Dashboards e integrações evitam "caça manual" de informações entre sistemas.</p>
            </div>
          </div>
        </div>

        {/* TIPOS DE SOLUÇÃO (EXEMPLOS PRÁTICOS) */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Exemplos práticos</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Agendamento</p>
              <p className="font-semibold text-slate-50">Agendamento e gestão de serviços</p>
              <p className="mt-1 text-slate-300">Salões, clinicas, oficinas — reservas, calendários e notificações.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Operações</p>
              <p className="font-semibold text-slate-50">Controle de tarefas e ordens de serviço</p>
              <p className="mt-1 text-slate-300">Gestão de equipas em campo, checklists e evidências fotográficas.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Comércio</p>
              <p className="font-semibold text-slate-50">Loja online & catálogo</p>
              <p className="mt-1 text-slate-300">Catálogo simples, checkout, e integração com inventário básico ou Moduz+.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Landing pages</p>
              <p className="font-semibold text-slate-50">Landing pages de campanha</p>
              <p className="mt-1 text-slate-300">Conversão direta — formulário, rastreio UTM e integração com automações.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">SaaS / ferramentas</p>
              <p className="font-semibold text-slate-50">Miniserviços digitais</p>
              <p className="mt-1 text-slate-300">Funcionalidades independentes para venda ou integração em processos existentes.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Comunidade</p>
              <p className="font-semibold text-slate-50">Portais e murais comunitários</p>
              <p className="mt-1 text-slate-300">Espaços para anúncios, eventos e trocas dentro de comunidades (Ekklyn).</p>
            </div>
          </div>
        </div>

        {/* APPS REAIS (2 LINHAS) */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Alguns apps que já construímos</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50">CONFIANCE</p>
              <p className="mt-1 text-sm text-slate-300">App operacional para empresas de obras — ponto, orçamentos, gestão de ativos.</p>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50">LEGISTOR</p>
              <p className="mt-1 text-sm text-slate-300">Gestão para escritórios de advocacia — processos, pagamentos e controle administrativo.</p>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-sm font-semibold text-slate-50">EKKLYN</p>
              <p className="mt-1 text-sm text-slate-300">Plataforma para congregações — gestão de membros, events, finanças e mural comunitário.</p>
            </article>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Quer um app que funcione no dia a dia?</h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Se a tua empresa precisa de organização real, definimos o escopo e entregamos um piloto funcional com prioridades claras.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Falar sobre um app
          </a>
        </div>
      </section>
    </main>
  );
}