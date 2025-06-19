import NavList from "@/components/nav-list"
import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="bg-primary-500/50 fixed inset-x-0 top-0 z-50 container backdrop-blur-sm">
      <div className="flex h-[72px] items-center justify-between">
        <Link href="#" className="outlineStyle transition ease-out">
          <Image
            className="size-10"
            width={30}
            height={30}
            src="/logo.svg"
            alt="Ron Jacob portfolio logo"
          />
        </Link>

        <NavList />
      </div>
    </header>
  )
}
export default Header
