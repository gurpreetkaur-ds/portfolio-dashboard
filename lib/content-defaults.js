export const DEFAULT_CONTENT = {
  hero: {
    greeting: "Hello, I'm",
    firstName: "Gurpreet",
    lastName: "Kaur",
    roles: ["Data Scientist", "AI / ML Developer"],
    description:
      "I build intelligent, data-driven applications that combine machine learning, artificial intelligence and modern software development to solve real-world problems.",
    availabilityText: "AVAILABLE FOR OPPORTUNITIES",
  },

  about: {
    headingLine1: "Turning Data Into",
    headingLine2: "Intelligence.",
    intro:
      "A data-driven developer passionate about artificial intelligence, machine learning and solving real-world problems through technology.",
    avatarInitials: "GK",
    subheading: "DATA SCIENCE · AI · ML",
    cardTitle: "Building smarter solutions with data.",
    paragraphs: [
      "I'm a Master's student in Data Science with a background in Computer Science. My interests lie at the intersection of data, artificial intelligence and software development.",
      "I enjoy transforming raw data into meaningful insights and developing machine learning solutions that can solve practical problems. I'm continuously learning new technologies and looking for opportunities to apply my skills in real-world environments.",
    ],
    highlights: [
      {
        iconKey: "brain",
        title: "AI & Machine Learning",
        text: "Building intelligent models and AI-powered applications.",
      },
      {
        iconKey: "database",
        title: "Data Science",
        text: "Turning complex datasets into useful insights and solutions.",
      },
      {
        iconKey: "chart",
        title: "Data Analytics",
        text: "Exploring patterns, trends and relationships within data.",
      },
      {
        iconKey: "code",
        title: "Development",
        text: "Creating practical applications with modern technologies.",
      },
    ],
    stats: [
      { number: "06+", label: "PROJECTS" },
      { number: "10+", label: "TECHNOLOGIES" },
      { number: "03+", label: "ML MODELS" },
      { number: "∞", label: "CURIOSITY" },
    ],
  },

  education: [
    {
      degree: "MSc Data Science & AI",
      school: "GISMA — Potsdam, Germany",
      description:
        "Focused on machine learning, deep learning, and data analytics. Built multiple AI projects and research-based models.",
    },
  ],

  experience: [],

  skills: [
    { title: "Python", iconKey: "python", level: 95 },
    { title: "Machine Learning", iconKey: "brain", level: 92 },
    { title: "Deep Learning", iconKey: "robot", level: 90 },
    { title: "Data Science", iconKey: "chartBar", level: 94 },
    { title: "SQL", iconKey: "database", level: 88 },
    { title: "JavaScript", iconKey: "code", level: 82 },
  ],

  certifications: [
    { title: "Machine Learning", issuer: "Coursera / Andrew Ng" },
    { title: "Data Science Professional", issuer: "IBM / Coursera" },
    { title: "Deep Learning Specialization", issuer: "DeepLearning.AI" },
  ],

  projects: [
    {
      iconKey: "brain",
      title: "AI Scientist Dashboard",
      category: "ARTIFICIAL INTELLIGENCE",
      image: "/projects/ai-scientist.png",
      shortDescription:
        "An intelligent research dashboard designed to automate data analysis and generate meaningful insights.",
      description:
        "An AI-powered scientist dashboard that combines dataset analysis, machine learning utilities and language-model capabilities into one interactive platform. The system includes automated Pearson correlation analysis, dataset comparison, PDF report generation and voice output.",
      technologies: [
        "Python",
        "Machine Learning",
        "GPT4All",
        "Pandas",
        "Scikit-learn",
        "Gradio",
      ],
      repoSlug: null,
      demo: "",
    },
    {
      iconKey: "network",
      title: "Network Intrusion Detection System",
      category: "CYBERSECURITY · MACHINE LEARNING",
      image: "/projects/network-detection.png",
      shortDescription:
        "A multi-model machine learning system for identifying malicious network traffic.",
      description:
        "A machine-learning based intrusion detection system using network flow data. The project processes a large cybersecurity dataset and applies classification techniques to identify potentially malicious network traffic.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Random Forest",
        "Logistic Regression",
        "SMOTE",
        "Pandas",
      ],
      repoSlug: "Network-Intrusion-Detection-",
      demo: "",
    },
    {
      iconKey: "chart",
      title: "Liver Disease Prediction",
      category: "PREDICTIVE ANALYTICS",
      image: "/projects/liver-disease.png",
      shortDescription:
        "A machine learning model designed to predict the likelihood of liver disease.",
      description:
        "A predictive machine learning project focused on analyzing healthcare-related features and developing a classification model capable of identifying patterns associated with liver disease.",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Classification",
        "Data Visualization",
      ],
      repoSlug: null,
      demo: "",
    },
    {
      iconKey: "chart",
      title: "Sentiment Analysis",
      category: "NATURAL LANGUAGE PROCESSING",
      image: "/projects/sentiment-analysis.png",
      shortDescription:
        "A natural language processing project that analyzes text and determines sentiment.",
      description:
        "A text classification project that processes reviews and determines their sentiment using natural language processing and machine learning techniques.",
      technologies: [
        "Python",
        "NLP",
        "Pandas",
        "Scikit-learn",
        "Text Classification",
      ],
      repoSlug: null,
      demo: "",
    },
  ],

  contact: {
    intro:
      "I'm always interested in connecting with people working on interesting problems in data science, artificial intelligence and machine learning.",
    availabilityTitle: "Available",
    availabilityText: "For internships & opportunities",
  },

  social: {
    github: "https://github.com/gurpreetkaur-ds",
    linkedin: "https://www.linkedin.com/in/gurpreet-kaur-870173238/",
    email: "gurpreet909099@gmail.com",
  },
};
