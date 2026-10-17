"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null);
  const waHeroLink =
    "https://wa.me/5547933854886?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20lava%C3%A7%C3%A3o%20na%20G2.";

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 30,
            duration: 1,
          },
          "-=0.5"
        )
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 25,
            duration: 0.9,
          },
          "-=0.6"
        )
        .from(
          ".hero-cta",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.15,
          },
          "-=0.5"
        )
        .from(
          ".hero-ticker-item",
          {
            opacity: 0,
            y: 15,
            duration: 0.7,
            stagger: 0.1,
          },
          "-=0.4"
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#08090A]"
    >
      {/* Background Images: Responsive Desktop vs Mobile */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        {/* Desktop View (16:9 widescreen architectural showroom) */}
        <div className="hidden sm:block absolute inset-0 w-full h-full">
          <Image
            src="/assets/g2/image_1.png"
            alt="G2 Lavação & Estética Automotiva - Detalhamento de Luxo"
            fill
            priority
            quality={95}
            className="object-cover object-center scale-100 transform motion-safe:hover:scale-105 transition-transform duration-10000"
          />
        </div>

        {/* Mobile View (9:16 vertical showroom) */}
        <div className="block sm:hidden absolute inset-0 w-full h-full">
          <Image
            src="/assets/g2/image_2.png"
            alt="G2 Lavação & Estética Automotiva Mobile"
            fill
            priority
            quality={95}
            className="object-cover object-center"
          />
        </div>

        {/* Cinematic Vignette & Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-[#08090A]/55 to-[#08090A]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090A]/90 via-[#08090A]/50 to-transparent max-w-4xl" />
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#08090A]/80 to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 lg:pt-48 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow / Tag */}
          <div className="hero-badge inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#CEFF00] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-neutral-300 uppercase">
              POMERODE - SC | DETALHAMENTO AUTOMOTIVO
            </span>
          </div>

          {/* Master Editorial Title */}
          <h1 className="hero-title text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            PRECISÃO. <br />
            BRILHO. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#CEFF00]">
              PROTEÇÃO.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-base sm:text-lg lg:text-xl text-neutral-300 font-light leading-relaxed max-w-2xl mb-10">
            Processos técnicos de estética automotiva, lavagem Snow Foam de alta
            densidade e blindagem cerâmica Colt para veículos que exigem
            perfeição absoluta.
          </p>

          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={waHeroLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#CEFF00] hover:bg-[#d9ff33] text-black font-bold text-xs sm:text-sm tracking-wider shadow-lg shadow-[#CEFF00]/20 hover:shadow-[#CEFF00]/40 transition-all duration-300 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-black stroke-black" />
              <span>AGENDAR NO WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <Link
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-medium text-xs sm:text-sm tracking-wider transition-all duration-300"
            >
              <span>CONHECER PACOTES</span>
            </Link>
          </div>

          {/* Secondary Trust Note */}
          <div className="mt-8 flex items-center gap-2 text-xs text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-[#CEFF00]" />
            <span>Colt Cerâmico SiO2 e proteção solar UV inclusos em todos os serviços</span>
          </div>
        </div>
      </div>

      {/* Bottom Technical Ticker / Index Slider Bar (Zenith Style) */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#08090A]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono tracking-wider">
            <div className="hero-ticker-item flex items-center gap-2 text-neutral-400">
              <span className="text-[#CEFF00] font-bold">01</span>
              <span className="truncate">SNOW FOAM ATIVA</span>
            </div>
            <div className="hero-ticker-item flex items-center gap-2 text-neutral-400">
              <span className="text-[#CEFF00] font-bold">02</span>
              <span className="truncate">BLINDAGEM COLT SIO2</span>
            </div>
            <div className="hero-ticker-item flex items-center gap-2 text-neutral-400">
              <span className="text-[#CEFF00] font-bold">03</span>
              <span className="truncate">CUIDADO CIRÚRGICO</span>
            </div>
            <div className="hero-ticker-item flex items-center gap-2 text-neutral-400">
              <span className="text-[#CEFF00] font-bold">04</span>
              <span className="truncate">HORA MARCADA EXCLUSIVA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
