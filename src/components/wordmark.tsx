export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className="font-display text-[0.95em] font-medium uppercase tracking-[0.14em] text-ink">
        The Admin
      </span>
      <span className="font-script text-[1.5em] leading-none text-gold">
        Reset
      </span>
    </span>
  );
}
