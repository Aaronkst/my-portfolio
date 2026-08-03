import { useEffect, useState } from "react";

/**
 * Tracks which section currently crosses the vertical center of the viewport.
 * The IntersectionObserver band is only the change-detector; the active id is
 * always computed from real geometry. (A zero-height -50% rootMargin line
 * silently drops crossing events in Chrome, so don't "optimize" back to it.)
 */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const compute = () => {
      const centerY = window.innerHeight / 2;
      for (const id of ids) {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        if (rect && rect.top <= centerY && rect.bottom > centerY) {
          setActiveId(id);
          return;
        }
      }
    };

    const observer = new IntersectionObserver(compute, {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    });

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    compute();
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
