"use client"

import Project from "@/components/project"
import Section from "@/components/section"
import { ProjectType } from "@/constants/types"
import dynamic from "next/dynamic"
import { useState } from "react"

// PROJECTS IMAGE PREVIEWS
import personalPortfolioPreview from "@/assets/images/projects/1p-next-portfolio.png"
import jvlPreview from "@/assets/images/projects/2p-jvl.png"
import pulseAiPreview from "@/assets/images/projects/3p-pulseai.png"
import pulseAiWebPreview from "@/assets/images/projects/4p-pulseai-web-admin.png"
import reactPhpCrudAppWebPreview from "@/assets/images/projects/5p-react-php-crud-app.png"
import comfyStorePreview from "@/assets/images/projects/6p-comfy_store.png"
import rocPreview from "@/assets/images/projects/7p-roc.png"
import posJavaScriptPreview from "@/assets/images/projects/8p-pos_javascript.png"
import pmsJavaPreview from "@/assets/images/projects/9p-pms_java.png"
import posJavaPreview from "@/assets/images/projects/10p-pos_java.png"
import etchASketchPreview from "@/assets/images/projects/11p-etch-a-sketch.png"
import worldwisePreview from "@/assets/images/projects/1u-worldwise.png"
import fastReactPizzaPreview from "@/assets/images/projects/2u-fast_react_pizza.png"
import reactQuizPreview from "@/assets/images/projects/3u-react_quiz.png"
import usePopcornPreview from "@/assets/images/projects/4u-use_popcorn.png"

import walkInStylePreview from "@/assets/images/projects/1f-walkinstyle.png"

const ViewMoreProjectsBtn = dynamic(
  () => import("@/components/view-more-projects-btn"),
)
const SectionLink = dynamic(() => import("@/components/section-link"))

const PROJECT_LIST: ProjectType[] = [
  {
    title: "My Portfolio - Next.js",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/next-portfolio",
      liveLink: "https://ronjacobdinero.netlify.app/",
    },
    src: personalPortfolioPreview,
    description: "My portfolio which is this website.",
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
    title: "JVL Electronics - Next.js",
    links: {
      liveLink: "https://jvl-electronics.netlify.app/",
    },
    src: jvlPreview,
    description:
      "Freelance project - Korean car parts ecommerce w/ Figma designs.",
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
    title: "PulseAI - Mobile App - React Native (Expo)",
    links: {
      videoLink:
        "https://drive.google.com/file/d/16PPAUTQGHx0yfM1y_PNMQUU4CKsoLvd0/view?usp=sharing",
    },
    src: pulseAiPreview,
    description:
      "Blood pressure logger with AI analysis and generates patient PDF summary report containing all information about their hypertension status.",
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
    title: "PulseAI - Web Admin - Next.js",
    links: {
      videoLink:
        "https://drive.google.com/file/d/16PPAUTQGHx0yfM1y_PNMQUU4CKsoLvd0/view?usp=sharing",
    },
    src: pulseAiWebPreview,
    description: "IT/Doctor account management app.",
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
    title: "React + PHP | CRUD App",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/se_activity",
    },
    src: reactPhpCrudAppWebPreview,
    description:
      "Fake 7-11 franchise inventory management system using React.js + PHP for authentication and CRUD operations. College assignment.",
    techs: [
      "React.js",
      "PHP",
      "MySQL",
      "phpMyAdmin",
      "Tailwind",
      "React Query",
      "React Hook Form",
      "Vite",
      "Bootstrap",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Walk-in Style - Figma",
    src: walkInStylePreview,
    description: "College UI/UX project w/ a class partner.",
    techs: ["Figma"],
  },
  {
    title: "Comfy Store - Vite",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/comfy-store",
      liveLink: "https://ronjacobdinero15.github.io/comfy-store/",
    },
    src: comfyStorePreview,
    description: "Clothing e-commerce store using Fake Store API.",
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
    title: "Fast React Pizza Store - Vite",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/fast-react-pizza",
      liveLink: "https://ronjacobdinero15.github.io/fast-react-pizza/",
    },
    src: fastReactPizzaPreview,
    description: "Pizza store with Redux/RTK.",
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
    links: {
      repoLink:
        "https://github.com/ronjacobdinero15/point-of-sales-system-java",
    },
    src: posJavaPreview,
    description: "Point of sales system made in Java.",
    techs: ["Java"],
  },
  {
    title: "Point of Sales (POS) System - JavaScript",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/point-of-sale-system",
      liveLink: "https://ronjacobdinero15.github.io/point-of-sale-system/",
    },
    src: posJavaScriptPreview,
    description: "Point of sales system made in JavaScript.",
    techs: ["JavaScript", "HTML", "CSS", "Bootstrap", "Git", "GitHub"],
  },
  {
    title: "Payroll Management System (PMS) - Java",
    links: {
      repoLink:
        "https://github.com/ronjacobdinero15/payroll-management-system-java",
    },
    src: pmsJavaPreview,
    description: "Payroll management system made in Java.",
    techs: [
      "Java",
      "Nimbus Look and Feel",
      "Notepad as database (my college prof strictly instructed🙄)",
    ],
  },
  {
    title: "WorldWise - Vite",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/worldwise",
      liveLink: "https://worldwise-ronjacobdinero.vercel.app/",
    },
    src: worldwisePreview,
    description: "Landmark note taking app.",
    techs: [
      "Vite",
      "React.js",
      "Context API + useReducer",
      "Jest",
      "CSS",
      "Leaflet.js",
      "React Router",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "React Quiz - CRA",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/react-quiz",
      liveLink: "https://react-quiz-ronjacobdinero15.vercel.app/",
    },
    src: reactQuizPreview,
    description: "React quiz app.",
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
    title: "usePopcorn - CRA",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/usePopcorn",
      liveLink: "https://ronjacobdinero15.github.io/usePopcorn/",
    },
    src: usePopcornPreview,
    description: "Simple movie app I learned from Udemy.",
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
    title: "Appointment Scheduler (Google Calendar API) - ROC - HTML/CSS/JS",
    src: rocPreview,
    description: "Google calendar scheduling appointment.",
    techs: ["HTML", "CSS", "Figma", "Google Calendar API", "Git", "GitHub"],
  },
  {
    title: "Etch-a-Sketch",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/etch-a-sketch",
      liveLink: "https://ronjacobdinero15.github.io/etch-a-sketch/",
    },
    src: etchASketchPreview,
    description: "Sketch using your mouse.",
    techs: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
  },
]

function Projects() {
  const [toggleMoreProjects, setToggleMoreProjects] = useState(false)

  const PROJECTS =
    !toggleMoreProjects && PROJECT_LIST.length > 4
      ? PROJECT_LIST.slice(0, 4)
      : PROJECT_LIST

  return (
    <Section id="projects" className="scroll-mt-16">
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
