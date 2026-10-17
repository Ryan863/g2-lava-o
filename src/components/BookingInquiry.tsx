"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Calendar, MessageSquare, Car, User, Phone } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BookingInquiry() {
  const container = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicleModel: "",
    vehicleType: "Hatch",
    service: "Lavação Completa",
    period: "Segunda a Sexta (Manhã)",
    notes: "",
  });

  useGSAP(
    () => {
      if (!container.current) return;
      gsap.fromTo(
        ".inquiry-content",
        { opacity: 0, y: 20 },
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20agendamento%20na%20G2%20Lava%C3%A7%C3%A3o%3A%0A%0A%E2%80%A2%20*Nome*%3A%20${encodeURIComponent(
      formData.name || "Cliente"
    )}%0A%E2%80%A2%20*Telefone*%3A%20${encodeURIComponent(
      formData.phone || "Não informado"
    )}%0A%E2%80%A2%20*Ve%C3%ADculo*%3A%20${encodeURIComponent(
      formData.vehicleModel || "Não especificado"
    )}%20(${encodeURIComponent(
      formData.vehicleType
    )})%0A%E2%80%A2%20*Servi%C3%A7o*%3A%20${encodeURIComponent(
      formData.service
    )}%0A%E2%80%A2%20*Prefer%C3%AAncia*%3A%20${encodeURIComponent(
      formData.period
    )}${
      formData.notes
        ? `%0A%E2%80%A2%20*Observa%C3%A7%C3%B5es*%3A%20${encodeURIComponent(
            formData.notes
          )}`
        : ""
    }`;

    window.open(`https://wa.me/5547933854886?text=${text}`, "_blank");
  };

  return (
    <section
      id="agendar"
      ref={container}
      className="relative z-10 w-full py-24 sm:py-32 bg-[#08090A] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="inquiry-content grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Header */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#CEFF00] uppercase block mb-3">
              AGENDAMENTO RIGOROSO
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              GARANTA A SUA VAGA NA G2.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8">
              Trabalhamos exclusivamente com hora marcada para assegurar que cada
              veículo receba a atenção técnica e o tempo necessário para um acabamento impecável.
            </p>

            <div className="space-y-4 pt-6 border-t border-white/10 text-xs text-neutral-400">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#CEFF00]" />
                <span>Confirmação ágil e direta pelo WhatsApp oficial</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#CEFF00]" />
                <span>Horários de Seg a Sex (08h às 18h) e Sáb (08h às 12h)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#CEFF00]" />
                <span>Localização fácil e segura no Testo Alto, Pomerode</span>
              </div>
            </div>
          </div>

          {/* Right Form (Zenith Underline / Minimal Style) */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#121417]/80 backdrop-blur-md p-8 sm:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nome */}
                <div>
                  <label className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase block mb-2">
                    SEU NOME COMPLETO *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#CEFF00] transition-colors"
                  />
                </div>

                {/* Telefone / WhatsApp */}
                <div>
                  <label className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase block mb-2">
                    WHATSAPP COM DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(47) 99999-9999"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#CEFF00] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Modelo do Veículo */}
                <div>
                  <label className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase block mb-2">
                    MODELO DO CARRO
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Corolla, T-Cross, Civic..."
                    value={formData.vehicleModel}
                    onChange={(e) =>
                      setFormData({ ...formData, vehicleModel: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#CEFF00] transition-colors"
                  />
                </div>

                {/* Categoria */}
                <div>
                  <label className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase block mb-2">
                    PORTE DO VEÍCULO
                  </label>
                  <select
                    value={formData.vehicleType}
                    onChange={(e) =>
                      setFormData({ ...formData, vehicleType: e.target.value })
                    }
                    className="w-full bg-[#121417] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#CEFF00] transition-colors"
                  >
                    <option value="Hatch">Hatch (Compacto)</option>
                    <option value="Sedan">Sedan (Médio / Grande)</option>
                    <option value="SUV / Pick-up">SUV / Caminhonete / Pick-up</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Pacote Desejado */}
                <div>
                  <label className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase block mb-2">
                    PACOTE DESEJADO
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-[#121417] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#CEFF00] transition-colors"
                  >
                    <option value="Lavação Simples">Lavação Simples (Manutenção)</option>
                    <option value="Lavação Completa">Lavação Completa (Destaque)</option>
                    <option value="Lavação Premium">Lavação Premium (Revitalização)</option>
                  </select>
                </div>

                {/* Preferência de Turno */}
                <div>
                  <label className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase block mb-2">
                    PERÍODO PREFERIDO
                  </label>
                  <select
                    value={formData.period}
                    onChange={(e) =>
                      setFormData({ ...formData, period: e.target.value })
                    }
                    className="w-full bg-[#121417] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#CEFF00] transition-colors"
                  >
                    <option value="Segunda a Sexta (Manhã)">Segunda a Sexta (Manhã)</option>
                    <option value="Segunda a Sexta (Tarde)">Segunda a Sexta (Tarde)</option>
                    <option value="Sábado (Manhã)">Sábado (Manhã)</option>
                  </select>
                </div>
              </div>

              {/* Observações */}
              <div>
                <label className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase block mb-2">
                  DETALHES ESPECIAIS OU OBSERVAÇÕES
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Carro com barro, preferência por quinta-feira, etc."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#CEFF00] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-8 rounded-full bg-[#CEFF00] hover:bg-[#d9ff33] text-black font-extrabold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#CEFF00]/20 hover:shadow-[#CEFF00]/40 transition-all duration-300 active:scale-98 cursor-pointer"
              >
                <span>SOLICITAR AGENDAMENTO NO WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
