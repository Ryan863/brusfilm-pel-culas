"use client";

import { useRef } from "react";
import { Car, Home, Lock, ShieldCheck, Sun, ArrowUpRight, type LucideIcon } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { waLink } from "@/lib/data";

type Service = {
  icon: LucideIcon;
  title: string;
  text: string;
  specs: string[];
  span: string;
  image?: string;
  wa: string;
};

const SERVICES: Service[] = [
  {
    icon: Car,
    title: "Película Automotiva",
    text: "Insulfilm para veículos: redução drástica do calor interno, proteção contra raios UV, privacidade e estética para carros, SUVs e caminhonetes.",
    specs: ["Bloqueio UV", "Menos calor", "Privacidade"],
    span: "lg:col-span-2",
    wa: "Olá, gostaria de um orçamento de película automotiva.",
  },
  {
    icon: Home,
    title: "Residencial e Arquitetônica",
    text: "Soluções térmicas e decorativas para janelas, portas de vidro, sacadas e fachadas comerciais ou residenciais.",
    specs: ["Janelas", "Sacadas", "Fachadas"],
    span: "lg:col-span-2",
    image: "/images/residencial.jpg",
    wa: "Olá, gostaria de um orçamento de película residencial/arquitetônica.",
  },
  {
    icon: Sun,
    title: "Nano-Cerâmica G05% e G35%",
    text: "Linha premium com máxima rejeição térmica por infravermelho, mantendo ótima visibilidade interna. Até 10 anos de garantia selecionada.",
    specs: ["Infravermelho", "Alta visibilidade", "Até 10 anos"],
    span: "lg:col-span-2",
    wa: "Olá, gostaria de um orçamento da linha premium de nano-cerâmica (G05% / G35%).",
  },
  {
    icon: ShieldCheck,
    title: "Película de Segurança",
    text: "Película de retenção reforçada (antivandalismo) que impede o estilhaçamento do vidro contra tentativas de invasão e impactos.",
    specs: ["Antivandalismo", "Retenção de estilhaços"],
    span: "lg:col-span-3",
    wa: "Olá, gostaria de um orçamento de película de segurança.",
  },
  {
    icon: Lock,
    title: "Decorativa e Personalização",
    text: "Estilização de divisórias de vidro, ambientes corporativos e envelopamentos específicos, com privacidade e identidade visual.",
    specs: ["Divisórias", "Corporativo", "Envelopamento"],
    span: "lg:col-span-3",
    wa: "Olá, gostaria de um orçamento de película decorativa/personalização.",
  },
];

export default function Services() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from("[data-svc-head]", {
          y: 30,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: "[data-svc-head]", start: "top 85%", once: true },
        });

        const cards = gsap.utils.toArray<HTMLElement>("[data-card]");
        cards.forEach((c, i) => {
          gsap.from(c, {
            x: i % 2 === 0 ? -40 : 40,
            opacity: 0,
            duration: 0.9,
            delay: (i % 3) * 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: c, start: "top 88%", once: true },
          });
          const enter = () => gsap.to(c, { scale: 1.02, y: -4, duration: 0.35, ease: "power2.out" });
          const leave = () => gsap.to(c, { scale: 1, y: 0, duration: 0.35, ease: "power2.out" });
          c.addEventListener("mouseenter", enter);
          c.addEventListener("mouseleave", leave);
          c.addEventListener("focusin", enter);
          c.addEventListener("focusout", leave);
        });
      });
    },
    { scope: root },
  );

  return (
    <section id="servicos" ref={root} className="relative bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-14 max-w-2xl">
          <p data-svc-head className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-accent">
            <span className="h-px w-8 bg-accent" /> Catálogo de Serviços
          </p>
          <h2
            data-svc-head
            className="font-display text-3xl font-light uppercase leading-tight tracking-tight sm:text-4xl"
          >
            Soluções <span className="italic-serif normal-case text-accent">especializadas</span> para cada vidro.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-6">
          {SERVICES.map(({ icon: Icon, title, text, specs, span, image, wa }, i) => (
            <article
              key={title}
              data-card
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface-2 p-7 transition-colors duration-300 hover:border-accent/70 ${span}`}
            >
              {image && (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover opacity-25 transition-opacity duration-500 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-2 via-surface-2/70 to-surface-2/30" />
                </>
              )}
              <div className="relative flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-full border border-line bg-ink/60 text-accent">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <span className="font-display text-sm font-light tracking-widest text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="relative mt-8 font-display text-xl font-medium">{title}</h3>
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-white/60">{text}</p>
              <ul className="relative mt-6 flex flex-wrap gap-2">
                {specs.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-line px-3 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-white/60"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(wa)}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-7 inline-flex items-center gap-1.5 self-start text-xs font-medium uppercase tracking-[0.16em] text-accent transition hover:text-white"
              >
                Solicitar orçamento <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
