import Reveal from "@/components/reveal"
import Section from "@/components/section"
import SectionLink from "@/components/section-link"
import Technologies from "@/components/technologies"
import Text from "@/components/text"

function About() {
  return (
    <Section id="about" className="mb-40 scroll-mt-12 lg:h-dvh lg:scroll-mt-0">
      <SectionLink sectionName="About Me" />

      <div className="grid gap-5 text-pretty lg:grid-cols-2">
        <div>
          <Reveal>
            <Text className="first-letter first-letter:bg-accent-600 leading-7 first-letter:float-left first-letter:mr-2 first-letter:rounded-sm first-letter:p-2 first-letter:text-2xl first-letter:font-bold">
              Versatile Full Stack Developer with expertise in building scalable
              digital solutions across web and mobile platforms. Proficient in
              modern JavaScript frameworks including Next.js, TypeScript,
              React.js, and React Native (Expo), building full-stack
              applications with Supabase, MySQL, and PHP.
            </Text>
          </Reveal>

          <br />

          <Reveal>
            <Text className="leading-7">
              I am self-motivated, flexible, diligent, and cool under pressure —
              always learning new technologies and focused. I thrive in
              fast-paced environments where technical excellence meets business
              needs.
            </Text>
          </Reveal>

          <br />
        </div>

        <Technologies />
      </div>
    </Section>
  )
}

export default About
