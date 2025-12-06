// app/cases/page.tsx

import React from 'react';

export default function CasesPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-12">

        {/* HERO */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">Cases</p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">Provas de valor — o que já entregámos</h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Estudos curtos e práticos de projetos em que entregámos valor real: desafio, solução objetiva e resultado tangível.
          </p>
        </div>

        {/* CASES LIST */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* CONFIANCE - App operacional */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.18em] text-accent-300">CONFIANCE — App operacional</p>
            <h3 className="mt-2 text-base font-semibold text-slate-50">Organizar obras e equipas em campo</h3>
            <p className="mt-2 text-slate-300">
              <strong>Desafio:</strong> múltiplas folhas e comunicações perdidas entre escritório e obra.
            </p>
            <p className="mt-2 text-slate-300">
              <strong>Solução:</strong> app operacional com ponto, ordens de serviço, orçamentos e dashboard de gestão.
            </p>
            <p className="mt-2 text-slate-300">
              <strong>Resultado:</strong> redução de retrabalho e visibilidade operacional imediata — decisões mais rápidas e previsíveis.
            </p>
          </article>

          {/* LEGISTOR - Escritórios de advocacia */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.18em] text-accent-300">LEGISTOR</p>
            <h3 className="mt-2 text-base font-semibold text-slate-50">Fluxo de processos e finanças para escritórios</h3>
            <p className="mt-2 text-slate-300">
              <strong>Desafio:</strong> controle de prazos, pagamentos e acompanhamento disperso.
            </p>
            <p className="mt-2 text-slate-300">
              <strong>Solução:</strong> sistema de gestão de processos, faturação e relatórios administrativos.
            </p>
            <p className="mt-2 text-slate-300">
              <strong>Resultado:</strong> centralização de informação e processos mais eficientes, menos tempo perdido em tarefas manuais.
            </p>
          </article>

          {/* EKKLYN - Gestão de congregações */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.18em] text-accent-300">EKKLYN</p>
            <h3 className="mt-2 text-base font-semibold text-slate-50">Gestão de membros e atividades comunitárias</h3>
            <p className="mt-2 text-slate-300">
              <strong>Desafio:</strong> coordenação de eventos, membros e finanças em comunidades com poucos recursos digitais.
            </p>
            <p className="mt-2 text-slate-300">
              <strong>Solução:</strong> plataforma com controle de membros, eventos, contribuições e mural comunitário.
            </p>
            <p className="mt-2 text-slate-300">
              <strong>Resultado:</strong> engajamento maior e processos administrativos simplificados para líderes e voluntários.
            </p>
          </article>
        </div>

        {/* CTA */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Precisa de provas concretas?</h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Se quiseres, agendamos uma conversa onde apresentamos o caso com mais detalhe e dados operacionais.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Falar sobre um case
          </a>
        </div>
      </section>
    </main>
  );
}