"use client"

import NavLink from "@/components/nav-link"
import { useOutsideClick } from "@/hooks/useOutsideClick"
import { useState } from "react"

const SECTIONS = ["ABOUT", "PROJECTS", "EXPERIENCE", "CONTACT"]

function NavList() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev)
  const ulRef = useOutsideClick<HTMLUListElement>(
    () => setIsMenuOpen(false),
    true,
    "menu",
  )
  return (
    <nav className="relative flex items-center">
      <div
        className={`menu [&>span]:bg-accent-500 md:hidden ${
          isMenuOpen ? "open [&>span]:!bg-red-600" : ""
        }`}
        onClick={handleToggleMenu}
      >
        <span />
        <span />
        <span />
      </div>

      <ul
        ref={ulRef}
        className={`bg-primary-500/90 right-1 z-50 w-36 items-center space-y-2 pl-3 transition-all md:flex md:w-auto md:space-y-0 md:gap-x-8 md:bg-transparent md:pl-0 ${
          isMenuOpen
            ? "border-primary-300/95 absolute top-10 w-32 rounded-lg border-[1px] py-2 md:static md:w-auto md:space-y-0 md:border-none"
            : "hidden"
        }`}
      >
        {SECTIONS.map((section) => (
          <NavLink
            key={section}
            sectionName={section}
            handleToggleMenu={handleToggleMenu}
          />
        ))}
      </ul>
    </nav>
  )
}

export default NavList
