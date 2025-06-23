import Text from "@/components/text"
import { ProjectType } from "@/constants/types"
import RecordingIcon from "@/assets/images/icons/recording.svg"
import Image from "next/image"
import Link from "next/link"
import { FaGithubAlt } from "react-icons/fa"
import { RxExternalLink } from "react-icons/rx"

type ProjectProps = {
  project: ProjectType
}

const LINK_ICONS: Record<string, React.JSX.Element> = {
  repoLink: <FaGithubAlt />,
  liveLink: <RxExternalLink />,
  videoLink: <RecordingIcon />,
}

function Project({ project }: ProjectProps) {
  return (
    <li className="relative mb-10 grid w-full break-inside-avoid-column place-items-center space-y-2 text-pretty">
      <div className="projectBg -z-10" />
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
          <div className="flex items-center justify-between">
            <Text size="h3" className="font-semibold">
              {project.title}
            </Text>

            {project?.links && (
              <ul className="flex items-center gap-2">
                {Object.entries(project.links).map(([key, value], idx) => (
                  <li key={idx} className="size-6">
                    <Link
                      href={value}
                      target="_blank"
                      className="[&>svg]:hover:!fill-accent-500 hover:!text-accent-500 [&>svg]:size-full [&>svg]:!fill-white [&>svg]:transition-colors"
                    >
                      {LINK_ICONS[key]}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
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
