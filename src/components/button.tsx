import { ButtonHTMLAttributes } from "react"

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "small"
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button({
  variant = "primary",
  className,
  children,
  size = "default",
  ...props
}: ButtonProps) {
  const variants = {
    primary: " bg-accent-600 md:hover:bg-accent-600/70",
    secondary:
      " bg-primary-400/50 md:hover:text-primary-400 md:hover:bg-accent-500 border border-primary-400",
    outline: " border border-accent-500 !text-accent-500 hover:bg-accent-900  ",
  }

  const sizes = {
    default: " px-6",
    small: " px-3.5 py-1.5",
  }

  return (
    <button
      className={`focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium !tracking-normal text-nowrap whitespace-nowrap shadow-xs transition-all outline-none select-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-4 md:cursor-pointer [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
