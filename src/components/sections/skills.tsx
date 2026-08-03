import { motion, type Variants } from "motion/react";

import { SectionHeading, SectionShell } from "@/components/section-shell";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/data/skills";

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const chip: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

function Skills() {
  return (
    <SectionShell id="skills">
      <SectionHeading>Skills</SectionHeading>
      <div className="grid gap-8 md:grid-cols-2">
        {skillGroups.map((skillGroup) => (
          <motion.div
            key={skillGroup.label}
            variants={group}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="mb-3 font-heading text-sm text-muted-foreground">
              <span aria-hidden className="mr-2 text-primary">
                //
              </span>
              {skillGroup.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.skills.map((skill) => (
                <motion.span key={skill} variants={chip}>
                  <Badge variant="outline">{skill}</Badge>
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

export { Skills };
