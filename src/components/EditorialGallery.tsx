"use client";

import { useRef } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
  className?: string;
}

export default function EditorialGallery() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          once: true,
        },
      });

      tl.fromTo(
        ".gallery-header",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", clearProps: "all" }
      ).fromTo(
        ".gallery-bento-card",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
        },
        "-=0.4"
      );
    },
    { scope: container }
  );

  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      image: "/assets/g2/f1.png",
      title: "Espuma Snow Foam Ativa",
      category: "DESCONTAMINAÇÃO",
      description: "Cobertura densa e homogênea para desagregação suave de sujidade sem abrasão.",
      className: "lg:col-span-2 lg:row-span-2 min-h-[340px] lg:min-h-[640px]",
    },
    {
      id: "4",
      image: "/assets/g2/f4.png",
      title: "Reflexo & Blindagem Colt",
      category: "ACABAMENTO ESPELHADO",
      description: "Profundidade de cor e película cerâmica hidrofóbica com toque sedoso.",
      className: "lg:col-span-1 lg:row-span-2 min-h-[340px] lg:min-h-[640px]",
    },
    {
      id: "3",
      image: "/assets/g2/f3.png",
      title: "Higienização Interna Cirúrgica",
      category: "INTERIOR & UV",
      description: "Aspiração profunda e hidratação acetinada com toque seco e proteção solar.",
      className: "lg:col-span-1 min-h-[300px] h-[320px]",
    },
    {
      id: "2",
      image: "/assets/g2/f2.png",
      title: "Acabamento de Rodas & Pneus",
      category: "RODAS & DETALHES",
      description: "Limpeza minuciosa de caixas e aplicação de verniz térmico contra fuligem.",
      className: "lg:col-span-2 min-h-[300px] h-[320px]",
    },
    {
      id: "5",
      image: "/assets/g2/f5.png",
      title: "Emblemas, Cantos & Grades",
      category: "CUIDADO MINUCIOSO",
      description: "Pincelamento técnico em frestas e dobras onde a sujeira mais se acumula.",
      className: "lg:col-span-1 min-h-[300px] h-[320px]",
    },
    {
      id: "6",
      image: "/assets/g2/f6.png",
      title: "Estrutura Dedicada em Pomerode",
      category: "ESPAÇO TÉCNICO",
      description: "Espaço coberto e isolado para execução metódica e com hora marcada.",
      className: "lg:col-span-1 min-h-[300px] h-[320px]",
    },
    {
      id: "7",
      image: "/assets/g2/f7.png",
      title: "Inspeção & Entrega Técnica",
      category: "CONTROLE DE QUALIDADE",
      description: "Avaliação minuciosa sob iluminação dedicada para garantia de 100% de satisfação.",
      className: "lg:col-span-1 min-h-[300px] h-[320px]",
    },
  ];

  return (
    <section
      id="galeria"
      ref={container}
      className="relative z-10 w-full py-24 sm:py-32 bg-[#08090A] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="gallery-header max-w-2xl mb-16 opacity-100">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#CEFF00] uppercase mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>REGISTROS REAIS DE SERVIÇO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            GALERIA EDITORIAL.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Fotografias reais dos nossos processos de estética, lavagem técnica e
            detalhamento em veículos finalizados na G2 em Pomerode.
          </p>
        </div>

        {/* Bento Grid with Guaranteed Non-Zero Heights */}
        <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`gallery-bento-card group relative rounded-3xl overflow-hidden border border-white/10 bg-[#121417] transition-all duration-500 hover:border-white/30 hover:shadow-2xl opacity-100 ${
                item.className || "min-h-[300px] h-[320px]"
              }`}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none" />

              {/* Tag Badge */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold tracking-[0.18em] text-[#CEFF00] border border-white/10 uppercase">
                  {item.category}
                </span>
              </div>

              {/* Bottom Information */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-10 pointer-events-none">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1 group-hover:text-[#CEFF00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
