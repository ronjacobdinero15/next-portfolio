import About from "@/components/about"
import Contact from "@/components/contact"
import Experiences from "@/components/experiences"
import Intro from "@/components/intro"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </>
  )
}
