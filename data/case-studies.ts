export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  repository: string;
  focus: string;
  sections: { title: string; paragraphs: string[] }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "agentforge",
    title: "AgentForge: evidence-driven incident investigation",
    summary: "An MCP-backed investigation engine that combines a planning loop, tools, and retrieval to help assemble incident context.",
    repository: "https://github.com/shubh242/AgentForge",
    focus: "Tool orchestration · Retrieval · Backend engineering",
    sections: [
      { title: "The problem", paragraphs: ["Incident investigation requires connecting information from different sources. A plausible explanation is not enough: the investigation needs supporting evidence that an engineer can inspect."] },
      { title: "How the implementation is structured", paragraphs: ["The Python backend uses FastAPI and Pydantic, with an MCP server exposing investigation tools. A ReAct-style planning loop coordinates model reasoning with tool calls.", "Retrieval uses Qdrant-backed vector search with keyword fallbacks. Incident postmortems, service ownership, and documentation provide context for an investigation. Parallel tool dispatch and deduplication support the multi-tool workflow."] },
      { title: "Engineering considerations", paragraphs: ["Tool orchestration and retrieval solve different problems. Tools fetch context; retrieval helps locate relevant prior evidence. Keeping those responsibilities explicit makes the investigation easier to inspect than a single opaque model response.", "Retrieved evidence can be incomplete or unrelated. A useful report should distinguish an observed fact from a hypothesis and preserve links to supporting sources. A cited explanation is not, by itself, a verified root cause."] },
      { title: "Evidence and current limits", paragraphs: ["The linked repository is the implementation reference. This overview describes its structure; it does not claim a measured reduction in incident-resolution time, production adoption, or independently validated root-cause accuracy.", "The project is an investigation engine rather than a hosted public demo. Review the source for the current tool definitions and provider configuration."] },
    ],
  },
  {
    slug: "llm-brittleness",
    title: "LLM brittleness: measuring stability beyond accuracy",
    summary: "A reproducible evaluation framework for testing how predictions change when the wording or presentation of a prompt changes.",
    repository: "https://github.com/shubh242/LLM-Brittleness-Reproducibility",
    focus: "Evaluation design · Reproducibility · Applied AI",
    sections: [
      { title: "The problem", paragraphs: ["A model can score well on one prompt and produce a different answer after a small edit. Single-prompt accuracy does not show whether the prediction is stable across alternate presentations of the same task."] },
      { title: "The evaluation pipeline", paragraphs: ["The framework covers natural-language inference with MNLI, sentiment classification with SST-2, science questions with ARC Easy, and a synthetic retrieval-selection task.", "It compares base prompts with template rewrites, paraphrases, token-level formatting edits, and persona or user-profile context. These perturbation families are tracked separately rather than assumed to have identical effects."] },
      { title: "What gets measured", paragraphs: ["Outputs include base accuracy, consistency, sensitivity, flip rate, and parse-failure rate. Retrieval experiments also examine how changing the presented evidence affects the selected answer.", "Per-run JSONL records, aggregate CSVs, and charts make it possible to inspect individual responses as well as summary metrics. Run-specific results are preferable to presenting one unexplained score as a universal property of a model."] },
      { title: "Interpretation and limitations", paragraphs: ["A stable model can be consistently wrong; accuracy and consistency need to be read together. Formatting failures should also be separated from incorrect predictions.", "Results depend on the dataset, prompt family, provider, and model version. The repository is the source for running the experiments; this overview does not report an independently reproduced benchmark or a general model ranking."] },
    ],
  },
];
