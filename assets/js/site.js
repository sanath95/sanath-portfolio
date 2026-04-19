const portfolioData = {
  heroSummary:
    "I build AI systems that reduce manual effort and deliver reliable results.",
  focusAreas: [
    "Building evaluation-driven AI systems",
    "Turning LLM prototypes into usable tools",
    "Designing automation workflows that reduce manual work",
    "Working with noisy data and evolving requirements",
    "Prioritizing measurable impact and maintainability",
    "Integrating AI solutions into existing processes"
  ],
  summary: [
    "I am an AI engineer with a background in data science, focused on building systems that work in real-world environments. My experience spans LLM workflows, machine learning models, and data pipelines.",
    "I build complete solutions, from understanding requirements and defining problems to preparing data, evaluating performance, and iterating based on feedback. I am comfortable working in evolving environments and turning ideas into practical solutions.",
    "I combine strong engineering discipline with continuous learning. I prioritize clean code, reproducible workflows, and clear documentation, while staying current with developments in LLMs and agent-based applications."
  ],
  actions: {
    email: "mailto:sanath.vh@gmail.com",
    github: "https://github.com/sanath95",
    linkedin: "https://www.linkedin.com/in/sanath-haritsa/",
    resume: "assets/Sanath Vijay Haritsa - CV 01042026_compressed.pdf",
    transcripts: [
      {
        label: "Transcript of Records",
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
      tags: ["RAG", "AI Agent", "Chatbot", "MLOps"],
      problem:
        "Recruiters often need to manually scan multiple static files to assess candidate fit.",
      solution:
        "Developed an agent-based RAG chatbot to answer questions about a candidate profile, combining embeddings, context retrieval, conversation memory, and response-quality monitoring.",
      impact:
        "Turned a passive portfolio into an interactive experience while demonstrating an AI agent workflow end to end."
    },
    {
      title: "LLM Evaluation Without Ground Truth",
      subtitle: "Semantic relevance evaluation",
      links: [],
      tags: ["LLM Evaluation", "Embeddings", "Cosine Similarity", "Benchmarking"],
      problem:
        "Evaluating LLM outputs is difficult when no single correct answer exists.",
      solution:
        "Implemented a retrieval-based evaluation approach using embeddings and cosine similarity to compare generated answers with relevant context and rank model outputs.",
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
      tags: ["Academic Research", "NLP", "PDF Parsing", "Document Analysis"],
      problem:
        "Metadata extraction from academic PDFs is unreliable because layouts vary heavily across publishers.",
      solution:
        "Designed a metadata extraction pipeline using small language models and compared it against traditional layout-aware parsing methods.",
      impact:
        "Showed that small LLMs are more flexible than traditional parsers on complex layouts."
    },
    {
      title: "VBA Codebase Analysis System",
      subtitle: "Legacy migration support",
      links: [],
      tags: ["Code Analysis", "Documentation", "LLMs", "Human-in-the-Loop"],
      problem:
        "Large VBA codebases of 5k to 50k lines were difficult to understand during migration projects.",
      solution:
        "Created a system to parse legacy macro code, generate structured documentation, and iteratively refine explanations using human evaluation.",
      impact:
        "Reduced the time developers needed to understand legacy systems."
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
      tags: ["Responsible AI", "SHAP", "Fairness", "EU AI Act"],
      problem:
        "Healthcare ML systems require transparency and fairness.",
      solution:
        "Implemented model cards, fairness checks, SHAP explainability, and privacy-preserving data handling aligned to EU AI Act principles.",
      impact:
        "Improved decision transparency and highlighted the trade-offs involved in deploying fairer predictive systems."
    },
    {
      title: "Automation Workflows",
      subtitle: "Automation with no-code platform",
      links: [],
      tags: ["n8n", "Automation", "Information Extraction", "Workflow Design"],
      problem:
        "Manual document handling created unnecessary repetitive effort.",
      solution:
        "Built automation pipelines for data extraction using custom nodes for PDF processing and integrations with existing tools.",
      impact:
        "Reduced manual work and enabled scalable handling of unstructured document-heavy workflows."
    }
  ],
  experience: [
    {
      role: "AI Engineer",
      company: "Schwarz IT",
      period: "Jan 2025 - Mar 2026",
      location: "Heilbronn, Germany",
      intro:
        "Delivered AI prototypes that reduced manual efforts, improved efficiency and reliability across enterprise workflows.",
      highlights: [
        "Took ownership of end-to-end delivery: requirement gathering, stakeholder communication, implementation, and evaluation.",
        "Built an automated job reference (Arbeitszeugnis) generation system, reducing HR effort while ensuring compliance and consistency through LLM-based evaluation.",
        "Designed LLM evaluation without ground truth using embedding similarity, enabling scalable quality assessment of generated responses.",
        "Developed a code analysis system for large VBA codebases (5k-50k LOC), generating structured documentation to support migration efforts.",
        "Reduced developer onboarding and code understanding time by automating documentation for legacy systems.",
        "Built multi-step LLM workflows for product data validation, improving consistency and reducing manual QA effort.",
        "Designed evaluation pipelines with MLflow + Databricks, enabling measurable tracking (precision, recall, F1) and iterative model improvement.",
        "Developed LLM-as-a-judge frameworks aligned with human feedback, increasing reliability of AI outputs in enterprise use cases.",
        "Built automation workflows using n8n for content generation, reducing manual workload.",
        "Implemented PDF information extraction pipelines with custom nodes, enabling structured data extraction from unstructured documents.",
        "Benchmarked no-code AI platforms and defined KPIs, supporting tool adoption decisions.",
        "Integrated web scraping and crawling tools for a deep research agent."
      ]
    },
    {
      role: "Data Scientist",
      company: "Nichesolv",
      period: "Sep 2020 - Sep 2023",
      location: "Bangalore, India",
      intro:
        "Worked across computer vision, time-series forecasting, and explainability, improving analysis, monitoring, and decision-making.",
      highlights: [
        "Developed tennis-match performance analytics using computer vision for stroke recognition, ball tracking, and court-line detection using YOLO and transfer learning models.",
        "Built time-series forecasting pipelines for pump cavitation prediction to support proactive maintenance and operational planning.",
        "Performed root-cause analytics for semiconductor quality failures using manufacturing and inspection data with tree-based models and statistical visual diagnostics.",
        "Built a monitoring dashboard for engine health using ML + SHAP, improving interpretability for users.",
        "Implemented and compared explainability methods (LIME, SHAP, Anchors, DiCE), and standardized SHAP for deeper model transparency in production use cases.",
        "Developed reusable ML executables for clustering and preprocessing in no-code environments."
      ]
    }
  ],
  education: {
    degrees: [
      {
        degree: "M.Sc. - Applied Data Science and Analytics",
        institution: "SRH Hochschule",
        location: "Heidelberg, Germany",
        duration: "Oct 2023 - Sep 2025",
        summary: "Graduated with a 1.5 CGPA.",
        bullets: [
          "Built strong foundations in machine learning, deep learning, and data engineering.",
          "Developed end-to-end data pipelines from data processing to modeling and evaluation.",
          "Applied NLP and text mining to real-world problems.",
          "Focused on evaluation, error analysis, and practical system reliability.",
          "Learned to translate messy data into usable solutions and communicate insights clearly."
        ],
        thesisTitle: "Layout-Aware Metadata Extraction Framework",
      },
      {
        degree: "Bachelor of Engineering - Mechanical Engineering",
        institution: "RNS Institute of Technology",
        location: "Bangalore, India",
        duration: "2013 - 2020",
        summary:
          "Overall Average = 60%",
        bullets: []
      }
    ]
  },
  certifications: [
    {
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      href: "assets/Sanath Vijay Haritsa - NVIDIA Fundamentals of Deep Learning.pdf",
      description:
        "Deep learning training covering CNNs, transfer learning, and model development with TensorFlow/Keras."
    },
    {
      title: "Agents Course",
      issuer: "Hugging Face",
      href: "assets/Sanath Vijay Haritsa - Hugging Face Agents Course.png",
      image: "assets/Sanath Vijay Haritsa - Hugging Face Agents Course.png",
      description:
        "Hands-on learning focused on  building AI agents with tool calling and multi-step workflows using LangGraph, LlamaIndex, and smolagents."
    }
  ],
  skills: [
    {
      title: "Programming",
      items: ["Python", "R", "SQL", "Java", "C#"]
    },
    {
      title: "Machine Learning",
      items: ["Scikit-learn", "Pytorch", "Matplotlib", "XGBoost"]
    },
    {
      title: "Generative AI",
      items: ["Transformers", "RAG", "AI Agents", "Prompt & Context Engineering"]
    },
    {
      title: "Frameworks",
      items: ["FastAPI", "LangChain", "LangGraph", "HuggingFace", "n8n", "Pydantic AI"]
    },
    {
      title: "MLOps, DevOps & Cloud",
      items: ["MLflow", "LangFuse", "CI/CD", "Docker", "Git", "Google Cloud Platform", "Azure"]
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "BigQuery", "Qdrant"]
    }
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
      "I am motivated to learn continuously and contribute to meaningful projects. I have a genuine interest in AI and its potential to create real impact. I approach challenges with persistence and resilience, and I am committed to going beyond expectations when needed. I am also actively learning German and working towards better integration into the local environment.",
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
        value: "linkedin.com/in/sanath-haritsa",
        href: "https://www.linkedin.com/in/sanath-haritsa/"
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
      "Transcript of Records",
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
    title.textContent = role.role;
    const company = document.createElement("p");
    company.className = "timeline-meta";
    company.textContent = role.company;
    titleGroup.append(title, company);

    const metaGroup = document.createElement("div");
    metaGroup.className = "timeline-side-meta";
    const period = document.createElement("p");
    period.className = "education-pill";
    period.textContent = role.period;
    metaGroup.appendChild(period);
    if (role.location) {
      const location = document.createElement("p");
      location.className = "timeline-location";
      location.textContent = role.location;
      metaGroup.appendChild(location);
    }

    header.append(titleGroup, metaGroup);

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

  portfolioData.education.degrees.forEach((entry, index) => {
    const card = document.createElement("article");
    card.className = `education-degree ${index === 0 ? "education-degree-primary" : "education-degree-secondary"}`;

    const header = document.createElement("div");
    header.className = "education-degree-header";

    const identity = document.createElement("div");
    identity.className = "education-copy";
    const degree = document.createElement("h3");
    degree.textContent = entry.degree;
    const institution = document.createElement("p");
    institution.className = "timeline-meta";
    institution.textContent = entry.institution;
    identity.append(degree, institution);

    const meta = document.createElement("div");
    meta.className = "education-meta";

    if (entry.duration) {
      const duration = document.createElement("span");
      duration.className = "education-pill";
      duration.textContent = entry.duration;
      meta.appendChild(duration);
    }

    if (entry.location) {
      const location = document.createElement("span");
      location.className = "education-location";
      location.textContent = entry.location;
      meta.appendChild(location);
    }

    header.append(identity, meta);

    const body = document.createElement("div");
    body.className = "education-degree-body";

    const summary = document.createElement("p");
    summary.className = "education-summary";
    summary.textContent = entry.summary;
    body.appendChild(summary);

    if (entry.bullets && entry.bullets.length > 0) {
      const bullets = document.createElement("ul");
      bullets.className = "highlights-list";
      entry.bullets.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        bullets.appendChild(li);
      });
      body.appendChild(bullets);
    }

    if (entry.thesisTitle) {
      const thesisWrap = document.createElement("div");
      thesisWrap.className = "education-thesis";
      const thesisTitle = document.createElement("p");
      thesisTitle.className = "project-section-label";
      thesisTitle.textContent = "Thesis";
      const thesis = document.createElement("p");
      thesis.innerHTML = `<strong>${entry.thesisTitle}.</strong>`;
      thesisWrap.append(thesisTitle, thesis);
      body.appendChild(thesisWrap);
    }

    card.append(header, body);

    container.appendChild(card);
  });
};

const renderCertifications = () => {
  const container = document.getElementById("certifications-grid");
  if (!container) {
    return;
  }

  portfolioData.certifications.forEach((item, index) => {
    const article = document.createElement("article");
    article.className = `certification-card reveal-on-load reveal-delay-${index}`;

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
    actions.appendChild(createLink(item.href, "Open certificate"));
    copy.append(title, issuer, description, actions);

    article.append(copy);
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
renderList("soft-skills", portfolioData.softSkills);
renderHeroActions();
renderProjects();
renderExperience();
renderEducation();
renderCertifications();
renderSkills();
renderContact();
