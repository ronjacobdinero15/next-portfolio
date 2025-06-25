"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Text from "@/components/text"

type ProjectsTabProps = {
  tabLabels: {
    id: string
    label: string
  }[]
}

export function ProjectsTab({ tabLabels }: ProjectsTabProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const activeTab = searchParams.get("tab") || tabLabels[0].id

  const handleTabChange = (tabId: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("tab", tabId)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="mb-3 justify-center sm:flex">
      <div className="tab-container bg-primary-400/50 [&_p]:text-white">
        {tabLabels.map((tab) => (
          <div key={tab.id} className="flex-1 sm:flex-none">
            <input
              type="radio"
              name="tab"
              id={tab.id}
              className="tab"
              checked={activeTab === tab.id}
              onChange={() => handleTabChange(tab.id)}
            />
            <label
              htmlFor={tab.id}
              className={`tab_label ${activeTab === tab.id ? "!opacity-100" : ""}`}
            >
              <Text>{tab.label}</Text>
            </label>
          </div>
        ))}

        <div
          className="indicator"
          style={{
            width: `calc(100% / ${tabLabels.length})`,
            left: `calc((100% / ${tabLabels.length}) * ${tabLabels.findIndex((t) => t.id === activeTab)})`,
          }}
        />
      </div>
    </div>
  )
}
