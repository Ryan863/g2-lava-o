"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "SERVIÇOS", href: "#servicos" },
    { label: "TECNOLOGIA", href: "#tecnologia" },
    { label: "GALERIA", href: "#galeria" },
    { label: "AVALIAÇÕES", href: "#avaliacoes" },
    { label: "LOCALIZAÇÃO", href: "#localizacao" },
  ];

  const waHeroLink =
    "https://wa.me/5547933854886?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20lava%C3%A7%C3%A3o%20na%20G2.";

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#08090A]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-neutral-900 group-hover:border-[#CEFF00] transition-colors duration-300">
            <Image
              src="/assets/g2/logo.webp"
              alt="G2 Lavação & Estética Automotiva"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-[0.2em] text-white text-sm sm:text-base group-hover:text-[#CEFF00] transition-colors">
              G2 LAVAÇÃO
            </span>
            <span className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase -mt-0.5">
              ESTÉTICA AUTOMOTIVA
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-medium tracking-[0.18em] text-neutral-300 hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#CEFF00] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={waHeroLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-[#CEFF00] bg-white/5 hover:bg-[#CEFF00]/10 backdrop-blur-sm text-xs font-semibold tracking-wider text-white hover:text-[#CEFF00] transition-all duration-300"
          >
            <span>AGENDAR HORÁRIO</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
          className="lg:hidden p-2 rounded-lg text-neutral-200 hover:text-white border border-white/10 hover:border-white/30 bg-white/5"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#08090A]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium tracking-[0.18em] text-neutral-200 hover:text-[#CEFF00] transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={waHeroLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#CEFF00] text-black font-semibold text-xs tracking-wider hover:bg-[#b8e600] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>AGENDAR NO WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
