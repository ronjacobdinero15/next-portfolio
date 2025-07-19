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
            className="rounded-md object-cover select-none"
            alt={project.title}
            priority={false}
            sizes="(min-width: 768px) 40vw, (min-width: 640px) 512px, 80vw"
          />
        </div>
        <div className="space-y-1 text-start">
          <div className="group flex items-center justify-between">
            <Text
              size="h3"
              className="group-hover:text-accent-500 font-semibold transition-colors duration-100"
            >
              {project.title}
            </Text>

            {project?.links && (
              <ul className="group flex items-center gap-2">
                {Object.entries(project.links).map(([key, value], idx) => (
                  <li key={idx} className="size-6">
                    <Link
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="[&>svg]:hover:!fill-accent-500 hover:!text-accent-500 [&>svg]:size-full [&>svg]:!fill-white [&>svg]:transition-colors [&>svg]:duration-100"
                    >
                      {LINK_ICONS[key]}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Text className="text-stone-300 lg:leading-7">
            {project.description}
          </Text>
        </div>
        <div>
          <ul className="flex flex-wrap gap-2">
            {project.techs.map((tech, idx) => (
              <li
                key={idx}
                className="bg-primary-400/50 border-primary-400 rounded-md border px-2 py-1 select-none md:px-3 md:py-2"
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
