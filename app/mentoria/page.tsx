// app/mentoria/page.tsx
import Link from "next/link";

const LIBERTRAIL_PERFIL2_URL =
  "https://forms.gle/PYwbYjeuUidp9EKVA";

export default function MentoriaPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        {/* HERO */}
        <header className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            Mentoria Tech Reload
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Mentoria de transição para tecnologia
            <span className="block text-accent-400">
              para profissionais que não têm tempo a perder.
            </span>
          </h1>
          <p className="text-sm text-slate-200">
            A Tech Reload é uma mentoria pensada para profissionais em
            transição que querem entrar em tecnologia com clareza, método e
            acompanhamento — sem promessas fáceis nem atalhos irreais.
          </p>
        </header>

        {/* RESUMO RÁPIDO */}
        <section className="grid gap-6 md:grid-cols-[2fr,3fr] md:items-start">
          <div className="space-y-3 text-sm text-slate-200">
            <h2 className="text-base font-semibold text-slate-50">
              Em três linhas
            </h2>
            <ul className="space-y-1 text-slate-200">
              <li>
                • <strong>Para quem:</strong> profissionais 30+ em transição ou
                recomeço, com dúvidas sobre qual rota seguir em tecnologia.
              </li>
              <li>
                • <strong>Ferramenta central:</strong> diagnóstico LiberTrail,
                com leitura profissional do teu perfil.
              </li>
              <li>
                • <strong>Formato:</strong> diagnóstico + plano de 90 dias +
                acompanhamento, com foco em decisão e execução.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              O que esta mentoria NÃO é
            </p>
            <ul className="space-y-1 text-slate-300">
              <li>• Não é “guru de carreira” a empurrar uma rota única.</li>
              <li>• Não é curso gravado, genérico e sem contexto.</li>
              <li>• Não é promessa de seis dígitos em poucos meses.</li>
            </ul>
            <p className="mt-3 text-[13px] text-slate-300">
              A proposta é simples: olhar o teu contexto real, mapear rotas
              viáveis e construir um plano que caiba na tua vida — e não o
              contrário.
            </p>
          </div>
        </section>

        {/* COMO FUNCIONA A TECH RELOAD */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Como funciona a Tech Reload
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                1. Diagnóstico
              </p>
              <p className="text-slate-200">
                Começamos pelo <strong>LiberTrail</strong>, um diagnóstico
                estruturado para entender o teu perfil, motivações, histórico
                profissional e relação real com tecnologia.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                2. Plano de rota
              </p>
              <p className="text-slate-200">
                A partir do diagnóstico, construímos um plano de{" "}
                <strong>aprox. 90 dias</strong>, com rotas possíveis, pontos de
                foco, competências a desenvolver e checkpoints claros.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                3. Acompanhamento
              </p>
              <p className="text-slate-200">
                Ao longo da mentoria, ajustamos o plano com base na tua
                realidade, ritmo e feedback. A ideia não é quantidade de
                sessões, é qualidade e direção.
              </p>
            </div>
          </div>
        </section>

        {/* LIBERTRAIL */}
        <section id="libertrail" className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            LiberTrail — o diagnóstico que abre a conversa
          </h2>
          <div className="grid gap-6 md:grid-cols-[3fr,2fr] md:items-start">
            <div className="space-y-3 text-sm text-slate-200">
              <p>
                O <strong>LiberTrail</strong> é um diagnóstico criado para
                profissionais em transição que precisam de clareza antes de
                mergulhar em qualquer formação ou mudança mais agressiva.
              </p>
              <p>
                Em vez de te empurrar para “virar dev” por padrão, o LiberTrail
                olha para:
              </p>
              <ul className="space-y-1 text-slate-300">
                <li>• O teu histórico profissional e experiências anteriores;</li>
                <li>• O que realmente te energiza no dia a dia de trabalho;</li>
                <li>• A tua relação atual com tecnologia e mudança;</li>
                <li>• Limitações reais (tempo, contexto, responsabilidades);</li>
                <li>• O nível de risco que faz sentido assumir agora.</li>
              </ul>
              <p>
                A partir daí, o objetivo é mapear{" "}
                <strong>rotas possíveis</strong>, em vez de criar a ilusão de
                que só existe um caminho certo.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Em termos práticos
              </p>
              <ul className="space-y-1 text-slate-300">
                <li>• Questionário estruturado (online);</li>
                <li>• Leitura profissional das respostas;</li>
                <li>• Indicação de rota principal e alternativa;</li>
                <li>• Pontos fortes, riscos e alertas;</li>
                <li>• Próximos passos sugeridos.</li>
              </ul>
              <p className="mt-3 text-[13px] text-slate-300">
                A mentoria Tech Reload usa o LiberTrail como porta de entrada.
                Mesmo que não continues para o acompanhamento, o diagnóstico já
                entrega valor real.
              </p>
            </div>
          </div>
        </section>

        {/* PERFIS LIBERTRAIL */}
        <section
          id="libertrail-perfis"
          className="space-y-4 border-t border-slate-800 pt-10"
        >
          <h2 className="text-xl font-semibold text-slate-50">
            Perfis LiberTrail — por onde faz mais sentido começar
          </h2>
          <p className="max-w-3xl text-sm text-slate-200">
            A entrada no LiberTrail acontece por dois perfis. Não é rótulo
            definitivo, é apenas o ponto de partida que deixa o diagnóstico mais
            honesto e útil.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* PERFIL 1 */}
            <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Perfil 1
                </p>
                <h3 className="text-base font-semibold text-slate-50">
                  Profissional com alguma base ou contacto com tecnologia
                </h3>
                <p className="text-slate-200">
                  Já tiveste contacto com projetos, produtos digitais, dados ou
                  ferramentas tech no dia a dia. Talvez tenhas estudado algo por
                  conta própria, participado em iniciativas internas ou lidado
                  de perto com equipas técnicas.
                </p>
                <ul className="mt-2 space-y-1 text-slate-300">
                  <li>• Sentes que não partes do zero.</li>
                  <li>• Falta clareza sobre qual rota faz mais sentido.</li>
                  <li>• Queres alinhar as próximas decisões à tua história.</li>
                </ul>
              </div>
              <div className="mt-4 flex flex-col gap-2 text-xs text-slate-300">
                <p className="text-[11px] text-slate-400">
                  Para este perfil, o LiberTrail é ajustado ao teu histórico
                  profissional. Se ainda não tens formulário dedicado, podes
                  iniciar o processo falando diretamente comigo.
                </p>
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center rounded-md border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:border-accent-400 hover:bg-slate-900/70"
                >
                  Falar sobre o meu caso
                </Link>
              </div>
            </div>

            {/* PERFIL 2 */}
            <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Perfil 2
                </p>
                <h3 className="text-base font-semibold text-slate-50">
                  Profissional quase sem experiência em tecnologia
                </h3>
                <p className="text-slate-200">
                  Tens pouca ou nenhuma experiência prática em tecnologia, mas
                  estás seriamente a considerar uma mudança de rota. Já leste,
                  ouviste e viste muito conteúdo, mas ainda não consegues ligar
                  os pontos.
                </p>
                <ul className="mt-2 space-y-1 text-slate-300">
                  <li>• Queres entender se faz sentido mesmo entrar em tech.</li>
                  <li>• Tens dúvidas sobre por onde começar.</li>
                  <li>• Não queres cometer um erro caro em tempo e dinheiro.</li>
                </ul>
              </div>
              <div className="mt-4 flex flex-col gap-2 text-xs text-slate-300">
                <p className="text-[11px] text-slate-400">
                  Este é o perfil para o qual o LiberTrail já está estruturado
                  num formulário específico. A partir das tuas respostas, o
                  próximo passo é uma leitura profissional e, se fizer sentido,
                  o plano da Tech Reload.
                </p>
                <a
                  href={LIBERTRAIL_PERFIL2_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-accent-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow shadow-accent-500/40 transition hover:bg-accent-400"
                >
                  Responder LiberTrail — Perfil 2
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE RECEBE NA PRÁTICA */}
        <section className="space-y-4 border-t border-slate-800 pt-10">
          <h2 className="text-xl font-semibold text-slate-50">
            O que a mentoria entrega na prática
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <ul className="space-y-1 text-slate-300">
                <li>• Leitura estruturada do teu contexto profissional.</li>
                <li>• Mapeamento de rotas possíveis em tecnologia.</li>
                <li>• Indicação de rota principal e alternativa.</li>
                <li>• Plano de ação de aproximadamente 90 dias.</li>
                <li>• Critérios objetivos para tomar decisões.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-200">
              <ul className="space-y-1 text-slate-300">
                <li>• Conversas francas sobre riscos, timing e expectativas.</li>
                <li>• Apoio para alinhar estudo, trabalho e vida pessoal.</li>
                <li>• Ajustes de rota conforme o que for acontecendo.</li>
                <li>• Visão de alguém que fez a transição mais tarde.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="space-y-4 border-t border-slate-800 pt-10 text-center">
          <h2 className="text-2xl font-semibold text-slate-50">
            Próximo passo
          </h2>
          <p className="text-sm text-slate-200 max-w-2xl mx-auto">
            Se quiseres começar agora, escolhe o perfil que mais se aproxima de
            ti e responde ao LiberTrail. Se ainda estás a decidir, podemos
            começar por uma conversa rápida para alinhar expectativas.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href="#libertrail-perfis"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Ver perfis LiberTrail
            </a>
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Falar comigo
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
