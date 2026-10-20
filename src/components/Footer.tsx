import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "./Logo";
import { MAPS_LINK, NAV_LINKS, PHONE_DISPLAY, WA_HERO } from "@/lib/data";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-line bg-ink pb-28 pt-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <Logo />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
                Películas automotivas, residenciais e de segurança com acabamento premium em
                Brusque - SC.
              </p>
            </div>
            <nav aria-label="Rodapé">
              <p className="mb-5 text-xs uppercase tracking-[0.22em] text-white/40">Navegação</p>
              <ul className="space-y-3 text-sm">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-white/70 transition hover:text-accent">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.22em] text-white/40">Contato</p>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2.5">
                  <Phone size={16} className="text-accent" /> {PHONE_DISPLAY}
                </li>
                <li>
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 hover:text-accent">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                    Rua Sete de Setembro, 534 - Sala 01, Santa Rita, Brusque - SC
                    <ArrowUpRight size={14} className="mt-0.5 shrink-0" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-3 border-t border-line pt-6 text-xs text-white/35 sm:flex-row">
            <p>© {new Date().getFullYear()} Brusfilm Películas. Todos os direitos reservados.</p>
            <p>Atendimento por hora marcada | Leva e Traz</p>
          </div>
        </div>
      </footer>

      <a
        id="whatsapp-float"
        href={WA_HERO}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Brusfilm no WhatsApp"
        className="wa-pulse fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/40 transition hover:scale-110"
      >
        <MessageCircle size={26} />
      </a>
    </>
  );
}
