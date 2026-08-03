import { motion, type Variants } from "motion/react";

import { SectionShell } from "@/components/section-shell";
import { site } from "@/data/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Hero() {
  return (
    <SectionShell id="hero">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          variants={item}
          className="mb-4 font-heading text-sm text-primary"
        >
          $ whoami
        </motion.p>
        <motion.h1
          variants={item}
          className="font-heading text-5xl font-medium tracking-tight md:text-7xl"
        >
          {site.name}
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-3 font-heading text-sm text-muted-foreground"
        >
          <span aria-hidden className="text-primary">
            //{" "}
          </span>
          aka {site.nickname}
        </motion.p>
        <motion.p
          variants={item}
          className="mt-4 font-heading text-lg text-primary md:text-xl"
        >
          {site.title}
        </motion.p>
        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-sm/relaxed text-muted-foreground md:text-base/relaxed"
        >
          {site.bio}
        </motion.p>
        <motion.p
          variants={item}
          aria-hidden
          className="mt-16 font-heading text-xs text-muted-foreground"
        >
          scroll to explore{" "}
          <motion.span
            className="inline-block"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.p>
      </motion.div>
    </SectionShell>
  );
}

export { Hero };
