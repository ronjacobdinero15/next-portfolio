"use client"

import Project from "@/components/project"
import Section from "@/components/section"
import { ProjectType } from "@/constants/types"
import dynamic from "next/dynamic"
import { useState } from "react"

import personalPortfolioPreview from "@/assets/images/projects/1-next-portfolio.png"
import jvlPreview from "@/assets/images/projects/2-jvl.png"
import pulseAiPreview from "@/assets/images/projects/3-pulseai.png"
import pulseAiWebPreview from "@/assets/images/projects/4-pulseai-web-admin.png"
import comfyStorePreview from "@/assets/images/projects/comfy_store.png"
import fastReactPizzaPreview from "@/assets/images/projects/fast_react_pizza.png"
import posJavaPreview from "@/assets/images/projects/pos_java.png"
import posJavaScriptPreview from "@/assets/images/projects/pos_javascript.png"
import oldPortfolioPreview from "@/assets/images/projects/old_portfolio.png"
import leafletjsPreview from "@/assets/images/projects/leafletjs.png"
import reactQuizPreview from "@/assets/images/projects/react_quiz.png"
import usePopcornPreview from "@/assets/images/projects/use_popcorn.png"
import worldwisePreview from "@/assets/images/projects/worldwise.png"
import rocPreview from "@/assets/images/projects/roc.png"

const ViewMoreProjectsBtn = dynamic(
  () => import("@/components/view-more-projects-btn"),
)
const SectionLink = dynamic(() => import("@/components/section-link"))

const PROJECT_LIST: ProjectType[] = [
  {
    title: "Personal Portfolio",
    category: "personal",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/next-portfolio",
      liveLink: "https://ronjacobdinero.netlify.app/",
    },
    src: personalPortfolioPreview,
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
    links: {
      liveLink: "https://jvl-electronics.netlify.app/",
    },
    src: jvlPreview,
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
    links: {
      videoLink:
        "https://drive.google.com/file/d/16PPAUTQGHx0yfM1y_PNMQUU4CKsoLvd0/view?usp=sharing",
    },
    src: pulseAiPreview,
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
    links: {
      videoLink:
        "https://drive.google.com/file/d/16PPAUTQGHx0yfM1y_PNMQUU4CKsoLvd0/view?usp=sharing",
    },
    src: pulseAiWebPreview,
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
    links: {
      repoLink: "https://github.com/ronjacobdinero15/comfy-store",
      liveLink: "https://ronjacobdinero15.github.io/comfy-store/",
    },
    src: comfyStorePreview,
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
    links: {
      repoLink: "https://github.com/ronjacobdinero15/fast-react-pizza",
      liveLink: "https://ronjacobdinero15.github.io/fast-react-pizza/",
    },
    src: fastReactPizzaPreview,
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
    links: {
      repoLink:
        "https://github.com/ronjacobdinero15/point-of-sales-system-java",
    },
    src: posJavaPreview,
    description: "Point of sales system made in Java",
    techs: ["Java"],
  },
  {
    title: "Point of Sales (POS) System - JavaScript",
    category: "personal",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/point-of-sale-system",
      liveLink: "https://ronjacobdinero15.github.io/point-of-sale-system/",
    },
    src: posJavaScriptPreview,
    description: "Point of sales system made in JavaScript",
    techs: ["JavaScript", "HTML", "CSS", "Bootstrap", "Git", "GitHub"],
  },
  {
    title: "Payroll Management System (POS) - Java",
    category: "personal",
    links: {
      repoLink:
        "https://github.com/ronjacobdinero15/payroll-management-system-java",
    },
    src: posJavaPreview,
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
    links: {
      repoLink: "https://github.com/ronjacobdinero15/old-portfolio",
      liveLink: "https://ronjacobdinero15.github.io/old-portfolio/",
    },
    src: oldPortfolioPreview,
    description: "My old portfolio using no libraries/frameworks",
    techs: ["JavaScript", "HTML", "CSS", "Bootstrap", "Git", "GitHub"],
  },
  {
    title: "Leaflet Note Taking App",
    category: "personal",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/leafletjs",
      liveLink: "https://ronjacobdinero15.github.io/leafletjs/",
    },
    src: leafletjsPreview,
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
    links: {
      repoLink: "https://github.com/ronjacobdinero15/react-quiz",
      liveLink: "https://react-quiz-ronjacobdinero15.vercel.app/",
    },
    src: reactQuizPreview,
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
    links: {
      repoLink: "https://github.com/ronjacobdinero15/usePopcorn",
      liveLink: "https://ronjacobdinero15.github.io/usePopcorn/",
    },
    src: usePopcornPreview,
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
    links: {
      repoLink: "https://github.com/ronjacobdinero15/worldwise",
      liveLink: "https://worldwise-ronjacobdinero.vercel.app/",
    },
    src: worldwisePreview,
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
    links: {
      repoLink: "https://github.com/ronjacobdinero15/roc_google_calendar",
      liveLink: "https://ronjacobdinero15.github.io/roc_google_calendar/",
    },
    src: rocPreview,
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
