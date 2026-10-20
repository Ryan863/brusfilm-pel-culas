"use client";

import { useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { MAPS_LINK, REVIEWS } from "@/lib/data";

const Stars = () => (
  <div className="flex gap-0.5 text-accent" aria-label="5 de 5 estrelas">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
    ))}
  </div>
);

export default function Reviews() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from("[data-rev]", {
          y: 32,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
        });
      });
    },
    { scope: root },
  );

  const scroll = (dir: 1 | -1) =>
    track.current?.scrollBy({ left: dir * 360, behavior: "smooth" });

  return (
    <section id="avaliacoes" ref={root} className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div data-rev>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-accent">
              <span className="h-px w-8 bg-accent" /> Prova Social
            </p>
            <h2 className="font-display text-3xl font-light uppercase leading-tight tracking-tight sm:text-4xl">
              Nota <span className="italic-serif normal-case text-accent">5.0</span> no Google.
            </h2>
          </div>
          <div data-rev className="flex items-center gap-5 rounded-2xl border border-line bg-surface px-6 py-4">
            <span className="font-display text-5xl font-light">5.0</span>
            <div>
              <Stars />
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/55">
                +100 avaliações de clientes reais
              </p>
            </div>
          </div>
        </div>

        <div
          ref={track}
          className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 md:mx-0 md:px-0"
          role="list"
        >
          {REVIEWS.map((r) => (
            <figure
              key={r.text}
              data-rev
              role="listitem"
              className="flex w-[82%] shrink-0 snap-start flex-col justify-between rounded-2xl border border-line bg-surface p-7 sm:w-[340px]"
            >
              <div>
                <Stars />
                <blockquote className="mt-5 text-sm leading-relaxed text-white/75">“{r.text}”</blockquote>
              </div>
              <figcaption className="mt-6 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.16em] text-white/45">
                Cliente Google
                <span className="rounded-full border border-line px-3 py-1 text-accent">{r.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div data-rev className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <a
            id="reviews-maps"
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-accent px-6 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-accent transition hover:bg-accent hover:text-ink"
          >
            Conferir Avaliações no Google Maps (5.0 ★) <ArrowUpRight size={14} />
          </a>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Avaliação anterior"
              onClick={() => scroll(-1)}
              className="grid size-11 place-items-center rounded-full border border-line transition hover:border-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Próxima avaliação"
              onClick={() => scroll(1)}
              className="grid size-11 place-items-center rounded-full border border-line transition hover:border-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
