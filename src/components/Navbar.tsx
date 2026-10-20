"use client";

import { useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { NAV_LINKS, WA_HERO } from "@/lib/data";
import Logo from "./Logo";

export default function Navbar() {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const tl = gsap.timeline({ paused: true, defaults: { duration: 0.45, ease: "power2.out" } });
      tl.to(el, {
        backgroundColor: "rgba(5,8,13,0.72)",
        backdropFilter: "blur(14px)",
        webkitBackdropFilter: "blur(14px)",
        borderBottomColor: "rgba(255,255,255,0.09)",
        paddingTop: 12,
        paddingBottom: 12,
      } as gsap.TweenVars);

      ScrollTrigger.create({
        start: 80,
        end: "max",
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
      });
      if (window.scrollY > 80) tl.progress(1);
    },
    { scope: ref },
  );

  return (
    <header
      ref={ref}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-transparent py-5"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10"
        aria-label="Principal"
      >
        <a href="#inicio" aria-label="Brusfilm Películas - início">
          <Logo />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/75 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            id="nav-agendar"
            href={WA_HERO}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-white/30 px-5 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white transition hover:border-accent hover:bg-accent hover:text-ink sm:inline-flex"
          >
            Agendar <ArrowUpRight size={14} />
          </a>
          <button
            id="nav-toggle"
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-white/25 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-5 mt-3 rounded-2xl border border-line bg-ink/95 p-5 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm uppercase tracking-[0.18em] text-white/85 hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WA_HERO}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-accent py-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink"
          >
            Agendar no WhatsApp <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
