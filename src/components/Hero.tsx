"use client";

import { useRef } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { WA_HERO } from "@/lib/data";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const bg = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from("[data-hero-reveal]", {
          y: 35,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.12,
          delay: 0.15,
        });
        gsap.to(bg.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section
      id="inicio"
      ref={root}
      className="relative flex h-svh min-h-[640px] items-center overflow-hidden"
    >
      {/* Fundo imersivo com parallax. No desktop a foto é mostrada inteira (sem zoom) à direita, fundindo com o fundo escuro */}
      <div ref={bg} className="absolute inset-x-0 -top-[10%] h-[120%] bg-ink will-change-transform">
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/hero-desktop.jpg" />
          <img
            src="/images/hero-mobile.jpg"
            alt="Veículo esportivo em estúdio com iluminação azul, representando o acabamento premium das películas Brusfilm"
            fetchPriority="high"
            className="size-full object-cover object-[70%_center] md:object-contain md:object-right md:[mask-image:linear-gradient(to_right,transparent_0%,#000_28%),linear-gradient(to_bottom,transparent_0%,#000_18%,#000_82%,transparent_100%)] md:[mask-composite:intersect] md:[-webkit-mask-composite:source-in]"
          />
        </picture>
      </div>
      {/* Máscaras de degradê para leitura do texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-transparent md:via-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 md:px-10">
        <div className="max-w-3xl">
          <p
            data-hero-reveal
            className="mb-6 flex items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-accent sm:text-xs"
          >
            <span className="h-px w-8 bg-accent" />
            Brusque - SC | Controle Solar &amp; Segurança
          </p>

          <h1
            data-hero-reveal
            className="font-display text-[2.1rem] font-light uppercase leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]"
          >
            Proteção térmica, privacidade e{" "}
            <span className="italic-serif normal-case text-accent">sofisticação</span> para o seu
            veículo e imóvel.
          </h1>

          <p
            data-hero-reveal
            className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base"
          >
            Aplicação profissional de películas de alta performance em Brusque. Tecnologia em
            nano-cerâmica, controle solar arquitetônico e blindagem de segurança com atendimento por
            hora marcada e comodidade leva e traz.
          </p>

          <div data-hero-reveal className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              id="hero-whatsapp"
              href={WA_HERO}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink shadow-[0_0_40px_-8px_var(--accent)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Solicitar Orçamento no WhatsApp
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              id="hero-explorar"
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-4 text-xs font-medium uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white/10"
            >
              Explorar Soluções
            </a>
          </div>
        </div>
      </div>

      <a
        href="#metricas"
        aria-label="Rolar para baixo"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-white/50 transition hover:text-white md:block"
      >
        <ChevronDown size={22} className="animate-bounce" />
      </a>
    </section>
  );
}
