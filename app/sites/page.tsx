// app/sites/page.tsx

export default function SitesPage() {
  return (
    <main className="flex flex-col">

      {/* HERO */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Um site não deve ser bonito. <br /> Deve gerar negócio.
        </h1>

        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
          Se o teu site não está a trazer contactos ou clientes, ele não está a cumprir o papel.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/diagnostico"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Ver o que está errado
          </a>

          <a
            href="https://wa.me/351910287128?text=Olá,%20quero%20melhorar%20o%20meu%20site."
            target="_blank"
            className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="px-6 py-16 bg-neutral-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Se isto acontece contigo, o problema não é só o design
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 border border-neutral-800 rounded-lg">
              <p>Ninguém entra em contacto</p>
            </div>

            <div className="p-6 border border-neutral-800 rounded-lg">
              <p>O site não explica bem o que fazes</p>
            </div>

            <div className="p-6 border border-neutral-800 rounded-lg">
              <p>Recebes visitas, mas não clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          O foco não é o site. É o resultado.
        </h2>

        <p className="mt-6 text-neutral-400 max-w-2xl mx-auto">
          Eu estruturo a mensagem, o fluxo e o posicionamento antes de construir.
          O site é consequência disso.
        </p>
      </section>

      {/* PRAZO */}
      <section className="px-6 py-16 bg-neutral-900 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Rápido, sem enrolação
        </h2>

        <p className="mt-6 text-neutral-400">
          Landing pages a partir de 7 dias <br />
          Sites completos a partir de 14 dias
        </p>
      </section>

      {/* NICHO */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Funciona em diferentes negócios
        </h2>

        <p className="mt-6 text-neutral-400">
          Remodelações, serviços, advocacia, vendas e organizações.
        </p>
      </section>

      {/* DIFERENCIAL */}
      <section className="px-6 py-20 bg-neutral-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Não é template. Não é genérico.
          </h2>

          <p className="mt-6 text-neutral-400">
            Cada projeto é estruturado de acordo com o negócio.
            O objetivo não é “ter um site”.
            É fazer o site funcionar.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Se quiseres resolver isto, o próximo passo é simples
        </h2>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/diagnostico"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Fazer diagnóstico
          </a>

          <a
            href="https://wa.me/351910287128?text=Olá,%20quero%20resolver%20o%20meu%20site."
            target="_blank"
            className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
