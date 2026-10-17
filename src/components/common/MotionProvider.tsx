"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Global motion runtime (replaces WOW.js):
 *  - reveals `.wow` elements with their animate.css animation when they scroll into view,
 *    honouring `data-wow-delay` / `data-wow-duration`;
 *  - drives the cursor spotlight on `.spotlight` cards via --mx / --my;
 *  - updates the scroll progress bar (--ge-progress on <html>).
 * With prefers-reduced-motion everything is shown immediately.
 */
const MotionProvider = () => {
   const pathname = usePathname()

   useEffect(() => {
      const root = document.documentElement
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      root.classList.add("js-motion")

      const reveal = (el: HTMLElement) => {
         if (el.dataset.wowDone) return
         el.dataset.wowDone = "1"
         if (!reduce) {
            if (el.dataset.wowDelay) el.style.animationDelay = el.dataset.wowDelay
            if (el.dataset.wowDuration) el.style.animationDuration = el.dataset.wowDuration
            el.classList.add("animated")
         }
         el.classList.add("is-visible")
      }

      const io = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  reveal(entry.target as HTMLElement)
                  io.unobserve(entry.target)
               }
            })
         },
         { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      )

      const scan = (scope: ParentNode) => {
         scope.querySelectorAll<HTMLElement>(".wow:not([data-wow-done])").forEach((el) => {
            if (reduce) reveal(el)
            else io.observe(el)
         })
      }
      scan(document)

      // Pick up elements rendered later (tabs, client components, route changes).
      const mo = new MutationObserver((mutations) => {
         for (const m of mutations) {
            m.addedNodes.forEach((n) => {
               if (n instanceof HTMLElement) {
                  if (n.matches(".wow")) scan(n.parentElement ?? document)
                  else scan(n)
               }
            })
         }
      })
      mo.observe(document.body, { childList: true, subtree: true })

      const onPointer = (e: PointerEvent) => {
         const card = (e.target as HTMLElement | null)?.closest<HTMLElement>(".spotlight")
         if (!card) return
         const r = card.getBoundingClientRect()
         card.style.setProperty("--mx", `${e.clientX - r.left}px`)
         card.style.setProperty("--my", `${e.clientY - r.top}px`)
      }

      let ticking = false
      const onScroll = () => {
         if (ticking) return
         ticking = true
         requestAnimationFrame(() => {
            const max = root.scrollHeight - window.innerHeight
            root.style.setProperty("--ge-progress", max > 0 ? String(window.scrollY / max) : "0")
            ticking = false
         })
      }

      document.addEventListener("pointermove", onPointer, { passive: true })
      window.addEventListener("scroll", onScroll, { passive: true })
      onScroll()

      return () => {
         io.disconnect()
         mo.disconnect()
         document.removeEventListener("pointermove", onPointer)
         window.removeEventListener("scroll", onScroll)
      }
   }, [pathname])

   return <div className="ge-progress" aria-hidden="true" />
}

export default MotionProvider
