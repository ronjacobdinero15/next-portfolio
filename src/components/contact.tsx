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
          <p className="text-accent-500 text-center text-2xl font-semibold shadow-md xl:text-3xl">
            Hit me up
          </p>
        </Reveal>

        <Reveal>
          <p className="after:text-accent-500 mb-2 text-6xl font-bold text-nowrap after:text-6xl after:content-['.'] sm:text-7xl sm:after:text-7xl lg:text-8xl lg:after:text-8xl">
            Contact Me
          </p>
        </Reveal>

        <Reveal>
          <Link
            href="mailto:ronjacobdinero15@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-1.5"
            aria-label="My email"
          >
            <HiEnvelope className="group-hover:fill-accent-500 hidden size-7 transition-colors duration-100 sm:block" />
            <span className="group-hover:text-accent-500 text-xl shadow-md transition-colors duration-100">
              ronjacobdinero15@gmail.com
            </span>
          </Link>
        </Reveal>

        <Image
          src={circlePattern}
          className="absolute top-1/2 left-1/2 -z-10 aspect-square max-w-[270px] -translate-x-1/2 -translate-y-1/2 opacity-75 select-none sm:max-w-[320px] lg:max-w-[400px]"
          alt=""
        />
      </div>
    </Section>
  )
}

export default Contact
