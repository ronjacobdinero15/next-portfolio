import Button from "@/components/button"
import LinkBtn from "@/components/link-btn"
import Reveal from "@/components/reveal"
import Text from "@/components/text"
import UnderlineIcon from "@/public/images/icons/underline.svg"
import { HiOutlineRocketLaunch } from "react-icons/hi2"
import DownloadIcon from "@/public/images/icons/download.svg"
import Section from "@/components/section"

function Intro() {
  return (
    <Section className="h-dvh gap-y-1 md:items-center">
      <Reveal>
        <Text size="h3" className="gradient-highlight font-semibold">
          Hello World! I Am
        </Text>
      </Reveal>

      <Reveal>
        <div className="flex font-bold">
          <Text size="h1">Ron Jacob</Text>
          <Text size="h1" className="hidden sm:ml-3 sm:inline">
            Dinero
          </Text>
          <Text size="h1" className="text-accent-500 pl-[2px] text-4xl">
            .
          </Text>
        </div>
      </Reveal>

      <Reveal>
        <Text size="h1" className="gradient-highlight font-bold">
          Full-Stack Developer
        </Text>
      </Reveal>

      <Reveal>
        <UnderlineIcon
          className="inline-block h-8 w-auto max-w-full"
          aria-label="underline art"
        />
      </Reveal>

      <Reveal>
        <Text className="my-3 max-w-3xl leading-7 text-stone-200 md:text-center">
          I am a graduating student from the course of Computer Science from
          EAC-Cavite, Philippines. I am mostly self-taught developer focusing on
          web technologies especially Next.js. I enjoy creating web applications
          and solving complexities. I am also learning everyday something new
          and constantly improving my code and myself.
        </Text>
      </Reveal>

      <div className="flex items-center gap-4 md:gap-6">
        <Reveal>
          <LinkBtn href="#contact" className="resumeBtn">
            <Text>Let&apos;s connect</Text>
            <HiOutlineRocketLaunch className="size-6" />
          </LinkBtn>
        </Reveal>

        <Reveal>
          <Button variant="outline">
            <Text>My Resume</Text>
            <DownloadIcon className="text-accent-500 size-7 group-hover:text-current" />
          </Button>
        </Reveal>
      </div>
    </Section>
  )
}
export default Intro
