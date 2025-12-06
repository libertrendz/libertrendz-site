import Image from "next/image";

const FOTO_URL =
  "/images/GUSTAVO.png";

export default function SobrePage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        
        {/* HERO */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Sobre
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Transição profissional com experiência — visão de negócio, projetos e PMEs.
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            A Libertrendz nasce do cruzamento entre gestão de projetos, tecnologia e a realidade de profissionais e pequenas empresas — com foco em soluções práticas que geram resultado sem ruído.
          </p>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid gap-10 lg:grid-cols-[2.2fr,1.8fr] lg:items-start">

          {/* TEXTO PRINCIPAL */}
          <div className="space-y-6 text-sm text-slate-200">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50">Quem é o Gustavo Santos</h2>
              <p>
                Com percurso sólido em contexto corporativo e gestão, optei por uma transição estruturada para tecnologia que aproveita a experiência acumulada. Em vez de recomeçar, integrei o que já sabia para construir soluções mais úteis e práticas.
              </p>
              <p>
                Trabalho alinhando experiência de operação, gestão e produto com entregas tecnológicas que funcionam — mentoria, consultoria e desenvolvimento de aplicações para PMEs.
              </p>
              <p>
                Hoje atuo em três frentes: Mentoria Tech Reload, Consultoria Ágil e desenvolvimento de apps/soluções operacionais para pequenas e médias empresas.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50">Como penso e trabalho</h2>
              <ul className="space-y-2 text-slate-300">
                <li>• <span className="font-semibold text-slate-100">Zero teatro:</span> metodologia é meio, não fim.</li>
                <li>• <span className="font-semibold text-slate-100">Contexto primeiro:</span> antes da solução, entendimento do contexto humano e operacional.</li>
                <li>• <span className="font-semibold text-slate-100">Franqueza necessária:</span> quando algo não faz sentido, eu digo — de forma construtiva.</li>
                <li>• <span className="font-semibold text-slate-100">Caminho claro:</span> tudo vira próximos passos mensuráveis e operáveis.</li>
              </ul>
            </div>
          </div>

          {/* CARD LATERAL */}
          <aside className="space-y-4">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center gap-4">
              <div className="relative h-36 w-36 overflow-hidden rounded-full border border-slate-700 bg-slate-900">
                <Image
                  src={FOTO_URL}
                  alt="Foto de Gustavo Santos"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-50">Gustavo Santos</p>
                <p className="text-xs text-slate-400">Gestor de Projetos · Mentor Tech Reload · Consultor Ágil</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Em poucas linhas</p>
              <p>
                Profissional que converteu experiência em um método claro: diagnóstico, plano e execução orientada ao resultado — aplicável à mentoria, consultoria e produtos digitais.
              </p>
              <p className="text-slate-300">Diagnóstico primeiro; depois plano e execução com métricas simples.</p>
            </div>

          </aside>
        </div>

        {/* SOBRE A LIBERTRENDZ */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-xl font-semibold text-slate-50">Sobre a Libertrendz</h2>
          <p className="text-sm text-slate-200">A Libertrendz é o guarda-chuva que reúne Mentoria Tech Reload, Consultoria Ágil e Apps & Websites para PMEs.</p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Foco em profissionais e pequenas e médias empresas.</li>
            <li>• Projetos enxutos e mensuráveis.</li>
            <li>• Linguagem direta e pragmática.</li>
            <li>• Tecnologia usada como meio para organizar, crescer e tomar decisões melhores.</li>
          </ul>
        </div>

        {/* CTA FINAL */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">Quer trazer o teu contexto para a mesa?</h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">Podemos começar por uma conversa simples. A partir daí, definimos prioridades e um plano de ação com resultados mensuráveis.</p>
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Ir para o contato
          </a>
        </div>

      </section>
    </main>
  );
}