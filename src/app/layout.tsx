import Footer from "@/components/footer"
import Header from "@/components/header"
import Links from "@/components/links"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import TabAttentionHandler from "@/components/tab-attention-handler"

const spaceMono = localFont({
  variable: "--font-space-mono",
  src: [
    {
      path: "../../public/fonts/spacemono-italic.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/spacemono-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/spacemono-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
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
          className={`${spaceMono.variable} bg-primary-500 overflow-x-hidden text-stone-100 antialiased`}
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
