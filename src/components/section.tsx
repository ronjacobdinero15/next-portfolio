type SectionProps = {
  id?: "intro" | "about" | "projects" | "experience" | "contact"
  children: React.ReactNode
  className?: string
}

function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`flex flex-col justify-center tracking-wide ${className} scroll-mt-16`}
    >
      {children}
    </section>
  )
}
export default Section
