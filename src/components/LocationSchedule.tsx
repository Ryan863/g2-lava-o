"use client";

import { useRef } from "react";
import {
  MapPin,
  Clock,
  Navigation,
  Phone,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { InstagramIcon } from "./Icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LocationSchedule() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".location-box", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  const googleMapsRouteUrl =
    "https://www.google.com/maps/dir/?api=1&destination=R.+Progresso,+4611+-+Cs+2+-+Testo+Alto,+Pomerode+-+SC,+89107-000";
  const shareGoogleUrl = "https://share.google/jl18cQO0KRrPZDW5y";
  const instaUrl =
    "https://www.instagram.com/g2lavacao_estetica.automotiva/";

  const schedule = [
    { day: "Segunda-feira", hours: "08:00 às 18:00", open: true },
    { day: "Terça-feira", hours: "08:00 às 18:00", open: true },
    { day: "Quarta-feira", hours: "08:00 às 18:00", open: true },
    { day: "Quinta-feira", hours: "08:00 às 18:00", open: true },
    { day: "Sexta-feira", hours: "08:00 às 18:00", open: true },
    { day: "Sábado", hours: "08:00 às 12:00", open: true },
    { day: "Domingo", hours: "Fechado", open: false },
  ];

  return (
    <section
      id="localizacao"
      ref={container}
      className="relative z-10 w-full py-24 sm:py-32 bg-[#0C0D0E] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#CEFF00] uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>LOCALIZAÇÃO & ATENDIMENTO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            ONDE NOS ENCONTRAR.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Instalações confortáveis e de fácil acesso em Pomerode - SC, prontas
            para receber seu veículo com segurança e discrição.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Endereço & Acesso GPS */}
          <div className="location-box rounded-3xl border border-white/10 bg-[#121417] p-8 sm:p-10 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-white/5 text-[#CEFF00] border border-white/10">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
                    SEDE OFICIAL G2
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Pomerode • Santa Catarina
                  </h3>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-5">
                  <div className="text-xs font-mono text-[#CEFF00] mb-1">
                    ENDEREÇO COMPLETO
                  </div>
                  <div className="text-base text-white font-medium leading-relaxed">
                    R. Progresso, 4611 - Cs 2 - Testo Alto
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Pomerode - SC, 89107-000
                  </div>
                </div>

                <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-5">
                  <div className="text-xs font-mono text-[#CEFF00] mb-2">
                    CANAIS DE CONTATO DIRETO
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-neutral-300">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-neutral-500" />
                      <span className="font-semibold text-white">Principal:</span>
                      <a
                        href="tel:+5547933854886"
                        className="hover:text-[#CEFF00] transition-colors"
                      >
                        (47) 93385-4886
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-neutral-500" />
                      <span className="font-semibold text-white">Alternativo 1:</span>
                      <a
                        href="tel:+5547997504528"
                        className="hover:text-[#CEFF00] transition-colors"
                      >
                        (47) 99750-4528
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-neutral-500" />
                      <span className="font-semibold text-white">Alternativo 2:</span>
                      <a
                        href="tel:+5547991189993"
                        className="hover:text-[#CEFF00] transition-colors"
                      >
                        (47) 99118-9993
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GPS & Instagram Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
              <a
                href={googleMapsRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3.5 px-6 rounded-full bg-[#CEFF00] hover:bg-[#d9ff33] text-black font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-[#CEFF00]/15"
              >
                <Navigation className="w-4 h-4" />
                <span>ROTA NO GOOGLE MAPS</span>
              </a>

              <a
                href={instaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3.5 px-6 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white font-medium text-xs tracking-wider flex items-center justify-center gap-2 transition-all duration-300"
              >
                <InstagramIcon className="w-4 h-4 text-[#CEFF00]" />
                <span>@g2lavacao_estetica</span>
              </a>
            </div>
          </div>

          {/* Card 2: Tabela de Horários */}
          <div className="location-box rounded-3xl border border-white/10 bg-[#121417] p-8 sm:p-10 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-white/5 text-[#CEFF00] border border-white/10">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
                    PONTUALIDADE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Horário de Funcionamento
                  </h3>
                </div>
              </div>

              {/* Table */}
              <div className="divide-y divide-white/5 mb-8">
                {schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="py-3 flex items-center justify-between text-xs sm:text-sm"
                  >
                    <span className="text-neutral-300 font-medium">
                      {item.day}
                    </span>
                    <span
                      className={`font-mono font-semibold ${
                        item.open ? "text-white" : "text-rose-400/90"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-neutral-400 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <span>
                Atendimento exclusivamente com hora marcada. Recomendamos agendar com antecedência mínima de 24 horas.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
