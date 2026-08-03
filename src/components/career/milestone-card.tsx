import { motion } from "motion/react";
import { Building2, MapPin } from "lucide-react";

import type { Milestone } from "@/data/types";
import { cn } from "@/lib/utils";

interface MilestoneCardProps {
  milestone: Milestone;
  active: boolean;
  onSelect: () => void;
}

function MilestoneCard({ milestone, active, onSelect }: MilestoneCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={cn(
        "relative w-full grow cursor-pointer border bg-card p-4 text-left transition-colors",
        active
          ? "border-primary/60"
          : "border-border hover:border-muted-foreground/40",
      )}
    >
      <p className="flex items-center gap-1 font-heading text-xs text-muted-foreground">
        <MapPin className="size-3" />
        {milestone.location}
      </p>
      <div className="mt-3 flex items-center gap-2">
        {milestone.logo ? (
          <img
            src={milestone.logo}
            alt=""
            className="size-8 border border-border object-contain"
          />
        ) : (
          <span className="flex size-8 items-center justify-center border border-border text-muted-foreground">
            <Building2 className="size-4" />
          </span>
        )}
        <p className="font-heading text-sm font-medium">{milestone.company}</p>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">{milestone.industry}</p>
      <p className="mt-1 text-xs font-medium text-foreground">
        {milestone.role}
      </p>

      {active && (
        <motion.span
          layoutId="milestone-active"
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-0.5 bg-primary"
        />
      )}
    </button>
  );
}

export { MilestoneCard };
