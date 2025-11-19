import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Libertrendz Tech Reload",
  description:
    "Mentoria profissional de transição para tecnologia e soluções tech sob medida — por Libertrendz."
};

const LOGO_URL =
  "https://ncglfknuaugpkmkbsiyf.supabase.co/storage/v1/object/public/Imagens/LIBERTRENDZ%20(12).png";

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
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center gap-2">
                <div className="relative h-8 w-auto">
                  <Image
                    src={LOGO_URL}
                    alt="Libertrendz"
                    width={160}
                    height={32}
                    className="h-8 w-auto"
                    priority
                  />
                </div>
              </a>
              <span className="hidden text-xs text-slate-400 sm:inline">
                Tech Reload · Mentoria, Consultoria Ágil e Apps
              </span>
            </div>
            <nav className="flex gap-4 text-xs font-medium text-slate-300">
              <a href="/" className="hover:text-accent-400">
                Início
              </a>
              <a href="/mentoria" className="hover:text-accent-400">
                Mentoria
              </a>
              {/* Futuro:
              <a href="/agile" className="hover:text-accent-400">Consultoria Ágil</a>
              <a href="/apps" className="hover:text-accent-400">Apps & ERPs</a>
              */}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-slate-900/80 bg-slate-950/90">
          <div className="container-page flex flex-col gap-3 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <span>
                © {new Date().getFullYear()} Libertrendz. Todos os direitos
                reservados.
              </span>
              <div className="text-[10px] text-slate-500">
                Mentoria · Consultoria Ágil · Apps & Tiny ERPs
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
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
