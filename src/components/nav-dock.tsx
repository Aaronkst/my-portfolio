import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import type { SectionInfo } from "@/data/types";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

const FLASH_DURATION = 2500;

interface NavDockProps {
  sections: SectionInfo[];
  activeId: string;
}

function NavDock({ sections, activeId }: NavDockProps) {
  const reducedMotion = useReducedMotion();
  // Persistent on desktop; on smaller screens the dock flashes in on
  // section change so it never permanently covers content.
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [flash, setFlash] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (isDesktop) return;
    setFlash(true);
    const t = setTimeout(() => setFlash(false), FLASH_DURATION);
    return () => clearTimeout(t);
  }, [activeId, isDesktop]);

  const visible = isDesktop || flash;

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          aria-label="Sections"
          initial={{ opacity: 0, x: -12, y: "-50%" }}
          animate={{ opacity: 1, x: 0, y: "-50%" }}
          exit={{ opacity: 0, x: -12, y: "-50%" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group fixed top-1/2 left-4 z-50"
        >
          <ul className="flex flex-col border border-border/50 bg-background/40 p-1.5 shadow-lg backdrop-blur-md">
            {sections.map((section) => {
              const active = section.id === activeId;
              return (
                <li key={section.id} className="relative">
                  {active && (
                    <motion.div
                      layoutId="dock-active"
                      className="absolute inset-0 bg-muted/80"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <button
                    type="button"
                    aria-current={active ? "true" : undefined}
                    onClick={() => scrollTo(section.id)}
                    className="relative flex h-8 w-full cursor-pointer items-center gap-2 px-2"
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "h-0.5 shrink-0 transition-all duration-300",
                        active
                          ? "w-6 bg-foreground"
                          : "w-3.5 bg-muted-foreground/50",
                      )}
                    />
                    <span
                      className={cn(
                        "block overflow-hidden text-left font-heading text-xs whitespace-nowrap transition-[max-width] duration-300",
                        // Transient (flash) dock shows labels expanded so the
                        // current section is readable at a glance.
                        isDesktop
                          ? "max-w-0 group-focus-within:max-w-24 group-hover:max-w-24"
                          : "max-w-24",
                        active ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {section.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export { NavDock };
