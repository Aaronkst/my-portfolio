import type { Project } from "./types";

import atriumShot from "@/assets/work-screenshots/atrium-screenshot.webp";
import emiradyShot from "@/assets/work-screenshots/emirady-design-screenshot.webp";
import enterpretShot from "@/assets/work-screenshots/enterpret-screenshot.webp";
import luxeAuraShot from "@/assets/work-screenshots/luxe-aura-screenshot.webp";
import m3Shot from "@/assets/work-screenshots/m3-screenshot.webp";

export const projects: Project[] = [
  {
    id: "emirady-design-system",
    title: "Emirady Design System",
    description:
      "A reusable shadcn design registry for Emirady (www.emirady.com).",
    tags: ["Next", "CSS"],
    link: "https://emirady-design-registry.vercel.app/",
    image: emiradyShot,
  },
  {
    id: "luxe-aura",
    title: "Luxe Aura",
    description:
      "A compact e-commerce website for a small luxury brand online shop — no payment integrations; ordering delegates to manual contact by the store owner.",
    tags: ["Vite", "Express", "Monorepo"],
    link: "https://www.luxe-aura.shop/",
    image: luxeAuraShot,
  },
  {
    id: "enterpret",
    title: "Enterpret",
    description:
      "A work-in-progress hobby project in UAT stage — an advanced ERD designing tool with realtime code generation and AI editing capabilities.",
    tags: ["Fastify", "Next", "ReactFlow", "Rust"],
    link: "https://uat.enterpret.io/",
    image: enterpretShot,
  },
  {
    id: "m3",
    title: "M3",
    description:
      "A work-in-progress e-commerce platform with multi-merchant support.",
    tags: ["NestJS", "GraphQL", "Next"],
    link: "https://m3-client-staging.up.railway.app/",
    image: m3Shot,
  },
  {
    id: "flowcxp",
    title: "FlowCXP",
    description:
      "Contribution to a ticketing system platform with multi-tenant isolation. Built the Atrium Message feature connecting Facebook Messenger as a customer ticket intake source, and helped develop the headless live chat widget for customer support chat.",
    tags: ["Multi-tenant", "Messenger", "Live Chat"],
    link: "https://www.flowcxp.com/",
    image: atriumShot,
  },
];
