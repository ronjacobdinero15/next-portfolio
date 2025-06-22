import Text from "@/components/text"
import { ProjectType } from "@/constants/types"
import Image from "next/image"

type ProjectProps = {
  project: ProjectType
}

function Project({ project }: ProjectProps) {
  return (
    <li className="relative mb-10 grid w-full break-inside-avoid-column place-items-center space-y-2">
      <div className="projectBg" />
      <div className="w-full max-w-lg space-y-2">
        <div className="relative mt-10 aspect-video">
          <Image
            fill
            src={project.src}
            className="rounded-md object-cover"
            alt={project.title}
            priority={false}
          />
        </div>
        <div className="space-y-1 text-start">
          <Text size="h3" className="font-semibold">
            {project.title}
          </Text>
          <Text>{project.description}</Text>
        </div>
        <div>
          <ul className="flex flex-wrap gap-2">
            {project.techs.map((tech, idx) => (
              <li
                key={idx}
                className="bg-primary-400/50 rounded-md px-2 py-1 md:px-3 md:py-2"
              >
                <Text size="h5">{tech}</Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

export default Project
