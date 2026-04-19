const portfolioData = {
  heroSummary:
    "I build AI systems that reduce manual effort in real-world settings.",
  focusAreas: [
    "Building evaluation-driven, practical AI systems.",
    "Turning LLM prototypes that integrate into existing workflows.",
    "Designing automation workflows that reduce manual work.",
    "Working with noisy data, evolving requirements, and delivery constraints.",
    "Prioritizing measurable impact, usability, and long-term maintainability.",
    "Building systems that are reliable in practice."
  ],
  summary: [
    "I am an AI engineer with a background in data science, focused on building systems that work in real-world environments. My experience spans LLM workflows, machine learning models, and data pipelines.",
    "I build complete systems, from understanding requirements and defining problems to preparing data, evaluating performance, and iterating based on feedback. I am comfortable working in evolving environments and turning ideas into practical solutions.",
    "I combine strong engineering discipline with continuous learning. I prioritize clean code, reproducible workflows, and clear documentation, while staying current with developments in LLMs and agent-based systems."
  ],
  actions: {
    email: "mailto:sanath.vh@gmail.com",
    github: "https://github.com/sanath95",
    linkedin: "https://www.linkedin.com/in/sanath-haritsa-974686315/",
    resume: "assets/Sanath Vijay Haritsa - CV 01042026_compressed.pdf",
    transcripts: [
      {
        label: "Academic Transcript",
        href: "assets/Sanath Vijay Haritsa - Transcript of Records.pdf"
      },
      {
        label: "Leistungsuebersicht",
        href: "assets/Sanath Vijay Haritsa - Leistungsuebersicht.pdf"
      }
    ]
  },
  projects: [
    {
      title: "Portfolio Chatbot",
      subtitle: "Agentic RAG system",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/sanath95/Portfolio-Chatbot"
        }
      ],
      tags: ["RAG", "Agents", "Embeddings", "Observability"],
      problem:
        "Static portfolios are hard to explore and do not support interactive information retrieval.",
      solution:
        "Built an agent-based RAG chatbot to answer questions about a candidate profile, combining embeddings, structured context, conversation memory, and response-quality monitoring.",
      impact:
        "Turned a passive portfolio into an interactive retrieval experience while demonstrating a practical agent workflow end to end."
    },
    {
      title: "LLM Evaluation Without Ground Truth",
      subtitle: "Semantic relevance evaluation",
      links: [],
      tags: ["LLM Evaluation", "Embeddings", "Cosine Similarity", "Benchmarking"],
      problem:
        "Evaluating LLM outputs is difficult when no single correct answer exists.",
      solution:
        "Built a retrieval-based evaluation approach using embeddings and cosine similarity to compare generated answers with relevant context and rank model outputs.",
      impact:
        "Created a scalable way to compare model quality without relying on expensive manual labeling."
    },
    {
      title: "Layout-Aware Metadata Extraction Framework",
      subtitle: "Master's thesis",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/sanath95/Layout-Aware-Metadata-Extraction-Framework"
        }
      ],
      tags: ["Small LLMs", "PDF Parsing", "Document AI", "Evaluation"],
      problem:
        "Metadata extraction from academic PDFs is unreliable because layout patterns vary heavily across documents.",
      solution:
        "Built a metadata extraction pipeline using small language models and compared it against traditional layout-aware parsing methods on variable document structures.",
      impact:
        "Showed that small LLMs can outperform traditional parsers on complex layouts while improving robustness across diverse academic PDFs."
    },
    {
      title: "VBA Codebase Analysis System",
      subtitle: "Legacy migration support",
      links: [],
      tags: ["Code Analysis", "Documentation", "LLMs", "Human-in-the-Loop"],
      problem:
        "Large VBA codebases of 5k to 50k lines were difficult to understand during migration projects.",
      solution:
        "Built a system to parse legacy macro code, generate structured documentation, and iteratively refine explanations using human evaluation.",
      impact:
        "Reduced the time developers needed to understand legacy systems and improved documentation quality for migration work."
    },
    {
      title: "Automation Workflows",
      subtitle: "n8n plus custom nodes",
      links: [],
      tags: ["n8n", "Automation", "PDF Processing", "Workflow Design"],
      problem:
        "Manual document handling and content workflows created unnecessary repetitive effort.",
      solution:
        "Built automation pipelines for content generation and data extraction, including custom nodes for PDF processing and integrations with existing tools.",
      impact:
        "Reduced repetitive manual work and enabled scalable handling of unstructured document-heavy workflows."
    },
    {
      title: "Responsible AI Healthcare Prediction System",
      subtitle: "Fairness and explainability",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/sanath95/Responsible-AI"
        }
      ],
      tags: ["Responsible AI", "SHAP", "Fairness", "Healthcare ML"],
      problem:
        "Healthcare ML systems require transparency and fairness, not just predictive accuracy.",
      solution:
        "Built a prediction pipeline with explainability methods, evaluated fairness-performance trade-offs, and used SHAP to surface model reasoning.",
      impact:
        "Improved decision transparency and highlighted the trade-offs involved in deploying fairer predictive systems."
    }
  ],
  experience: [
    {
      role: "AI Engineer (Working Student)",
      company: "Schwarz IT",
      period: "Recent Experience",
      intro:
        "Built practical LLM workflows and evaluation systems aimed at reducing manual QA effort and making AI outputs more dependable.",
      highlights: [
        "Built multi-step LLM workflows for product data validation, improving consistency and reducing manual QA effort.",
        "Designed evaluation pipelines using MLflow and Databricks to track precision, recall, and F1-score.",
        "Developed LLM-as-a-judge frameworks aligned with human feedback.",
        "Built agent-based tools with a Gradio UI for user interaction.",
        "Created automation workflows using n8n for content generation and data extraction.",
        "Developed PDF information extraction pipelines to structure unstructured data.",
        "Evaluated no-code AI platforms using KPI-based frameworks.",
        "Improved onboarding efficiency through structured documentation and guides."
      ]
    },
    {
      role: "Data Scientist",
      company: "Nichesolv",
      period: "Previous Experience",
      intro:
        "Worked across computer vision, time-series modeling, explainability, and industrial analytics with a strong emphasis on applied problem-solving.",
      highlights: [
        "Built computer vision systems for tennis analytics, reducing manual video analysis.",
        "Developed time-series models for pump failure prediction.",
        "Identified semiconductor defect root causes using machine learning and statistical analysis.",
        "Built an ML-based engine health dashboard with SHAP-based interpretability.",
        "Evaluated explainability techniques such as SHAP and LIME.",
        "Developed reusable ML tools for clustering and preprocessing."
      ]
    }
  ],
  education: {
    degree: "M.Sc. Applied Data Science and Analytics",
    institution: "SRH Hochschule Heidelberg",
    summary:
      "Strong foundation in machine learning, deep learning, data engineering, NLP, and real-world evaluation practices.",
    bullets: [
      "Built end-to-end data pipelines from data processing through evaluation.",
      "Applied NLP and text mining to practical problems.",
      "Focused on evaluation, error analysis, and system reliability."
    ],
    thesisTitle: "Layout-Aware Metadata Extraction Framework",
    thesisSummary:
      "Built a metadata extraction system for academic PDFs and demonstrated that small language models can outperform traditional parsing approaches on complex layouts.",
    transcripts: [
      {
        title: "Academic Transcript",
        description: "Primary academic transcript for degree work and course performance.",
        href: "assets/Sanath Vijay Haritsa - Transcript of Records.pdf"
      },
      {
        title: "Leistungsuebersicht",
        description: "Supporting academic record with detailed course-level information.",
        href: "assets/Sanath Vijay Haritsa - Leistungsuebersicht.pdf"
      }
    ]
  },
  certifications: [
    {
      title: "NVIDIA Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      type: "pdf",
      href: "assets/Sanath Vijay Haritsa - NVIDIA Fundamentals of Deep Learning.pdf",
      description:
        "Foundational training in deep learning concepts and modern model-building workflows."
    },
    {
      title: "Hugging Face Agents Course",
      issuer: "Hugging Face",
      type: "image",
      href: "assets/Sanath Vijay Haritsa - Hugging Face Agents Course.png",
      image: "assets/Sanath Vijay Haritsa - Hugging Face Agents Course.png",
      description:
        "Hands-on learning focused on agent patterns, tool use, and practical orchestration for modern AI systems."
    }
  ],
  skills: [
    {
      title: "Programming",
      items: ["Python", "R", "SQL"]
    },
    {
      title: "AI / ML",
      items: ["Machine Learning", "NLP", "Computer Vision", "Time Series"]
    },
    {
      title: "Generative AI",
      items: ["LLMs", "Prompt Engineering", "RAG", "Agent Workflows"]
    },
    {
      title: "Frameworks & Tools",
      items: ["FastAPI", "LangChain", "LangGraph", "HuggingFace", "n8n"]
    },
    {
      title: "MLOps & DevOps",
      items: ["MLflow", "CI/CD", "Docker", "Git"]
    },
    {
      title: "Cloud",
      items: ["Google Cloud Platform", "Microsoft Azure"]
    }
  ],
  workPrinciples: [
    "Start with problem definition, not tools.",
    "Define evaluation early and iterate based on results.",
    "Focus on simple, reliable solutions.",
    "Write clean, maintainable code and document clearly.",
    "Build systems that are usable in practice."
  ],
  softSkills: [
    "Strong ownership and accountability for end-to-end delivery.",
    "Clear communication across technical and non-technical stakeholders.",
    "Collaborative in cross-functional teams.",
    "Structured and methodical problem-solving approach.",
    "Adaptable and resilient in ambiguous environments.",
    "Strong documentation and knowledge-sharing practices."
  ],
  contact: {
    summary:
      "I'm interested in AI engineering roles where evaluation, reliability, and practical workflow impact matter. If you're building real AI systems and need someone who can turn ideas into usable tools, I'd be glad to connect.",
    items: [
      {
        label: "Email",
        value: "sanath.vh@gmail.com",
        href: "mailto:sanath.vh@gmail.com"
      },
      {
        label: "Phone",
        value: "+49 17648994438",
        href: "tel:+4917648994438"
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/sanath-haritsa-974686315",
        href: "https://www.linkedin.com/in/sanath-haritsa-974686315/"
      },
      {
        label: "GitHub",
        value: "github.com/sanath95",
        href: "https://github.com/sanath95"
      }
    ]
  }
};

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
};

const appendParagraphs = (id, paragraphs) => {
  const container = document.getElementById(id);
  if (!container) {
    return;
  }

  paragraphs.forEach((paragraph, index) => {
    const node = document.createElement("p");
    node.textContent = paragraph;
    node.className = `reveal-on-load reveal-delay-${Math.min(index, 3)}`;
    container.appendChild(node);
  });
};

const renderList = (id, items) => {
  const container = document.getElementById(id);
  if (!container) {
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
};

const createLink = (href, label, className = "") => {
  const link = document.createElement("a");
  link.href = href;
  link.textContent = label;
  if (className) {
    link.className = className;
  }
  const external = /^https?:\/\//.test(href);
  const documentAsset = /^assets\/.+\.(pdf|png|jpg|jpeg)$/i.test(href);
  if (external || documentAsset) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  return link;
};

const renderHeroActions = () => {
  const container = document.getElementById("hero-actions");
  if (!container) {
    return;
  }

  const viewGroup = document.createElement("div");
  viewGroup.className = "hero-action-group";

  const viewLabel = document.createElement("p");
  viewLabel.className = "hero-action-label";
  viewLabel.textContent = "Documents";

  const viewRow = document.createElement("div");
  viewRow.className = "hero-action-row";
  viewRow.append(
    createLink(portfolioData.actions.resume, "Resume", "document-button"),
    createLink(
      portfolioData.actions.transcripts[0].href,
      "Academic Transcript",
      "document-button"
    ),
    createLink(
      portfolioData.actions.transcripts[1].href,
      "Leistungsuebersicht",
      "document-button"
    )
  );

  viewGroup.append(viewLabel, viewRow);
  container.append(viewGroup);
};

const renderProjects = () => {
  const container = document.getElementById("projects-grid");
  if (!container) {
    return;
  }

  portfolioData.projects.forEach((project, index) => {
    const article = document.createElement("article");
    article.className = `project-card reveal-on-load reveal-delay-${index % 4}`;

    const header = document.createElement("div");
    header.className = "project-header";

    const titleGroup = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = project.title;
    const subtitle = document.createElement("p");
    subtitle.className = "timeline-meta";
    subtitle.textContent = project.subtitle;
    titleGroup.append(title, subtitle);

    const links = document.createElement("div");
    links.className = "project-links";
    project.links.forEach((linkItem) => {
      links.appendChild(createLink(linkItem.href, linkItem.label));
    });

    header.append(titleGroup, links);

    const tags = document.createElement("ul");
    tags.className = "tags";
    project.tags.forEach((tag) => {
      const item = document.createElement("li");
      item.className = "tag";
      item.textContent = tag;
      tags.appendChild(item);
    });

    const sections = document.createElement("div");
    sections.className = "project-sections";

    [
      ["Problem", project.problem],
      ["Solution", project.solution],
      ["Impact", project.impact]
    ].forEach(([label, text]) => {
      const block = document.createElement("div");
      const blockLabel = document.createElement("div");
      blockLabel.className = "project-section-label";
      blockLabel.textContent = label;
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      block.append(blockLabel, paragraph);
      sections.appendChild(block);
    });

    article.append(header, tags, sections);
    container.appendChild(article);
  });
};

const renderExperience = () => {
  const container = document.getElementById("experience-list");
  if (!container) {
    return;
  }

  portfolioData.experience.forEach((role, index) => {
    const article = document.createElement("article");
    article.className = `timeline-item reveal-on-load reveal-delay-${index}`;

    const header = document.createElement("div");
    header.className = "timeline-header";
    const titleGroup = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = `${role.role} - ${role.company}`;
    const meta = document.createElement("p");
    meta.className = "timeline-meta";
    meta.textContent = role.period;
    titleGroup.append(title, meta);

    header.appendChild(titleGroup);

    const intro = document.createElement("p");
    intro.className = "timeline-copy";
    intro.textContent = role.intro;

    const highlights = document.createElement("ul");
    highlights.className = "highlights-list";
    role.highlights.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      highlights.appendChild(li);
    });

    article.append(header, intro, highlights);
    container.appendChild(article);
  });
};

const renderEducation = () => {
  const container = document.getElementById("education-card");
  if (!container) {
    return;
  }

  const left = document.createElement("div");
  left.className = "education-copy";

  const degree = document.createElement("h3");
  degree.textContent = portfolioData.education.degree;
  const institution = document.createElement("p");
  institution.className = "timeline-meta";
  institution.textContent = portfolioData.education.institution;
  const summary = document.createElement("p");
  summary.textContent = portfolioData.education.summary;

  const bullets = document.createElement("ul");
  bullets.className = "highlights-list";
  portfolioData.education.bullets.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    bullets.appendChild(li);
  });

  const thesisTitle = document.createElement("p");
  thesisTitle.className = "project-section-label";
  thesisTitle.textContent = "Thesis";
  const thesis = document.createElement("p");
  thesis.innerHTML = `<strong>${portfolioData.education.thesisTitle}.</strong> ${portfolioData.education.thesisSummary}`;

  const actions = document.createElement("div");
  actions.className = "education-actions";
  actions.appendChild(createLink(portfolioData.actions.resume, "Open resume"));

  left.append(degree, institution, summary, bullets, thesisTitle, thesis, actions);

  const right = document.createElement("div");
  right.className = "transcript-list";
  portfolioData.education.transcripts.forEach((item) => {
    const card = document.createElement("div");
    card.className = "transcript-card";
    const title = document.createElement("strong");
    title.textContent = item.title;
    const description = document.createElement("p");
    description.textContent = item.description;
    const link = createLink(item.href, "View document");
    card.append(title, description, link);
    right.appendChild(card);
  });

  container.append(left, right);
};

const renderCertifications = () => {
  const container = document.getElementById("certifications-grid");
  if (!container) {
    return;
  }

  portfolioData.certifications.forEach((item, index) => {
    const article = document.createElement("article");
    article.className = `certification-card reveal-on-load reveal-delay-${index}`;

    const media = document.createElement("div");
    media.className = "certification-media";
    if (item.type === "image" && item.image) {
      const image = document.createElement("img");
      image.src = item.image;
      image.alt = `${item.title} certificate preview`;
      media.appendChild(image);
    } else {
      const badge = document.createElement("div");
      badge.className = "certification-badge";
      badge.textContent = "Certificate";
      media.appendChild(badge);
    }

    const copy = document.createElement("div");
    copy.className = "certification-copy";
    const title = document.createElement("h3");
    title.textContent = item.title;
    const issuer = document.createElement("p");
    issuer.className = "certification-meta";
    issuer.textContent = item.issuer;
    const description = document.createElement("p");
    description.textContent = item.description;
    const actions = document.createElement("div");
    actions.className = "certification-actions";
    actions.appendChild(createLink(item.href, item.type === "image" ? "Open certificate image" : "Open certificate PDF"));
    copy.append(title, issuer, description, actions);

    article.append(media, copy);
    container.appendChild(article);
  });
};

const renderSkills = () => {
  const container = document.getElementById("skills-grid");
  if (!container) {
    return;
  }

  portfolioData.skills.forEach((group) => {
    const article = document.createElement("article");
    article.className = "skill-group";
    const title = document.createElement("h3");
    title.textContent = group.title;
    const items = document.createElement("div");
    items.className = "skill-items";

    group.items.forEach((item) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = item;
      items.appendChild(tag);
    });

    article.append(title, items);
    container.appendChild(article);
  });
};

const renderContact = () => {
  const container = document.getElementById("contact-cards");
  if (!container) {
    return;
  }

  portfolioData.contact.items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "contact-card";
    const label = document.createElement("p");
    label.className = "contact-label";
    label.textContent = item.label;
    const link = createLink(item.href, item.value);
    card.append(label, link);
    container.appendChild(card);
  });
};

setText("hero-summary", portfolioData.heroSummary);
setText("contact-summary", portfolioData.contact.summary);
appendParagraphs("summary-content", portfolioData.summary);
renderList("focus-list", portfolioData.focusAreas);
renderList("work-principles", portfolioData.workPrinciples);
renderList("soft-skills", portfolioData.softSkills);
renderHeroActions();
renderProjects();
renderExperience();
renderEducation();
renderCertifications();
renderSkills();
renderContact();
