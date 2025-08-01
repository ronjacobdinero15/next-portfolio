type SectionProps = {
  id?:
    | "intro"
    | "about"
    | "projects"
    | "experience"
    | "certifications"
    | "contact"
  children: React.ReactNode
  className?: string
}

function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`flex flex-col justify-center tracking-wide ${className}`}
    >
      {children}
    </section>
  )
}
export default Section
