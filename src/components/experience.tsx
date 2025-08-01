import Reveal from "@/components/reveal"
import Text from "@/components/text"
import { ExperienceType } from "@/constants/types"

type ExperienceProps = {
  exp: ExperienceType
}

function Experience({ exp }: ExperienceProps) {
  return (
    <li className="py-5 tracking-wide text-pretty first:pt-0 last:pb-0 md:py-7">
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <Reveal>
            <Text size="h2" className="text-accent-500 font-bold">
              {exp.jobTitle}
            </Text>
          </Reveal>

          <Reveal className="hidden lg:block">
            <Text size="h3">
              {exp.dateWorked} | {exp.workedLength}
            </Text>
          </Reveal>
        </div>

        <Reveal>
          <Text size="h3">
            {exp.companyName} <span className="text-accent-500">·</span>{" "}
            {exp.employmentType}
          </Text>
        </Reveal>

        <Reveal className="lg:hidden">
          <Text>
            {exp.dateWorked} | {exp.workedLength}
          </Text>
        </Reveal>

        <div className="space-y-1.5 md:pl-5">
          <Reveal>
            <ul className="list-disc space-y-0.5 text-stone-300 lg:leading-7">
              {exp.description.map((desc, idx) => (
                <li key={idx} className="ml-4">
                  {desc}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <ul className="5 mt-2 flex flex-wrap gap-2">
              {exp.skillsUsed.map((skill: string) => (
                <li
                  key={skill}
                  className="bg-primary-400/50 border-primary-400 rounded-md border px-2 py-1 select-none md:px-2.5 md:py-1.5"
                >
                  <Text size="h5">{skill}</Text>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </li>
  )
}

export default Experience
