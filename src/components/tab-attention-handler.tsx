"use client"
import { useEffect, useRef } from "react"

export default function TabAttentionHandler({
  children,
  originalTitle,
}: {
  children: React.ReactNode
  originalTitle: string
}) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleVisibilityChange = () => {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }

      if (document.hidden) {
        // User left the tab
        document.title = "Let’s connect! 🤝"
      } else {
        // User returned to the tab
        document.title = "You're back! 😊"
        timeoutRef.current = setTimeout(() => {
          document.title = originalTitle
        }, 1000)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      // Clean up timeout on unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [originalTitle])

  return <>{children}</>
}
