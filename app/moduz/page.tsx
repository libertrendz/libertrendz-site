import React from "react";

export default function ModuzPage(): JSX.Element {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Moduz+
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Moduz+ — ERP modular e leve para PMEs que querem ordem, não complexidade.
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Moduz+ organiza operação, pessoas e finanças em módulos independentes,
            com implantação por fases, custos previsíveis e integração segura entre módulos.
            Paga só o que precisa — cresce sem criar um monólito.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              Solicitar demo
            </a>
            <a
              href="/apps"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Voltar a Apps & Websites
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Por que escolher Moduz+</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Implantação por fases</p>
              <p className="text-slate-300">MVP claro — Core → People → Track → Finance → Bizz — sem surpresas.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">People como pivot</p>
              <p className="text-slate-300">Colaboradores e vínculos alimentam todos os módulos operacionais.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Modularidade comercial</p>
              <p className="text-slate-300">Habilita módulos por empresa; front e backend respeitam feature flags.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">Arquitetura de módulos</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Core</p>
              <p className="mt-2 font-semibold text-slate-50">Fundação multi-tenant e gestão de módulos</p>
              <p className="mt-1 text-slate-300">Empresas, perfis, roles e <code>modules_enabled</code>. RLS e função <code>auth_empresa_id()</code>.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">People</p>
              <p className="mt-2 font-semibold text-slate-50">Colaboradores & contratos</p>
              <p className="mt-1 text-slate-300">Vínculo <code>user_id</code> ↔ colaborador; base para Track, Finance e Flow.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Track</p>
              <p className="mt-2 font-semibold text-slate-50">Ponto móvel & auditoria</p>
              <p className="mt-1 text-slate-300">Foto, geolocal, regras de jornada e export CSV.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Docs</p>
              <p className="mt-2 font-semibold text-slate-50">Storage & evidências</p>
              <p className="mt-1 text-slate-300">Bucket por empresa, ACLs, metadata e links assinados.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Finance</p>
              <p className="mt-2 font-semibold text-slate-50">Lançamentos & faturas</p>
              <p className="mt-1 text-slate-300">Controlo financeiro essencial com anexos e exportes.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Bizz</p>
              <p className="mt-2 font-semibold text-slate-50">Orçamentos → Propostas</p>
              <p className="mt-1 text-slate-300">Workflow comercial simples com geração de contrato e integração financeira.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Stock</p>
              <p className="mt-2 font-semibold text-slate-50">Inventário & movimentos</p>
              <p className="mt-1 text-slate-300">Entradas/saídas ligadas a obras, import Excel e histórico de consumo.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Assets</p>
              <p className="mt-2 font-semibold text-slate-50">Frota & manutenções</p>
              <p className="mt-1 text-slate-300">Registo de veículos, manutenções programadas e custos integrados.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Flow</p>
              <p className="mt-2 font-semibold text-slate-50">Projetos & integração</p>
              <p className="mt-1 text-slate-300">Tarefas, vínculo a People e emissões de eventos para Finance/Stock.</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Quer ver o Moduz+ em ação?</h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Agendamos uma demo prática com os teus dados e mostramos como o Moduz+ resolve o problema sem criar mais trabalho para a equipa.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              Agendar demo
            </a>
            <a
              href="/contato#brief"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Enviar briefing
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}