import { motion, type Variants } from "motion/react";
import { ArrowUpRight, Lock } from "lucide-react";

import { SectionHeading, SectionShell } from "@/components/section-shell";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cell: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function projectDomain(link: string) {
  try {
    return new URL(link).hostname;
  } catch {
    return link;
  }
}

function Works() {
  return (
    <SectionShell id="works">
      <SectionHeading>Works</SectionHeading>
      <motion.div
        className="grid gap-4 md:grid-cols-3"
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={cell}>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group/work block h-full outline-none"
            >
              <Card className="h-full pt-0 transition-all group-hover/work:ring-primary/40 group-focus-visible/work:ring-primary/60">
                {/* mock browser chrome */}
                <div className="border-b border-border">
                  <div className="flex items-center gap-1.5 border-b border-border/60 bg-muted/30 px-3 py-2">
                    <span aria-hidden className="flex gap-1.5">
                      <span className="size-2 rounded-full bg-muted-foreground/40" />
                      <span className="size-2 rounded-full bg-muted-foreground/25" />
                      <span className="size-2 rounded-full bg-muted-foreground/25" />
                    </span>
                    <span className="ml-1.5 flex min-w-0 flex-1 items-center gap-1.5 border border-border/60 bg-background/60 px-2 py-1">
                      <Lock className="size-3 shrink-0 text-primary" />
                      <span className="truncate font-heading text-[11px] text-muted-foreground transition-colors group-hover/work:text-foreground">
                        {project.link ? projectDomain(project.link) : "localhost:3000"}
                      </span>
                    </span>
                  </div>
                  <div
                    aria-hidden
                    className="flex h-32 items-center justify-center bg-muted/40 font-heading text-xs text-muted-foreground"
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt=""
                        className="size-full object-cover"
                      />
                    ) : (
                      "<screenshot />"
                    )}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-1">
                    {project.title}
                    <ArrowUpRight className="size-3.5 text-muted-foreground transition-all group-hover/work:translate-x-0.5 group-hover/work:-translate-y-0.5 group-hover/work:text-primary" />
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}

export { Works };
