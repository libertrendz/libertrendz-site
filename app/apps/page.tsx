import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="https://ncglfknuaugpkmkbsiyf.supabase.co/storage/v1/object/public/Imagens/LIBERTRENDZ.png"
              alt="Libertrendz"
              width={40}
              height={40}
            />
            <div>
              <div className="text-xs tracking-widest text-slate-300">APPS & ERPS</div>
              <div className="text-[11px] text-slate-400">Tiny ERPs, Sites & Landing Pages</div>
            </div>
          </div>

          <div>
            <Link href="/contato" className="px-4 py-2 rounded-2xl bg-amber-500 text-slate-900 font-medium">Solicitar proposta</Link>
          </div>
        </header>

        {/* HERO */}
        <section className="mt-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold leading-snug">Apps pragmáticos. ERPs que resolvem o dia a dia.</h1>
            <p className="mt-4 text-slate-300 max-w-xl">
              Desenvolvemos apps modulares para PMEs: ponto, obras, financeiro, fornecedores, orçamentos.
              Pequeno footprint, regras de negócio sólidas e implantação rápida (Vercel + Supabase).
            </p>

            <ul className="mt-5 grid gap-3">
              <li className="flex gap-3 items-start">
                <div className="mt-1 text-amber-400">●</div>
                <div>
                  <div className="font-medium">Módulos modulares</div>
                  <div className="text-slate-400 text-sm">Instala só o que precisa — sem sobrecarga.</div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="mt-1 text-amber-400">●</div>
                <div>
                  <div className="font-medium">Padrões reutilizáveis</div>
                  <div className="text-slate-400 text-sm">GenesysRef → RLS, RPCs que retornam json/uuid, importação blindada.</div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="mt-1 text-amber-400">●</div>
                <div>
                  <div className="font-medium">Rápida entrega</div>
                  <div className="text-slate-400 text-sm">MVPs funcionais em semanas, com roadmap claro para evolução.</div>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <Link href="/contato" className="px-4 py-2 rounded-2xl bg-amber-500 text-slate-900 font-medium">Ver proposta</Link>
              <Link href="/contato" className="px-4 py-2 rounded-2xl border border-slate-800">Conversa rápida</Link>
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
              <h3 className="text-sm uppercase tracking-[0.16em] text-amber-400">Casos típicos</h3>
              <div className="mt-4 grid gap-3">
                <ModuleCard title="Ponto" description="Registo com foto e geolocalização, auditoria e relatórios CSV/PDF." />
                <ModuleCard title="Obras" description="Obras→Fases→Tarefas→Horas (ligado ao ponto)." />
                <ModuleCard title="Financeiro" description="Lançamentos, clientes, faturas e recibos — exportáveis." />
                <ModuleCard title="Orçamentos" description="Numero automático YYYY-####, itens, revisões e PDF." />
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/20 p-5">
              <h4 className="text-sm uppercase tracking-[0.12em] text-amber-400">Sites & Landing Pages</h4>
              <p className="mt-2 text-slate-300 text-sm">Landing pages com copy focada em conversão, integração com forms e tracking — design minimalista e identidade forte.</p>
              <div className="mt-4 flex gap-3">
                <Link href="/contato" className="px-3 py-2 rounded-2xl bg-amber-500 text-slate-900 font-medium">Solicitar site</Link>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section className="mt-10">
          <div className="grid md:grid-cols-4 gap-4">
            <StepCard step="1" title="Diagnóstico" body="Mapeamos processos, personas e gaps." />
            <StepCard step="2" title="Protótipo" body="Wireframe funcional e validação com utilizadores." />
            <StepCard step="3" title="MVP" body="Entrega do módulo mínimo viável e deploy." />
            <StepCard step="4" title="Escala" body="Iterações, integrações e automações." />
          </div>
        </section>

        {/* RADAR / CASES */}
        <section className="mt-12">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm uppercase tracking-[0.16em] text-amber-400">Radar Libertrendz (opcional)</h3>
              <small className="text-slate-400 text-xs">posts, cases e insights curtos</small>
            </div>

            <p className="mt-3 text-slate-300 text-sm max-w-3xl">
              Proposta: adicionar um bloco dinâmico (feed) para “Radar Libertrendz” — conteúdo curto para LinkedIn (SaaS, gestão, Agile).
              Se concordar, eu preparo o componente de feed com imagem criada automaticamente para cada post.
            </p>

            <div className="mt-4 grid md:grid-cols-3 gap-4">
              <MiniCase title="Case exemplo — ERP Lite" excerpt="Integração ponto + obras + financeiro — redução de 30% em retrabalho." />
              <MiniCase title="Radar — Insight" excerpt="Métrica simples que toda PME deve seguir esta semana." />
              <MiniCase title="Design" excerpt="Landing page para captação de leads em 48h." />
            </div>
          </div>
        </section>

        <footer className="mt-12 text-sm text-slate-400">
          <div>Quer avançar? Peça a proposta inicial — entrego escopo e estimativa por módulo.</div>
        </footer>
      </div>
    </main>
  );
}

function ModuleCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl p-4 border border-slate-800 bg-slate-900/20">
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-slate-300 text-sm">{description}</div>
    </div>
  );
}

function StepCard({ step, title, body }: { step: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl p-4 border border-slate-800 bg-slate-900/10">
      <div className="text-amber-400 font-mono text-sm">Step {step}</div>
      <div className="mt-2 font-semibold">{title}</div>
      <div className="mt-1 text-slate-300 text-sm">{body}</div>
    </div>
  );
}

function MiniCase({ title, excerpt }: { title: string; excerpt: string }) {
  return (
    <div className="rounded-2xl p-4 border border-slate-800 bg-slate-900/10">
      <div className="font-semibold text-sm">{title}</div>
      <div className="mt-1 text-slate-300 text-sm">{excerpt}</div>
    </div>
  );
}
