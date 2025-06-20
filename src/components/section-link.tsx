import Reveal from "@/components/reveal"
import Text from "@/components/text"
import Link from "next/link"
import { HiLink } from "react-icons/hi2"

type SectionLinkProps = {
  sectionName: string
  even?: boolean
}

function SectionLink({ sectionName, even = false }: SectionLinkProps) {
  const firstWord = sectionName.split(" ")[0].toLowerCase()

  return (
    <div
      className={`group mb-3 flex items-center gap-2 ${
        even && "flex-row-reverse"
      }`}
    >
      <div className="after:text-accent-500 flex items-center font-bold tracking-wide text-nowrap capitalize transition-colors after:pb-3 after:text-5xl after:content-['.']">
        <Reveal width="w-full">
          <Text size="h2">{sectionName}</Text>
        </Reveal>
      </div>

      <Link href={`#${firstWord}`}>
        <HiLink className="text-primary-300 hover:text-accent-500 size-5 cursor-pointer transition-colors group-hover:visible sm:invisible" />
      </Link>

      <div className="bg-accent-500 h-[1px] w-full rounded-full" />
    </div>
  )
}

export default SectionLink
