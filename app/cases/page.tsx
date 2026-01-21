// app/cases/page.tsx

import React from "react";

export default function CasesPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-12">
        {/* HERO */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Cases
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Provas de valor: o que já entregámos na prática
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Projetos reais, com foco em operação: dor clara, solução objetiva e impacto prático no dia a dia.
          </p>
        </div>

        {/* CASES LIST */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* CONFIANCE */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.18em] text-accent-300">
              CONFIANCE — App operacional
            </p>
            <h3 className="mt-2 text-base font-semibold text-slate-50">
              Organizar obras e equipas em campo
            </h3>
            <p className="mt-2 text-slate-300">
              <strong>Desafio:</strong> folhas soltas, comunicação perdida entre escritório e obra, e margem a evaporar no caos.
            </p>
            <p className="mt-2 text-slate-300">
              <strong>Solução:</strong> app operacional com ponto, execução em campo, ordens de serviço, orçamentos e dashboard de gestão.
            </p>
            <p className="mt-2 text-slate-300">
              <strong>Resultado:</strong> menos retrabalho, mais visibilidade e decisões mais rápidas com base em operação real.
            </p>
          </article>

          {/* LEGISTOR */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.18em] text-accent-300">
              LEGISTOR — Escritórios
            </p>
            <h3 className="mt-2 text-base font-semibold text-slate-50">
              Fluxo de processos e finanças para escritórios
            </h3>
            <p className="mt-2 text-slate-300">
              <strong>Desafio:</strong> prazos, pagamentos e acompanhamento dispersos. Tudo demora mais do que devia.
            </p>
            <p className="mt-2 text-slate-300">
              <strong>Solução:</strong> gestão de processos, faturação e relatórios administrativos num só fluxo.
            </p>
            <p className="mt-2 text-slate-300">
              <strong>Resultado:</strong> centralização, menos tarefas manuais e mais previsibilidade na rotina do escritório.
            </p>
          </article>

          {/* EKKLYN */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.18em] text-accent-300">
              EKKLYN — Comunidades
            </p>
            <h3 className="mt-2 text-base font-semibold text-slate-50">
              Gestão de membros e atividades comunitárias
            </h3>
            <p className="mt-2 text-slate-300">
              <strong>Desafio:</strong> coordenação de membros, eventos e contribuições com pouca estrutura digital.
            </p>
            <p className="mt-2 text-slate-300">
              <strong>Solução:</strong> plataforma com membros, eventos, contribuições e mural comunitário.
            </p>
            <p className="mt-2 text-slate-300">
              <strong>Resultado:</strong> menos fricção administrativa e mais clareza para líderes, equipas e voluntários.
            </p>
          </article>

          {/* BLACKFLOW */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.18em] text-accent-300">
              BLACKFLOW — Decisão estratégica
            </p>
            <h3 className="mt-2 text-base font-semibold text-slate-50">
              Tomada de decisão sem ruído (para owners)
            </h3>
            <p className="mt-2 text-slate-300">
              <strong>Desafio:</strong> excesso de informação, prioridades concorrentes e decisões importantes tomadas no “feeling”.
            </p>
            <p className="mt-2 text-slate-300">
              <strong>Solução:</strong> sistema privado de trabalho para organizar oportunidades, estruturar critérios e manter decisões consistentes.
            </p>
            <p className="mt-2 text-slate-300">
              <strong>Resultado:</strong> mais clareza, menos dispersão e um sistema confiável para decisões estratégicas recorrentes.
            </p>
          </article>

          {/* ADMVC */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.18em] text-accent-300">
              ADMVC — Site + App
            </p>
            <h3 className="mt-2 text-base font-semibold text-slate-50">
              Igreja com operação organizada e comunidade ativa
            </h3>
            <p className="mt-2 text-slate-300">
              <strong>Desafio:</strong> informação dispersa, comunicação fragmentada e baixa previsibilidade na gestão de atividades.
            </p>
            <p className="mt-2 text-slate-300">
              <strong>Solução:</strong> site institucional com área privada + app com membros, agenda, mural, anúncios, devocionais, financeiro e gestão de atividades.
            </p>
            <p className="mt-2 text-slate-300">
              <strong>Resultado:</strong> mais organização, comunicação mais fluida e gestão centralizada para liderança e membros.
            </p>
          </article>
        </div>

        {/* CTA */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Queres ver algo parecido no teu negócio?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Diz-me o teu cenário em 2 minutos. Eu devolvo o caminho mais lógico
            (Moduz+, app, site/landing ou consultoria), sem conversa genérica.
          </p>
          <a
            href="/diagnostico"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Descobrir o caminho certo (2 min)
          </a>
        </div>
      </section>
    </main>
  );
}
