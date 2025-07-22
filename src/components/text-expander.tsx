"use client"

import Text from "@/components/text"
import { useState } from "react"
import { HiChevronDown, HiChevronUp } from "react-icons/hi2"

type TextExpanderProps = {
  children: string
  className?: string
}

function TextExpander({ children, className }: TextExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, 16).join(" ") + "..."

  return (
    <Text className={className}>
      {displayText}{" "}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-muted-foreground inline-flex cursor-pointer items-center gap-1 font-semibold"
      >
        <span>{isExpanded ? " Show less" : "  Show more"}</span>
        {isExpanded ? <HiChevronUp /> : <HiChevronDown />}
      </button>
    </Text>
  )
}

export default TextExpander
