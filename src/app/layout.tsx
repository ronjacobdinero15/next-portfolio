import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: "Ron Jacob | Personal Portfolio",
  description: "Full-Stack Web Developer | UI/UX Designer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-primary-500 my-5 overflow-x-hidden text-stone-100 antialiased`}
      >
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
