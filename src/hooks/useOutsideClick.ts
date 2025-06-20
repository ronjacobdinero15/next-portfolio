import { useEffect, useRef } from "react"

export function useOutsideClick<T extends HTMLElement>(
  handler: () => void,
  listenCapturing: boolean = true,
  excludeClass?: string,
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (
        ref.current &&
        !ref.current.contains(target) &&
        !(excludeClass && target.closest(`.${excludeClass}`))
      ) {
        handler()
      }
    }

    document.addEventListener("click", handleClick, listenCapturing)
    return () =>
      document.removeEventListener("click", handleClick, listenCapturing)
  }, [handler, listenCapturing, excludeClass])

  return ref
}
