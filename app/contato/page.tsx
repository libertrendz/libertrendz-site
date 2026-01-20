// app/contato/page.tsx
import { Suspense } from "react";
import ContatoClient from "./ContatoClient";

function LoadingContato() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-50">
      <section className="container-page py-12 lg:py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <p className="text-sm text-slate-200">A carregar…</p>
        </div>
      </section>
    </main>
  );
}

export default function ContatoPage() {
  return (
    <Suspense fallback={<LoadingContato />}>
      <ContatoClient />
    </Suspense>
  );
}
