"use client";

import { useRef } from "react";
import { Award, Clock, Truck, Sparkles } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

const PILLARS = [
  {
    icon: Clock,
    title: "Atendimento por Hora Marcada",
    text: "Sem esperas desnecessárias, tempo dedicado exclusivamente ao seu projeto.",
  },
  {
    icon: Truck,
    title: "Serviço de Leva e Traz",
    text: "Retiramos e entregamos seu veículo com total cuidado e conveniência.",
  },
  {
    icon: Sparkles,
    title: "Acabamento Cirúrgico",
    text: "Aplicação sem bolhas, sem cortes visíveis e com isolamento térmico comprovado.",
  },
];

export default function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const st = { trigger: root.current, start: "top 70%", once: true };
        gsap.from("[data-about-img]", { x: -50, opacity: 0, duration: 1.1, ease: "power3.out", scrollTrigger: st });
        gsap.from("[data-about-copy]", { y: 30, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power2.out", scrollTrigger: st });
      });
    },
    { scope: root },
  );

  return (
    <section id="sobre" ref={root} className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        <div data-about-img className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sobre.jpg"
              alt="Aplicador profissional instalando película no vidro de um veículo"
              loading="lazy"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-xl border border-line bg-surface-2/90 px-5 py-4 backdrop-blur-md sm:-right-4">
            <Award className="text-accent" size={28} strokeWidth={1.5} />
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.22em] text-white/50">Qualificação</p>
              <p className="font-display text-sm font-medium">Aplicador Autorizado</p>
            </div>
          </div>
        </div>

        <div>
          <p data-about-copy className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-accent">
            <span className="h-px w-8 bg-accent" /> Sobre a Brusfilm
          </p>
          <h2
            data-about-copy
            className="font-display text-3xl font-light uppercase leading-tight tracking-tight sm:text-4xl"
          >
            Tradição técnica, <span className="italic-serif normal-case text-accent">acabamento</span> sem concessões.
          </h2>
          <p data-about-copy className="mt-6 text-base leading-relaxed text-white/65">
            Com mais de 8.000 clientes atendidos em Brusque e região, a Brusfilm consolidou-se como
            referência em películas automotivas, residenciais e de segurança. Trabalhamos como
            Aplicador Autorizado das melhores marcas mundiais, unindo conhecimento técnico, produto
            de alto padrão e um atendimento próximo, planejado para cada projeto.
          </p>

          <ul className="mt-10 divide-y divide-line border-y border-line">
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <li key={title} data-about-copy className="flex gap-5 py-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line bg-surface text-accent">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
