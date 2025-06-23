import Section from "@/components/section"
import SectionLink from "@/components/section-link"
import Experience from "@/components/experience"
import { ExperienceType } from "@/constants/types"
import rocLogo from "@/assets/images/experience/roc.jpg"
import jvlLogo from "@/assets/images/experience/jvl.png"

const EXPERIENCES: ExperienceType[] = [
  {
    companyName: "JVL Electronics",
    companyLogo: jvlLogo,
    employmentType: "Freelance",
    jobTitle: "Full Stack Developer | UI/UX Designer",
    dateWorked: "May 2025 - July 2025",
    workedLength: "3 mos",
    description: "Freelancing for JVL Electronics.",
    skillsUsed: [
      "Next.js",
      "React.js",
      "Supabase",
      "Prisma",
      "TypeScript",
      "Tailwind",
      "Figma",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
    ],
  },
  {
    companyName: "ROC.PH Digital Marketing Services",
    companyLogo: rocLogo,
    employmentType: "Internship",
    jobTitle: "Frontend Developer | UI/UX Designer",
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
    <Section id="experience">
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
