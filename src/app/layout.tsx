import TabAttentionHandler from "@/components/tab-attention-handler"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import BackgroundAnimations from "@/components/background-animations"

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
      <body
        className={`${montserrat.variable} bg-primary-500 relative overflow-x-hidden text-stone-100 antialiased`}
      >
        <TabAttentionHandler originalTitle="Ron Jacob | Personal Portfolio">
          {children}
        </TabAttentionHandler>

        <BackgroundAnimations />
      </body>
    </html>
  )
}
