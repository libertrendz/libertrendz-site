// app/sobre/page.tsx
import Image from "next/image";

const FOTO_URL =
  "https://ncglfknuaugpkmkbsiyf.supabase.co/storage/v1/object/public/Imagens/GUSTAVO.png";

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
            Uma trajetória tardia para tech — com visão de negócio, projetos e
            PMEs em primeiro plano.
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            A Libertrendz nasce do cruzamento entre gestão de projetos, 
            tecnologia e a realidade de profissionais e pequenas empresas 
            que não podem perder tempo com discursos vazios ou soluções genéricas.
          </p>
        </div>

        {/* GUSTAVO + EM POUCAS LINHAS */}
        <div className="grid gap-10 lg:grid-cols-[2.2fr,1.8fr] lg:items-start">
          {/* Texto principal */}
          <div className="space-y-6 text-sm text-slate-200">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50">
                Quem é o Gustavo Santos
              </h2>
              <p>
                Depois de uma carreira construída em contexto corporativo e de
                gestão, em 2022 fiz o movimento que muita gente adia: uma
                transição estruturada para tecnologia, já na casa dos 40+.
              </p>
              <p>
                Em vez de tentar “apagar” o passado profissional, assumi outra
                linha: usar a experiência anterior — gestão, operações, equipas,
                clientes — como base para atuar em tecnologia com um olhar mais
                estratégico e pragmático.
              </p>
              <p>
                Hoje, o foco está em três frentes principais: mentoria para
                transição de carreira para tech, consultoria ágil e construção 
                de apps/ERPs leves para PMEs.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50">
                Como penso e trabalho
              </h2>
              <ul className="space-y-2 text-slate-300">
                <li>
                  • <span className="font-semibold text-slate-100">Zero teatro:</span>{" "}
                  metodologia é meio, não fim. A prioridade é sempre o resultado 
                  real para a pessoa ou empresa.
                </li>
                <li>
                  • <span className="font-semibold text-slate-100">Contexto em primeiro lugar:</span>{" "}
                  antes de propor solução, entendo em que fase a pessoa, a equipa 
                  ou a PME está.
                </li>
                <li>
                  • <span className="font-semibold text-slate-100">Transparência e confronto saudável:</span>{" "}
                  quando algo não faz sentido, digo. O objetivo não é agradar, 
                  é ajudar a tomar decisões melhores.
                </li>
                <li>
                  • <span className="font-semibold text-slate-100">Caminho claro:</span>{" "}
                  mentoria, consultoria ou app — tudo precisa ser traduzido em 
                  próximos passos concretos.
                </li>
              </ul>
            </div>
          </div>

          {/* Card lateral com foto e “em poucas linhas” */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col items-center text-center gap-4">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border border-slate-700 bg-slate-900">
                <Image
                  src={FOTO_URL}
                  alt="Foto de Gustavo Santos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-50">
                  Gustavo Santos
                </p>
                <p className="text-xs text-slate-400">
                  Gestor de Projetos · Mentor Tech Reload · Consultor Ágil
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Em poucas linhas
              </p>
              <p className="text-slate-200">
                Profissional em transição tardia para tecnologia que decidiu
                transformar a própria experiência num modelo de trabalho para
                outros profissionais e PMEs.
              </p>
              <p className="text-slate-300">
                Trabalho sempre com diagnóstico primeiro, plano claro depois —
                seja em mentoria, consultoria ágil ou projetos de apps/ERPs.
              </p>
            </div>
          </aside>
        </div>

        {/* SOBRE A LIBERTRENDZ */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-xl font-semibold text-slate-50">
            Sobre a Libertrendz
          </h2>
          <p className="text-sm text-slate-200">
            A Libertrendz é o guarda-chuva que concentra a mentoria Tech Reload,
            a consultoria ágil e a frente de Apps & Tiny ERPs. Em comum, todas
            partilham a mesma base:
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Foco em profissionais e PMEs, não em grandes corporações.</li>
            <li>• Projetos enxutos, com entregas claras e mensuráveis.</li>
            <li>• Linguagem direta, sem promessas que não possam ser sustentadas.</li>
            <li>• Uso de tecnologia como meio para organizar, crescer e decidir melhor.</li>
          </ul>
        </div>

        {/* CTA FINAL */}
        <div className="pt-8 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer trazer o teu contexto para a mesa?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            Podemos começar por uma conversa simples: mentoria, equipa, projetos 
            ou necessidade de estruturar melhor a tua PME. A partir daí, vemos 
            juntos se faz sentido avançar.
          </p>
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