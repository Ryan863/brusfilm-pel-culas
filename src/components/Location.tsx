"use client";

import { useRef } from "react";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";
import { ADDRESS_LINES, FACEBOOK_URL, HOURS, INSTAGRAM_URL, MAPS_EMBED, MAPS_LINK, PHONE_DISPLAY, WA_HERO } from "@/lib/data";

export default function Location() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from("[data-loc]", {
          y: 30,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: root.current, start: "top 72%", once: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <section id="contato" ref={root} className="bg-paper py-24 text-ink lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div data-loc className="mb-14 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-accent-deep">
            <span className="h-px w-8 bg-accent-deep" /> Localização e Agendamento
          </p>
          <h2 className="font-display text-3xl font-light uppercase leading-tight tracking-tight sm:text-4xl">
            Agende seu horário e venha <span className="italic-serif normal-case text-accent-deep">nos visitar</span>.
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="grid gap-8 lg:col-span-2">
            <div data-loc className="rounded-2xl border border-ink/10 bg-white p-7">
              <h3 className="mb-5 flex items-center gap-2.5 font-display text-lg font-medium">
                <Clock size={20} strokeWidth={1.5} className="text-accent-deep" /> Horários
              </h3>
              <dl className="divide-y divide-ink/10 text-sm">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4 py-3">
                    <dt className="font-medium">{h.day}</dt>
                    <dd className="text-ink/65">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div data-loc className="rounded-2xl border border-ink/10 bg-white p-7">
              <h3 className="mb-4 flex items-center gap-2.5 font-display text-lg font-medium">
                <MapPin size={20} strokeWidth={1.5} className="text-accent-deep" /> Endereço
              </h3>
              <address className="text-sm not-italic leading-relaxed text-ink/70">
                {ADDRESS_LINES.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
              </address>
              <a
                id="loc-maps"
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-ink/25 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] transition hover:bg-ink hover:text-white"
              >
                Abrir no Google Maps <ArrowUpRight size={14} />
              </a>
            </div>

            <div data-loc className="rounded-2xl bg-ink p-7 text-white">
              <h3 className="mb-3 flex items-center gap-2.5 font-display text-lg font-medium">
                <Phone size={20} strokeWidth={1.5} className="text-accent" /> WhatsApp Oficial
              </h3>
              <a href={WA_HERO} target="_blank" rel="noopener noreferrer" className="font-display text-2xl font-light hover:text-accent">
                {PHONE_DISPLAY}
              </a>
              <p className="mt-2 text-xs text-white/55">Atendimento por hora marcada. Agende e receba o orçamento.</p>
              <div className="mt-5 flex gap-3 border-t border-white/10 pt-5">
                <a
                  id="loc-instagram"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs uppercase tracking-[0.14em] transition hover:border-accent hover:text-accent"
                >
                  <InstagramIcon size={16} /> Instagram
                </a>
                <a
                  id="loc-facebook"
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs uppercase tracking-[0.14em] transition hover:border-accent hover:text-accent"
                >
                  <FacebookIcon size={16} /> Facebook
                </a>
              </div>
            </div>
          </div>

          <div data-loc className="min-h-[360px] overflow-hidden rounded-2xl border border-ink/10 lg:col-span-3">
            <iframe
              title="Mapa da Brusfilm Películas em Brusque - SC"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full min-h-[360px] grayscale transition hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
