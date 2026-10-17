"use client";

import { useRef } from "react";
import { Star, ShieldCheck, CheckCircle2, Quote } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TestimonialSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;
      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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

  const trustBadges = [
    "COLT CERÂMICO SIO2",
    "SNOW FOAM DE ALTA DENSIDADE",
    "GOOGLE REVIEWS 5.0",
    "ATENDIMENTO HORA MARCADA",
    "INSUMOS pH NEUTRO",
  ];

  return (
    <section
      id="avaliacoes"
      ref={container}
      className="relative z-10 w-full py-24 sm:py-32 bg-[#0C0D0E] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Testimonial Card */}
        <div className="testimonial-card relative max-w-4xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-b from-[#121417] to-[#0A0B0D] p-8 sm:p-14 shadow-2xl text-center">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="flex text-[#CEFF00]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#CEFF00] stroke-none" />
              ))}
            </span>
            <span className="text-xs font-mono font-bold text-white ml-2">
              5.0 / 5.0 GOOGLE REVIEWS
            </span>
          </div>

          <div className="relative mb-8">
            <Quote className="w-12 h-12 text-[#CEFF00]/20 mx-auto mb-4" />
            <blockquote className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              “Ótimo lugar, atendimento excelente, super recomendo.”
            </blockquote>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white tracking-wide">
                Lucelia Trettin
              </span>
              <CheckCircle2 className="w-4 h-4 text-[#CEFF00]" />
            </div>
            <span className="text-xs text-neutral-400 mt-0.5">
              Avaliação Verificada no Google • Pomerode - SC
            </span>
          </div>
        </div>

        {/* Zenith Style Minimalist Partner/Standard Badges Bar */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="text-center text-[10px] font-mono tracking-[0.3em] text-neutral-500 uppercase mb-8">
            PADRÕES E INSUMOS TÉCNICOS HOMOLOGADOS
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 hover:opacity-100 transition-opacity">
            {trustBadges.map((badge, idx) => (
              <span
                key={idx}
                className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-neutral-400 hover:text-[#CEFF00] transition-colors uppercase font-mono"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
