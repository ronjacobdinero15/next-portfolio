import { ButtonHTMLAttributes } from "react"

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline"
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: " bg-accent-600 md:hover:bg-accent-600/70",
    secondary:
      " bg-primary-400/50 md:hover:text-primary-400 md:hover:bg-accent-500",
    outline: " border border-accent-500 !text-accent-500 hover:bg-accent-900  ",
  }
  /*   const styles = {
    primary:
      base +
      " sm:group-hover:text-primary-400 sm:group-hover:bg-accent-500 hover:bg-accent-500 bg-primary-400 sm:px-4 sm:py-2 px-3 py-[6px]",
    contact:
      base +
      " contactBtn gap-x-2 bg-accent-500 hover:bg-accent-600 px-5 py-2 text-stone-100 focus:bg-accent-600 ",
    projectToggle: base + " mx-auto my-5 px-2 pb-3 pt-5 focus:!ring-0",
    na: "cursor-not-allowed rounded-lg bg-red-500 px-4 py-2 transition-colors hover:bg-red-600 focus:bg-red-600 focus:outline-none",
  } */

  return (
    <button
      className={`focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-md px-6 text-sm font-medium !tracking-normal text-nowrap whitespace-nowrap shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-4 md:cursor-pointer [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
