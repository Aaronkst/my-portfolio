import { motion, useReducedMotion } from "motion/react";

import type { SectionInfo } from "@/data/types";
import { cn } from "@/lib/utils";

interface NavDockProps {
  sections: SectionInfo[];
  activeId: string;
}

function NavDock({ sections, activeId }: NavDockProps) {
  const reducedMotion = useReducedMotion();

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav
      aria-label="Sections"
      className="group fixed top-1/2 left-4 z-50 hidden -translate-y-1/2 md:block"
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
                    active ? "w-6 bg-foreground" : "w-3.5 bg-muted-foreground/50",
                  )}
                />
                <span
                  className={cn(
                    "block max-w-0 overflow-hidden text-left font-heading text-xs whitespace-nowrap transition-[max-width] duration-300 group-hover:max-w-24 group-focus-within:max-w-24",
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
    </nav>
  );
}

export { NavDock };
