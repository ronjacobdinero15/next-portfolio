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
        <Reveal>
          <Text size="h2" className="text-accent-500 font-bold">
            {exp.jobTitle}
          </Text>
        </Reveal>

        <Reveal>
          <Text size="h3">
            {exp.companyName} <span className="text-accent-500">·</span>{" "}
            {exp.employmentType}
          </Text>
        </Reveal>

        <Reveal>
          <Text className="text-stone-300">
            {exp.dateWorked} | {exp.workedLength}
          </Text>
        </Reveal>

        <Reveal>
          <Text className="text-stone-300 lg:leading-7">{exp.description}</Text>
        </Reveal>

        <Reveal>
          <ul className="5 mt-2 flex flex-wrap gap-2">
            {exp.skillsUsed.map((skill: string) => (
              <li
                key={skill}
                className="bg-primary-400/50 border-primary-400 rounded-md border px-2 py-1 select-none md:px-3 md:py-2"
              >
                <Text>{skill}</Text>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </li>
  )
}

export default Experience
