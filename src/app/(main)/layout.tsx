import Footer from "@/components/footer"
import Header from "@/components/header"
import Links from "@/components/links"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      {" "}
      <Header />
      <main className="container">
        <div>{children}</div>
        <Links />
      </main>
      <Footer />
    </main>
  )
}
