"use client"

import NavList from "@/components/nav-list"
import LogoIcon from "@/public/logo.svg"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

function Header() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()

    // Set background when scrolled past 250px
    setIsScrolled(latest > 250)

    // Hide/show header logic
    if (latest > previous! && latest > 150) {
      setHidden(true)
      setIsMenuOpen(false)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      id="intro"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary-500/50 backdrop-blur-sm" : ""
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="#intro">
          <LogoIcon
            className="size-10 select-none"
            aria-label="Ron Jacob portfolio logo"
          />
        </Link>

        <NavList isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </motion.header>
  )
}
export default Header
