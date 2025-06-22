import Button from "@/components/button"
import Reveal from "@/components/reveal"
import Section from "@/components/section"
import SectionLink from "@/components/section-link"
import Text from "@/components/text"
import {
  FaBootstrap,
  FaCss3Alt,
  FaFacebookSquare,
  FaFigma,
  FaGitAlt,
  FaGithubAlt,
  FaHtml5,
  FaJava,
  FaLinkedin,
  FaReact,
} from "react-icons/fa"
import { HiOutlineCpuChip } from "react-icons/hi2"
import { IoArrowRedoOutline, IoLogoJavascript } from "react-icons/io5"
import { RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri"
import {
  SiExpo,
  SiMysql,
  SiPhp,
  SiPhpmyadmin,
  SiPrisma,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
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
    name: "Prisma",
    icon: <SiPrisma />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Supabase",
    icon: <RiSupabaseFill />,
  },
  {
    name: "phpMyAdmin",
    icon: <SiPhpmyadmin />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "Zustand",
  },

  {
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "React Native",
    icon: <FaReact />,
  },
  {
    name: "Expo",
    icon: <SiExpo />,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript />,
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
    name: "Redux/RTK",
    icon: <SiRedux />,
  },
  {
    name: "GitHub",
    icon: <FaGithubAlt />,
  },

  {
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "Figma",
    icon: <FaFigma />,
  },
  {
    name: "styled-components",
    icon: <SiStyledcomponents />,
  },
  {
    name: "React Query",
    icon: <SiReactquery />,
  },
  {
    name: "React Router",
    icon: <SiReactrouter />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
  },
  {
    name: "PHP",
    icon: <SiPhp />,
  },
]

function About() {
  return (
    // flex h-dvh flex-col justify-center gap-y-1 tracking-wide md:items-center
    <Section id="about" className="lg:h-dvh">
      <SectionLink sectionName="About Me" />

      <div className="grid gap-5 lg:grid-cols-2">
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
            <Text>
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
              <div className="[&_span]:text-accent-500 space-y-3">
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

          <Reveal>
            <div className="mt-5 flex items-center gap-3 [&_svg]:size-8">
              <div className="text-accent-500 flex items-center gap-3">
                <Text size="h3">My Links</Text>
                <IoArrowRedoOutline />
              </div>

              <div className="[&>a:hover]:text-accent-500 flex items-center gap-3 [&>a]:transition-colors [&>svg]:text-stone-100">
                <a
                  href="https://www.facebook.com/ronjacobdinero15/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://www.linkedin.com/in/ronjacobdinero/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/ronjacobdinero15"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubAlt />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <div className="mb-3 flex items-center gap-x-1">
              <HiOutlineCpuChip className="text-accent-500 size-8" />
              <span className="text-xl font-semibold">Tech Stack</span>
            </div>
          </Reveal>

          <div className="relative">
            <ul className="flex flex-wrap gap-2 py-2 md:max-w-xl lg:max-w-3/4">
              {TECH_STACK.map((tech) => (
                <li key={tech.name} className="group">
                  <span className="[&>svg]:!fill-primary-400/50 absolute top-2 right-0 bottom-16 -z-10 hidden md:group-hover:!block [&>svg]:size-52 [&>svg]:lg:size-52">
                    {tech?.icon && tech.icon}
                  </span>
                  <Reveal>
                    <Button variant="secondary">{tech.name}</Button>
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
