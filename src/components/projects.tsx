"use client"

import Project from "@/components/project"
import Section from "@/components/section"
import { ProjectType } from "@/constants/types"
import dynamic from "next/dynamic"
import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { ProjectsTab } from "@/components/projects-tab"

// PROJECTS IMAGE PREVIEWS
import personalPortfolioPreview from "@/assets/images/projects/1p-next-portfolio.png"
import jvlPreview from "@/assets/images/projects/2p-jvl.png"
import pulseAiPreview from "@/assets/images/projects/3p-pulseai.png"
import pulseAiWebPreview from "@/assets/images/projects/4p-pulseai-web-admin.png"
import reactPhpCrudAppWebPreview from "@/assets/images/projects/5p-react-php-crud-app.png"
import comfyStorePreview from "@/assets/images/projects/6p-comfy_store.png"
import rocPreview from "@/assets/images/projects/7p-roc.png"
import leafletjsPreview from "@/assets/images/projects/8p-leafletjs.png"
import posJavaScriptPreview from "@/assets/images/projects/9p-pos_javascript.png"
import oldPortfolioPreview from "@/assets/images/projects/10p-old_portfolio.png"
import pmsJavaPreview from "@/assets/images/projects/11p-pms_java.png"
import posJavaPreview from "@/assets/images/projects/12p-pos_java.png"
import basicPosJsPreview from "@/assets/images/projects/13p-basic-pos-js.png"
import fastReactPizzaPreview from "@/assets/images/projects/2u-fast_react_pizza.png"
import reactQuizPreview from "@/assets/images/projects/3u-react_quiz.png"
import usePopcornPreview from "@/assets/images/projects/4u-use_popcorn.png"
import worldwisePreview from "@/assets/images/projects/1u-worldwise.png"
import basicCalculatorPreview from "@/assets/images/projects/14p-basic-calculator.png"
import etchASketchPreview from "@/assets/images/projects/15p-etch-a-sketch.png"
import rpsPreview from "@/assets/images/projects/16p-rps.png"
import eatNSplitPreview from "@/assets/images/projects/17p-eat-n-split.png"
import basicTodoListPreview from "@/assets/images/projects/18p-basic-todo-list.png"

const ViewMoreProjectsBtn = dynamic(
  () => import("@/components/view-more-projects-btn"),
)
const SectionLink = dynamic(() => import("@/components/section-link"))

const Reveal = dynamic(() => import("@/components/reveal"))

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
    description: "Account management app.",
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
    title: "React + PHP CRUD App",
    category: "personal",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/se_activity",
    },
    src: reactPhpCrudAppWebPreview,
    description:
      "Basic fake 7-11 franchise inventory management system using React.js + PHP for authentication and CRUD operations. College assignment.",
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
    title: "Vite - Comfy Store",
    category: "personal",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/comfy-store",
      liveLink: "https://ronjacobdinero15.github.io/comfy-store/",
    },
    src: comfyStorePreview,
    description: "Clothing e-commerce store.",
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
    description: "React pizza store.",
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
    description: "Point of sales system made in Java.",
    techs: ["Java"],
  },
  {
    title: "Basic POS - JavaScript",
    category: "personal",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/basic-pos-jss",
      liveLink: "https://ronjacobdinero15.github.io/basic-pos-js/",
    },
    src: basicPosJsPreview,
    description: "Point of sales system made in Java",
    techs: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Point of Sales (POS) System - JavaScript",
    category: "personal",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/point-of-sale-system",
      liveLink: "https://ronjacobdinero15.github.io/point-of-sale-system/",
    },
    src: posJavaScriptPreview,
    description: "Point of sales system made in JavaScript.",
    techs: ["JavaScript", "HTML", "CSS", "Bootstrap", "Git", "GitHub"],
  },
  {
    title: "Payroll Management System (POS) - Java",
    category: "personal",
    links: {
      repoLink:
        "https://github.com/ronjacobdinero15/payroll-management-system-java",
    },
    src: pmsJavaPreview,
    description: "Payroll management system made in Java.",
    techs: [
      "Java",
      "Nimbus Look and Feel",
      "Notepad as database (my professor strictly instructed)",
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
    description: "My old portfolio using no libraries/frameworks.",
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
    description: "React Quiz App.",
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
      "Simple movie app I learned from Udemy. I learned how to use hooks and fundamentals of React.js.",
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
    description: "Note taking app.",
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
      "Google calendar scheduling appointment (Please do not submit).",
    techs: ["HTML", "CSS", "Figma", "Google Calendar API", "Git", "GitHub"],
  },
  {
    title: "Basic Calculator",
    category: "personal",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/simple-calculator-js",
      liveLink: "https://ronjacobdinero15.github.io/simple-calculator-js/",
    },
    src: basicCalculatorPreview,
    description: "Simple calculator.",
    techs: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
  },
  {
    title: "Etch-a-Sketch",
    category: "personal",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/etch-a-sketch",
      liveLink: "https://ronjacobdinero15.github.io/etch-a-sketch/",
    },
    src: etchASketchPreview,
    description: "Random tutorial & challenge online (1).",
    techs: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
  },
  {
    title: "Rock Paper Scissor",
    category: "personal",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/rock-paper-scissor-game",
      liveLink: "https://ronjacobdinero15.github.io/rock-paper-scissor-game/",
    },
    src: rpsPreview,
    description: "Random tutorial & challenge online (2).",
    techs: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
  },
  {
    title: "Eat n Split",
    category: "udemy",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/eat-n-split",
      liveLink: "https://ronjacobdinero15.github.io/eat-n-split/",
    },
    src: eatNSplitPreview,
    description: "Bill splitting.",
    techs: ["React.js"],
  },
  {
    title: "Basic todo list.",
    category: "udemy",
    links: {
      repoLink: "https://github.com/ronjacobdinero15/travel-list",
      liveLink: "https://ronjacobdinero15.github.io/travel-list/",
    },
    src: basicTodoListPreview,
    description: "Simple todo list in React.",
    techs: ["React.js"],
  },
]

function Projects() {
  const [toggleMoreProjects, setToggleMoreProjects] = useState(false)
  const searchParams = useSearchParams()

  const activeTab = searchParams.get("tab") || "all"
  const filteredProjects = useMemo(
    () =>
      activeTab === "all"
        ? PROJECT_LIST
        : activeTab === "personal"
          ? PROJECT_LIST.filter((project) => project.category === "personal")
          : activeTab === "figma"
            ? PROJECT_LIST.filter((project) => project.category === "figma")
            : PROJECT_LIST.filter((project) => project.category === "udemy"),
    [activeTab],
  )

  const PROJECTS =
    !toggleMoreProjects && filteredProjects.length > 4
      ? filteredProjects.slice(0, 4)
      : filteredProjects

  return (
    <Section id="projects" className="scroll-mt-16">
      <SectionLink sectionName="projects" even />

      <Reveal width="w-full">
        <ProjectsTab
          tabLabels={[
            { id: "all", label: "All" },
            {
              id: "personal",
              label: "Personal",
            },
            {
              id: "figma",
              label: "Figma",
            },
            {
              id: "udemy",
              label: "Udemy",
            },
          ]}
        />
      </Reveal>

      <ul className="columns-1 gap-8 md:columns-2">
        {PROJECTS.map((project, idx) => (
          <Project key={idx} project={project} />
        ))}
      </ul>

      {filteredProjects.length > 4 && (
        <ViewMoreProjectsBtn
          toggleMoreProjects={toggleMoreProjects}
          setToggleMoreProjects={setToggleMoreProjects}
        />
      )}
    </Section>
  )
}

export default Projects
