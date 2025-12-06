// app/moduz/page.tsx
import React from "react";

export default function ModuzPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        {/* HERO */}
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

        {/* RAZÕES */}
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

        {/* MÓDULOS (detalhado conforme GenesysRef) */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">Arquitetura de módulos</h2>

          {/* CORE */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Core</p>
            <p className="mt-2 font-semibold text-slate-50">Fundação multi-tenant e gestão de módulos</p>
            <p className="mt-1 text-slate-300">
              Empresas, utilizadores/perfis, roles e `modules_enabled`. Base imutável para `empresa_id` e RLS.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-300">
              <li>• `empresas`, `profiles`, `modules_enabled` (fonte da verdade para habilitar módulos).</li>
              <li>• RLS padronizado e função `auth_empresa_id()`; política: empresa_id imutável.</li>
              <li>• APIs de administração: activar módulos, convidar utilizadores, gerir roles.</li>
            </ul>
          </div>

          {/* PEOPLE */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">People</p>
            <p className="mt-2 font-semibold text-slate-50">Colaboradores, contratos e ligação a user_id</p>
            <p className="mt-1 text-slate-300">
              Pivot humano: base de colaboradores alimenta Track, Finance e Flow. Vínculo explícito entre user e colaborador.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-300">
              <li>• Tabelas: `people_colaboradores`, `people_contratos`.</li>
              <li>• Campos chave: `user_id`, `empresa_id`, `contrato_tipo`, `ativo`.</li>
              <li>• Exposição via RPCs idempotentes para buscas e sincronização.</li>
            </ul>
          </div>

          {/* TRACK (PONTO) */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Track (Ponto)</p>
            <p className="mt-2 font-semibold text-slate-50">Registo de ponto móvel + auditoria</p>
            <p className="mt-1 text-slate-300">
              Registos com foto e geolocalização, regras de jornada, export CSV e fluxo de auditoria para gestão e conformidade.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-300">
              <li>• `track_ponto_registos` + `track_ponto_auditoria` (evidências anexas em Docs).</li>
              <li>• Regras configuráveis por empresa (horários, tolerâncias, dias especiais).</li>
              <li>• Endpoints mobile-friendly para envio de imagem e metadados; exportação e APIs de auditoria.</li>
            </ul>
          </div>

          {/* DOCS */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Docs (Storage)</p>
            <p className="mt-2 font-semibold text-slate-50">Gestão de ficheiros e evidências com ACL por empresa</p>
            <p className="mt-1 text-slate-300">
              Estrutura de pastas por módulo, indexação leve e permissões; serve evidências para Track, Finance e Flow.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-300">
              <li>• Metadata: `docs_meta` com referência `empresa_id`, `folder`, `owner_id`.</li>
              <li>• Bucket por empresa (`storage/<empresa_id>/…`) e links assinados para upload/download.</li>
              <li>• Permissões (read/write) controladas por RLS + checagem de módulo ativo.</li>
            </ul>
          </div>

          {/* FINANCE */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Finance</p>
            <p className="mt-2 font-semibold text-slate-50">Lançamentos, faturas e centros de custo básicos</p>
            <p className="mt-1 text-slate-300">
              Financeiro enxuto: registo de documentos com anexos, conciliação básica e integração por eventos com outros módulos.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-300">
              <li>• Tabelas básicas: `finance_contas`, `finance_lancamentos`, `finance_faturas`.</li>
              <li>• Integração com Docs (comprovativos) e People (salários/contratos).</li>
              <li>• RPCs para agregação simples (balanço por centro de custo) e export CSV.</li>
            </ul>
          </div>

          {/* BIZZ */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Bizz (Comercial)</p>
            <p className="mt-2 font-semibold text-slate-50">Orçamentos → Propostas → Contratos</p>
            <p className="mt-1 text-slate-300">
              Workflow comercial simples: criar orçamento, converter em proposta, gerar contrato e anexar evidências/dados do projecto.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-300">
              <li>• `bizz_orcamentos`, `bizz_propostas`, `bizz_contratos` com versões e histórico.</li>
              <li>• Integração com Finance para gerar lançamentos a partir de contratos aprovados.</li>
              <li>• API para envio de proposta por e-mail e link rastreável.</li>
            </ul>
          </div>

          {/* STOCK */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Stock</p>
            <p className="mt-2 font-semibold text-slate-50">Inventário, movimentos e integração com obras</p>
            <p className="mt-1 text-slate-300">
              Stock básico para empresas de obras: entradas/saídas ligadas a obras/tarefas, pesquisa de SKUs e histórico de consumo.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-300">
              <li>• `stock_inventario`, `stock_movimentos` com referência `obra_id`/`project_id`.</li>
              <li>• Importação de catálogo via Excel com deduplicação idempotente.</li>
              <li>• Integração via eventos para que Finance receba impacto de consumos.</li>
            </ul>
          </div>

          {/* ASSETS */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Assets</p>
            <p className="mt-2 font-semibold text-slate-50">Gestão de frota e manutenção</p>
            <p className="mt-1 text-slate-300">
              Registo de veículos, manutenções programadas e custos associados; integra com Stock e Finance para custos por obra.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-300">
              <li>• `assets_veiculos`, `assets_manutencoes` com histórico e alertas.</li>
              <li>• Custos associados enviados ao Finance via RPCs de contexto.</li>
              <li>• Relatórios simples de disponibilidade e custo por km/hora.</li>
            </ul>
          </div>

          {/* FLOW */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Flow (Projetos)</p>
            <p className="mt-2 font-semibold text-slate-50">Estrutura de projetos e integração cross-module</p>
            <p className="mt-1 text-slate-300">
              Gestão de projetos com tarefas, vinculação a People, Stock e Finance. Flow comunica custos e reservas via APIs de contexto, nunca escrevendo direto em dados críticos de outro módulo.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-300">
              <li>• `flow_projetos`, `flow_tarefas`, integração com `people`, `stock`, `finance`.</li>
              <li>• Eventos assíncronos para material/reserva/custo (`material_reserved`, `cost_created`).</li>
              <li>• Flow expõe RPCs para consumo controlado por Finance/Stock.</li>
            </ul>
          </div>
        </div>

        {/* CTA FINAL */}
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