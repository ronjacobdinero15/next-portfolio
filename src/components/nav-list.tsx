"use client"

import NavLink from "@/components/nav-link"
import { useState } from "react"

const SECTIONS = ["ABOUT", "PROJECTS", "EXPERIENCE"]

function NavList() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev)

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

      <div
        className={`fixed inset-0 top-[127px] z-30 bg-red-500/50 transition-opacity duration-300 md:top-[107.98px] ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={handleToggleMenu}
      />

      <ul
        className={`right-1 w-36 space-y-2 pl-3 transition-all md:flex md:w-auto md:space-y-0 md:gap-x-8 md:pl-0 ${
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
