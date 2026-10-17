import Link from "next/link"
import FooterOne from "@/layouts/footers/FooterOne"
import Header from "@/layouts/headers/Header"
import BreadCrumb from "../common/BreadCrumb"
import SectionHeader from "../common/SectionHeader"
import SolutionMock from "../common/SolutionMock"
import BrandLogo from "../common/BrandLogo"
import Process from "../common/Process"
import CtaBand from "../common/CtaBand"
import solutions from "@/data/solutions"

const workloads = [
   { icon: "fa-light fa-building", label: "ERP" },
   { icon: "fa-light fa-browser", label: "Web apps" },
   { icon: "fa-light fa-microchip", label: "AI / GPU" },
   { icon: "fa-light fa-database", label: "Data" },
]

const Solutions = () => {
   return (
      <>
         <Header />
         <main id="main">
            <BreadCrumb
               title="Solutions"
               sub_title="Solutions"
               eyebrow="Global technology. Local execution."
               lead="Cloud, infrastructure, open source, data, cybersecurity and energy — chosen, deployed and supported by one local partner."
            />

            {/* Overview + quick jump */}
            <section className="pt-120 pb-80">
               <div className="container">
                  <SectionHeader
                     eyebrow="Everything your stack runs on"
                     title="Your workloads, on the right platform"
                     lead="Whether it runs in public cloud or on-premises, we match each workload to proven technology from our partners."
                  />
                  <div className="ge-stack mt-60 wow fadeInUp" data-wow-duration="1000ms" aria-hidden="true">
                     <div className="ge-stack__row">
                        {workloads.map((w) => (
                           <span key={w.label} className="ge-stack__item"><i className={w.icon}></i>{w.label}</span>
                        ))}
                     </div>
                     <div className="ge-stack__flow"><span></span><span></span></div>
                     <div className="ge-stack__targets">
                        <div><i className="fa-light fa-cloud"></i><b>Public cloud</b><small>Compute · Storage · Databases</small></div>
                        <div><i className="fa-light fa-server"></i><b>On-premises</b><small>Servers · Storage · HCI</small></div>
                     </div>
                  </div>
                  <nav className="ge-jump mt-60" aria-label="Solution areas">
                     {solutions.map((s) => (
                        <a key={s.slug} href={`#${s.slug}`} className="ge-jump__item">
                           <i className={s.icon}></i>{s.title}
                        </a>
                     ))}
                  </nav>
               </div>
            </section>

            {/* Detail rows */}
            {solutions.map((s, i) => (
               <section key={s.slug} id={s.slug} className={`ge-sol-detail pt-100 pb-100 ${i % 2 === 0 ? "sub-bg" : ""}`}>
                  <div className="container">
                     <div className={`row g-5 align-items-center ${i % 2 ? "flex-lg-row-reverse" : ""}`}>
                        <div className="col-lg-6">
                           <div className={`wow ${i % 2 ? "fadeInRight" : "fadeInLeft"}`} data-wow-duration="1200ms">
                              <span className="ge-icon is-lg"><i className={s.icon}></i></span>
                              <h2 className="mt-25">{s.title}</h2>
                              <p className="mt-20">{s.desc}</p>
                              <ul className="ge-checklist mt-30">
                                 {s.capabilities.map((c) => <li key={c}><i className="fa-solid fa-circle-check"></i>{c}</li>)}
                              </ul>
                              <div className="mt-30">
                                 <span className="ge-label">Technology partners</span>
                                 <ul className="ge-logo-grid mt-3">
                                    {s.partners.map((p) => (
                                       <li key={p.name}>
                                          <BrandLogo brand={p} size="md" />
                                          <span>{p.name}</span>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                              <Link href={`/contact?topic=${s.slug}`} className="btn-one mt-40">
                                 Ask about {s.title} <i className="fa-regular fa-arrow-right-long"></i>
                              </Link>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="ge-sol-detail__visual wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                              <SolutionMock type={s.mock} />
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            ))}

            <Process />
            <CtaBand title="Not sure which solution fits?" lead="Tell us about your workloads and goals — we will recommend the right mix of partners and a practical plan." />
         </main>
         <FooterOne />
      </>
   )
}

export default Solutions
