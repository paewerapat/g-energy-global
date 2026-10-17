import SectionHeader from "./SectionHeader"
import { offices } from "@/data/company"
import site from "@/data/site"

const Offices = ({ className = "" }: { className?: string }) => {
   return (
      <section id="offices" className={`ge-offices pt-120 pb-120 ${className}`}>
         <div className="container">
            <div className="row g-5 align-items-center">
               <div className="col-lg-5">
                  <SectionHeader
                     align="left"
                     eyebrow="Regional presence"
                     title="Local teams across Southeast Asia"
                     lead="Our Bangkok office serves Thailand and the Mekong region, working alongside group offices in Singapore and Jakarta."
                  />
                  <ul className="ge-offices__list mt-40">
                     {offices.map((o, i) => (
                        <li key={o.city} className={`wow fadeInUp ${o.home ? "is-home" : ""}`} data-wow-delay={`${i * 120}ms`} data-wow-duration="1000ms">
                           <span className="ge-offices__pin"><i className="fa-solid fa-location-dot"></i></span>
                           <div>
                              <h4>{o.city} <small>{o.country} · {o.tz}</small></h4>
                              {"address" in o && o.address && <p className="ge-offices__address"><i className="fa-light fa-building me-1"></i>{o.address}</p>}
                              <p>Covers {o.covers.join(", ")}</p>
                           </div>
                           {o.home && <span className="ge-offices__badge">{site.brand}</span>}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="col-lg-7">
                  <div className="ge-map wow fadeIn" data-wow-duration="1500ms" role="img" aria-label="Map of offices in Bangkok, Singapore and Jakarta">
                     <div className="ge-map__dots" aria-hidden="true"></div>
                     <svg className="ge-map__links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <path d={`M${offices[0].x},${offices[0].y} Q 52,55 ${offices[1].x},${offices[1].y}`} />
                        <path d={`M${offices[1].x},${offices[1].y} Q 56,82 ${offices[2].x},${offices[2].y}`} />
                        <path d={`M${offices[0].x},${offices[0].y} Q 64,60 ${offices[2].x},${offices[2].y}`} />
                     </svg>
                     {offices.map((o) => (
                        <div key={o.city} className={`ge-map__pin ${o.home ? "is-home" : ""}`} style={{ left: `${o.x}%`, top: `${o.y}%` }}>
                           <span className="ge-map__ping"></span>
                           <span className="ge-map__label">{o.city}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Offices
