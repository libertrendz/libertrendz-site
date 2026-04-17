// app/page.tsx

import Image from "next/image";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/site-links";

export default function HomePage() {
  const whatsappHref = buildWhatsAppLink(WHATSAPP_MESSAGES.general);

  return (
    <main className="bg-slate-950 text-slate-50">
      <section className="container-page py-8 md:py-10 space-y-20">
        {/* HERO PREMIUM */}
        <section className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50">
          <div className="absolute inset-0">
            <Image
              src="/images/home-hero-transformacao.png"
              alt="Transformação de caos operacional em clareza, controlo e resultado"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.76)_34%,rgba(2,6,23,0.36)_62%,rgba(2,6,23,0.18)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%)]" />

          <div className="relative z-10 min-h-[560px] px-6 py-12 md:px-10 md:py-14 lg:min-h-[620px] lg:px-14 lg:py-16 flex items-end">
            <div className="max-w-3xl space-y-6">
              <div className="space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300/90">
                  Websites · Apps customizados · Produto &amp; Execução
                </p>

                <h1 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl xl:text-6xl">
                  O teu negócio não precisa de mais ferramentas.
                  <span className="mt-2 block text-cyan-300">
                    Precisa funcionar melhor.
                  </span>
                </h1>

               <p className="max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
  Transformamos confusão em estrutura, presença digital fraca em clareza
  e operação solta em algo que funciona de forma simples e controlada.
</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
                >
                  Falar no WhatsApp
                </a>

                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-600/80 bg-slate-950/20 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur-sm transition hover:border-slate-400 hover:bg-slate-900/50"
                >
                  Ver como funciona
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-2 text-xs text-slate-200">
                <span className="rounded-full border border-slate-700/80 bg-slate-950/35 px-3 py-1.5 backdrop-blur-sm">
                  Landing pages a partir de 7 dias
                </span>
                <span className="rounded-full border border-slate-700/80 bg-slate-950/35 px-3 py-1.5 backdrop-blur-sm">
                  Sites completos a partir de 14 dias
                </span>
                <span className="rounded-full border border-slate-700/80 bg-slate-950/35 px-3 py-1.5 backdrop-blur-sm">
                  Menos improviso, mais direção
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* IDENTIFICAÇÃO */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/35 p-6 md:p-8">
          <div className="max-w-4xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Quando isto começa a pesar
            </p>

            <h2 className="text-2xl font-semibold leading-snug text-slate-50">
              Se hoje tens pedidos perdidos, processos manuais ou um site que não traz resultado,
              o problema não é falta de esforço.
            </h2>

            <p className="text-base text-slate-200">
              É falta de estrutura. E isso dá para resolver sem complicar mais o teu negócio.
            </p>
          </div>
        </section>

        {/* COMO FUNCIONA PREMIUM */}
        <section
          id="como-funciona"
          className="relative overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900 shadow-2xl shadow-black/40"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/home-como-funciona.png"
              alt="Estrutura visual de organização, clareza e fluxo"
              fill
              className="object-cover object-center opacity-95"
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.82)_0%,rgba(2,6,23,0.62)_32%,rgba(2,6,23,0.86)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_28%)]" />

          <div className="relative z-10 px-6 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14 space-y-8">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Como funciona
              </p>

              <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
                Não é sobre criar mais uma ferramenta.
              </h2>

              <p className="max-w-2xl text-base text-slate-200">
                É sobre organizar o que já existe e aplicar a solução certa no momento certo,
                sem excesso, sem ruído e sem inventar complexidade.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-700/80 bg-slate-950/35 p-5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  1. Entender
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-50">
                  Ler o teu cenário com honestidade
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Antes de propor qualquer coisa, é preciso perceber o que está realmente a travar,
                  o que já existe e o que precisa de mudar.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700/80 bg-slate-950/35 p-5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  2. Organizar
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-50">
                  Dar estrutura ao processo
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  O foco não é tecnologia pela tecnologia. É reduzir ruído, clarificar o caminho
                  e preparar uma solução que sirva o negócio de verdade.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700/80 bg-slate-950/35 p-5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  3. Aplicar
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-50">
                  Escolher o formato certo
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Pode ser website, app ou ambos. O ponto é fazer sentido para o teu momento,
                  não empurrar uma solução errada só porque parece bonita.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Onde isto se aplica
            </p>

            <h2 className="text-2xl font-semibold text-slate-50">
              Três caminhos. O mesmo objetivo: fazer o negócio avançar com mais clareza.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {/* Websites */}
            <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-xl shadow-black/40">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/home-servico-websites.png"
                  alt="Contexto profissional a visualizar um website moderno e confiável"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
              </div>

              <div className="space-y-3 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Websites
                </p>

                <h3 className="text-lg font-semibold leading-snug text-slate-50">
                  Um site que não só apresenta, mas gera contacto.
                </h3>

                <p className="text-sm leading-6 text-slate-300">
                  Para quando o problema está na comunicação, na credibilidade e na captação.
                </p>

                <a
                  href="/sites"
                  className="inline-flex text-sm font-semibold text-accent-300 hover:text-accent-200"
                >
                  Ver mais →
                </a>
              </div>
            </article>

            {/* Apps */}
            <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-xl shadow-black/40">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/home-servico-apps.png"
                  alt="Utilização prática de app em contexto operacional no terreno"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
              </div>

              <div className="space-y-3 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Apps customizados
                </p>

                <h3 className="text-lg font-semibold leading-snug text-slate-50">
                  Sistemas simples para organizar operação e ganhar controlo.
                </h3>

                <p className="text-sm leading-6 text-slate-300">
                  Para quando a rotina pesa, o processo está solto e a visibilidade está fraca.
                </p>

                <a
                  href="/apps"
                  className="inline-flex text-sm font-semibold text-accent-300 hover:text-accent-200"
                >
                  Ver mais →
                </a>
              </div>
            </article>

            {/* Execução */}
            <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-xl shadow-black/40">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/home-servico-execucao.png"
                  alt="Reunião de trabalho com foco em organização, planeamento e execução"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
              </div>

              <div className="space-y-3 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Produto &amp; Execução
                </p>

                <h3 className="text-lg font-semibold leading-snug text-slate-50">
                  Clareza no que fazer e consistência na execução.
                </h3>

                <p className="text-sm leading-6 text-slate-300">
                  Para quando ainda é preciso decidir melhor antes de sair a construir.
                </p>

                <a
                  href="/agile"
                  className="inline-flex text-sm font-semibold text-accent-300 hover:text-accent-200"
                >
                  Ver mais →
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="rounded-[28px] border border-slate-800 bg-slate-900/35 p-8 text-center md:p-10">
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Próximo passo
            </p>

            <h2 className="text-3xl font-semibold leading-tight text-slate-50">
              Se queres perceber o que faz sentido no teu caso, fala comigo direto.
            </h2>

            <p className="text-base text-slate-200">
              Sem formulário obrigatório, sem complicação e sem perda de tempo.
            </p>

            <div className="pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-7 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
