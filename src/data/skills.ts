import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  { label: "Language", skills: ["TypeScript"] },
  {
    label: "Frameworks",
    skills: ["React", "Next", "Express", "Fastify", "NestJS", "Hono", "Node-RED"],
  },
  { label: "Database", skills: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB"] },
  {
    label: "Architecture",
    skills: [
      "Redis",
      "Monorepo",
      "Microservices",
      "Tenant Isolations",
      "Event Driven",
    ],
  },
  {
    label: "Notable Libraries",
    skills: [
      "ai-sdk",
      "React Flow",
      "prisma",
      "mongoose",
      "bullmq",
      "zustand",
      "react-moveable",
      "socket.io",
      "stripe",
    ],
  },
  { label: "Container", skills: ["Docker"] },
  {
    label: "Deployments",
    skills: ["AWS SST", "AWS Amplify", "AWS EC2", "Railway", "Render"],
  },
];
