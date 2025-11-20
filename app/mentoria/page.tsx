// app/mentoria/page.tsx
import Image from "next/image";

export default function MentoriaPage() {
  return (
    <main className="min-h[(calc(100vh-5rem))] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">
        
        {/* HERO */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Mentoria Tech Reload
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Transição para tecnologia com método, clareza e estratégia — 
            para profissionais que não têm tempo a perder.
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            A Tech Reload é uma mentoria estruturada para orientar profissionais
            que querem migrar para tecnologia sem dar voltas, sem glamourização 
            e sem metodologias vazias. Tudo começa pelo LiberTrail, o diagnóstico
            oficial da mentoria.
          </p>
        </div>

        {/* SUMÁRIO VISUAL */}
        <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Para quem</p>
            <p className="mt-1 text-sm text-slate-200">
              Profissionais 30+ em transição para tecnologia.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Ferramenta</p>
            <p className="mt-1 text-sm text-slate-200">LiberTrail — diagnóstico técnico + comportamental.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Formato</p>
            <p className="mt-1 text-sm text-slate-200">Plano estruturado + acompanhamento real.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Objetivo</p>
            <p className="mt-1 text-sm text-slate-200">Encontrar a rota certa e sustentável para tech.</p>
          </div>
        </div>

        {/* SOBRE A MENTORIA */}
        <div className="space-y-6 max-w-3xl">
          <h2 className="text-xl font-semibold text-slate-50">O que é a Tech Reload</h2>
          <div className="space-y-4 text-sm text-slate-200">
            <p>
              A Tech Reload é uma mentoria prática que conecta estratégia de carreira, 
              maturidade profissional e tecnologia. Não há promessas irreais, atalhos 
              ou empurrões para “virar dev”. Aqui, a rota é construída de acordo com 
              quem você é — não com o que o mercado vende como tendência.
            </p>

            <p>
              O processo começa pelo LiberTrail, o diagnóstico que identifica 
              afinidade técnica, competências transferíveis e possíveis rotas de entrada 
              no mercado de tecnologia.
            </p>

            <p>
              A partir disso, construímos um plano de 90 dias com prioridades claras, 
              exercícios, checkpoints e evolução mensurável.
            </p>
          </div>
        </div>

        {/* LIBERTRAIL */}
        <div id="libertrail" className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">LiberTrail — Diagnóstico oficial</h2>
          <p className="max-w-3xl text-sm text-slate-200">
            O LiberTrail é o ponto de partida da mentoria. Ele identifica o teu 
            perfil de transição e orienta qual trilha faz sentido — técnica, híbrida 
            ou de gestão/produto. São dois formulários diferentes, cada um pensado 
            para um tipo de profissional.
          </p>
        </div>

        {/* PERFIS */}
        <div id="libertrail-perfis" className="grid gap-6 md:grid-cols-2">
          
          {/* PERFIL 1 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Perfil 1
            </p>
            <h3 className="text-lg font-semibold text-slate-50">
              Profissionais com alguma vivência técnica ou contacto prévio com tecnologia
            </h3>
            <p className="text-sm text-slate-200">
              Para quem já teve alguma experiência com sistemas, lógica, dados, 
              suporte, automações, processos digitais ou qualquer contacto real 
              com tech — mesmo que fora de um cargo “oficialmente” de tecnologia.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              <li>• Possui fundamentos mínimos ou vivência prática.</li>
              <li>• Quer clareza sobre qual trilha seguir.</li>
              <li>• Busca acelerar a transição com método.</li>
            </ul>

            <a
              href="https://forms.gle/r214kuUXi473wRnb7"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-accent-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow shadow-accent-500/40 transition hover:bg-accent-400"
            >
              Fazer o LiberTrail — Perfil 1
            </a>
          </div>

          {/* PERFIL 2 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Perfil 2
            </p>
            <h3 className="text-lg font-semibold text-slate-50">
              Profissionais com pouca ou nenhuma vivência técnica
            </h3>
            <p className="text-sm text-slate-200">
              Para quem está a começar quase do zero em tecnologia, mas possui
              competências transferíveis fortes — gestão, operações, vendas,
              atendimento, processos ou áreas correlatas.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              <li>• Não tem base técnica, mas tem maturidade.</li>
              <li>• Precisa entender por onde começar e o que evitar.</li>
              <li>• Quer migrar com segurança e direção clara.</li>
            </ul>

            <a
              href="https://forms.gle/PYwbYjeuUidp9EKVA"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-accent-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow shadow-accent-500/40 transition hover:bg-accent-400"
            >
              Fazer o LiberTrail — Perfil 2
            </a>
          </div>
        </div>

        {/* COMO FUNCIONA A MENTORIA — EM CARDS */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">Como funciona a Tech Reload</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Etapa 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 1
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Análise do LiberTrail
              </p>
              <p className="mt-1 text-slate-300">
                Leitura técnica e comportamental das tuas respostas, identificando
                pontos fortes, riscos e possíveis rotas.
              </p>
            </div>

            {/* Etapa 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 2
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Sessão de alinhamento
              </p>
              <p className="mt-1 text-slate-300">
                Conversa estruturada para alinhar expectativas, contexto de vida,
                restrições e objetivos reais da transição.
              </p>
            </div>

            {/* Etapa 3 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 3
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Plano de 90 dias
              </p>
              <p className="mt-1 text-slate-300">
                Definição de prioridades, práticas, estudos e ações concretas 
                distribuídas ao longo de 90 dias.
              </p>
            </div>

            {/* Etapa 4 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Etapa 4
              </p>
              <p className="mt-2 font-semibold text-slate-50">
                Acompanhamento e ajustes
              </p>
              <p className="mt-1 text-slate-300">
                Checkpoints periódicos, correções de rota e reforço de foco 
                conforme a tua evolução e a realidade do mercado.
              </p>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            Pronto para começar?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-200">
            O próximo passo é simples: escolher o perfil que mais se parece contigo 
            e preencher o LiberTrail. A partir daí, a Tech Reload segue contigo com 
            clareza, método e acompanhamento real.
          </p>
          <a
            href="#libertrail-perfis"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
          >
            Escolher meu perfil
          </a>
        </div>
      </section>
    </main>
  );
}