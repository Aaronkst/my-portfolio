import { useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

import { MilestoneDetail } from "@/components/career/milestone-detail";
import { MilestoneTimeline } from "@/components/career/milestone-timeline";
import { SectionHeading, SectionShell } from "@/components/section-shell";
import { milestones } from "@/data/milestones";
import { useAutoplay } from "@/hooks/use-autoplay";

const AUTOPLAY_INTERVAL = 4000;
const CAREER_START_YEAR = 2019;
const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;

function Career() {
  const contentRef = useRef<HTMLDivElement>(null);
  const inView = useInView(contentRef, { amount: 0.3 });
  const reducedMotion = useReducedMotion();

  const { index, select, resume, paused, playing } = useAutoplay({
    count: milestones.length,
    interval: AUTOPLAY_INTERVAL,
    enabled: inView && !reducedMotion,
  });

  return (
    <SectionShell id="career">
      <div ref={contentRef}>
        <SectionHeading>Career</SectionHeading>
        <p className="-mt-6 mb-8 font-heading text-sm text-muted-foreground">
          <span aria-hidden className="text-primary">
            //{" "}
          </span>
          {yearsOfExperience}+ years of experience as a software engineer
        </p>
        <MilestoneTimeline
          milestones={milestones}
          activeIndex={index}
          onSelect={select}
        />
        <MilestoneDetail
          milestone={milestones[index]}
          playing={playing}
          paused={paused}
          interval={AUTOPLAY_INTERVAL}
          onResume={resume}
        />
      </div>
    </SectionShell>
  );
}

export { Career };
