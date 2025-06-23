import Reveal from "@/components/reveal"
import Section from "@/components/section"
import circlePattern from "@/assets/images/miscellaneous/circle_pattern.png"
import Image from "next/image"
import Link from "next/link"
import { HiEnvelope } from "react-icons/hi2"

function Contact() {
  return (
    <Section id="contact" className="h-dvh !tracking-wide">
      <div className="relative grid place-items-center">
        <Reveal>
          <p className="text-accent-500 text-center text-xl font-semibold shadow-md sm:text-2xl xl:text-3xl">
            Hit me up
          </p>
        </Reveal>

        <Reveal>
          <p className="after:text-accent-500 flex items-center text-8xl font-bold text-nowrap after:pb-1 after:text-8xl after:content-['.']">
            Contact Me
          </p>
        </Reveal>

        <Reveal>
          <Link
            href="mailto:ronjacobdinero15@gmail.com"
            className="group flex items-center justify-center gap-1 focus:px-3 sm:gap-2 sm:text-xl"
          >
            <HiEnvelope className="group-hover:fill-accent-500 size-7 transition-colors sm:size-10" />
            <span className="group-hover:text-accent-500 shadow-md transition-colors">
              ronjacobdinero15@gmail.com
            </span>
          </Link>
        </Reveal>

        <Image
          src={circlePattern}
          className="absolute top-1/2 left-1/2 -z-10 aspect-square max-w-[250px] -translate-x-1/2 -translate-y-1/2 opacity-75 sm:max-w-[320px] xl:max-w-[500px]"
          alt=""
        />
      </div>
    </Section>
  )
}

export default Contact
