import Link from "next/link"
import SectionHeader from "../common/SectionHeader"
import SolutionMock from "../common/SolutionMock"
import BrandLogo from "../common/BrandLogo"
import solutions from "@/data/solutions"

const SolutionsGrid = () => {
   return (
      <section id="solutions" className="ge-solutions sub-bg pt-120 pb-120">
         <div className="container">
            <div className="d-flex flex-wrap gap-4 align-items-end justify-content-between mb-60">
               <SectionHeader
                  align="left"
                  eyebrow="Our solutions"
                  title="Everything your business runs on"
                  lead="Cloud, servers, databases, customer data, security and energy — from leading global brands, delivered and supported locally."
               />
               <Link href="/solutions" className="btn-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                  All solutions <i className="fa-regular fa-arrow-right-long"></i>
               </Link>
            </div>

            <div className="row g-4">
               {solutions.map((s, i) => (
                  <div key={s.slug} className={`${i < 2 ? "col-lg-6" : i === solutions.length - 1 ? "col-lg-4 col-md-12" : "col-lg-4 col-md-6"} wow fadeInUp`} data-wow-delay={`${(i % 3) * 100}ms`} data-wow-duration="1000ms">
                     <Link href={`/solutions#${s.slug}`} aria-labelledby={`sol-${s.slug}`} className={`ge-card ge-solution spotlight h-100 ${i < 2 ? "is-wide" : ""}`}>
                        <div className="ge-solution__body">
                           <span className="ge-icon"><i className={s.icon}></i></span>
                           <h3 id={`sol-${s.slug}`}>{s.title}</h3>
                           <p>{s.short}</p>
                           <ul className="ge-logo-row" aria-label={`${s.title} partners`}>
                              {s.partners.slice(0, 3).map((p) => <li key={p.name}><BrandLogo brand={p} size="sm" /></li>)}
                              {s.partners.length > 3 && <li className="ge-chip is-more">+{s.partners.length - 3}</li>}
                           </ul>
                           <span className="ge-link">Learn more <i className="fa-regular fa-arrow-right-long"></i></span>
                        </div>
                        <div className="ge-solution__mock">
                           <SolutionMock type={s.mock} />
                        </div>
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default SolutionsGrid
