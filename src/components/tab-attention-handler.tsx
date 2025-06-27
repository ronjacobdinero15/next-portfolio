"use client"

import { useEffect } from "react"

export default function TabAttentionHandler({
  children,
  originalTitle,
}: {
  children: React.ReactNode
  originalTitle: string
}) {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "I miss you💞!"
      } else {
        document.title = "You're back! 😊"
        setTimeout(() => {
          document.title = originalTitle
        }, 1000)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [originalTitle])

  return <>{children}</>
}
