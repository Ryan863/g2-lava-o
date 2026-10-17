"use client";

import { useRef } from "react";
import { Star, Shield, Layers, Sun } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StatsBar() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
            once: true,
          },
          clearProps: "all",
        }
      );
    },
    { scope: container }
  );

  const stats = [
    {
      value: "5.0 ★",
      label: "GOOGLE REVIEWS",
      description: "Avaliação máxima com recomendação verificada em Pomerode",
      icon: Star,
      highlight: true,
    },
    {
      value: "100%",
      label: "PROTEÇÃO COLT INCLUSA",
      description: "Blindagem cerâmica hidrofóbica em todos os pacotes",
      icon: Shield,
    },
    {
      value: "3 NÍVEIS",
      label: "CATÁLOGO TÉCNICO",
      description: "Do cuidado preventivo à revitalização total do veículo",
      icon: Layers,
    },
    {
      value: "UV SHIELD",
      label: "PROTEÇÃO SOLAR ATIVA",
      description: "Painel, plásticos e pneus protegidos contra ressecamento",
      icon: Sun,
    },
  ];

  return (
    <section
      ref={container}
      className="relative z-20 w-full border-b border-white/10 bg-[#0C0D0E]/90 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="stat-card flex flex-col justify-between lg:px-8 first:lg:pl-0 last:lg:pr-0"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold tracking-[0.25em] text-neutral-400 uppercase">
                    {item.label}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      item.highlight ? "text-[#CEFF00]" : "text-neutral-500"
                    }`}
                  />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
                    {item.value}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
