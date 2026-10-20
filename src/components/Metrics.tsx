"use client";

import { useRef } from "react";
import { Truck } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

const METRICS = [
  { value: 8000, prefix: "+", decimals: 0, label: "Clientes Satisfeitos em Brusque e Região" },
  { value: 5, suffix: " ★", decimals: 1, label: "Avaliação Máxima no Google (+100 avaliações)" },
  { value: 10, suffix: " ANOS", decimals: 0, label: "Garantia nas Linhas Premium de Nano-Cerâmica" },
] as const;

const fmt = (n: number, d: number) =>
  n.toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });

export default function Metrics() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const end = Number(el.dataset.count);
          const d = Number(el.dataset.decimals);
          const prefix = el.dataset.prefix ?? "";
          const suffix = el.dataset.suffix ?? "";
          const o = { v: 0 };
          el.textContent = `${prefix}${fmt(0, d)}${suffix}`;
          gsap.to(o, {
            v: end,
            duration: 2.2,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = `${prefix}${fmt(o.v, d)}${suffix}`;
            },
            scrollTrigger: { trigger: root.current, start: "top 85%", once: true },
          });
        });
        gsap.from("[data-metric]", {
          y: 24,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: root.current, start: "top 85%", once: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <section
      id="metricas"
      ref={root}
      aria-label="Autoridade e métricas"
      className="border-y border-line bg-surface"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-line px-5 md:px-10 lg:grid-cols-4 lg:divide-x">
        {METRICS.map((m) => (
          <div
            key={m.label}
            data-metric
            className="border-b border-line px-2 py-9 text-center odd:border-r lg:border-b-0 lg:odd:border-r-0 lg:px-8 lg:py-12"
          >
            <p
              data-count={m.value}
              data-decimals={m.decimals}
              data-prefix={"prefix" in m ? m.prefix : ""}
              data-suffix={"suffix" in m ? m.suffix : ""}
              className="font-display text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {"prefix" in m ? m.prefix : ""}
              {fmt(m.value, m.decimals)}
              {"suffix" in m ? m.suffix : ""}
            </p>
            <p className="mx-auto mt-3 max-w-[16rem] text-[0.65rem] uppercase leading-relaxed tracking-[0.16em] text-white/55 sm:text-xs">
              {m.label}
            </p>
          </div>
        ))}
        <div
          data-metric
          className="px-2 py-9 text-center lg:px-8 lg:py-12"
        >
          <p className="flex items-center justify-center gap-2 font-display text-2xl font-light tracking-tight text-accent sm:text-3xl lg:text-4xl">
            <Truck size={26} strokeWidth={1.5} className="hidden sm:block" />
            LEVA &amp; TRAZ
          </p>
          <p className="mx-auto mt-3 max-w-[16rem] text-[0.65rem] uppercase leading-relaxed tracking-[0.16em] text-white/55 sm:text-xs">
            Comodidade e Segurança para o Seu Veículo
          </p>
        </div>
      </div>
    </section>
  );
}
