import { motion, type Variants } from "motion/react";
import {
  Axe,
  Coffee,
  Gamepad2,
  Joystick,
  Swords,
  Trophy,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading, SectionShell } from "@/components/section-shell";
import { Badge } from "@/components/ui/badge";
import { hobbyGroups } from "@/data/hobbies";

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const chip: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const icons: Record<string, LucideIcon> = {
  Warcraft: Swords,
  Football: Trophy,
  Vikings: Axe,
  Gaming: Gamepad2,
  "Unreal Engine Game Dev": Joystick,
  "Cafe Hopping": Coffee,
};

function Hobbies() {
  return (
    <SectionShell id="hobbies">
      <SectionHeading>Hobbies & Interests</SectionHeading>
      <div className="grid gap-8 md:grid-cols-2">
        {hobbyGroups.map((hobbyGroup) => (
          <motion.div
            key={hobbyGroup.label}
            variants={group}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="mb-3 font-heading text-sm text-muted-foreground">
              <span aria-hidden className="mr-2 text-primary">
                //
              </span>
              {hobbyGroup.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {hobbyGroup.items.map((item) => {
                const Icon = icons[item];
                return (
                  <motion.span key={item} variants={chip}>
                    <Badge variant="outline" className="h-6 px-2.5">
                      {Icon && <Icon data-icon="inline-start" />}
                      {item}
                    </Badge>
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

export { Hobbies };
