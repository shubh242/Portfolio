export interface Project {
	title: string;
	description: string;
	logo: string;
	link: string;
	slug: string;
	tags?: string[];
}

export const projects: Project[] = [
	{
		title: "ClinicOps Copilot",
		description:
			"A real-time AI voice copilot for clinical incident reporting. Push-to-talk speech becomes intent over streaming WebSockets, while a RAG pipeline returns source-cited troubleshooting steps from device manuals and SOPs, auto-flagging safety hazards and escalations.",
		logo: "/logos/clinicops.png",
		link: "https://github.com/shubh242/clinicops-copilot",
		slug: "clinicops-copilot",
		tags: ["Amazon Bedrock", "RAG", "WebSockets", "Flask", "React"],
	},
	{
		title: "AgentForge",
		description:
			"A Slack-native incident-triage agent that compresses the frantic first ten minutes of an outage into a 30-second, fully-cited root-cause report, recent deploys, active alerts, and similar past incidents, via a planned multi-tool investigation over an MCP server.",
		logo: "/logos/agentforge.png",
		link: "https://github.com/shubh242/AgentForge",
		slug: "agentforge",
		tags: ["MCP", "FastAPI", "RAG", "Qdrant", "Slack"],
	},
	{
		title: "TaskFlow",
		description:
			"A fault-tolerant distributed job queue for reliable webhook delivery, the same shape as Stripe or GitHub outbound webhooks. Exponential-backoff retries, a dead-letter queue, per-customer partitioning, and idempotent workers give at-least-once delivery.",
		logo: "/logos/taskflow.png",
		link: "https://github.com/shubh242",
		slug: "taskflow",
		tags: ["Kafka", "Redis", "Kubernetes", "Prometheus", "Python"],
	},
	{
		title: "Concurrency Control as a Service",
		description:
			"An optimistic concurrency-control certifier in Go: it validates transaction read sets, detects read-write conflicts, assigns MVCC versions, and applies committed writes, with epoch-based batch certification to push throughput under contention.",
		logo: "/logos/ccaas.png",
		link: "https://github.com/shubh242",
		slug: "concurrency-control-as-a-service",
		tags: ["Go", "Distributed Systems", "MVCC", "Concurrency"],
	},
	{
		title: "LLM Brittleness Reproducibility",
		description:
			"A research pipeline measuring prompt brittleness in LLMs, how much predictions shift under small, meaning-preserving prompt edits, across NLI, sentiment, science QA, and synthetic RAG selection, reporting stability alongside raw accuracy.",
		logo: "/logos/llm-brittleness.png",
		link: "https://github.com/shubh242/LLM-Brittleness-Reproducibility",
		slug: "llm-brittleness",
		tags: ["LLM Evals", "Python", "Gemini", "Groq", "Research"],
	},
	{
		title: "Odonata",
		description:
			"A project, team, and employee management platform in Django, nested projects, a task auction system, peer shout-outs, weekly/monthly/yearly leaderboards, and an integrated points system with graphical analytics. Built with the HungoverDjango team.",
		logo: "/logos/odonata.png",
		link: "https://github.com/shubh242",
		slug: "odonata",
		tags: ["Django", "Python", "PostgreSQL"],
	},
];
