import type { Milestone } from "./types";

export const milestones: Milestone[] = [
  {
    id: "blife",
    company: "BLife",
    period: "2019 — 2020",
    location: "Myanmar",
    industry: "Fintech",
    role: "Fullstack Engineer",
    copy: "Owned a Node.js-powered social chatbot product that communicates with the core banking API to provide easy bill payments and top-up services via social media chat platforms.",
    projects: [
      {
        name: "Viber Chatbot",
        description: "Bill payments and top-ups over Viber, backed by the core banking API.",
      },
      {
        name: "Messenger Chatbot",
        description: "The same payment experience delivered through Facebook Messenger.",
      },
      {
        name: "Internal Reconciliation Tools",
        description: "Back-office tooling to reconcile chatbot transactions against the bank.",
      },
      {
        name: "Webviews & Financial Reports",
        description: "jQuery web app powering in-chat webviews and financial reporting.",
      },
    ],
  },
  {
    id: "aya",
    company: "Aya Innovation Labs",
    period: "2020 — 2022",
    location: "Myanmar",
    industry: "Banking",
    role: "Fullstack Engineer",
    copy: "Owned the third-party relations platform, onboarding payment partners and merchants onto the AYA PAY digital wallet APIs for integration into partner websites and apps.",
    projects: [
      {
        name: "WSO2 API Gateway",
        description: "API exposure and management for partner integrations via WSO2.",
      },
      {
        name: "AYA PAY Microservices",
        description: "Digital wallet microservices — APIs and React apps.",
      },
      {
        name: "Electricity Bill Payments",
        description: "Large Excel uploads and imports, queued with Bull for performance.",
      },
      {
        name: "BNPL Backend",
        description: "Owner of the Buy Now Pay Later backend.",
      },
      {
        name: "Node-RED Integrations",
        description: "Rapid API development for quick go-lives and easy third-party integrations.",
      },
    ],
  },
  {
    id: "xinc",
    company: "X Inc",
    period: "2022 — Now",
    location: "Japan",
    industry: "AI",
    role: "Senior Fullstack Engineer",
    copy: "Leads the core team that actively develops and maintains WriteVideo — an AI-powered text-to-video product.",
    projects: [
      {
        name: "AI Media Generation",
        description: "AI generation for video scripts, animations, images, and media.",
      },
      {
        name: "Editable 2D Canvas",
        description: "react-moveable powered canvas for attractive screen flows.",
      },
      {
        name: "Interactive Objects",
        description: "Form surveys and an AI chat window that pop up during playback.",
      },
      {
        name: "Analytics Dashboard",
        description: "Video and creator performance insights.",
      },
      {
        name: "Layouts & Content Library CMS",
        description: "Reusable layouts and a shared content library.",
      },
      {
        name: "Recordings & Transcriptions",
        description: "Screen/audio recording with transcription for rich content creation.",
      },
      {
        name: "Script Variable System",
        description: "Variables in the script editor for reusable, advanced storywriting.",
      },
    ],
  },
];
