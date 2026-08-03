import { useEffect, useState } from "react";

interface UseAutoplayOptions {
  count: number;
  /** Advance interval in ms. */
  interval?: number;
  /** Gate for section visibility / reduced motion — no cycling when false. */
  enabled: boolean;
}

export function useAutoplay({
  count,
  interval = 5000,
  enabled,
}: UseAutoplayOptions) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // setTimeout re-armed per index: manual selections reset the clock,
  // and cleanup keeps it StrictMode-safe.
  useEffect(() => {
    if (paused || !enabled || count <= 1) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearTimeout(t);
  }, [index, paused, enabled, count, interval]);

  // A manual selection pauses the loop until the viewer explicitly resumes.
  const select = (i: number) => {
    setIndex(i);
    setPaused(true);
  };

  const resume = () => setPaused(false);

  return { index, select, resume, paused, playing: enabled && !paused };
}
