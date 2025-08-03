import Reveal from "@/components/reveal"
import Text from "@/components/text"
import Link from "next/link"

type NavLinkProps = {
  sectionName: string
  handleToggleMenu: () => void
}

function NavLink({ sectionName, handleToggleMenu }: NavLinkProps) {
  return (
    <li className={`flex h-8 items-center rounded-md`}>
      <Reveal>
        <Link
          className={`hover:text-accent-500 w-full tracking-wide transition-colors duration-100 ease-in-out focus:ring-0`}
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
