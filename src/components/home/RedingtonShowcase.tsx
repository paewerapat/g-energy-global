import Image from "next/image"
import Link from "next/link"
import Counter from "../common/Counter"
import SectionHeader from "../common/SectionHeader"
import { redingtonServices, redingtonStats } from "@/data/redington"
import { companyLogos } from "@/data/brands"

import shape_left from "@/assets/images/shape/offer-bg-shape-left.png"
import shape_right from "@/assets/images/shape/offer-bg-shape-right.png"

const RedingtonShowcase = () => {
   return (
      <section className="ge-redington ge-dark pt-120 pb-120">
         <div className="ge-redington__shape-left" aria-hidden="true">
            <Image className="wow fadeInUpBig" data-wow-delay="300ms" data-wow-duration="1500ms" src={shape_left} alt="" />
         </div>
         <div className="ge-redington__shape-right" aria-hidden="true">
            <Image className="wow fadeInDownBig" data-wow-delay="300ms" data-wow-duration="1500ms" src={shape_right} alt="" />
         </div>
         <div className="container position-relative">
            <div className="row g-5 align-items-center">
               <div className="col-lg-5">
                  <div className="ge-lockup wow fadeInUp" data-wow-duration="1000ms">
                     <Image src={companyLogos.redingtonWhite} alt="Redington" />
                  </div>
                  <SectionHeader
                     light
                     align="left"
                     eyebrow="Authorised Redington partner"
                     title="The complete Redington portfolio, delivered in Thailand"
                     lead="Every Redington service — technology, cloud, logistics, financing, BPM and more — is available to our customers and channel partners through one local team."
                  />
                  <div className="ge-stat-grid mt-40 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1000ms">
                     {redingtonStats.map((s) => (
                        <div key={s.label} className="ge-stat">
                           <strong><Counter value={s.value} suffix={s.suffix} /></strong>
                           <span>{s.label}</span>
                        </div>
                     ))}
                  </div>
                  <p className="ge-footnote mt-3">Figures refer to the Redington global network.</p>
                  <Link href="/redington" className="btn-one mt-40 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                     Explore Redington services <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
               </div>
               <div className="col-lg-7">
                  <div className="ge-service-tiles">
                     {redingtonServices.map((s, i) => (
                        <Link
                           key={s.slug}
                           href={`/redington#${s.slug}`}
                           className="ge-service-tile spotlight wow fadeInUp"
                           data-wow-delay={`${(i % 3) * 100}ms`}
                           data-wow-duration="1000ms"
                        >
                           <i className={s.icon}></i>
                           <h4>{s.title}</h4>
                           <span>{s.items.length} services</span>
                           <i className="fa-regular fa-arrow-up-right ge-service-tile__go"></i>
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default RedingtonShowcase
