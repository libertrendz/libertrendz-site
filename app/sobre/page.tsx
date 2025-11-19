// app/sobre/page.tsx

export default function SobrePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">

        {/* HERO */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            Sobre
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            A história, os princípios e a visão por trás da Libertrendz.
          </h1>
          <p className="mt-4 text-sm text-slate-200 max-w-2xl">
            Uma empresa construída a partir de experiência real, transição de carreira, visão prática e a busca por soluções que funcionam — sem teatro, sem buzzwords, sem fantasia.
          </p>
        </div>

        {/* SOBRE A LIBERTRENDZ */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            Sobre a Libertrendz
          </h2>
          <div className="space-y-4 text-sm text-slate-200 max-w-3xl">
            <p>
              A Libertrendz nasce com uma proposta clara: ser um braço de estratégia e execução em tecnologia para pessoas e PMEs que não têm tempo nem paciência para complexidade desnecessária.
            </p>
            <p>
              Atuamos em três frentes que se complementam:
            </p>

            <ul className="space-y-1 text-slate-300">
              <li>• <strong>Mentoria Tech</strong>: ajudar adultos em transição de carreira a encontrarem uma rota coerente e sustentável em tecnologia.</li>
              <li>• <strong>Projetos Ágeis</strong>: estruturar equipas, fluxos e previsibilidade, substituindo caos por clareza.</li>
              <li>• <strong>Apps & Tiny ERPs</strong>: criar soluções digitais modulares e sob medida para PMEs.</li>
            </ul>

            <p>
              Nossa filosofia é simples e direta: <strong>menos fantasia, mais entrega</strong>.  
              Menos jargão, mais clareza.  
              Menos teoria de palco, mais prática que move o negócio.
            </p>
          </div>
        </div>

        {/* SOBRE O GUSTAVO */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            Sobre Gustavo Santos
          </h2>
          <div className="space-y-4 text-sm text-slate-200 max-w-3xl">
            <p>
              A maior parte da carreira do Gustavo foi construída em gestão, operações e liderança de equipas. Mas em 2022, aos 49 anos, tomou uma decisão que muitos adiam: migrar para tecnologia.
            </p>

            <p>
              Em vez de recomeçar do zero, conectou o que já carregava — visão de negócio, maturidade, experiência humana — com práticas modernas de tecnologia, produto e agilidade. 
              Foi este equilíbrio entre <strong>experiência real</strong> e <strong>ferramentas modernas</strong> que deu origem à Libertrendz.
            </p>

            <p>
              Hoje atua como gestor de projetos e consultor, com foco em:
            </p>

            <ul className="space-y-1 text-slate-300">
              <li>• Mentoria de transição para tecnologia para adultos;</li>
              <li>• Estruturação de projetos e equipas ágeis;</li>
              <li>• Concepção e gestão de apps e ERPs modulares (como o CONFIANCE);</li>
              <li>• Apoio estratégico a PMEs que querem evoluir digitalmente sem complicação.</li>
            </ul>

            <p>
              A Libertrendz é o reflexo dessa jornada: um espaço onde tecnologia e maturidade coexistem, onde a experiência de vida vale tanto quanto a técnica — e onde o objetivo final é sempre o mesmo: <strong>clareza, método e entrega real</strong>.
            </p>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer falar comigo?
          </h2>
          <p className="text-sm text-slate-200">
            Seja sobre mentoria, consultoria ou apps — começamos com uma conversa simples.
          </p>
          <a
            href="mailto:contato@libertrendz.eu?subject=Contato%20via%20Libertrendz"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Enviar mensagem
          </a>
        </div>

      </section>
    </main>
  );
}
