import Link, { LinkProps } from "next/link"

type LinkBtnProps = {
  variant?: "primary" | "outline"
} & React.PropsWithChildren<
  LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>

function LinkBtn({
  variant = "primary",
  href,
  children,
  className,
  ...props
}: LinkBtnProps) {
  const variants = {
    primary: " bg-accent-600 hover:bg-accent-600/70",
    outline: " border border-accent-500 !text-accent-500 hover:bg-accent-900",
  }

  return (
    <Link
      href={`${href}`}
      className={`inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md px-6 text-sm font-medium !tracking-normal text-nowrap whitespace-nowrap shadow-xs transition-all duration-100 select-none disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}
export default LinkBtn
