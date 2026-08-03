import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function SectionShell({
  id,
  className,
  children,
  ...props
}: ComponentProps<"section"> & { id: string }) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-svh snap-start flex-col justify-center px-6 py-20 md:px-16 lg:px-24",
        className,
      )}
      {...props}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-10 font-heading text-2xl font-medium tracking-tight md:text-3xl">
      <span aria-hidden className="mr-3 text-primary">
        ##
      </span>
      {children}
    </h2>
  );
}

export { SectionShell, SectionHeading };
