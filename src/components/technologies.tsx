import Button from "@/components/button"
import Reveal from "@/components/reveal"
import Text from "@/components/text"

import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithubAlt,
  FaHtml5,
  FaJava,
  FaReact,
} from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri"
import {
  SiExpo,
  SiMysql,
  SiPhp,
  SiPhpmyadmin,
  SiPrisma,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiShadcnui,
  SiStyledcomponents,
  SiTypescript,
  SiVite,
} from "react-icons/si"

const TECH_STACK = [
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "React.js",
    icon: <FaReact />,
  },
  {
    name: "React Native (Expo)",
    icon: <SiExpo />,
  },
  {
    name: "Supabase",
    icon: <RiSupabaseFill />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "Zustand",
  },
  {
    name: "Auth.js",
  },
  {
    name: "Prisma",
    icon: <SiPrisma />,
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "Redux/RTK",
    icon: <SiRedux />,
  },
  {
    name: "React Query",
    icon: <SiReactquery />,
  },
  {
    name: "React Hook Form",
    icon: <SiReacthookform />,
  },
  {
    name: "PHP",
    icon: <SiPhp />,
  },
  {
    name: "phpMyAdmin",
    icon: <SiPhpmyadmin />,
  },
  {
    name: "Figma",
    icon: <FaFigma />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "GitHub",
    icon: <FaGithubAlt />,
  },
  {
    name: "Vite",
    icon: <SiVite />,
  },
  {
    name: "ShadcnUI",
    icon: <SiShadcnui />,
  },
  {
    name: "Framer Motion",
  },
  {
    name: "styled-components",
    icon: <SiStyledcomponents />,
  },
  {
    name: "React Router",
    icon: <SiReactrouter />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript />,
  },
  {
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
  },
]

function Technologies() {
  return (
    <div>
      <Reveal>
        <Text size="h2" className="mb-3 font-bold">
          Technologies
        </Text>
      </Reveal>

      <div className="relative">
        <ul className="flex flex-wrap gap-2 py-2 md:max-w-xl lg:max-w-3/4">
          {TECH_STACK.map((tech) => (
            <li key={tech.name} className="group">
              <span className="[&>svg]:!fill-primary-400/50 absolute top-2 right-0 bottom-16 -z-10 hidden md:group-hover:!block [&>svg]:size-52 [&>svg]:lg:size-52">
                {tech?.icon && tech.icon}
              </span>
              <Reveal>
                <Button variant="secondary" size="small">
                  <Text size="h5">{tech.name}</Text>
                </Button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Technologies
