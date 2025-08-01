import Section from "@/components/section"
import SectionLink from "@/components/section-link"
import Experience from "@/components/experience"
import { ExperienceType } from "@/constants/types"

const EXPERIENCES: ExperienceType[] = [
  {
    companyName: "JVL Electronics",
    employmentType: "Freelance",
    jobTitle: "Full Stack Developer",
    dateWorked: "May 2025 - Aug 2025",
    workedLength: "4 mos",
    description: [
      "Designed modern and intuitive user interfaces and wireframes using Figma.",
      "Built using Next.js for the customer storefront to optimize SEO performance and initial page load speeds, while implemented Vite for the admin dashboard for better user experience.",
      "Integrated Medusa.js headless commerce platform for the admin panel for faster development.",
    ],
    skillsUsed: [
      "Next.js",
      "Vite",
      "Medusa.js",
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
    jobTitle: "Frontend Developer | UI/UX Designer",
    dateWorked: "Jun 2024 - Sep 2024",
    workedLength: "4 mos",
    description: [
      "Redesigned and implemented user interfaces for the company's internal systems.",
      "Conducted user research to identify clients needs and preferences and translated into design solutions.",
      "Developed the company's appointment web application system using Google Calendar API to automate event scheduling between the clients and the CEO.",
    ],
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
