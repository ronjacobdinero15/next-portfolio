import Text from "@/components/text"
import Link from "next/link"

type NavLinkProps = {
  sectionName: string
  handleToggleMenu: () => void
}

function NavLink({ sectionName, handleToggleMenu }: NavLinkProps) {
  return (
    <li className={`flex h-8 items-center rounded-lg`}>
      <Link
        className={`navLink hover:text-accent-500 w-full tracking-wide transition-colors duration-300 ease-in-out`}
        href={`#${sectionName}`}
        onClick={handleToggleMenu}
      >
        <Text className="font-medium">{sectionName}</Text>
      </Link>
    </li>
  )
}

export default NavLink
