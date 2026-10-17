import FooterOne from "@/layouts/footers/FooterOne"
import Header from "@/layouts/headers/Header"
import BreadCrumb from "../common/BreadCrumb"
import SectionHeader from "../common/SectionHeader"
import Counter from "../common/Counter"
import Marquee from "../common/Marquee"
import CtaBand from "../common/CtaBand"
import ServiceExplorer from "./ServiceExplorer"
import site from "@/data/site"
import Image from "next/image"
import { companyLogos } from "@/data/brands"
import {
   redingtonBrands,
   redingtonIndustries,
   redingtonSegments,
   redingtonServices,
   redingtonStats,
   redingtonTechnologies,
} from "@/data/redington"

const reasons = [
   { icon: "fa-light fa-layer-group", title: "The full portfolio", desc: "Every Redington service line — not a subset — available to Thai customers and partners." },
   { icon: "fa-light fa-location-dot", title: "Local team, local terms", desc: "Bangkok-based sales, pre-sales and support, in your time zone and language." },
   { icon: "fa-light fa-handshake", title: "One point of contact", desc: "Products, services, logistics and financing coordinated through a single partner." },
]

const Redington = () => {
   const totalServices = redingtonServices.reduce((n, s) => n + s.items.length, 0)

   return (
      <>
         <Header />
         <main id="main">
            <BreadCrumb
               title="Redington Services"
               sub_title="Redington Services"
               eyebrow={`${site.brand} × ${site.distributionPartner}`}
               lead={`As an authorised Redington partner, ${site.brand} offers the complete Redington service portfolio in Thailand — ${redingtonServices.length} service groups and ${totalServices}+ services.`}
            />

            {/* Intro + stats */}
            <section className="pt-120 pb-120">
               <div className="container">
                  <div className="row g-5 align-items-center">
                     <div className="col-lg-6">
                        <SectionHeader
                           align="left"
                           eyebrow={`Why through ${site.brand}`}
                           title="Global distribution power with a local partner"
                           lead="Redington connects hundreds of global technology brands with customers in 40 markets. We bring that reach — and every service behind it — to Thailand."
                        />
                        <div className="ge-reasons mt-40">
                           {reasons.map((r, i) => (
                              <div key={r.title} className="ge-reason wow fadeInUp" data-wow-delay={`${i * 100}ms`} data-wow-duration="1000ms">
                                 <span className="ge-icon"><i className={r.icon}></i></span>
                                 <div>
                                    <h4>{r.title}</h4>
                                    <p>{r.desc}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="ge-stat-panel wow fadeInRight" data-wow-duration="1200ms">
                           <div className="ge-cta__grid" aria-hidden="true"></div>
                           <Image className="ge-stat-panel__logo" src={companyLogos.redingtonWhite} alt="Redington" />
                           <span className="ge-eyebrow-light d-block mt-4">The Redington network</span>
                           <div className="ge-stat-grid mt-30">
                              {redingtonStats.map((s) => (
                                 <div key={s.label} className="ge-stat">
                                    <strong><Counter value={s.value} suffix={s.suffix} /></strong>
                                    <span>{s.label}</span>
                                 </div>
                              ))}
                           </div>
                           <p className="ge-footnote mt-30">Network figures published by Redington. Certifications held by Redington include ISO 27001:2022, ISO 9001:2015, ISO 27701 and SOC 2.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* All service groups */}
            <section id="services" className="sub-bg pt-120 pb-120">
               <div className="container">
                  <SectionHeader
                     eyebrow="Service portfolio"
                     title="Every Redington service, available in Thailand"
                     lead="Browse all service groups below — or tell us what you need and we will put the right services together."
                  />
                  <div className="mt-60">
                     <ServiceExplorer />
                  </div>
               </div>
            </section>

            {/* Technologies */}
            <section className="pt-120 pb-120">
               <div className="container">
                  <SectionHeader
                     eyebrow="Solutions by technology"
                     title="From AI and cloud to devices and solar"
                  />
                  <div className="ge-tech-grid mt-60">
                     {redingtonTechnologies.map((t, i) => (
                        <div key={t.title} className="ge-tech wow fadeInUp" data-wow-delay={`${(i % 4) * 80}ms`} data-wow-duration="900ms">
                           <i className={t.icon}></i>
                           <span>{t.title}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Industries + segments */}
            <section className="ge-dark pt-120 pb-120">
               <div className="container position-relative">
                  <div className="row g-5 align-items-center">
                     <div className="col-lg-5">
                        <SectionHeader
                           light
                           align="left"
                           eyebrow="Industries & segments"
                           title="Built for the way your sector works"
                           lead="Solutions packaged for the regulations, workloads and buying models of each industry."
                        />
                        <ul className="ge-segments mt-40 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                           {redingtonSegments.map((s) => <li key={s}>{s}</li>)}
                        </ul>
                     </div>
                     <div className="col-lg-7">
                        <div className="ge-industry-grid">
                           {redingtonIndustries.map((ind, i) => (
                              <div key={ind.title} className="ge-industry spotlight wow fadeInUp" data-wow-delay={`${(i % 3) * 100}ms`} data-wow-duration="1000ms">
                                 <i className={ind.icon}></i>
                                 <span>{ind.title}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Brands */}
            <section className="ge-trust pt-100 pb-100">
               <div className="container">
                  <p className="ge-trust__label wow fadeInUp" data-wow-duration="1000ms">Brands available through the Redington network</p>
               </div>
               <Marquee items={redingtonBrands} speed={45} label="Brands available through Redington" />
            </section>

            <CtaBand title="Need a Redington service in Thailand?" lead="Tell us the products or services you're looking for — we will coordinate everything from sourcing and financing to delivery and support." />
         </main>
         <FooterOne />
      </>
   )
}

export default Redington
