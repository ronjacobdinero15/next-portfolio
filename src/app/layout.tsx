import Footer from "@/components/footer"
import Header from "@/components/header"
import Links from "@/components/links"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import TabAttentionHandler from "@/components/tab-attention-handler"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
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
      <TabAttentionHandler originalTitle="Ron Jacob | Personal Portfolio">
        <body
          className={`${montserrat.variable} bg-primary-500 overflow-x-hidden text-stone-100 antialiased`}
        >
          <Header />
          <main className="container">
            <div>{children}</div>
            <Links />
          </main>
          <Footer />
        </body>
      </TabAttentionHandler>
    </html>
  )
}
