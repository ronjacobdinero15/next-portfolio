import UnderlineIcon from "@/assets/images/icons/underline.svg"
import LinkBtn from "@/components/link-btn"
import Reveal from "@/components/reveal"
import Section from "@/components/section"
import Text from "@/components/text"
import { HiOutlineRocketLaunch } from "react-icons/hi2"
import { RxExternalLink } from "react-icons/rx"

function Intro() {
  return (
    <Section className="h-dvh gap-y-1 pt-5 md:items-center">
      <Reveal>
        <Text size="h3" className="gradient-highlight font-semibold">
          Hello World! I Am
        </Text>
      </Reveal>

      <Reveal>
        <div className="flex font-bold">
          <Text size="h0">Ron Jacob</Text>
          <Text size="h0" className="hidden sm:ml-3 sm:inline">
            Dinero
          </Text>
          <Text size="h0" className="text-accent-500 pl-[2px] text-4xl">
            .
          </Text>
        </div>
      </Reveal>

      <Reveal>
        <Text size="h0" className="gradient-highlight font-bold">
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
        <Text className="my-3 max-w-3xl leading-7 text-pretty text-stone-200 md:text-center">
          I am a graduating student from the course of Computer Science from
          EAC-Cavite, Philippines. I am mostly self-taught developer focusing on
          web technologies especially Next.js. I enjoy creating web applications
          and solving complexities. I am also learning everyday something new
          and constantly improving my code and myself.
        </Text>
      </Reveal>

      <div className="flex flex-col items-center gap-4 sm:flex-row md:w-2/4 md:gap-6">
        <Reveal width="w-full">
          <LinkBtn href="#contact" className="resumeBtn w-full">
            <Text>Let&apos;s Connect</Text>
            <HiOutlineRocketLaunch className="size-6" />
          </LinkBtn>
        </Reveal>

        <Reveal width="w-full">
          <LinkBtn
            href="./documents/resume.pdf"
            target="_blank"
            aria-label="My CV"
            rel="noopener noreferrer"
            variant="outline"
            className="flex w-full items-center"
          >
            <Text>My Resume</Text>
            <RxExternalLink className="text-accent-500 size-6 group-hover:text-current" />
          </LinkBtn>
        </Reveal>
      </div>

      <div></div>
    </Section>
  )
}
export default Intro
