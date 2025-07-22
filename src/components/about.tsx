import Button from "@/components/button"
import Reveal from "@/components/reveal"
import Section from "@/components/section"
import SectionLink from "@/components/section-link"
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

function About() {
  return (
    <Section id="about" className="mb-40 scroll-mt-12 lg:h-dvh lg:scroll-mt-0">
      <SectionLink sectionName="About Me" />

      <div className="grid gap-5 text-pretty lg:grid-cols-2">
        <div>
          <Reveal>
            <Text className="first-letter first-letter:bg-accent-600 leading-7 first-letter:float-left first-letter:mr-2 first-letter:rounded-sm first-letter:p-2 first-letter:text-2xl first-letter:font-bold">
              Hi, my name is Ron Jacob Dinero but you can call me{" "}
              <span className="text-accent-500 font-semibold tracking-widest">
                RJ
              </span>{" "}
              for short. I am a self-taught and self motivated Full-Stack Web
              and Mobile Developer and UI/UX Designer. I specialize in modern
              web and mobile development.
            </Text>
          </Reveal>

          <br />

          <Reveal>
            <Text className="leading-7">
              I am passionate about building scalable, performant applications
              with clean and maintainable code.
            </Text>
          </Reveal>

          <br />

          <div className="space-y-1">
            <Reveal>
              <Text className="font-bold">Why Work With Me?</Text>
            </Reveal>

            <Reveal>
              <div className="[&_span]:text-accent-500 space-y-3 [&_span]:leading-7">
                <Text>
                  <span className="font-bold">Adaptable:</span> I am a very
                  flexible person, I quickly align with your needs.
                </Text>
                <Text>
                  <span className="font-bold">Detail-Oriented:</span> From
                  pixel-perfect designs to optimized backend logic, I sweat the
                  small stuff.
                </Text>
                <Text>
                  <span className="font-bold">Collaborative:</span> I believe
                  great products are built through teamwork and clear
                  communication.
                </Text>
              </div>
            </Reveal>
          </div>
        </div>

        <div>
          <Reveal>
            <Text size="h2" className="mb-3 font-bold">
              My Toolkit Stack
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
      </div>
    </Section>
  )
}

export default About
