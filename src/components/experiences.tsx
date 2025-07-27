import Section from "@/components/section"
import SectionLink from "@/components/section-link"
import Experience from "@/components/experience"
import { ExperienceType } from "@/constants/types"

const EXPERIENCES: ExperienceType[] = [
  {
    companyName: "JVL Electronics",
    employmentType: "Freelance",
    jobTitle: "Full Stack Developer & UI/UX Designer",
    dateWorked: "June 2025 - Aug 2025",
    workedLength: "3 mos",
    description:
      "Freelance project for an e-commerce website selling Korean car parts.",
    skillsUsed: [
      "Next.js",
      "React.js",
      "Supabase",
      "Prisma",
      "TypeScript",
      "Tailwind",
      "Figma",
      "Zustand",
      "React Query",
      "Auth.js",
      "React Hook Form",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
    ],
  },
  {
    companyName: "ROC.PH Digital Marketing Services",
    employmentType: "Internship",
    jobTitle: "Frontend Developer & UI/UX Designer",
    dateWorked: "Jun 2024 - Jul 2024",
    workedLength: "2 mos",
    description:
      "Spent my college academic internship mostly working on web designs using Figma, and working on the company side-project to build an appointment web application system and integrate appointments to google calendar for both the client and our company CEO to google calendar for scheduled and notified events.",
    skillsUsed: [
      "Figma",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Google Calendar API",
      "Git",
      "GitHub",
    ],
  },
]

function Experiences() {
  return (
    <Section id="experience" className="scroll-mt-16 sm:h-dvh sm:scroll-mt-0">
      <SectionLink sectionName="Experience" />

      <ul className="divide-y-[0.5px] divide-stone-700">
        {EXPERIENCES.map((exp, idx) => (
          <Experience exp={exp} key={idx} />
        ))}
      </ul>
    </Section>
  )
}
export default Experiences
