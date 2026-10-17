"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Check, ArrowUpRight, Sparkles, Shield, Droplets } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type VehicleType = "hatch" | "sedan" | "suv";

interface ServiceTier {
  id: string;
  name: string;
  badge: string;
  description: string;
  image: string;
  featured?: boolean;
  prices: {
    hatch: number;
    sedan: number;
    suv: number;
  };
  features: string[];
  ctaMessage: string;
}

export default function ServicesSection() {
  const container = useRef<HTMLDivElement>(null);
  const [vehicle, setVehicle] = useState<VehicleType>("hatch");

  useGSAP(
    () => {
      gsap.from(".services-header", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  const services: ServiceTier[] = [
    {
      id: "simples",
      name: "Lavação Simples",
      badge: "MANUTENÇÃO TÉCNICA",
      description:
        "Lavagem de manutenção rápida e eficiente para quem quer manter o carro impecável no dia a dia.",
      image: "/assets/g2/f1.png",
      prices: {
        hatch: 120,
        sedan: 140,
        suv: 160,
      },
      features: [
        "Lavagem externa com técnica Snow Foam (espuma densa)",
        "Limpeza de plásticos externos, caixas de rodas e vidros",
        "Limpeza externa das rodas e pneus",
        "Aspiração completa de tapetes, carpetes e bancos",
        "Limpeza de painel, portas, console e porta-malas",
        "Aplicação de Colt Cerâmico (repelência e brilho)",
        "Condicionador de pneus e revestimento solar UV interno",
      ],
      ctaMessage: "Ol%C3%A1%2C%20gostaria%20de%20agendar%20a%20Lava%C3%A7%C3%A3o%20Simples.",
    },
    {
      id: "completa",
      name: "Lavação Completa",
      badge: "MAIS PROCURADO ★",
      featured: true,
      description:
        "Cuidado rigoroso e cirúrgico, alcançando cantos, grades e detalhes inacessíveis na lavagem convencional.",
      image: "/assets/g2/f4.png",
      prices: {
        hatch: 160,
        sedan: 200,
        suv: 240,
      },
      features: [
        "Tudo incluso na Lavação Simples +",
        "Lavagem detalhada Snow Foam com pincéis macios",
        "Remoção de sujidade incrustada em emblemas e grades",
        "Limpeza profunda das rodas por fora E por dentro",
        "Higienização de saídas e difusores do ar-condicionado",
        "Limpeza detalhada de frisos, console e guarnições",
        "Blindagem Colt Cerâmica + Proteção UV completa",
      ],
      ctaMessage: "Ol%C3%A1%2C%20gostaria%20de%20agendar%20a%20Lava%C3%A7%C3%A3o%20Completa.",
    },
    {
      id: "premium",
      name: "Lavação Premium",
      badge: "TRANSFORMAÇÃO TOTAL",
      description:
        "O serviço topo de linha das lavagens. Uma verdadeira renovação visual estética de nível de concurso.",
      image: "/assets/g2/f2.png",
      prices: {
        hatch: 250,
        sedan: 300,
        suv: 450,
      },
      features: [
        "Tudo incluso na Lavação Completa +",
        "Revitalização e proteção profunda de plásticos externos",
        "Limpeza de canaletas de porta, guarnições e dobras",
        "Aplicação de Verniz Específico para Rodas e Caixas",
        "Limpeza detalhada do volante, pedais e comandos",
        "Descontaminação e proteção de lona marítima (pick-ups)",
        "Blindagem Colt Cerâmica com máximo rendimento hidrofóbico",
      ],
      ctaMessage: "Ol%C3%A1%2C%20gostaria%20de%20agendar%20a%20Lava%C3%A7%C3%A3o%20Premium.",
    },
  ];

  const vehicleLabels: Record<VehicleType, string> = {
    hatch: "Hatch",
    sedan: "Sedan",
    suv: "SUV / Pick-up",
  };

  return (
    <section
      id="servicos"
      ref={container}
      className="relative z-10 w-full py-24 sm:py-32 bg-[#08090A] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="services-header flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#CEFF00] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>O CATÁLOGO TÉCNICO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              CUIDADO EM CADA DETALHE.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
              Três níveis de atendimento formulados com insumos técnicos de alta
              performance para atender a necessidade exata do seu veículo em
              Pomerode.
            </p>
          </div>

          {/* Vehicle Category Selector (Tabs) */}
          <div className="flex items-center bg-[#121417] p-1.5 rounded-full border border-white/10 self-start md:self-auto shadow-inner">
            {(["hatch", "sedan", "suv"] as VehicleType[]).map((v) => (
              <button
                key={v}
                onClick={() => setVehicle(v)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                  vehicle === v
                    ? "bg-[#CEFF00] text-black shadow-md shadow-[#CEFF00]/20"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {vehicleLabels[v]}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (Zenith Lineup Cards) */}
        <div className="services-grid grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => {
            const currentPrice = service.prices[vehicle];
            const waUrl = `https://wa.me/5547933854886?text=${service.ctaMessage}%20(Ve%C3%ADculo%3A%20${vehicleLabels[vehicle]})`;

            return (
              <div
                key={service.id}
                className={`service-card relative flex flex-col justify-between rounded-3xl overflow-hidden transition-all duration-300 ${
                  service.featured
                    ? "bg-[#121417] border-2 border-[#CEFF00] shadow-2xl shadow-[#CEFF00]/10 scale-[1.02] z-10"
                    : "bg-[#0E1013] border border-white/10 hover:border-white/30"
                }`}
              >
                {/* Top Image Container */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-neutral-900">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-black/40" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase ${
                        service.featured
                          ? "bg-[#CEFF00] text-black"
                          : "bg-white/10 backdrop-blur-md text-white border border-white/20"
                      }`}
                    >
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Price */}
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {service.name}
                      </h3>
                      <div className="text-right">
                        <span className="text-xs text-neutral-400 font-mono">A partir de</span>
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#CEFF00] font-mono">
                          R$ {currentPrice}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="h-[1px] w-full bg-white/10 mb-6" />

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      <div className="text-[11px] font-semibold tracking-[0.2em] text-neutral-300 uppercase">
                        O QUE ESTÁ INCLUSO:
                      </div>
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                          <Check className="w-4 h-4 text-[#CEFF00] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-full py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
                      service.featured
                        ? "bg-[#CEFF00] hover:bg-[#d9ff33] text-black shadow-lg shadow-[#CEFF00]/20"
                        : "bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/50"
                    }`}
                  >
                    <span>AGENDAR {service.name.toUpperCase()}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Note */}
        <div className="mt-12 text-center text-xs text-neutral-400">
          * Valores sujeitos a avaliação técnica em caso de veículos com barro excessivo, areia pesada ou contaminação severa. Atendimento rigoroso com hora marcada.
        </div>
      </div>
    </section>
  );
}
