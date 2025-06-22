"use client"

import Project from "@/components/project"
import Section from "@/components/section"
import SectionLink from "@/components/section-link"
import ViewMoreProjectsBtn from "@/components/view-more-projects-btn"
import { ProjectType } from "@/constants/types"
import { useState } from "react"

const PROJECT_LIST: ProjectType[] = [
  {
    title: "Personal Portfolio",
    category: "personal",
    repoLink: "https://github.com/ronjacobdinero15/next-portfolio",
    liveLink: "https://ronjacobdinero.netlify.app/",
    src: "/images/projects/1-next-portfolio.png",
    description:
      "My personal web developer portfolio that is currently this website.",
    techs: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind",
      "Figma",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Next.js - JVL Electronics",
    category: "personal",
    liveLink: "https://jvl-electronics.netlify.app/",
    src: "/images/projects/2-jvl.png",
    description: "Freelance project - korean car parts ecommerce.",
    techs: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "Prisma",
      "Figma",
      "Zustand",
      "React Hook Form",
      "ShadcnUI",
      "Radix UI",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "PulseAI - Mobile App",
    category: "personal",
    src: "/images/projects/3-pulseai.png",
    description:
      "Blood pressure logger with AI analysis and generates patient PDF summary report containing all information about their hypertension.",
    techs: [
      "React Native",
      "Expo (Framework)",
      "TypeScript",
      "Reack Hook Form",
      "Gemini Chatbot",
      "Tailwind",
      "MySQL",
      "phpMyAdmin",
      "PHP",
      "Figma",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "PulseAI - Web Admin",
    category: "personal",
    src: "/images/projects/4-pulseai-web-admin.png",
    description: "Account management app",
    techs: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind",
      "Reack Hook Form",
      "MySQL",
      "phpMyAdmin",
      "PHP",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Vite - Comfy Store",
    category: "personal",
    repoLink: "https://github.com/ronjacobdinero15/comfy-store",
    liveLink: "https://ronjacobdinero15.github.io/comfy-store/",
    src: "/images/projects/comfy_store.png",
    description: "Clothing e-commerce store ",
    techs: [
      "Vite",
      "React.js",
      "Tailwind",
      "Redux Toolkit",
      "React Router",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Udemy - Fast React Pizza",
    category: "udemy",
    repoLink: "https://github.com/ronjacobdinero15/fast-react-pizza",
    liveLink: "https://ronjacobdinero15.github.io/fast-react-pizza/",
    src: "/images/projects/fast_react_pizza.png",
    description: "React pizza store",
    techs: [
      "Vite",
      "React.js",
      "Tailwind",
      "Redux Toolkit",
      "React Router",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Point of Sales (POS) System - Java",
    category: "personal",
    repoLink: "https://github.com/ronjacobdinero15/point-of-sales-system-java",
    src: "/images/projects/pos_java.png",
    description: "Point of sales system made in Java",
    techs: ["Java"],
  },
  {
    title: "Point of Sales (POS) System - JavaScript",
    category: "personal",
    repoLink: "https://github.com/ronjacobdinero15/point-of-sale-system",
    liveLink: "https://ronjacobdinero15.github.io/point-of-sale-system/",
    src: "/images/projects/pos_javascript.png",
    description: "Point of sales system made in JavaScript",
    techs: ["JavaScript", "HTML", "CSS", "Bootstrap", "Git", "GitHub"],
  },
  {
    title: "Payroll Management System (POS) - Java",
    category: "personal",
    repoLink:
      "https://github.com/ronjacobdinero15/payroll-management-system-java",
    src: "/images/projects/pms_java.png",
    description: "Payroll management system made in Java",
    techs: [
      "Java",
      "Nimbus Look and Feel",
      "Notepad as database (Professor instructed)",
    ],
  },
  {
    title: "Old Portfolio",
    category: "personal",
    repoLink: "https://github.com/ronjacobdinero15/old-portfolio",
    liveLink: "https://ronjacobdinero15.github.io/old-portfolio/",
    src: "/images/projects/old_portfolio.png",
    description: "My old portfolio using no libraries/frameworks",
    techs: ["JavaScript", "HTML", "CSS", "Bootstrap", "Git", "GitHub"],
  },
  {
    title: "Leaflet Note Taking App",
    category: "personal",
    repoLink: "https://github.com/ronjacobdinero15/leafletjs",
    liveLink: "https://ronjacobdinero15.github.io/leafletjs/",
    src: "/images/projects/leafletjs.png",
    description: "Practicing how to use leaflet",
    techs: [
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Leaflet",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Udemy - React Quiz",
    category: "udemy",
    repoLink: "https://github.com/ronjacobdinero15/react-quiz",
    liveLink: "https://react-quiz-ronjacobdinero15.vercel.app/",
    src: "/images/projects/react_quiz.png",
    description: "React Quiz App",
    techs: [
      "React.js",
      "Context API + useReducer",
      "Jest",
      "CSS",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Udemy - usePopcorn",
    category: "udemy",
    repoLink: "https://github.com/ronjacobdinero15/usePopcorn",
    liveLink: "https://ronjacobdinero15.github.io/usePopcorn/",
    src: "/images/projects/use_popcorn.png",
    description:
      "Simple movie app I learned from Udemy. I learned how to use hooks and fundamentals of React.js",
    techs: [
      "React.js",
      "Context API + useReducer",
      "Jest",
      "CSS",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Udemy - WorldWise",
    category: "udemy",
    repoLink: "https://github.com/ronjacobdinero15/worldwise",
    liveLink: "https://worldwise-ronjacobdinero.vercel.app/",
    src: "/images/projects/worldwise.png",
    description: "Note taking app",
    techs: [
      "Vite",
      "React.js",
      "Context API + useReducer",
      "Jest",
      "CSS",
      "Leaflet",
      "React Router",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "ROC",
    category: "personal",
    repoLink: "https://github.com/ronjacobdinero15/roc_google_calendar",
    liveLink: "https://ronjacobdinero15.github.io/roc_google_calendar/",
    src: "/images/projects/roc.png",
    description:
      "Google calendar scheduling appointment (Please do not submit)",
    techs: ["HTML", "CSS", "Figma", "Google Calendar API", "Git", "GitHub"],
  },
]

function Projects() {
  const [toggleMoreProjects, setToggleMoreProjects] = useState(false)
  const PROJECTS = !toggleMoreProjects ? PROJECT_LIST.slice(0, 4) : PROJECT_LIST

  return (
    <Section id="projects">
      <SectionLink sectionName="projects" even />

      <ul className="columns-1 gap-8 md:columns-2">
        {PROJECTS.map((project, idx) => (
          <Project key={idx} project={project} />
        ))}
      </ul>

      <ViewMoreProjectsBtn
        toggleMoreProjects={toggleMoreProjects}
        setToggleMoreProjects={setToggleMoreProjects}
      />
    </Section>
  )
}

export default Projects
