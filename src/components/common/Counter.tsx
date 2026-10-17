"use client"
import { useEffect, useRef, useState } from "react"

interface CounterProps {
   value: number;
   suffix?: string;
   prefix?: string;
   duration?: number;
}

const format = (n: number) => n.toLocaleString("en-US")

// Counts up from 0 when scrolled into view (instant with reduced motion).
const Counter = ({ value, suffix = "", prefix = "", duration = 1800 }: CounterProps) => {
   const ref = useRef<HTMLSpanElement>(null)
   const [display, setDisplay] = useState(0)

   useEffect(() => {
      const el = ref.current
      if (!el) return
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
         setDisplay(value)
         return
      }
      let frame = 0
      const io = new IntersectionObserver(([entry]) => {
         if (!entry.isIntersecting) return
         io.disconnect()
         const start = performance.now()
         const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - t, 3)
            setDisplay(Math.round(value * eased))
            if (t < 1) frame = requestAnimationFrame(tick)
         }
         frame = requestAnimationFrame(tick)
      }, { threshold: 0.4 })
      io.observe(el)
      return () => {
         io.disconnect()
         cancelAnimationFrame(frame)
      }
   }, [value, duration])

   return (
      <span ref={ref} className="ge-counter">
         <span aria-hidden="true">{prefix}{format(display)}{suffix}</span>
         <span className="visually-hidden">{prefix}{format(value)}{suffix}</span>
      </span>
   )
}

export default Counter
