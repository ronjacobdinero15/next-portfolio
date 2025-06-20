type TextProps = {
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  className?: string
  children: React.ReactNode
}

function Text({ size = "h4", className, children }: TextProps) {
  const sizes = {
    h1: " text-5xl md:text-6xl",
    h2: " text-3xl md:text-4xl",
    h3: " text-lg",
    h4: " text-base",
    h5: " text-sm",
    h6: " text-xs",
  }

  return <p className={`${sizes[size]} ${className}`}>{children}</p>
}
export default Text
