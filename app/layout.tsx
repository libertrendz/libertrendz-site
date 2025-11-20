// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Libertrendz",
  description: "Mentoria Tech Reload, Consultoria Ágil e Apps & Tiny ERPs para profissionais e PMEs.",
};

const LOGO_URL =
  "https://ncglfknuaugpkmkbsiyf.supabase.co/storage/v1/object/public/Imagens/LIBERTRENDZ%20(12).png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body className="bg-slate-950 text-slate-50">
        {/* HEADER */}
        <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur">
          <div className="container-page flex h-20 items-center justify-between gap-6">
            {/* Logo + Marca */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-9 w-32">
                <Image
                  src={LOGO_URL}
                  alt="Libertrendz"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="hidden flex-col text-xs text-slate-300 sm:flex">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-400">
                  Libertrendz
                </span>
                <span className="text-[11px]">
                  Mentoria Tech · Projetos Ágeis · Apps
                </span>
              </span>
            </Link>

            {/* Navegação */}
            <div className="flex flex-1 items-center justify-end gap-6">
              <nav className="hidden items-center gap-5 text-xs font-medium text-slate-200 md:flex">
                <Link
                  href="/mentoria"
                  className="transition hover:text-accent-300"
                >
                  Mentoria
                </Link>
                <Link
                  href="/agile"
                  className="transition hover:text-accent-300"
                >
                  Consultoria Ágil
                </Link>
                <Link
                  href="/apps"
                  className="transition hover:text-accent-300"
                >
                  Apps & Tiny ERPs
                </Link>
                <Link
                  href="/sobre"
                  className="transition hover:text-accent-300"
                >
                  Sobre
                </Link>
                <Link
                  href="/contato"
                  className="transition hover:text-accent-300"
                >
                  Contato
                </Link>
              </nav>

              {/* CTA LiberTrail */}
              <Link
                href="/mentoria#libertrail"
                className="hidden items-center justify-center rounded-lg bg-accent-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400 md:inline-flex"
              >
                Começar pelo LiberTrail
              </Link>
            </div>
          </div>

          {/* Navegação compacta mobile */}
          <div className="border-t border-slate-900/70 bg-slate-950 md:hidden">
            <div className="container-page flex items-center justify-between gap-3 py-2 text-[11px] text-slate-200">
              <div className="flex gap-3">
                <Link href="/mentoria" className="hover:text-accent-300">
                  Mentoria
                </Link>
                <Link href="/apps" className="hover:text-accent-300">
                  Apps
                </Link>
              </div>
              <Link
                href="/contato"
                className="rounded-md border border-slate-700 px-2 py-1 text-[11px] font-semibold hover:border-accent-400 hover:text-accent-300"
              >
                Falar comigo
              </Link>
            </div>
          </div>
        </header>

        {/* CONTEÚDO */}
        {children}

        {/* FOOTER */}
        <footer className="border-t border-slate-800 bg-slate-950">
          <div className="container-page flex flex-col gap-3 py-6 text-[11px] text-slate-400 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="font-semibold text-slate-300">Libertrendz</p>
              <p>Mentoria Tech Reload · Consultoria Ágil · Apps & Tiny ERPs</p>
              <p>
                contato@libertrendz.eu ·{" "}
                <span className="text-slate-500">
                  foco em profissionais e PMEs.
                </span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/mentoria"
                className="hover:text-accent-300 transition"
              >
                Mentoria
              </Link>
              <Link href="/agile" className="hover:text-accent-300 transition">
                Consultoria Ágil
              </Link>
              <Link href="/apps" className="hover:text-accent-300 transition">
                Apps & Tiny ERPs
              </Link>
              <Link href="/sobre" className="hover:text-accent-300 transition">
                Sobre
              </Link>
              <Link
                href="/contato"
                className="hover:text-accent-300 transition"
              >
                Contato
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}