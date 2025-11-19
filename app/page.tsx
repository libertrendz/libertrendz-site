export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)]">
      <section className="container-page py-16">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Libertrendz
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Estratégia, tecnologia e transição de carreira com seriedade.
          </h1>
          <p className="text-sm text-slate-200">
            A Libertrendz atua em três frentes: mentoria de transição para
            tecnologia, consultoria ágil para empresas e desenvolvimento de
            apps/ERPs modulares. Tudo com foco em clareza, método e entrega
            real.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <a
            href="/mentoria"
            className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm transition hover:border-emerald-500/70 hover:bg-slate-900/70"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Mentoria
              </p>
              <h2 className="mt-2 text-base font-semibold text-slate-50">
                Tech Reload
              </h2>
              <p className="mt-2 text-slate-200">
                Mentoria profissional para adultos em transição para tecnologia,
                começando pelo diagnóstico TechTrailScan.
              </p>
            </div>
            <span className="mt-4 text-xs text-emerald-300">
              Ver detalhes →
            </span>
          </a>

          <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm opacity-70">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Consultoria Ágil
              </p>
              <h2 className="mt-2 text-base font-semibold text-slate-50">
                Transformação e entregas reais
              </h2>
              <p className="mt-2 text-slate-300">
                Estruturação de projetos, squads e indicadores para empresas que
                querem sair do discurso ágil e entrar na prática.
              </p>
            </div>
            <span className="mt-4 text-xs text-slate-500">
              Em breve nesta página
            </span>
          </div>

          <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm opacity-70">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Apps & Tiny ERPs
              </p>
              <h2 className="mt-2 text-base font-semibold text-slate-50">
                Soluções sob medida
              </h2>
              <p className="mt-2 text-slate-300">
                Apps modulares e ERPs leves para PMEs, como o CONFIANCE e outros
                projetos sob medida.
              </p>
            </div>
            <span className="mt-4 text-xs text-slate-500">
              Em breve nesta página
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
