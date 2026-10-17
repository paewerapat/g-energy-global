import SectionHeader from "../common/SectionHeader"
import { outcomes, problems } from "@/data/company"
import site from "@/data/site"

const WhyUs = () => {
   return (
      <section className="ge-why pt-120 pb-120">
         <div className="container">
            <SectionHeader
               eyebrow={`Why ${site.brand}`}
               title="One partner from problem to outcome"
               lead="Working alone, issues pile up across suppliers and systems. With us, each one is worked through with your team to a clear result."
            />

            <div className="ge-why__compare mt-60">
               <div className="ge-why__panel is-before wow fadeInLeft" data-wow-duration="1200ms">
                  <span className="ge-why__tag">Without a partner</span>
                  <ul className="ge-why__alerts">
                     {problems.map((p, i) => (
                        <li key={p.text} className={`is-${p.tone}`} style={{ ["--i" as string]: i }}>
                           <i className={p.icon}></i>
                           <span>{p.text}</span>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="ge-why__arrow" aria-hidden="true">
                  <i className="fa-regular fa-arrow-right-long"></i>
               </div>
               <div className="ge-why__panel is-after wow fadeInRight" data-wow-duration="1200ms">
                  <span className="ge-why__tag">With {site.brand}</span>
                  <ul className="ge-why__outcomes">
                     {outcomes.map((o) => (
                        <li key={o.text}>
                           <i className={o.icon}></i>
                           <span>{o.text}</span>
                           <i className="fa-solid fa-circle-check ms-auto ge-why__check"></i>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>
   )
}

export default WhyUs
