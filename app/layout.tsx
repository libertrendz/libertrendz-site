// app/layout.tsx
import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Libertrendz",
  description:
    "Libertrendz — Mentoria Tech, Projetos Ágeis e Apps sob medida para profissionais e PMEs."
};

const LOGO_SYMBOL_URL =
  "https://ncglfknuaugpkmkbsiyf.supabase.co/storage/v1/object/public/Imagens/LIBERTRENDZ.png";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        {/* HEADER */}
        <header className="border-b border-slate-900/80 bg-slate-950/90">
          <div className="container-page flex items-center justify-between py-4">
            {/* Marca principal */}
            <a href="/" className="flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-lg bg-slate-950">
                <Image
                  src={LOGO_SYMBOL_URL}
                  alt="Libertrendz"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-semibold tracking-[0.26em] text-slate-100">
                  LIBERTRENDZ
                </span>
                <span className="text-[10px] text-slate-400">
                  Mentoria Tech · Projetos Ágeis · Apps
                </span>
              </div>
            </a>

            {/* NAV */}
            <nav className="hidden items-center gap-5 text-xs font-medium text-slate-300 sm:flex">
              <a href="/" className="hover:text-accent-400">
                Início
              </a>
              <a href="/mentoria" className="hover:text-accent-400">
                Mentoria Tech Reload
              </a>
              <a href="/agile" className="hover:text-accent-400">
                Consultoria Ágil
              </a>
              <a href="/apps" className="hover:text-accent-400">
                Apps & ERPs
              </a>
            </nav>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-slate-900/80 bg-slate-950/90">
          <div className="container-page flex flex-col gap-3 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
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
                © {new Date().getFullYear()} Libertrendz. Todos os direitos reservados.
              </div>
            </div>

            <div className="space-y-1 text-right md:text-left">
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
              <div className="text-[10px] text-slate-500">
                Mentoria Tech · Projetos Ágeis · Apps
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
