// app/page.tsx

import Image from "next/image";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/site-links";

export default function HomePage() {
  const whatsappHref = buildWhatsAppLink(WHATSAPP_MESSAGES.general);

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-10 md:py-14 space-y-16">
        {/* HERO */}
        <section className="grid gap-8 lg:grid-cols-[1.08fr,0.92fr] lg:items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">
                Websites · Apps customizados · Produto &amp; Execução
              </p>

              <h1 className="text-3xl font-bold leading-tight md:text-5xl">
                O teu negócio não precisa de mais ferramentas.
                <span className="mt-2 block text-cyan-300">
                  Precisa de funcionar melhor.
                </span>
              </h1>

              <p className="max-w-2xl text-base text-slate-200 md:text-lg">
                Websites, apps e organização pensados para trazer mais clareza,
                mais controlo e mais resultado ao que realmente importa.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
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
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
              >
                Ver como funciona
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-xs text-slate-300">
              <span className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1">
                Landing pages a partir de 7 dias
              </span>
              <span className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1">
                Sites completos a partir de 14 dias
              </span>
              <span className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1">
                Menos improviso, mais direção
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-xl shadow-black/50">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/home-hero-transformacao.png"
                alt="Transição de caos operacional para clareza, controlo e resultado"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/35 via-transparent to-slate-950/10" />
            </div>
          </div>
        </section>

        {/* IDENTIFICAÇÃO */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/35 p-6 md:p-8">
          <div className="max-w-4xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Quando isto começa a pesar
            </p>

            <h2 className="text-2xl font-semibold text-slate-50">
              Se hoje tens pedidos perdidos, processos manuais ou um site que não traz resultado,
              o problema não é falta de esforço.
            </h2>

            <p className="text-base text-slate-200">
              É falta de estrutura. E isso dá para resolver sem complicar mais o teu negócio.
            </p>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section
          id="como-funciona"
          className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-center"
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-xl shadow-black/50">
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/home-como-funciona.png"
                alt="Fluxo visual de organização e estruturação de informações para gerar clareza e resultado"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/20 via-transparent to-slate-950/5" />
            </div>
          </div>

          <div className="space-y-5">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                Como funciona
              </p>

              <h2 className="text-2xl font-semibold text-slate-50">
                Não é sobre criar mais uma ferramenta.
              </h2>

              <p className="text-base text-slate-200">
                É sobre organizar o que já existe e transformar isso num sistema
                mais simples, mais claro e mais útil para o teu momento.
              </p>
            </div>

            <div className="grid gap-3">
              <div className="rounded-xl border border-slate-800 bg-slate-900/35 p-4">
                <p className="text-sm font-semibold text-slate-50">1. Entender o teu cenário</p>
                <p className="mt-1 text-sm text-slate-300">
                  O ponto de partida é perceber o que está a travar e o que realmente precisa de mudar.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/35 p-4">
                <p className="text-sm font-semibold text-slate-50">2. Organizar o processo</p>
                <p className="mt-1 text-sm text-slate-300">
                  A solução certa vem depois de ganhar clareza, não antes.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/35 p-4">
                <p className="text-sm font-semibold text-slate-50">3. Aplicar a solução certa</p>
                <p className="mt-1 text-sm text-slate-300">
                  Pode ser website, app ou uma combinação dos dois. O foco é o que faz sentido para ti.
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              </div>

              <div className="space-y-3 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Websites
                </p>

                <h3 className="text-lg font-semibold text-slate-50">
                  Um site que não só apresenta, mas gera contacto.
                </h3>

                <p className="text-sm text-slate-300">
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              </div>

              <div className="space-y-3 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Apps customizados
                </p>

                <h3 className="text-lg font-semibold text-slate-50">
                  Sistemas simples para organizar operação e ganhar controlo.
                </h3>

                <p className="text-sm text-slate-300">
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              </div>

              <div className="space-y-3 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Produto &amp; Execução
                </p>

                <h3 className="text-lg font-semibold text-slate-50">
                  Clareza no que fazer e consistência na execução.
                </h3>

                <p className="text-sm text-slate-300">
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
        <section className="rounded-2xl border border-slate-800 bg-slate-900/35 p-8 text-center md:p-10">
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Próximo passo
            </p>

            <h2 className="text-3xl font-semibold text-slate-50">
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
