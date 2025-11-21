import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 antialiased">
      <header className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://ncglfknuaugpkmkbsiyf.supabase.co/storage/v1/object/public/Imagens/LIBERTRENDZ.png"
            alt="Libertrendz"
            width={44}
            height={44}
            priority
            className="rounded"
          />
          <div className="hidden md:block">
            <div className="text-xs tracking-widest text-slate-300">LIBERTRENDZ</div>
            <div className="text-[11px] text-slate-400">Mentoria Tech · Projetos Ágeis · Apps</div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link href="/" className="hover:underline">Início</Link>
          <Link href="/mentoria" className="hover:underline">Mentoria</Link>
          <Link href="/agile" className="hover:underline">Consultoria</Link>
          <Link href="/apps" className="hover:underline">Apps & ERPs</Link>
          <Link href="/sobre" className="hover:underline">Sobre</Link>
          <Link href="/contato" className="px-4 py-2 rounded-2xl bg-amber-500 text-slate-900 font-semibold">Entrar em contato</Link>
        </nav>

        <div className="md:hidden">
          <Link href="/contato" className="px-3 py-2 rounded-2xl bg-amber-500 text-slate-900 text-sm font-semibold">Contato</Link>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <span className="inline-block text-[11px] uppercase tracking-[0.18em] text-amber-400">Estratégia & execução</span>
            <h1 className="mt-4 text-3xl md:text-4xl leading-tight font-semibold">
              Estratégia, tecnologia e projetos sob medida — para quem não pode recomeçar do zero.
            </h1>
            <p className="mt-4 max-w-2xl text-slate-300">
              Mentoria para transição de carreira (30+/40+), consultoria ágil prática e apps/ERPs leves para PMEs.
              Nada de "teatro ágil": prometemos previsibilidade, critérios e entregas reais.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/mentoria" className="px-4 py-2 rounded-2xl bg-amber-500 text-slate-900 font-medium">LiberTrail — Diagnóstico</Link>
              <Link href="/apps" className="px-4 py-2 rounded-2xl border border-slate-800 text-slate-100">Apps & ERPs</Link>
              <Link href="/contato" className="px-4 py-2 rounded-2xl text-slate-100 border border-amber-600 hover:bg-amber-600">Falar comigo</Link>
            </div>
          </div>

          <div className="order-first md:order-last">
            <div className="w-full rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-sm uppercase tracking-[0.2em] text-amber-400">Serviços</h3>
              <div className="mt-4 grid gap-4">
                <CardCompact
                  title="Mentoria Tech Reload"
                  text="Rota prática para profissionais 30+/40+ — diagnóstico, rota e plano de ação."
                  href="/mentoria"
                />
                <CardCompact
                  title="Consultoria Ágil"
                  text="Metodologia enxuta, métricas úteis e rituais que geram previsibilidade."
                  href="/agile"
                />
                <CardCompact
                  title="Apps & ERPs"
                  text="Tiny ERPs modulares — ponto, obras, financeiro; ou sites e landing pages."
                  href="/apps"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / PROCESS */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureBlock title="Foco em resultados" body="Priorizamos entregáveis que reduzem incerteza e fricção operacional." />
          <FeatureBlock title="Metodologia Genesys" body="Padrões reutilizáveis: DB→RPC→UI, RLS multi-tenant, idempotência." />
          <FeatureBlock title="Entrega pragmática" body="Protótipos rápidos, validação real com utilizadores e rollback seguro." />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-xl font-semibold">Queremos ser o próximo motor da tua transição ou do teu ERP leve?</h2>
        <p className="mt-3 text-slate-300">Comece pelo LiberTrail — diagnóstico estruturado. Vamos desenhar a rota realista e executável.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/mentoria" className="px-5 py-3 rounded-2xl bg-amber-500 text-slate-900 font-semibold">Fazer o diagnóstico</Link>
          <Link href="/contato" className="px-5 py-3 rounded-2xl border border-slate-800">Conversar sobre o projeto</Link>
        </div>
      </section>

      <footer className="mt-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-slate-400">
          <div className="flex items-center gap-3">
            <Image
              src="https://ncglfknuaugpkmkbsiyf.supabase.co/storage/v1/object/public/Imagens/LIBERTRENDZ.png"
              alt="logo"
              width={28}
              height={28}
            />
            <div>© {year} Libertrendz. Todos os direitos reservados.</div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:block">
              <div>contato@libertrendz.eu</div>
              <div className="text-slate-500 text-xs">+351 939 250 661</div>
            </div>
            <Link href="/contato" className="px-3 py-1 rounded-2xl bg-amber-500 text-slate-900 text-sm">Entrar em contato</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function CardCompact({ title, text, href }: { title: string; text: string; href: string }) {
  return (
    <Link href={href} className="block rounded-2xl p-4 border border-slate-800 hover:shadow-sm bg-slate-900/30">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-slate-300 text-sm">{text}</div>
    </Link>
  );
}

function FeatureBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl p-5 border border-slate-800 bg-slate-900/30">
      <div className="text-xs uppercase tracking-[0.16em] text-amber-400">{title}</div>
      <div className="mt-3 text-slate-300 text-sm">{body}</div>
    </div>
  );
}
