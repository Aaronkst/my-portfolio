import { cn } from "@/lib/utils";
import type { Milestone } from "@/data/types";

import { MilestoneCard } from "./milestone-card";

interface MilestoneTimelineProps {
  milestones: Milestone[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

function MilestoneTimeline({
  milestones,
  activeIndex,
  onSelect,
}: MilestoneTimelineProps) {
  return (
    <div className="overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {/* w-max sizes to the cards when they overflow (mobile scroll), min-w-full
          stretches them to fill the row on desktop — the track spans either way. */}
      <div className="relative w-max min-w-full">
        <div aria-hidden className="absolute inset-x-0 top-1.5 h-px bg-border" />
        <div
          className="flex gap-4"
          role="tablist"
          aria-label="Career milestones"
        >
          {milestones.map((milestone, i) => (
            <div
              key={milestone.id}
              className="flex w-56 shrink-0 grow flex-col items-start"
            >
              <div className="relative mb-4 flex items-center gap-2">
                <span
                  aria-hidden
                  className={cn(
                    "size-3 border transition-colors duration-300",
                    i === activeIndex
                      ? "border-primary bg-primary"
                      : "border-border bg-background",
                  )}
                />
                <span
                  className={cn(
                    "bg-background px-1 font-heading text-xs transition-colors duration-300",
                    i === activeIndex ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {milestone.period}
                </span>
              </div>
              <MilestoneCard
                milestone={milestone}
                active={i === activeIndex}
                onSelect={() => onSelect(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { MilestoneTimeline };
