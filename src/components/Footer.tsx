"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, ArrowUpRight } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./Icons";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative z-10 w-full bg-[#060708] border-t border-white/10 text-neutral-400 text-xs">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-neutral-900">
                  <Image
                    src="/assets/g2/logo.webp"
                    alt="G2 Lavação Logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <div className="font-extrabold tracking-[0.2em] text-white text-base">
                    G2 LAVAÇÃO
                  </div>
                  <div className="text-[10px] tracking-[0.25em] text-[#CEFF00] uppercase -mt-0.5">
                    ESTÉTICA AUTOMOTIVA
                  </div>
                </div>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm mb-6">
                O mais alto nível de cuidado, proteção e renovação para o seu
                veículo em Pomerode - SC. Snow Foam técnica, blindagem cerâmica
                Colt e atendimento com hora marcada.
              </p>
            </div>

            <div className="flex items-center gap-4 text-white">
              <a
                href="https://www.instagram.com/g2lavacao_estetica.automotiva/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Oficial"
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#CEFF00] hover:text-black border border-white/10 transition-colors duration-300"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/marcio.jucemar.becker?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#CEFF00] hover:text-black border border-white/10 transition-colors duration-300"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5547933854886"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#CEFF00] hover:text-black border border-white/10 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Column 1: Serviços */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-mono font-bold tracking-[0.2em] text-white uppercase mb-4">
              SERVIÇOS
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="#servicos"
                  className="hover:text-white transition-colors"
                >
                  Lavação Simples
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="hover:text-white transition-colors"
                >
                  Lavação Completa
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="hover:text-white transition-colors"
                >
                  Lavação Premium
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="hover:text-white transition-colors"
                >
                  Higienização Interna
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="hover:text-white transition-colors"
                >
                  Verniz de Rodas e Caixas
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Tecnologia */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-mono font-bold tracking-[0.2em] text-white uppercase mb-4">
              TECNOLOGIA & INSUMOS
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="#tecnologia"
                  className="hover:text-white transition-colors"
                >
                  Colt Cerâmico SiO2
                </Link>
              </li>
              <li>
                <Link
                  href="#tecnologia"
                  className="hover:text-white transition-colors"
                >
                  Snow Foam de pH Neutro
                </Link>
              </li>
              <li>
                <Link
                  href="#tecnologia"
                  className="hover:text-white transition-colors"
                >
                  Proteção Solar UV Interior
                </Link>
              </li>
              <li>
                <Link
                  href="#tecnologia"
                  className="hover:text-white transition-colors"
                >
                  Descontaminação de Verniz
                </Link>
              </li>
              <li>
                <Link
                  href="#tecnologia"
                  className="hover:text-white transition-colors"
                >
                  Proteção de Lona Marítima
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Localização & Agendamento */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-mono font-bold tracking-[0.2em] text-white uppercase mb-4">
              POMERODE - SC
            </h4>
            <p className="text-neutral-400 font-light leading-relaxed mb-3">
              R. Progresso, 4611 - Cs 2 - Testo Alto
              <br />
              Pomerode - SC, 89107-000
            </p>
            <div className="space-y-1.5 mb-4">
              <div className="text-neutral-300 font-mono">
                Seg a Sex: 08:00 às 18:00
              </div>
              <div className="text-neutral-300 font-mono">
                Sábado: 08:00 às 12:00
              </div>
            </div>
            <a
              href="https://share.google/jl18cQO0KRrPZDW5y"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#CEFF00] hover:underline"
            >
              <span>Ver no Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {currentYear} G2 Lavação & Estética Automotiva. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span>Pomerode • Santa Catarina</span>
            <span>Design Editorial & Performance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
