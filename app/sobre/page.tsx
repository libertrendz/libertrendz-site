import Image from "next/image";

const FOTO_URL = "/images/GUSTAVO.png";

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
            Libertrendz — soluções digitais, consultoria e mentoria para PMEs e profissionais.
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Diagnosticamos, projetamos e entregamos resultados práticos: primeiro construímos apps operacionais e websites (Moduz+, Confiance, Ekklyn, Legistor), depois organizamos equipas com consultoria ágil e apoiamos profissionais em transição com mentoria orientada a plano.
          </p>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid gap-10 lg:grid-cols-[2.2fr,1.8fr] lg:items-start">

          {/* TEXTO PRINCIPAL */}
          <div className="space-y-6 text-sm text-slate-200">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50">Quem é o Gustavo Santos</h2>
              <p>
                Com percurso sólido em contexto corporativo e gestão, optei por integrar essa experiência em produtos e serviços tecnológicos que funcionam no dia a dia das empresas. Em vez de apagar o passado profissional, transformei conhecimento prático em soluções acionáveis.
              </p>
              <p>
                O meu trabalho combina desenvolvimento de soluções operacionais, consultoria para equipas e mentoria para profissionais que querem alinhar experiência com oportunidades tecnológicas.
              </p>
              <p>
                Hoje atuo em três frentes: <strong>desenvolvimento de apps/soluções operacionais para PMEs (Moduz+, Confiance, Ekklyn, Legistor)</strong>, <strong>Consultoria Ágil</strong> e <strong>Mentoria Tech Reload</strong>.
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
                Transformamos experiência e processos em resultados digitais práticos: produtos (apps/websites), serviço consultivo e formação/mentoria com foco em aplicação.
              </p>
              <div className="mt-2 text-sm text-slate-300 space-y-1">
                <div>• <strong>Apps operacionais e Websites:</strong> Moduz+, Confiance, Ekklyn, Legistor.</div>
                <div>• <strong>Consultoria Ágil:</strong> clareza, fluxo e métricas.</div>
                <div>• <strong>Mentoria Tech Reload:</strong> diagnóstico e plano para carreira.</div>
              </div>
            </div>

          </aside>
        </div>

        {/* SOBRE A LIBERTRENDZ */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-xl font-semibold text-slate-50">Sobre a Libertrendz</h2>
          <p className="text-sm text-slate-200">A Libertrendz é o guarda-chuva que reúne Apps & Websites (Moduz+ e apps operacionais), Consultoria Ágil e Mentoria Tech Reload — serviços pensados para gerar ganho operativo e previsibilidade para PMEs e para apoiar profissionais em transição.</p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Foco em pequenas e médias empresas e profissionais com experiência.</li>
            <li>• Projetos enxutos, com entregas e métricas claras.</li>
            <li>• Linguagem direta e pragmática.</li>
            <li>• Tecnologia aplicada para resolver operações reais.</li>
          </ul>
        </div>

        {/* MISSÃO • VISÃO • VALORES */}
        <section id="missao-visao-valores" className="space-y-6 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">Identidade</p>
          <h2 className="text-xl font-semibold text-slate-50">Missão, visão e valores</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* MISSÃO */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Missão</p>
              <p className="mt-2 text-slate-100 font-semibold">Ajudar profissionais e PMEs a transformar experiência em resultados digitais práticos.</p>
              <p className="mt-2 text-slate-300 text-sm">Diagnóstico, plano e execução com métricas simples e foco em valor.</p>
            </div>

            {/* VISÃO */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Visão</p>
              <p className="mt-2 text-slate-100 font-semibold">Ser referência em soluções operacionais que tornam PMEs mais produtivas e previsíveis.</p>
              <p className="mt-2 text-slate-300 text-sm">Crescer com clientes reais e casos comprovados.</p>
            </div>

            {/* VALORES */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Valores</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li><span className="font-semibold text-slate-100">Praticidade:</span> soluções que funcionam no dia a dia.</li>
                <li><span className="font-semibold text-slate-100">Clareza:</span> comunicação direta e decisões mensuráveis.</li>
                <li><span className="font-semibold text-slate-100">Propósito:</span> construir soluções com empatia e sentido para o utilizador real.</li>
              </ul>
            </div>
          </div>

          <div className="mt-3 text-sm text-slate-300">
            <a href="/cases" className="font-semibold text-accent-400 hover:text-accent-300">Ver casos que comprovam a nossa abordagem →</a>
          </div>
        </section>

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