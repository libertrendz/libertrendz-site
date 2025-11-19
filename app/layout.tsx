import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Libertrendz Tech Reload",
  description:
    "Mentoria profissional de transição para tecnologia e soluções tech sob medida — por Libertrendz."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        {/* Header simples institucional */}
        <header className="border-b border-slate-900/80 bg-slate-950/90">
          <div className="container-page flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-slate-900 px-2 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Libertrendz
              </span>
              <span className="text-sm text-slate-300">
                Tech Reload · Mentoria & Soluções
              </span>
            </div>
            <nav className="flex gap-4 text-xs font-medium text-slate-300">
              <a href="/" className="hover:text-emerald-400">
                Início
              </a>
              <a href="/mentoria" className="hover:text-emerald-400">
                Mentoria
              </a>
              {/* Futuro:
              <a href="/agile" className="hover:text-emerald-400">Consultoria Ágil</a>
              <a href="/apps" className="hover:text-emerald-400">Apps & ERPs</a>
              */}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-16 border-t border-slate-900/80 bg-slate-950/90">
          <div className="container-page flex flex-col items-start gap-2 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <span>© {new Date().getFullYear()} Libertrendz. Todos os direitos reservados.</span>
            <span>Mentoria · Consultoria Ágil · Apps & Tiny ERPs</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
