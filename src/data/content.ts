/** Marketing/pitch copy for the site. Factual resume data lives in resume.ts. */

export const pitch = {
  eyebrow: "Applied AI · Full-stack · Shipped in production",
  headline: "I build AI products people actually use.",
  subheadline:
    "Machine learning, agentic AI, and full-stack engineering — turning complex data into production systems serving thousands.",
};

export const philosophy = {
  kicker: "How I Work",
  title: "The right system starts with the right question.",
  intro:
    "I'm most useful when the opportunity is real but the shape of the solution isn't obvious yet.",
};

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Understand the problem",
    description:
      "Talk to the people who feel the pain before writing a line of code.",
  },
  {
    step: "02",
    title: "Prototype fast",
    description: "Get something real in front of users within days, not quarters.",
  },
  {
    step: "03",
    title: "Build for production",
    description:
      "Design for the infrastructure, security, and scale it will actually run at.",
  },
  {
    step: "04",
    title: "Ship and iterate",
    description: "Ship, measure, and keep tightening the loop.",
  },
];

export interface Capability {
  title: string;
  description: string;
  tags: string[];
}

export const capabilities: Capability[] = [
  {
    title: "Agentic AI Systems",
    description:
      "Multi-modal agents that read, reason, and act — production workflows that replace manual analysis at scale.",
    tags: ["LLMs", "Agentic workflows", "AIDLC", "Azure OpenAI", "Gemini"],
  },
  {
    title: "ML Platforms & Infrastructure",
    description:
      "Model discovery, training, and deployment infrastructure that lets whole orgs ship ML responsibly.",
    tags: ["MLOps", "Azure", "GCP", "AWS"],
  },
  {
    title: "Full-Stack Product",
    description:
      "From data pipeline to polished UI — I own the whole stack so nothing gets lost in translation.",
    tags: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    title: "Business Fluency",
    description:
      "Translating ambiguous needs into clear technical direction — comfortable in the boardroom and the codebase, sharpened by running my own business end to end.",
    tags: [
      "Stakeholder alignment",
      "Requirements gathering",
      "Executive communication",
      "P&L ownership",
    ],
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  {
    value: "$50M",
    label: "two-year investment behind a multi-team initiative I'm leading engineering for",
  },
  { value: "$2M+", label: "saved annually via an automated ad-analysis workflow" },
  { value: "1,500+", label: "active users on an internal AI knowledge platform" },
];

export const building = {
  kicker: "Also Building",
  title: "Owner, Someday Cards",
  description:
    "Built Someday Cards into a $1M+ revenue TCG business — sourcing, grading, and selling " +
    "trading cards at scale. Now beginning a new venture: a vendor-centric platform bringing " +
    "real-time, AI-driven market insights and pricing tools to inventory management.",
  tags: ["$1M+ revenue", "E-commerce", "Vendor platform", "AI-driven pricing"],
  link: "https://somedaycards.com",
  linkLabel: "Someday Cards",
};

export const contactCopy = {
  kicker: "Contact",
  title: "Let's build something.",
  lead: "Got a hard problem or a fuzzy idea? I like both.",
};
