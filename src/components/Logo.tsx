export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex flex-col leading-none select-none ${className}`}
      aria-label="Brusfilm Películas"
    >
      <span className="font-display text-[1.65rem] font-semibold italic tracking-tight">
        <span className="text-white">Brus</span>
        <span className="text-accent">film</span>
      </span>
      <span className="mt-0.5 text-[0.5rem] font-medium uppercase tracking-[0.55em] text-white/70">
        Películas
      </span>
    </span>
  );
}
