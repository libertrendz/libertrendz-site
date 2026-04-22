// app/cases/page.tsx

import Image from "next/image";

const cases = [
  {
    title: "Renato Ferreira",
    category: "Advocacia · Website institucional",
    description:
      "Reestruturação completa da presença digital para reforçar autoridade, clareza e encaminhamento para contacto.",
    image: "/images/cases/renato-ferreira/renatoferreira1desk_site.png",
    highlights: [
      "Reposicionamento visual e estratégico",
      "Melhor leitura das áreas de atuação",
      "Mais clareza no caminho até contacto",
    ],
    link: "https://www.renatoferreira360.com",
  },
  {
    title: "Confiance",
    category: "Operação · App interno",
    description:
      "Sistema para organizar operação, equipa e execução em contexto real de campo.",
    image: "/images/cases/confiance/confiance1_app.png",
    highlights: [
      "Centralização de informação",
      "Mais controlo da operação",
      "Base mais sólida para decisão",
    ],
  },
  {
    title: "LT-Church",
    category: "Organizações · Plataforma",
    description:
      "Estrutura digital para apoiar gestão de comunidade, comunicação e organização interna.",
    image: "/images/cases/lt-church/church1desk_app.png",
    highlights: [
      "Centralização da informação",
      "Apoio à liderança",
      "Melhor comunicação interna",
    ],
  },
  {
    title: "ADMVC",
    category: "Website institucional",
    description:
      "Website para presença institucional com foco em clareza, estrutura e comunicação.",
    image: "/images/cases/admvc/admvc1_site.png",
    highlights: [
      "Clareza de mensagem",
      "Estrutura institucional",
      "Melhor navegação",
    ],
  },
];

export default function CasesPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16 space-y-16">

        {/* HERO */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Cases
          </p>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Projetos reais aplicados a contextos reais
          </h1>

          <p className="text-sm text-slate-300 max-w-2xl">
            Cada projeto resolve uma necessidade concreta. O foco não é só execução,
            é tornar o negócio mais claro, mais funcional e mais preparado para crescer.
          </p>
        </div>

        {/* LISTA DE CASES */}
        <div className="space-y-10">
          {cases.map((c, i) => (
            <article
              key={i}
              className="grid gap-6 lg:grid-cols-2 items-center"
            >
              {/* TEXTO */}
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.18em] text-accent-300">
                  {c.category}
                </p>

                <h2 className="text-2xl font-semibold">{c.title}</h2>

                <p className="text-sm text-slate-300 max-w-md">
                  {c.description}
                </p>

                <ul className="space-y-2 text-sm text-slate-300">
                  {c.highlights.map((h, idx) => (
                    <li key={idx}>• {h}</li>
                  ))}
                </ul>

                {c.link && (
                  <div className="pt-2">
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
                    >
                      Ver website
                    </a>
                  </div>
                )}
              </div>

              {/* IMAGEM */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-10 border-t border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-semibold">
            Se o teu contexto pede algo mais ajustado, começamos por perceber isso
          </h2>

          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Antes de pensar em solução, entendemos o cenário e definimos o caminho mais lógico.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="/diagnostico"
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Fazer diagnóstico
            </a>

            <a
              href="https://wa.me/351939250661?text=Olá,%20vi%20os%20cases%20e%20quero%20entender%20o%20que%20faz%20sentido%20para%20o%20meu%20caso."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

      </section>
    </main>
  );
}