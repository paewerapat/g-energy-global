"use client"
import { ReactNode, useState } from "react"

// Wraps one or more logo marquees with a pause/play control (WCAG 2.2.2: moving content
// that lasts more than 5 seconds needs a way to stop it).
const MarqueeGroup = ({ children }: { children: ReactNode }) => {
   const [paused, setPaused] = useState(false)

   return (
      <div className={`ge-marquee-group ${paused ? "is-paused" : ""}`}>
         {children}
         <div className="ge-marquee-group__controls">
            <button
               type="button"
               className="ge-marquee-group__toggle"
               onClick={() => setPaused((p) => !p)}
               aria-pressed={paused}
               aria-label={paused ? "Play logo animation" : "Pause logo animation"}
               title={paused ? "Play" : "Pause"}
            >
               <i className={`fa-solid ${paused ? "fa-play" : "fa-pause"}`} aria-hidden="true"></i>
            </button>
         </div>
      </div>
   )
}

export default MarqueeGroup
