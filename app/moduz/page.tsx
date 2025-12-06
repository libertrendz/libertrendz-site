// app/moduz/page.tsx
'use client';

import { useState } from 'react';

const MODULES_AVAILABLE = [
  { key: 'core', title: 'Core', desc: 'Cadastro de empresas, utilizadores e permissões.' },
  { key: 'people', title: 'People', desc: 'Gestão de colaboradores, contratos e vínculos.' },
  { key: 'track', title: 'Track', desc: 'Registo de ponto, auditoria e jornada mobile.' },
  { key: 'docs', title: 'Docs', desc: 'Repositório organizado de documentos por módulo.' },
  { key: 'finance', title: 'Finance', desc: 'Lançamentos básicos, contas e relatórios simples.' },
  { key: 'bizz', title: 'Bizz', desc: 'Orçamentos → propostas → contratos básicos.' },
  { key: 'flow', title: 'Flow', desc: 'Gestão de projetos e tarefas integradas.' },
  { key: 'assets', title: 'Assets', desc: 'Gestão de ativos, manutenção e custos.' },
];

const MODULES_SOON = [
  { key: 'stock', title: 'Stock', desc: 'Gestão de inventário e movimentos.' },
  { key: 'payroll', title: 'Payroll', desc: 'Folha e cálculo de vencimentos (planeado).' },
  { key: 'crm', title: 'CRM & BI', desc: 'Gestão comercial e painéis analíticos.' },
];

export default function ModuzPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [interest, setInterest] = useState('starter');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    if (!email || !name) {
      setStatus({ ok: false, msg: 'Por favor, preenche o teu nome e e-mail.' });
      return;
    }

    setLoading(true);
    try {
      const payload = {
        nome: name,
        email,
        empresa: company,
        mensagem: `Interesse Moduz+ — plano: ${interest}`,
        assunto: 'Interesse Moduz+ — demo / orçamento',
      };

      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus({ ok: true, msg: 'Recebemos — vamos responder em até 2 dias úteis.' });
        setName('');
        setEmail('');
        setCompany('');
        setInterest('starter');
      } else {
        setStatus({ ok: false, msg: 'Não foi possível enviar. Usa contato@libertrendz.eu.' });
      }
    } catch (err) {
      setStatus({ ok: false, msg: 'Erro ao enviar. Tenta novamente ou escreve para contato@libertrendz.eu.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-12">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          {/* cyan overlay (decorative) — reforçado */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-700/12 via-cyan-600/10 to-transparent" />
          <div className="relative z-10 lg:flex lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Moduz+
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                Moduz+ — o ecossistema modular para PMEs que trabalham com projetos, equipas e operações.
              </h1>
              <p className="mt-4 text-sm text-slate-200">
                Solução modular pensada para empresas que querem organizar pessoas, operações e finanças sem sacrificar
                agilidade. Módulos independentes, roadmap claro e implementação por fases para entregar valor desde a
                primeira semana.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-slate-200">
                <li>• Implementação por módulos — só ativa o que precisas.</li>
                <li>• Integração nativa entre People, Track e Finance.</li>
                <li>• Adapta-se a PMEs de serviços, obras, retalho e organizações com operações em campo.</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#planos"
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
                >
                  Agendar demo
                </a>
                <a
                  href="/apps"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
                >
                  Ver apps & websites
                </a>
              </div>
            </div>

            {/* Side quick info (small) */}
            <div className="mt-6 lg:mt-0 lg:w-80">
              <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-4 text-sm text-slate-200">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Vantagens rápidas</p>
                <div className="space-y-2">
                  <div>
                    <p className="font-semibold text-slate-50">Entrega rápida</p>
                    <p className="text-slate-300 text-[13px]">MVP funcional em semanas, não meses.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50">Modularidade</p>
                    <p className="text-slate-300 text-[13px]">Pega só o que precisares e escala quando necessário.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50">Custos previsíveis</p>
                    <p className="text-slate-300 text-[13px]">Planos por módulo e por utilizador interno.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MODULES — Disponíveis */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Módulos Disponíveis</h2>
          <p className="text-sm text-slate-200 max-w-2xl">
            Módulos testados em operações reais — ativação por empresa e permissões granulares.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {MODULES_AVAILABLE.map((m) => (
              <article key={m.key} className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-emerald-300 px-2 py-0.5 text-[11px] font-semibold text-slate-900 shadow-sm ring-1 ring-emerald-200">
                  Pronto
                </span>
                <h3 className="text-base font-semibold text-slate-50">{m.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{m.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* MODULES — Em construção */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Módulos em desenvolvimento</h2>
          <p className="text-sm text-slate-200 max-w-2xl">
            Roadmap público com prioridades comerciais. Atualizações regulares conforme lançamos novas versões.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {MODULES_SOON.map((m) => (
              <article key={m.key} className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-slate-700/40 px-2 py-0.5 text-[11px] font-semibold text-slate-200 border border-slate-700">
                  Em breve
                </span>
                <h3 className="text-base font-semibold text-slate-50">{m.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{m.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* PLANS / LEAD FORM */}
        <div id="planos" className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-50">Planos e como começamos</h2>
            <p className="text-sm text-slate-200">
              Oferecemos planos modulares por conjunto de funcionalidades. Começamos por descoberta rápida, prova de conceito (P.O.C.) e depois escalamos por módulos.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Starter</p>
                <p className="mt-2 font-semibold text-slate-50">Core + People + Docs</p>
                <p className="mt-1 text-slate-300 text-[13px]">Implantação rápida — ideal para começar a organizar.</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Operacional</p>
                <p className="mt-2 font-semibold text-slate-50">Starter + Track + Finance</p>
                <p className="mt-1 text-slate-300 text-[13px]">Fluxo de operação completo para equipas em campo.</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Comercial</p>
                <p className="mt-2 font-semibold text-slate-50">Operacional + Bizz</p>
                <p className="mt-1 text-slate-300 text-[13px]">Orçamentos e contratos integrados.</p>
              </div>
            </div>
          </div>

          {/* LEAD FORM */}
          <aside className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Interesse</p>
            <h3 className="mt-2 text-base font-semibold text-slate-50">Fala connosco sobre Moduz+</h3>
            <p className="mt-2 text-sm text-slate-300">Preenche o formulário e marcamos uma demo rápida.</p>

            <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
              <div>
                <label className="sr-only">Nome</label>
                <input
                  className="w-full rounded-md border border-slate-800 bg-transparent px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="sr-only">E-mail</label>
                <input
                  className="w-full rounded-md border border-slate-800 bg-transparent px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400"
                  placeholder="E-mail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="sr-only">Empresa</label>
                <input
                  className="w-full rounded-md border border-slate-800 bg-transparent px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400"
                  placeholder="Empresa (opcional)"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div>
                <label className="sr-only">Interesse</label>
                <select
                  className="w-full rounded-md border border-slate-800 bg-transparent px-3 py-2 text-sm text-slate-100"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                >
                  <option value="starter">Starter — Core + People</option>
                  <option value="operacional">Operacional — Track + Finance</option>
                  <option value="comercial">Comercial — Bizz + Finance</option>
                </select>
              </div>

              <div className="flex items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow shadow-cyan-500/30 disabled:opacity-60"
                >
                  {loading ? 'A enviar…' : 'Marcar demo'}
                </button>
                <a
                  href="mailto:contato@libertrendz.eu?subject=Interesse%20Moduz%20Demo"
                  className="text-sm text-slate-300 underline-offset-2 hover:text-slate-100"
                >
                  Ou escreve para nós
                </a>
              </div>

              {status && (
                <div
                  className={`mt-2 text-sm ${
                    status.ok ? 'text-green-400' : 'text-rose-400'
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status.msg}
                </div>
              )}
            </form>
          </aside>
        </div>

        {/* CTA FINAL */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Quer ver como o Moduz+ funciona na tua empresa?</h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Agendamos uma demo curta para entender o teu contexto e propor a melhor ativação de módulos.
          </p>
          <a
            href="#planos"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
          >
            Marcar demo
          </a>
        </div>
      </section>
    </main>
  );
}