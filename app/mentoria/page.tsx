// app/mentoria/page.tsx
import Link from "next/link";

const TECHTRAILSCAN_FORM_URL =
  "https://forms.gle/PYwbYjeuUidp9EKVA";

export default function MentoriaPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <div className="container-page flex flex-col gap-16 py-12 lg:py-16">
        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Mentoria Libertrendz
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-50 md:text-4xl lg:text-5xl">
              Libertrendz <span className="text-emerald-400">Tech Reload</span>
            </h1>
            <p className="mb-4 text-lg text-slate-200">
              Recarregue a sua carreira. Reconstrua o seu futuro em tecnologia
              com direção, método e clareza.
            </p>
            <p className="mb-8 text-sm text-slate-300">
              Uma mentoria profissional para adultos em transição, baseada em
              diagnóstico real (TechTrailScan) e um plano estruturado para
              entrar — ou reentrar — no mercado tech com segurança.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href={TECHTRAILSCAN_FORM_URL}
                target="_blank"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Fazer o TechTrailScan gratuito
              </Link>
              <a
                href="#sobre-mentoria"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Conhecer a Mentoria Tech Reload
              </a>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-slate-400">
              Público-alvo: adultos em transição para tecnologia (Brasil e
              Portugal)
            </p>
          </div>

          {/* Lado direito - “cartão” visual */}
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-emerald-900/20 p-6 shadow-xl shadow-black/60">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Como funciona
            </p>
            <h2 className="mb-4 text-lg font-semibold text-slate-50">
              Diagnóstico, direção e execução guiada
            </h2>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>
                • TechTrailScan para identificar a sua rota ideal em tecnologia.
              </li>
              <li>
                • Plano de 90 dias ajustado à sua realidade, não à moda do
                mercado.
              </li>
              <li>
                • Acompanhamento e ajustes no percurso, com foco em resultados.
              </li>
              <li>
                • Preparação para se posicionar profissionalmente no mercado
                tech.
              </li>
            </ul>
          </div>
        </section>

        {/* PROBLEMA REAL */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            O problema não é aprender tecnologia. É saber{" "}
            <span className="text-emerald-400">para onde faz sentido ir</span>.
          </h2>
          <p className="text-sm text-slate-200">
            Mudar para tecnologia aos 30, 40 ou 50 não é sobre decorar sintaxe
            de linguagem. É sobre clareza, direção e método.
          </p>
          <p className="text-sm text-slate-200">
            O que trava a maioria não é falta de capacidade — é falta de um
            caminho que faça sentido para o seu perfil, e não apenas para as
            estatísticas do mercado.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">
                O cenário típico:
              </p>
              <ul className="space-y-1">
                <li>• Muito ruído, pouca direção.</li>
                <li>• Muitos cursos, pouca clareza.</li>
                <li>• Muito conteúdo, pouca aplicabilidade.</li>
                <li>• Muito “influenciador tech”, pouca verdade.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">
                A proposta do Tech Reload:
              </p>
              <ul className="space-y-1">
                <li>• Menos modinha, mais estratégia.</li>
                <li>• Menos culpa, mais método.</li>
                <li>• Menos “começa do zero”, mais aproveitamento de percurso.</li>
                <li>• Menos promessa vazia, mais plano executável.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* A MENTORIA */}
        <section id="sobre-mentoria" className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            O que é a Libertrendz Tech Reload
          </h2>
          <p className="text-sm text-slate-200">
            A Libertrendz Tech Reload é uma mentoria profissional de transição
            para tecnologia, desenhada para adultos que querem mudar com
            maturidade, sem abandonar a sua história e sem cair em promessas
            vazias.
          </p>
          <p className="text-sm text-slate-200">
            O foco não é empurrar você para “virar dev” a qualquer custo. O
            foco é encontrar a rota que combina com o seu jeito de pensar, de
            trabalhar e de aprender — e construir um plano para chegar lá.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Para quem quer
              </p>
              <ul className="space-y-1 text-slate-200">
                <li>• Clareza sobre qual trilha tech seguir.</li>
                <li>• Plano concreto, não “tentativa e erro”.</li>
                <li>• Transição alinhada à sua realidade.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                O que não é
              </p>
              <ul className="space-y-1 text-slate-200">
                <li>• Não é curso gravado genérico.</li>
                <li>• Não é papo motivacional vazio.</li>
                <li>• Não é “hack mágico” de vaga.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                O que é
              </p>
              <ul className="space-y-1 text-slate-200">
                <li>• Estratégia.</li>
                <li>• Método.</li>
                <li>• Execução guiada.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TECHTRAILSCAN DENTRO DA MENTORIA */}
        <section className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-50">
                O ponto de partida: TechTrailScan
              </h2>
              <p className="mt-2 text-sm text-slate-200">
                Toda jornada na Tech Reload começa com o TechTrailScan, o
                diagnóstico que mapeia a sua rota ideal em tecnologia.
              </p>
            </div>
            <Link
              href={TECHTRAILSCAN_FORM_URL}
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-950 shadow shadow-emerald-500/40 transition hover:bg-emerald-400"
            >
              Fazer meu TechTrailScan
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">
                O que ele analisa:
              </p>
              <ul className="space-y-1">
                <li>• Como você pensa e aprende.</li>
                <li>• Como gosta de trabalhar.</li>
                <li>• Que tipo de problema te energiza.</li>
                <li>• O que o seu histórico profissional agrega.</li>
              </ul>
            </div>
            <div className="text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">
                O que ele sugere:
              </p>
              <ul className="space-y-1">
                <li>• Uma trilha principal recomendada.</li>
                <li>• Uma trilha alternativa estratégica.</li>
                <li>• Alinhamento entre desejo e essência.</li>
              </ul>
            </div>
            <div className="text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">
                Trilhas possíveis:
              </p>
              <ul className="space-y-1">
                <li>• Desenvolvimento (DEV).</li>
                <li>• Dados / BI.</li>
                <li>• UX / UI.</li>
                <li>• QA / Testes.</li>
                <li>• Customer Success / Suporte.</li>
                <li>• Gestão (PM / PO / Scrum).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* MÉTODO TECH RELOAD */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            O Método Tech Reload em 4 fases
          </h2>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                titulo: "Fase 1 — Scan",
                desc: "TechTrailScan completo + leitura profissional do seu perfil."
              },
              {
                titulo: "Fase 2 — Direction",
                desc: "Plano de 90 dias ajustado à sua rotina e à trilha escolhida."
              },
              {
                titulo: "Fase 3 — Execution",
                desc: "Execução guiada, checkpoints e ajustes de rota."
              },
              {
                titulo: "Fase 4 — Reload",
                desc: "Reposicionamento profissional: LinkedIn, narrativa, entrevistas e oportunidades."
              }
            ].map((fase) => (
              <div
                key={fase.titulo}
                className="flex flex-col gap-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200"
              >
                <p className="font-semibold text-slate-50">{fase.titulo}</p>
                <p>{fase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PARA QUEM É */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            Para quem é a Tech Reload
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">
                Se você se reconhece em pelo menos 2 itens abaixo:
              </p>
              <ul className="space-y-1">
                <li>• Está perdido entre muitas opções em tecnologia.</li>
                <li>• Tem medo de escolher errado e desperdiçar tempo.</li>
                <li>• Já tentou aprender sozinho e travou.</li>
                <li>• Quer mudar, mas com um plano realista.</li>
                <li>• Está no Brasil ou em Portugal.</li>
                <li>
                  • Tem 30+, 40+ ou 50+ e não quer ser tratado como “caso
                  perdido”.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">
                A mentoria não é para você se:
              </p>
              <ul className="space-y-1">
                <li>• Procura atalho mágico ou fórmula garantida.</li>
                <li>• Não está disposto a estudar e praticar com consistência.</li>
                <li>• Quer apenas um “curso a mais” para acumular certificado.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* O QUE RECEBE */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            O que você recebe na Libertrendz Tech Reload
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Diagnóstico</p>
              <ul className="space-y-1">
                <li>• TechTrailScan completo.</li>
                <li>• Análise profissional do seu perfil.</li>
                <li>• Trilha principal + alternativa.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Plano</p>
              <ul className="space-y-1">
                <li>• Plano de 90 dias personalizado.</li>
                <li>• Roadmap de habilidades.</li>
                <li>• Sugestão de materiais e práticas.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">Execução</p>
              <ul className="space-y-1">
                <li>• Acompanhamento estruturado.</li>
                <li>• Revisão de currículo e LinkedIn.</li>
                <li>• Preparação para entrevistas.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">FAQ</h2>
          <div className="space-y-4 text-sm text-slate-200">
            <div>
              <p className="font-semibold text-slate-50">
                Preciso saber programar?
              </p>
              <p>
                Não. A mentoria parte do diagnóstico para entender se
                programação faz sentido para você ou se outra trilha é mais
                natural.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-50">
                Serve para pessoas com mais de 40 ou 50 anos?
              </p>
              <p>
                Sim. A Tech Reload foi desenhada justamente para adultos em
                transição, que trazem bagagem e responsabilidade para o processo.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-50">
                Consigo mudar de carreira em 3–6 meses?
              </p>
              <p>
                Depende da sua dedicação e ponto de partida, mas com método,
                clareza e consistência, 3–6 meses é um horizonte realista para
                estar apto a disputar vagas iniciais.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-50">
                E se eu tiver pouco tempo?
              </p>
              <p>
                O plano é construído em cima da sua realidade. Não existe tempo
                ideal, existe plano honesto e execução consistente.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="space-y-4 border-t border-slate-800 pt-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-50">
            Recarregue a sua carreira. Reconstrua o seu futuro em tecnologia.
          </h2>
          <p className="text-sm text-slate-200">
            O primeiro passo é simples: fazer o TechTrailScan. A partir daí, a
            Tech Reload cuida da estrutura.
          </p>
          <div className="mt-4 flex justify-center">
            <Link
              href={TECHTRAILSCAN_FORM_URL}
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Fazer meu TechTrailScan agora
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
