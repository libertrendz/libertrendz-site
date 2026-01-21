// app/solucoes/gestao-de-equipas-em-campo/page.tsx

export default function GestaoEquipasCampoPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-14">
        {/* HERO */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Soluções
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Gestão de equipas em campo sem perda de controlo
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Quando a equipa sai do escritório, a informação costuma ficar para trás.
            Gestão em campo exige estrutura, não improviso.
          </p>
        </div>

        {/* PROBLEMA */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-xl font-semibold text-slate-50">
            O problema real
          </h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Atividades reportadas tarde demais.</li>
            <li>• Falta de evidência do que foi feito.</li>
            <li>• Dificuldade em alinhar prioridades e execução.</li>
            <li>• Decisões baseadas em versões diferentes da realidade.</li>
          </ul>
        </div>

        {/* CONTEXTO */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-xl font-semibold text-slate-50">
            Quando isto começa a falhar
          </h2>
          <p className="text-sm text-slate-200">
            Funciona com poucas pessoas. Quebra quando a equipa cresce, se espalha
            e o controlo continua dependente de mensagens, chamadas e memória.
          </p>
        </div>

        {/* ABORDAGEM */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-xl font-semibold text-slate-50">
            A abordagem Libertrendz
          </h2>
          <p className="text-sm text-slate-200">
            O foco é operação real. Sem teatro, sem sistemas pesados, sem
            complexidade desnecessária.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Fluxo claro entre campo e gestão.</li>
            <li>• Registos simples do que realmente importa.</li>
            <li>• Estrutura que cresce sem ser refeita.</li>
            <li>• Tecnologia aplicada só onde resolve.</li>
          </ul>
        </div>

        {/* RESULTADO */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-xl font-semibold text-slate-50">
            O que muda na prática
          </h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Visibilidade real da operação.</li>
            <li>• Menos retrabalho e menos discussões.</li>
            <li>• Equipa mais autónoma e alinhada.</li>
            <li>• Decisões baseadas em factos.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="pt-10 border-t border-slate-800 space-y-4 max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-50">
            Queres alinhar isto com a tua realidade?
          </h2>
          <p className="text-sm text-slate-200">
            Falamos do teu cenário e vemos qual é o caminho mais lógico.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
          >
            Falar sobre a minha operação
          </a>
        </div>
      </section>
    </main>
  );
}
