import Reveal from "@/components/reveal"
import Link from "next/link"
import { FaFacebookSquare, FaGithubAlt, FaLinkedin } from "react-icons/fa"

function Links() {
  return (
    <div className="[&_a:hover]:text-accent-500 fixed right-10 bottom-0 hidden flex-col items-center gap-2 lg:flex [&_a]:transition-colors [&_svg]:size-7 [&_svg]:text-stone-100">
      <Reveal>
        <Link
          href="https://www.linkedin.com/in/ronjacobdinero/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>
      </Reveal>

      <Reveal>
        <Link
          href="https://github.com/ronjacobdinero15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubAlt />
        </Link>
      </Reveal>

      <Reveal>
        <Link
          href="https://www.facebook.com/ronjacobdinero15/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </Link>
      </Reveal>
      <div className="bg-accent-500 h-20 w-0.5" />
    </div>
  )
}
export default Links
