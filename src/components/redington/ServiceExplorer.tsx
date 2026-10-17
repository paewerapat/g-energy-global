"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { redingtonServices } from "@/data/redington"

// Sticky in-page navigation (scroll-spy) + full list of every Redington service group.
const ServiceExplorer = () => {
   const [active, setActive] = useState(redingtonServices[0].slug)

   useEffect(() => {
      const sections = redingtonServices
         .map((s) => document.getElementById(s.slug))
         .filter((el): el is HTMLElement => !!el)
      const io = new IntersectionObserver(
         (entries) => {
            const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
            if (visible[0]) setActive(visible[0].target.id)
         },
         { rootMargin: "-30% 0px -60% 0px" }
      )
      sections.forEach((el) => io.observe(el))
      return () => io.disconnect()
   }, [])

   return (
      <div className="ge-explorer">
         <aside className="ge-explorer__nav">
            <nav aria-label="Redington service groups">
               <ul>
                  {redingtonServices.map((s) => (
                     <li key={s.slug}>
                        <a href={`#${s.slug}`} className={active === s.slug ? "is-active" : ""} aria-current={active === s.slug ? "true" : undefined}>
                           <i className={s.icon}></i>
                           <span>{s.title}</span>
                        </a>
                     </li>
                  ))}
               </ul>
            </nav>
         </aside>
         <div className="ge-explorer__content">
            {redingtonServices.map((s, i) => (
               <article key={s.slug} id={s.slug} className="ge-card ge-service-card spotlight wow fadeInUp" data-wow-duration="1000ms">
                  <div className="ge-service-card__head">
                     <span className="ge-icon"><i className={s.icon}></i></span>
                     <div>
                        <span className="ge-service-card__num">{String(i + 1).padStart(2, "0")}</span>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                     </div>
                  </div>
                  <ul className="ge-service-card__items">
                     {s.items.map((item) => (
                        <li key={item}><i className="fa-regular fa-check"></i>{item}</li>
                     ))}
                  </ul>
                  <Link href={`/contact?topic=${s.slug}`} className="ge-link">
                     Enquire about {s.title} <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
               </article>
            ))}
         </div>
      </div>
   )
}

export default ServiceExplorer
