import Reveal from "@/components/reveal"
import Text from "@/components/text"
import Link from "next/link"

type NavLinkProps = {
  sectionName: string
  handleToggleMenu: () => void
}

function NavLink({ sectionName, handleToggleMenu }: NavLinkProps) {
  return (
    <li className={`flex h-8 items-center rounded-lg`}>
      <Reveal>
        <Link
          className={`navLink hover:text-accent-500 w-full tracking-wide transition-colors ease-in-out`}
          href={`#${sectionName.toLowerCase()}`}
          onClick={handleToggleMenu}
        >
          <Text className="font-medium">{sectionName}</Text>
        </Link>
      </Reveal>
    </li>
  )
}

export default NavLink
