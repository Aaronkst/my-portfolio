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
    <div className="md:overflow-x-auto md:pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {/* md+: w-max sizes to the cards when they overflow (horizontal scroll),
          min-w-full stretches them to fill the row — the track spans either way.
          Mobile: a plain full-width column with a vertical track. */}
      <div className="relative w-full md:w-max md:min-w-full">
        <div
          aria-hidden
          className="absolute inset-x-0 top-1.5 hidden h-px bg-border md:block"
        />
        <div
          aria-hidden
          className="absolute top-1.5 bottom-1.5 left-[5.5px] w-px bg-border md:hidden"
        />
        <div
          className="flex flex-col gap-6 md:flex-row md:gap-4"
          role="tablist"
          aria-label="Career milestones"
        >
          {milestones.map((milestone, i) => (
            <div
              key={milestone.id}
              className="relative flex flex-col items-start pl-7 md:w-56 md:grow md:pl-0"
            >
              <div className="mb-3 flex items-center gap-2 md:mb-4">
                <span
                  aria-hidden
                  className={cn(
                    "absolute top-0.5 left-0 size-3 border transition-colors duration-300 md:static",
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
