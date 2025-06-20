import Link from "next/link"

type LinkBtnProps = {
  href: string
  children: React.ReactNode
  className?: string
}

function LinkBtn({ href, children, className }: LinkBtnProps) {
  return (
    <Link
      href={href}
      className={`bg-accent-600 hover:bg-accent-600/70 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md px-6 text-sm font-medium !tracking-normal text-nowrap whitespace-nowrap shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ${className}`}
    >
      {children}
    </Link>
  )
}
export default LinkBtn
