// components/whatsapp-float.tsx

export default function WhatsAppFloat() {
  const href =
    "https://wa.me/351910287128?text=Olá,%20vim%20pelo%20site%20da%20Libertrendz%20e%20quero%20entender%20o%20que%20faz%20mais%20sentido%20para%20o%20meu%20caso.";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <div className="flex items-center gap-3">
        {/* Texto (desktop) */}
        <div className="hidden md:block rounded-lg border border-slate-800 bg-slate-900/90 px-3 py-2 text-xs text-slate-200 shadow-lg shadow-black/50 backdrop-blur">
          Falar no WhatsApp
        </div>

        {/* Botão */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30 transition hover:bg-green-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="h-7 w-7 fill-slate-950"
          >
            <path d="M19.11 17.64c-.29-.14-1.71-.84-1.98-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.9 1.12-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.46-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.16 3.01c.14.19 2 3.05 4.84 4.28.68.29 1.2.47 1.61.6.68.21 1.29.18 1.78.11.54-.08 1.71-.7 1.95-1.38.24-.69.24-1.27.17-1.38-.07-.12-.26-.19-.55-.33zM16 3C8.83 3 3 8.83 3 16c0 2.82.92 5.43 2.47 7.54L4 29l5.62-1.45A12.94 12.94 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16 3zm0 23.5c-2.27 0-4.39-.66-6.19-1.8l-.44-.27-3.33.86.89-3.25-.29-.46A10.48 10.48 0 0 1 5.5 16c0-5.79 4.71-10.5 10.5-10.5S26.5 10.21 26.5 16 21.79 26.5 16 26.5z" />
          </svg>
        </div>
      </div>
    </a>
  );
}
