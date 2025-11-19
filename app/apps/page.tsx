// app/apps/page.tsx

export default function AppsPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16">
        {/* HERO */}
        <div className="grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
              Apps & ERPs Libertrendz
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
              Tiny ERPs e apps sob medida,{" "}
              <span className="block text-accent-400">
                construídos em cima de módulos prontos.
              </span>
            </h1>
            <p className="mb-4 text-sm text-slate-200">
              A Libertrendz desenvolve soluções digitais para PMEs que precisam
              de algo entre o Excel e um ERP gigante — sem contratos pesados, sem
              anos de implantação e sem dependência de software genérico.
            </p>
            <p className="mb-6 text-sm text-slate-300">
              Usamos uma base técnica sólida (Next.js + Supabase) e módulos já
              testados (obras, ponto, fornecedores, financeiro, etc.) para
              montar o seu sistema como um conjunto de blocos — rápido, estável
              e sob medida.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:contato@libertrendz.eu?subject=Apps%20e%20ERPs%20Libertrendz"
                className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
              >
                Falar sobre um app/ERP para minha empresa
              </a>
              <a
                href="#modulos"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Ver módulos disponíveis
              </a>
            </div>
          </div>

          {/* Bloco de destaque */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-xl shadow-black/50">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
              O que diferencia a abordagem
            </p>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>• Multi-tenant e pronto para crescer.</li>
              <li>• Base única de dados, módulos ativados conforme necessidade.</li>
              <li>• Web app responsivo (desktop + mobile), PWA-ready.</li>
              <li>• Foco em PMEs de serviços, obras, projetos e operações.</li>
            </ul>
          </div>
        </div>

        {/* BLOCO: PROBLEMA REAL */}
        <div className="mt-16 space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            Entre o Excel improvisado e o ERP gigante, há um vazio.
          </h2>
          <p className="text-sm text-slate-200">
            A maioria das PMEs vive num limbo digital: ou opera em planilhas e
            WhatsApp, ou é empurrada para ERPs caros, complexos e sobredimensionados.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">
                Comportamento típico:
              </p>
              <ul className="space-y-1">
                <li>• Dados espalhados em planilhas, e-mails e grupos.</li>
                <li>• Falta de visão global de obras, clientes ou contratos.</li>
                <li>• Processos críticos em “arquivos pessoais” de alguém.</li>
                <li>• Ferramentas prontas que quase servem, mas nunca encaixam.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">
                O que a Libertrendz propõe:
              </p>
              <ul className="space-y-1">
                <li>• Um núcleo técnico padrão (auth, users, empresas, permissões).</li>
                <li>• Módulos de negócio ativados conforme a realidade do cliente.</li>
                <li>• Customizações pontuais em vez de projetos infinitos.</li>
                <li>• Entrega por fases, com valor percebido em cada etapa.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BLOCO: MÓDULOS */}
        <div id="modulos" className="mt-16 space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            Módulos que podemos combinar para o seu app/ERP
          </h2>
          <p className="text-sm text-slate-200">
            A base técnica é reaproveitada entre projetos, mas cada solução é
            configurada para a realidade da empresa. Alguns módulos já existentes:
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Obras & Projetos
              </p>
              <ul className="space-y-1 text-[13px] text-slate-300">
                <li>• Cadastro de obras/projetos.</li>
                <li>• Fases, tarefas e responsáveis.</li>
                <li>• Registo de horas, materiais e custos.</li>
                <li>• Painel de status por obra.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Ponto & Equipa
              </p>
              <ul className="space-y-1 text-[13px] text-slate-300">
                <li>• Registo de ponto com foto e geolocalização.</li>
                <li>• Horários, escalas e locais de trabalho.</li>
                <li>• Relatórios de presença por período/obra.</li>
                <li>• Base para folha de pagamento/ajustes.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Comercial & Financeiro
              </p>
              <ul className="space-y-1 text-[13px] text-slate-300">
                <li>• Clientes, propostas e contratos.</li>
                <li>• Orçamentos e anexos.</li>
                <li>• Faturas, recebimentos e pendências.</li>
                <li>• Relatórios básicos de receita e fluxo.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* NOVO BLOCO: SITES & LANDING PAGES */}
        <div className="mt-16 space-y-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-xl font-semibold text-slate-50">
            Sites & Landing Pages Libertrendz
          </h2>
          <p className="text-sm text-slate-200">
            Além dos apps e ERPs, a mesma base técnica e de design é usada para
            construir sites institucionais e landing pages profissionais — como
            este que você está a navegar agora.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">
                Tipos de entrega:
              </p>
              <ul className="space-y-1 text-[13px] text-slate-300">
                <li>• Site institucional enxuto para empresas.</li>
                <li>• Landing page para produtos/serviços específicos.</li>
                <li>• Páginas de captura para mentorias e programas.</li>
              </ul>
            </div>
            <div className="text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">
                Como trabalhamos:
              </p>
              <ul className="space-y-1 text-[13px] text-slate-300">
                <li>• Design minimalista, focado em clareza.</li>
                <li>• Conteúdo pensado para conversão, não só estética.</li>
                <li>• Stack moderna (Next.js + Vercel), com boa performance.</li>
              </ul>
            </div>
            <div className="text-sm text-slate-200">
              <p className="mb-2 font-semibold text-slate-50">
                Quando faz sentido:
              </p>
              <ul className="space-y-1 text-[13px] text-slate-300">
                <li>• Quando o negócio precisa “ir pro ar” com seriedade.</li>
                <li>• Quando landing de ferramenta genérica já não basta.</li>
                <li>• Quando quer um site na mesma linha do seu sistema.</li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <a
              href="mailto:contato@libertrendz.eu?subject=Site%20ou%20Landing%20Page%20Libertrendz"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Falar sobre um site ou landing page
            </a>
          </div>
        </div>

        {/* BLOCO: COMO É O PROJETO */}
        <div className="mt-16 space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            Como funciona um projeto de app/ERP com a Libertrendz
          </h2>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                titulo: "1. Conversa rápida",
                desc: "Entendemos em 30–45 minutos o contexto, dores principais e processos críticos."
              },
              {
                titulo: "2. Desenho de solução",
                desc: "Propomos uma combinação de módulos + customizações pontuais, com fases claras."
              },
              {
                titulo: "3. Entrega por fases",
                desc: "Primeira entrega focada no que mais dói (por exemplo, ponto + obras). Depois, o resto."
              },
              {
                titulo: "4. Evolução controlada",
                desc: "Com a base pronta, o sistema cresce à medida que a empresa cresce — sem recomeçar do zero."
              }
            ].map((step) => (
              <div
                key={step.titulo}
                className="flex flex-col gap-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200"
              >
                <p className="font-semibold text-slate-50">{step.titulo}</p>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="mt-16 space-y-4 border-t border-slate-800 pt-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-50">
            Quer sair do Excel e do improviso, sem entrar num ERP gigante?
          </h2>
          <p className="text-sm text-slate-200">
            Um app/ERP sob medida não precisa começar grande — precisa começar
            pelo lugar certo. A partir daí, o sistema cresce com a empresa.
          </p>
          <div className="mt-4 flex justify-center">
            <a
              href="mailto:contato@libertrendz.eu?subject=Apps%20e%20ERPs%20Libertrendz"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Conversar sobre um app/ERP para minha empresa
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
