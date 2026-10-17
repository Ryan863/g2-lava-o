"use client";

import { useRef } from "react";
import Image from "next/image";
import { Shield, Droplets, Sun, Disc3, ArrowUpRight, Cpu } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TechShowcase() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".tech-content", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".tech-spec-item", {
        scrollTrigger: {
          trigger: ".tech-specs-grid",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  const pillars = [
    {
      icon: Shield,
      title: "Colt Cerâmico SiO2",
      badge: "BLINDAGEM NANOMÉTRICA",
      description:
        "Cria uma camada vítrea hidrofóbica que repele água e contaminantes com ângulo de contato superior a 110°, intensificando a profundidade do brilho.",
    },
    {
      icon: Droplets,
      title: "Snow Foam pH Neutro",
      badge: "LIMPEZA NÃO-ABRASIVA",
      description:
        "Espuma ativa de ultra-densidade que encapsula a sujeira pesada e resíduos minerais antes de qualquer contato físico de esfregação.",
    },
    {
      icon: Disc3,
      title: "Verniz para Rodas & Caixas",
      badge: "RESISTÊNCIA TÉRMICA",
      description:
        "Proteção resistente a altas temperaturas geradas pelas frenagens, impedindo que o pó de pastilha impregne e manche as rodas.",
    },
    {
      icon: Sun,
      title: "Escudo Solar UV Interior",
      badge: "PROTEÇÃO CONTRA RESSECAMENTO",
      description:
        "Fórmula acetinada de toque seco que protege painel, forros e plásticos contra o calor e raios ultravioleta, sem deixar resíduo gorduroso.",
    },
  ];

  const waTechLink =
    "https://wa.me/5547933854886?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20os%20produtos%20e%20processos%20da%20G2.";

  return (
    <section
      id="tecnologia"
      ref={container}
      className="relative z-10 w-full py-24 sm:py-32 bg-[#0C0D0E] border-b border-white/10 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#CEFF00]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Main Banner Container (Zenith Battery Showcase Style) */}
        <div className="tech-content rounded-3xl border border-white/10 bg-gradient-to-b from-[#121417] to-[#0A0B0D] p-8 sm:p-12 lg:p-16 overflow-hidden relative shadow-2xl">
          {/* Subtle grid pattern inside card */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#CEFF00] uppercase mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>CIÊNCIA DE SUPERFÍCIES</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              BLINDAGEM. <br />
              HIDROFOBIA. <br />
              <span className="text-[#CEFF00]">PRECISÃO.</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-neutral-300 font-light leading-relaxed mb-10">
              Na G2 Lavação & Estética Automotiva, cada etapa do processo foi
              estruturada para preservar a originalidade do verniz, elevando a
              repelência a líquidos e sujidades ao patamar mais alto de Pomerode.
            </p>
          </div>

          {/* Technical Specs 4-Pillar Grid */}
          <div className="tech-specs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-white/10">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="tech-spec-item rounded-2xl p-6 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-white/5 text-[#CEFF00] border border-white/10">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-[#CEFF00] uppercase">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA at Bottom of Showcase */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-neutral-400">
              Tecnologia certificada aplicada por profissionais treinados em estética automotiva.
            </div>
            <a
              href={waTechLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#CEFF00] hover:bg-[#d9ff33] text-black font-bold text-xs tracking-wider transition-all duration-300 shadow-md shadow-[#CEFF00]/15"
            >
              <span>CONVERSAR COM ESPECIALISTA</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
