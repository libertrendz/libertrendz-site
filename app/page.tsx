// app/page.tsx
export default function Home() {
  return (
    <main className="flex flex-col">

      {/* HERO */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Um site sem estrutura não gera negócio. <br /> Só ocupa espaço.
        </h1>

        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
          Eu organizo o teu site e o teu processo para transformar visitas em clientes — 
          com implementação rápida e foco no que realmente funciona.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/diagnostico"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Descobrir o que está a travar (2 min)
          </a>

          <a
            href="https://wa.me/351910287128?text=Olá,%20vi%20o%20site%20da%20Libertrendz%20e%20quero%20melhorar%20o%20meu."
            target="_blank"
            className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="px-6 py-16 bg-neutral-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            O problema raramente é o site.
          </h2>

          <p className="mt-4 text-neutral-400">
            É a falta de estrutura por trás dele.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 border border-neutral-800 rounded-lg">
              <p>Site bonito, mas não gera contactos</p>
            </div>

            <div className="p-6 border border-neutral-800 rounded-lg">
              <p>Processos manuais e desorganizados</p>
            </div>

            <div className="p-6 border border-neutral-800 rounded-lg">
              <p>Tudo depende de ti para funcionar</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO RESOLVO */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Como resolvemos isso
        </h2>

        <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-semibold">1. Entender</p>
            <p className="text-sm text-neutral-400 mt-2">
              O negócio, a oferta e o objetivo
            </p>
          </div>

          <div>
            <p className="font-semibold">2. Estruturar</p>
            <p className="text-sm text-neutral-400 mt-2">
              O fluxo que gera clientes
            </p>
          </div>

          <div>
            <p className="font-semibold">3. Construir</p>
            <p className="text-sm text-neutral-400 mt-2">
              O site ou sistema necessário
            </p>
          </div>

          <div>
            <p className="font-semibold">4. Entregar</p>
            <p className="text-sm text-neutral-400 mt-2">
              Pronto para funcionar
            </p>
          </div>
        </div>
      </section>

      {/* PRAZO */}
      <section className="px-6 py-16 bg-neutral-900 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Sem projetos intermináveis
        </h2>

        <p className="mt-6 text-neutral-400">
          Landing pages a partir de 7 dias <br />
          Sites completos a partir de 14 dias
        </p>
      </section>

      {/* NICHOS */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Aplicado em diferentes contextos
        </h2>

        <p className="mt-6 text-neutral-400">
          Remodelações, serviços, advocacia, vendas e organizações.
        </p>
      </section>

      {/* AUTORIDADE */}
      <section className="px-6 py-20 bg-neutral-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Experiência que sustenta o que faço
          </h2>

          <div className="mt-10 grid md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="font-semibold">Financeiro</p>
              <p className="text-neutral-400 mt-2">BNP Paribas</p>
            </div>

            <div>
              <p className="font-semibold">Setor Público</p>
              <p className="text-neutral-400 mt-2">Transformação digital</p>
            </div>

            <div>
              <p className="font-semibold">Projetos</p>
              <p className="text-neutral-400 mt-2">PMO & Agile</p>
            </div>

            <div>
              <p className="font-semibold">Decisão</p>
              <p className="text-neutral-400 mt-2">BI & KPIs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Se o teu site não está a trazer clientes, dá para resolver.
        </h2>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/diagnostico"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Fazer diagnóstico rápido
          </a>

          <a
            href="https://wa.me/351910287128?text=Olá,%20quero%20resolver%20o%20meu%20site."
            target="_blank"
            className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
          >
            Falar agora no WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
