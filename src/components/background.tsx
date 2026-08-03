/**
 * Fixed decorative layer behind all sections: dot grid, sparse primary dots,
 * vertical frame lines around the content column, and a soft top glow.
 * Negative z-index keeps it above the body background but behind content.
 */
function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,var(--primary)_1px,transparent_1.5px)] opacity-25 [background-position:14px_14px] [background-size:112px_112px]" />
      <div className="absolute inset-y-0 left-1/2 hidden w-full max-w-5xl -translate-x-1/2 border-x border-border/60 lg:block" />
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
    </div>
  );
}

export { Background };
