import { AnimatePresence, motion } from "motion/react";
import { Play } from "lucide-react";

import type { Milestone } from "@/data/types";

interface MilestoneDetailProps {
  milestone: Milestone;
  /** Autoplay progress rail runs only while the loop is live. */
  playing: boolean;
  /** True after a manual selection — shows the resume control. */
  paused: boolean;
  interval: number;
  onResume: () => void;
}

function MilestoneDetail({
  milestone,
  playing,
  paused,
  interval,
  onResume,
}: MilestoneDetailProps) {
  return (
    // Fixed height so autoplay transitions never shift the page layout;
    // longer content scrolls inside the panel.
    <div className="relative mt-8 flex h-[30rem] flex-col border border-border bg-card/50 md:h-[26rem]">
      <div aria-hidden className="h-0.5 shrink-0 bg-border/40">
        {playing && (
          <motion.div
            key={milestone.id}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: interval / 1000, ease: "linear" }}
            className="h-full origin-left bg-primary"
          />
        )}
      </div>

      {paused && (
        <button
          type="button"
          onClick={onResume}
          className="absolute top-4 right-4 z-10 flex cursor-pointer items-center gap-1.5 border border-border/60 bg-background/60 px-2 py-1 font-heading text-xs text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-foreground"
        >
          <Play className="size-3" />
          resume autoplay
        </button>
      )}

      <div className="min-h-0 flex-1 overflow-y-auto p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <p className="font-heading text-sm text-primary">
              {milestone.role} · {milestone.company}
            </p>
            <p className="mt-3 max-w-2xl text-sm/relaxed text-muted-foreground">
              {milestone.copy}
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {milestone.projects.map((project) => (
                <div key={project.name} className="border border-border/60 p-3">
                  <p className="font-heading text-xs font-medium">
                    {project.name}
                  </p>
                  <p className="mt-1 text-xs/relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export { MilestoneDetail };
