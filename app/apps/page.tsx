import React from "react";

export default function AppsPage(): JSX.Element {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        {/* HERO */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Apps & Websites
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Soluções digitais que resolvem hoje — e escalam amanhã.
            <span className="block text-accent-400">
              Mini-apps, painéis, websites e landing pages orientadas à conversão.
            </span>
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Entregamos protótipos funcionais, sites otimizados para conversão e mini-apps integráveis ao teu fluxo operacional.
          </p>
        </div>

        {/* RESUMO EM CARDS */}
        <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Para quem</p>
            <p className="mt-1 text-sm text-slate-200">PMEs e equipas que precisam de controlo sem projetos intermináveis.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Tipo de solução</p>
            <p className="mt-1 text-sm text-slate-200">Apps internos, websites institucionais e landing pages de conversão.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Abordagem</p>
            <p className="mt-1 text-sm text-slate-200">Descoberta objetiva → protótipo funcional → entregas curtas e iterativas.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Exemplos</p>
            <p className="mt-1 text-sm text-slate-200">Sites, landing pages, agendamento, catálogos e painéis operacionais.</p>
          </div>
        </div>

        {/* QUANDO FAZ SENTIDO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Quando faz sentido</h2>
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Precisa vender online</p>
              <p className="text-slate-300">Landing pages e lojas simples integradas com checkout e catálogo.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Comunicar de forma profissional</p>
              <p className="text-slate-300">Websites institucionais claros, sem jargão, com velocidade e SEO básico implementado.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Operação precisa de apoio</p>
              <p className="text-slate-300">Mini-apps para agendamento, tarefas e requisições que evitam retrabalho manual.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-1 font-semibold text-slate-50">Converter tráfego em leads</p>
              <p className="text-slate-300">Landing pages com formulários integrados ao fluxo de vendas.</p>
            </div>
          </div>
        </div>

        {/* TIPOS DE SOLUÇÃO */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">O que entregamos</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Websites</p>
              <p className="font-semibold text-slate-50">Institucional & velocidade</p>
              <p className="mt-1 text-slate-300">Sites rápidos, responsivos e com SEO técnico básico implementado.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Landing pages</p>
              <p className="font-semibold text-slate-50">Conversão direta</p>
              <p className="mt-1 text-slate-300">Páginas otimizadas para campanhas e captura de leads integradas ao CRM.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Mini-apps</p>
              <p className="font-semibold text-slate-50">Fluxos operacionais</p>
              <p className="mt-1 text-slate-300">Agendamentos, catálogos, pedidos e integrações com pagamentos ou ERPs leves.</p>
            </div>
          </div>
        </div>

        {/* MINI-APPS & WEBSITES */}
        <div id="mini-apps" className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Exemplos práticos</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Agendamento de serviços</p>
              <p className="text-slate-300 mt-1">Calendário, reservas e notificações integradas ao CRM.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Landing page + fluxo de leads</p>
              <p className="text-slate-300 mt-1">Campanha → landing → formulário → entrega ao time comercial.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Loja / catálogo</p>
              <p className="text-slate-300 mt-1">Catálogo, carrinho simples e integrações de pagamento.</p>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Quer discutir uma solução digital?</h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Alinhamos problema → protótipo → entrega. Websites, landing pages e mini-apps com foco em resultado.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Falar sobre uma solução
          </a>
        </div>
      </section>
    </main>
  );
}