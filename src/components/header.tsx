import NavList from "@/components/nav-list"
import LogoIcon from "@/public/logo.svg"
import Link from "next/link"

function Header() {
  return (
    <header
      id="intro"
      className="bg-primary-500/50 fixed inset-x-0 top-0 z-50 container backdrop-blur-sm"
    >
      <div className="flex h-16 items-center justify-between">
        <Link href="#intro">
          <LogoIcon className="size-10" aria-label="Ron Jacob portfolio logo" />
        </Link>

        <NavList />
      </div>
    </header>
  )
}
export default Header
