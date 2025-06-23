import { StaticImageData } from "next/image"

export type ProjectType = {
  title: string
  category: "personal" | "figma" | "udemy"
  links?: {
    videoLink?: string
    repoLink?: string
    liveLink?: string
  }
  src: StaticImageData
  description: string
  techs: string[]
}

export type ExperienceType = {
  companyName: string
  companyLogo: StaticImageData
  employmentType: string
  jobTitle: string
  dateWorked: string
  workedLength: string
  description: string
  skillsUsed: string[]
}
