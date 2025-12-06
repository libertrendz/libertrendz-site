import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Libertrendz",
  description:
    "Libertrendz — Mentoria Tech, Projetos Ágeis e Apps sob medida para profissionais e PMEs.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: "/apple-touch-icon-180x180.png",
  },
  openGraph: {
    images: ["/images/og-image.png"],
  },
};

const LOGO_SYMBOL_URL = "/images/LIBERTRENDZ.png";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        {/* HEADER */}
        <header className="relative z-30 border-b border-slate-900/80 bg-slate-950/90">
          <div className="container-page flex items-center justify-between py-5">
            {/* Marca principal */}
            <a href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-lg bg-slate-950">
                <Image
                  src={LOGO_SYMBOL_URL}
                  alt="Libertrendz"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[13px] font-semibold tracking-[0.26em] text-slate-100">
                  LIBERTRENDZ
                </span>
                <span className="text-[11px] text-slate-400">
                  Mentoria Tech · Projetos Ágeis · Apps
                </span>
              </div>
            </a>

            {/* NAV DESKTOP */}
            <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 sm:flex">
              <a href="/" className="hover:text-accent-400">Início</a>

              {/* Moduz+ destacado em cyan (usa cyan, não accent) */}
              <a href="/moduz" className="text-cyan-400 font-semibold hover:text-cyan-300">
                Moduz+
              </a>

              <a href="/apps" className="hover:text-accent-400">Apps & Websites</a>
              <a href="/mentoria" className="hover:text-accent-400">Mentoria Tech Reload</a>
              <a href="/agile" className="hover:text-accent-400">Consultoria Ágil</a>
              <a href="/cases" className="hover:text-accent-400">Cases</a>
              <a href="/sobre" className="hover:text-accent-400">Sobre</a>
              <a href="/contato" className="hover:text-accent-400">Contato</a>
            </nav>

            {/* NAV MOBILE (hambúrguer + dropdown simples) */}
            <details className="relative sm:hidden">
              <summary
                className="flex cursor-pointer items-center rounded-md border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-accent-400 hover:text-accent-400"
                aria-label="Abrir menu de navegação"
              >
                <span className="mr-2">Menu</span>
                <span className="inline-block h-[1px] w-3 bg-slate-300 shadow-[0_4px_0_0_rgba(148,163,184,1),0_8px_0_0_rgba(148,163,184,1)]" />
              </summary>

              {/* dropdown com z-50 para ficar acima do hero */}
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-slate-800 bg-slate-950/95 p-3 text-xs shadow-xl shadow-black/60 z-50">
                <nav className="flex flex-col gap-2 text-slate-200">
                  <a href="/" className="hover:text-accent-400">Início</a>

                  {/* Moduz+ destacado no mobile também */}
                  <a href="/moduz" className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-cyan-400 font-semibold hover:text-cyan-300">
                    Moduz+
                  </a>

                  <a href="/apps" className="hover:text-accent-400">Apps & Websites</a>
                  <a href="/mentoria" className="hover:text-accent-400">Mentoria Tech Reload</a>
                  <a href="/agile" className="hover:text-accent-400">Consultoria Ágil</a>
                  <a href="/cases" className="hover:text-accent-400">Cases</a>
                  <a href="/sobre" className="hover:text-accent-400">Sobre</a>
                  <a href="/contato" className="hover:text-accent-400">Contato</a>
                  <hr className="my-1 border-slate-800" />
                  <a
                    href="/contato"
                    className="inline-flex items-center justify-center rounded-md bg-accent-500 px-3 py-1.5 text-[11px] font-semibold text-slate-950 shadow shadow-accent-500/40 hover:bg-accent-400"
                  >
                    Entrar em contato
                  </a>
                </nav>
              </div>
            </details>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-slate-900/80 bg-slate-950/90">
          <div className="container-page flex flex-col gap-4 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="relative h-5 w-5">
                  <Image
                    src={LOGO_SYMBOL_URL}
                    alt="Libertrendz"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[11px] font-semibold tracking-[0.22em] text-slate-300">
                  LIBERTRENDZ
                </span>
              </div>
              <div className="text-[10px] text-slate-500">
                © {new Date().getFullYear()} Libertrendz. Todos os direitos
                reservados.
              </div>
              <div className="text-[10px] text-slate-500">
                Mentoria Tech · Projetos Ágeis · Apps
              </div>
            </div>

            <div className="flex flex-col gap-2 text-xs text-slate-400 md:items-end">
              <div className="space-y-1 text-right">
                <div>Telemóvel: +351 939 250 661</div>
                <div>
                  E-mail:{" "}
                  <a
                    href="mailto:contato@libertrendz.eu"
                    className="text-accent-400 hover:text-accent-300"
                  >
                    contato@libertrendz.eu
                  </a>
                </div>
                <div className="space-x-3 text-[11px]">
                  <a href="/sobre" className="hover:text-accent-400">Sobre a Libertrendz</a>
                  <a href="/contato" className="hover:text-accent-400">Página de contato</a>
                </div>
              </div>

              {/* CTA grande removido para evitar duplicação com o CTA das páginas */}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}