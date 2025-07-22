"use client"

import Link from "next/link"
import { HiOutlineHome } from "react-icons/hi2"

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-4">
      <div className="max-w-2xl space-y-8 text-center">
        {/* 404 Number with gradient */}
        <div className="relative">
          <h1 className="text-primary-300/20 text-9xl font-bold select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="gradient-highlight text-6xl font-bold">Oops!</span>
          </div>
        </div>

        {/* Error message */}
        <div className="space-y-4">
          <h2 className="text-primary-100 text-3xl font-bold">
            Page Not Found
          </h2>
          <p className="text-primary-200/80 text-lg leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist. It might have
            been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <Link
            href="/"
            className="btn-outline group hover:text-accent-500 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-colors duration-100"
          >
            <HiOutlineHome className="size-5" />
            Go Home
          </Link>
        </div>

        {/* Decorative element */}
        <div className="pt-8">
          <div className="from-accent-300 to-accent-500 mx-auto h-1 w-24 rounded-full bg-gradient-to-r opacity-60" />
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="bg-accent-500/5 absolute top-1/4 left-1/4 h-64 w-64 rounded-full blur-3xl" />
        <div className="bg-accent-400/3 absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full blur-3xl" />
      </div>
    </div>
  )
}
