export const skills = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux Toolkit",
  "Vue.js & Vuex",
  "Nuxt.js",
  "Node.js",
  "Express.js",
  "Inertia.js",
  "Astro",
  "TailwindCSS",
  "Material UI",
  "SCSS/SASS",
  "PHP",
  "Laravel",
  "RESTful APIs",
  "GraphQL",
  "Git & GitHub",
  "CI/CD",
  "GitHub Actions",
  "Responsive Design",
  "Accessibility (WCAG)",
  "UX/UI Design",
  "Figma",
  "Cloudinary",
  "Yjs",
  "Socket.IO",
  "JWT Authentication",
  "Firebase",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Quill",
  "Jest",
  "React Testing Library",
  "Web Performance Optimization",
  "Security Best Practices",
  "System Architecture",
  "Technical Documentation",
  "Architecture Decision Records (ADR)",
  "SWR (stale-while-revalidate)",
  "Keycloak/OAuth",
  "Integration Testing",
  "Vitest",
];

export const experiences = [
{
  period: "2025",
  position: "Frontend Developer",
  company: "Simestra Marketing Platform",
  companyLink: "", // Leave blank since it's private/client work
  companyLogo: "",
  role: "Frontend Developer (Contract/Client Project)",
  description:
    "Architected and developed a production marketing automation platform managing campaigns, AI agents, and customer interactions. Implemented layered architecture with strict separation of concerns, reducing API coupling by 60%. Led migration from Redux to SWR, cutting state management code by 85%. Designed permission-based RBAC system and established integration testing strategy achieving 70% coverage.",
  technologies: [
    "React.js",
    "TypeScript",
    "SWR",
    "TailwindCSS",
    "Keycloak OAuth",
    "REST APIs",
    "Vitest",
    "React Testing Library",
    "System Architecture"
  ],
},
  {
    period: "2025",
    position: "Frontend Developer",
    company: "Excellent Link Academy",
    companyLink: "https://ganiyuabubakar.com",
    companyLogo: "",
    role: "Frontend Developer (Contract Based)",
    description:
      "Developed a responsive e-learning platform with dashboards, progress tracking, and course features. Focused on improving usability across devices and streamlining the user experience for both students and administrators.",
    technologies: [
      "React.js",
      "Inertia.js",
      "TailwindCSS",
      "Laravel",
      "Responsive Design",
      "UX/UI"
    ],
  },
  {
    period: "2023 — 2024",
    position: "Frontend Developer",
    company: "QuantumSphere Technologies",
    companyLink: "https://quantumspheretechnologies.com",
    companyLogo: "",
    role: "Frontend Developer (Remote Contract Project)",
    description:
      "Led development of Monietracka's admin dashboard with performance enhancements using code splitting. Integrated multiple REST APIs and worked closely with backend teams for smooth API communication. Set up CI/CD pipelines with GitHub Actions to automate deployment workflows.",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Astro",
      "TailwindCSS",
      "Vite",
      "Bitbucket",
      "GitHub Actions",
      "CI/CD",
      "REST APIs"
    ],
  },
  {
    period: "2023",
    position: "Frontend Developer",
    company: "DFS Services",
    companyLink: "https://dfs-services.netlify.app",
    companyLogo: "",
    role: "Frontend Developer (Freelance)",
    description:
      "Created a logistics web platform with real-time data visualizations using Vue/Nuxt.js and Chart.js. Collaborated with the team on ensuring security standards and optimizing frontend performance.",
    technologies: [
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "TailwindCSS",
      "Chart.js",
      "Data Visualization",
      "Web Performance"
    ],
  },
  {
    period: "2022 — 2023",
    position: "Frontend Developer",
    company: "Safe Haven Defence",
    companyLink: "https://devapp.safehavendefense.com",
    companyLogo: "",
    description:
      "Revamped the security platform by rebuilding the UI/UX with Material UI components, implementing complex state management, and introducing security modules that improved data protection by 30%. Collaborated with backend engineers to ensure seamless API integration.",
    technologies: [
      "Next.js",
      "Material UI",
      "Redux Toolkit",
      "TypeScript",
      "REST APIs",
      "Git"
    ],
  },
  {
    period: "2021 — 2022",
    position: "Frontend Developer",
    company: "4Runner Global Ltd.",
    companyLink: "https://4runnerglobal.com",
    companyLogo: "",
    description:
      "Designed and built a responsive company website with shipment tracking capabilities, increasing client engagement by 25%. Created an admin dashboard that streamlined operations and improved efficiency in managing logistics services.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Chart.js",
      "JavaScript",
      "REST APIs",
      "Responsive Design"
    ],
  },
  {
    period: "2020 — Present",
    position: "Freelance Frontend Developer",
    company: "Self-employed",
    companyLink: "",
    companyLogo: "",
    description:
      "Designed and developed over 10 custom websites and web applications for clients across various industries. Established strong client relationships through effective communication and delivering high-quality solutions that meet business requirements.",
    technologies: [
      "HTML/CSS",
      "SCSS",
      "TailwindCSS",
      "Laravel",
      "PHP",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Nuxt.js",
      "Node.js",
    ],
  },
];


export const projects = [
  {
    name: "Marketing Platform Architecture Documentation",
    description:
      "Comprehensive architecture documentation for a production React marketing automation platform. Documents 5 key architectural decisions including service layer separation, SWR over Redux (85% less boilerplate), backend-handled OAuth, permission-based RBAC, and integration testing strategy. Demonstrates system thinking through 12,000-word case study and Architecture Decision Records.",
    technologies: [
      "React.js",
      "TypeScript",
      "SWR",
      "Architecture Design",
      "System Design",
      "Technical Writing",
      "ADR",
      "Testing Strategy"
    ],
    externalLink: "https://github.com/msodiq19/marketing-platform-architecture",
    githubLink: "https://github.com/msodiq19/marketing-platform-architecture",
    highlight: true, // Flag this as a unique documentation project
  },
  {
    name: "Res3archSync Platform",
    description:
      "A real-time academic co-authoring and resource management platform built for a hackathon. Developed real-time collaboration using Yjs + WebSocket with <200ms latency. Integrated AI co-pilot features, version-controlled editing, and JWT-secured sessions.",
    technologies: ["React", "TypeScript", "Yjs", "Socket.IO", "Cloudinary", "JWT", "Quill", "REST APIs"],
    externalLink: "",
  },
  {
    name: "CognitiCare AI",
    description:
      "Built a responsive Alzheimer's detection UI and care dashboard for a healthcare hackathon. Optimized for <1.2s load time using Next.js SSG. Successfully used by 500+ trial users with intuitive, accessible interface.",
    technologies: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Healthcare AI"],
    externalLink: "",
  },
  {
    name: "Robot-AI Detection Tool",
    description:
      "Designed an intuitive and user-friendly UI for an Uncanny Valley-based classifier. Optimized the interface for seamless user interaction and clear results visualization.",
    technologies: ["React.js", "TypeScript", "UX/UI Design", "Data Visualization"],
    externalLink: "",
  },
  {
    name: "Monietracka Admin Dashboard",
    description:
      "Led the development of a comprehensive admin dashboard enabling real-time data visualization, user management, and system analytics. Implemented performance optimizations that reduced load times by 40% and improved overall user experience.",
    technologies: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Redux Toolkit", "Chart.js"],
    externalLink: "",
  },
  {
    name: "Safe Haven Defence Platform",
    description:
      "Revamped the security platform by improving the UI/UX, adding new features, and optimizing performance. Introduced scalable state management and security modules, making the app more user-friendly and efficient with a 30% improvement in data protection.",
    technologies: ["Next.js", "Material UI", "Redux Toolkit", "TypeScript", "JWT Authentication"],
    externalLink: "https://devapp.safehavendefense.com/",
  },
  {
    name: "Excellent Link Academy",
    description:
      "Developed a responsive e-learning platform with student and admin dashboards, progress tracking, and course features. Focused on improving usability across devices and streamlining the user experience for over 500 active users.",
    technologies: ["React.js", "Inertia.js", "Laravel", "TailwindCSS", "UX Design"],
    externalLink: "https://ganiyuabubakar.com",
  },
  {
    name: "DFS Services Logistics Platform",
    description:
      "Created a logistics web platform with real-time data visualizations using Vue/Nuxt.js and Chart.js. Implemented SEO optimizations that boosted organic traffic by 35% and improved site loading performance.",
    technologies: ["Vue.js", "Nuxt.js", "TypeScript", "TailwindCSS", "Chart.js"],
    externalLink: "https://dfs-services.netlify.app",
  },
  {
    name: "4Runner Global Ltd.",
    description:
      "Designed and built a responsive website for a logistics company, complete with real-time shipment tracking. Created an internal dashboard that streamlined operations and improved client engagement by 25%.",
    technologies: ["React.js", "Tailwind CSS", "Chart.js", "REST APIs"],
    externalLink: "https://4runnerglobal.com",
  }
];
