"use client"
import { useState } from "react"
import Link from "next/link"
import BrandLogo from "../common/BrandLogo"
import { productCategories, productLine } from "@/data/redington"

const ALL = "all"

// Redington Product Line 2026 with category filters.
const ProductLine = () => {
   const [active, setActive] = useState(ALL)
   const visible = active === ALL ? productLine : productLine.filter((p) => p.category === active)
   const categoryOf = (key: string) => productCategories.find((c) => c.key === key)

   return (
      <div className="ge-products">
         <div className="ge-products__filters" role="group" aria-label="Filter products by category">
            <button type="button" className={active === ALL ? "is-active" : ""} aria-pressed={active === ALL} onClick={() => setActive(ALL)}>
               All <span>{productLine.length}</span>
            </button>
            {productCategories.map((c) => (
               <button key={c.key} type="button" className={active === c.key ? "is-active" : ""} aria-pressed={active === c.key} onClick={() => setActive(c.key)}>
                  <i className={c.icon} aria-hidden="true"></i>
                  {c.title} <span>{productLine.filter((p) => p.category === c.key).length}</span>
               </button>
            ))}
         </div>

         <p className="visually-hidden" aria-live="polite">{visible.length} products shown</p>

         <div className="ge-products__grid">
            {visible.map((p) => {
               const cat = categoryOf(p.category)
               return (
                  <article key={p.brand.name} className="ge-card ge-product spotlight">
                     <div className="ge-product__head">
                        <BrandLogo brand={p.brand} size="md" />
                     </div>
                     {cat && <span className="ge-product__cat"><i className={cat.icon} aria-hidden="true"></i>{cat.short}</span>}
                     <h3>{p.brand.name}</h3>
                     <p>{p.desc}</p>
                     <div className="ge-product__verticals">
                        <span className="ge-label">Key verticals</span>
                        <ul className="ge-chips">
                           {p.verticals.map((v) => <li key={v} className="ge-chip">{v}</li>)}
                        </ul>
                     </div>
                     <Link href={`/contact?topic=redington-product-line`} className="ge-link" aria-label={`Enquire about ${p.brand.name}`}>
                        Enquire <i className="fa-regular fa-arrow-right-long"></i>
                     </Link>
                  </article>
               )
            })}
         </div>
      </div>
   )
}

export default ProductLine
