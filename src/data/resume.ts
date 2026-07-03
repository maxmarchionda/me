/** Typed resume data, extracted from docs/Max_Marchionda_Resume.pdf. */

export interface RoleStep {
  title: string;
  period: string;
}

export interface Experience {
  company: string;
  location: string;
  headline: string;
  period: string;
  progression: RoleStep[];
  highlights: string[];
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface Education {
  degrees: string[];
  school: string;
  location: string;
  period: string;
  gpa: string;
}

export const identity = {
  name: "Max Marchionda",
  title: "Sr. Principal Software Engineer — Machine Learning",
  location: "Minneapolis, MN",
  email: "maxmarchionda@gmail.com",
  phone: "(608) 498-5604",
  resumePdf: "/Max_Marchionda_Resume.pdf",
  links: {
    github: "https://github.com/maxmarchionda",
    // TODO: confirm LinkedIn URL
    linkedin: "https://www.linkedin.com/in/maxmarchionda",
  },
};

export const experience: Experience[] = [
  {
    company: "Optum (UnitedHealth Group)",
    location: "Minneapolis, MN",
    headline: "Sr. Principal Software Engineer — Machine Learning",
    period: "June 2017 – Present",
    progression: [
      { title: "Sr. Principal Software Engineer", period: "Feb 2024 – Present" },
      { title: "Principal Software Engineer", period: "July 2022 – Feb 2024" },
      { title: "Senior Software Engineer", period: "Feb 2021 – July 2022" },
      { title: "Software Engineer II", period: "June 2019 – Feb 2021" },
      { title: "Data Scientist II", period: "June 2018 – June 2019" },
      { title: "Data Scientist", period: "June 2017 – June 2018" },
    ],
    highlights: [
      "Led and built an AI-powered benefits planning application that leverages machine learning to optimize health benefit configurations, surfacing recommendations through a complex business logic grid evaluated on both a plan and market basis — enabling more strategic, data-driven benefit decision-making at scale.",
      "Designed and led development of a custom web application that processes competitor ad data using a multi-modal agentic AI workflow, analyzing thousands of ads monthly to automatically surface unique insights — saving over $2M in annual operational costs.",
      "Architected and built an internal AI-powered chat experience enabling employees to query 25,000+ developer and data documentation pages, supporting 1,500+ active users and streamlining access to critical technical knowledge.",
      "Led a cross-functional team in designing and deploying a model discovery and consumption platform at UHG, accelerating AI adoption across 15+ business units and enabling tracking of 450+ AI projects through the full ML lifecycle.",
      "Contributed to the design and implementation of a scalable enterprise ML development platform, optimizing model development workflows and infrastructure for production-grade deployment.",
      "Developed and deployed end-to-end training and scoring pipelines for predicting 20+ chronic and acute conditions (including Atrial Fibrillation and Diabetes) using healthcare claims and clinical data.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Cloud Platforms",
    skills: [
      "Google Cloud Platform (GCP)",
      "Microsoft Azure",
      "AWS Lambda",
      "API Gateway",
      "S3",
      "Route 53",
      "CloudFront",
    ],
  },
  {
    label: "AI & Machine Learning",
    skills: [
      "Large Language Models (LLMs)",
      "Agentic AI Workflows",
      "Python",
      "Azure AI Search",
      "Azure OpenAI",
      "Gemini",
      "ChatGPT",
      "ADA v2",
    ],
  },
  {
    label: "Full-Stack Development",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "Figma"],
  },
  {
    label: "E-Commerce & Marketing",
    skills: [
      "Shopify",
      "Third-party marketing integrations",
      "Targeted advertising",
      "Customer retention tooling",
    ],
  },
];

export const education: Education = {
  degrees: ["B.S. Computer Science", "B.S. Chemistry"],
  school: "University of Minnesota",
  location: "Minneapolis, MN",
  period: "Sept 2012 – May 2017",
  gpa: "3.40",
};
