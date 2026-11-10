import type { Project } from "@/types";
export type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "AgentForge",
    description: "An incident-triage engine that brings tool-driven investigation and retrieved evidence together, using an MCP server and a ReAct planning loop.",
    logo: "/logos/agentforge.png",
    link: "https://github.com/shubh242/AgentForge",
    slug: "agentforge",
    caseStudy: "/projects/agentforge",
    tags: ["Python", "FastAPI", "MCP", "Qdrant"],
  },
  {
    title: "LLM Brittleness Reproducibility",
    description: "An evaluation framework that tests how small prompt changes affect model predictions—measuring consistency and flip rates alongside accuracy.",
    logo: "/logos/llm-brittleness.png",
    link: "https://github.com/shubh242/LLM-Brittleness-Reproducibility",
    slug: "llm-brittleness",
    caseStudy: "/projects/llm-brittleness",
    tags: ["Python", "LLM Evaluation", "Research"],
  },
  {
    title: "ClinicOps Copilot",
    description: "A voice-copilot prototype for clinical incident reporting, combining streaming speech with source-cited retrieval from device manuals and operating procedures.",
    logo: "/logos/clinicops.png",
    link: "https://github.com/shubh242/clinicops-copilot",
    slug: "clinicops-copilot",
    tags: ["Amazon Bedrock", "RAG", "WebSockets", "Flask"],
  },
  {
    title: "TaskFlow",
    description: "A distributed webhook-delivery queue with exponential-backoff retries, a dead-letter queue, per-customer partitioning, and idempotent workers.",
    logo: "/logos/taskflow.png",
    link: "https://github.com/shubh242",
    slug: "taskflow",
    tags: ["Kafka", "Redis", "Kubernetes", "Python"],
  },
  {
    title: "Concurrency Control as a Service",
    description: "An optimistic concurrency-control certifier in Go, with read-set validation, conflict detection, MVCC versions, and epoch-based batch certification.",
    logo: "/logos/ccaas.png",
    link: "https://github.com/shubh242",
    slug: "concurrency-control-as-a-service",
    tags: ["Go", "Distributed Systems", "MVCC"],
  },
  {
    title: "Odonata",
    description: "A Django project and team-management platform with task auctions, peer recognition, and points-based analytics. Built with the HungoverDjango team.",
    logo: "/logos/odonata.png",
    link: "https://github.com/shubh242",
    slug: "odonata",
    tags: ["Django", "Python", "PostgreSQL"],
  },
];
