"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const waUrl =
    "https://wa.me/5547933854886?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20lava%C3%A7%C3%A3o%20na%20G2.";

  return (
    <aside
      aria-label="Atendimento WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-auto sm:px-5 sm:h-12 bg-[#25D366] hover:bg-[#20ba59] text-black rounded-full shadow-2xl shadow-[#25D366]/30 transition-transform active:scale-95 duration-200"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300" />
        </span>
        <MessageCircle className="w-6 h-6 sm:mr-2 fill-black stroke-black" />
        <span className="hidden sm:inline font-bold text-xs tracking-wider text-black">
          Agendar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
