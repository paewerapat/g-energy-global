import Image from "next/image"
import Link from "next/link"
import FooterOne from "@/layouts/footers/FooterOne"
import Header from "@/layouts/headers/Header"
import BreadCrumb from "../common/BreadCrumb"
import SectionHeader from "../common/SectionHeader"
import Offices from "../common/Offices"
import CtaBand from "../common/CtaBand"
import site from "@/data/site"
import solutions from "@/data/solutions"
import { values } from "@/data/company"
import { companyLogos } from "@/data/brands"

import about_thumb1 from "@/assets/images/about/about-two-image1.jpg"
import about_thumb2 from "@/assets/images/about/about-two-image2.png"
import shape_1 from "@/assets/images/shape/about-two-shape.png"
import shape_2 from "@/assets/images/shape/about-two-dot.png"
import shape_3 from "@/assets/images/shape/about-circle-helper.png"
import shape_4 from "@/assets/images/shape/about-two-circle.png"

const structure = [
   {
      icon: "fa-light fa-building",
      logo: companyLogos.vanguard,
      role: "Parent group",
      name: site.parentGroup,
      desc: "Regional technology partner headquartered in Singapore, serving enterprises across Southeast Asia.",
   },
   {
      icon: "fa-light fa-bolt-lightning",
      role: "Thailand",
      name: site.legalName,
      desc: "The group's Thai company — local sales, solution design, delivery and support for Thailand and the Mekong region.",
      highlight: true,
   },
   {
      icon: "fa-light fa-award",
      logo: companyLogos.redington,
      role: "Distribution partner",
      name: site.distributionPartner,
      desc: "Global technology distributor. We offer the complete Redington service portfolio in Thailand.",
   },
]

const About = () => {
   return (
      <>
         <Header />
         <main id="main">
            <BreadCrumb
               title={`About ${site.brand}`}
               sub_title="About"
               eyebrow={`A ${site.parentGroup} company`}
               lead="Global technology, local execution — for organisations across Thailand."
            />

            {/* Who we are */}
            <section className="about-two-area ge-about pt-120 pb-120">
               <div className="about-two__shape" aria-hidden="true">
                  <Image src={shape_1} alt="" />
               </div>
               <div className="container">
                  <div className="row g-5 align-items-center">
                     <div className="col-xl-6 wow fadeInLeft" data-wow-duration="1200ms">
                        <div className="about-two__left-item">
                           <div className="dots" aria-hidden="true">
                              <Image className="sway_Y__animation" src={shape_2} alt="" />
                           </div>
                           <div className="shape-halper" aria-hidden="true">
                              <Image className="sway__animation" src={shape_3} alt="" />
                           </div>
                           <div className="image big-image ge-about__flip">
                              <Image src={about_thumb1} alt="Technology consultant working with enterprise systems" />
                           </div>
                           <div className="image sm-image">
                              <Image src={about_thumb2} alt="Team collaborating on a solution plan" />
                           </div>
                           <div className="circle-shape" aria-hidden="true">
                              <Image className="animation__rotate" src={shape_4} alt="" />
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6">
                        <SectionHeader
                           align="left"
                           eyebrow="Who we are"
                           title="The Thai arm of a regional technology group"
                           lead={`${site.legalName} is part of the ${site.parentGroup} group. We help organisations in Thailand choose, deploy and support technology from leading global brands — and, as an authorised ${site.distributionPartner} partner, we bring the complete Redington service portfolio to Thai customers and channel partners.`}
                        />
                        <p className="mt-20 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1000ms">
                           Our Bangkok team works alongside group offices in Singapore and Jakarta, sharing partners,
                           expertise and delivery playbooks proven with banks, insurers and enterprises across the region.
                        </p>
                        <ul className="ge-checklist is-2col mt-30 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                           {solutions.map((s) => <li key={s.slug}><i className="fa-solid fa-circle-check"></i>{s.title}</li>)}
                           <li><i className="fa-solid fa-circle-check"></i>Redington services</li>
                        </ul>
                        <div className="d-flex flex-wrap gap-3 mt-40 wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1000ms">
                           <Link href="/contact" className="btn-one">Talk to our team <i className="fa-regular fa-arrow-right-long"></i></Link>
                           <Link href="/solutions" className="ge-btn-outline">Our solutions</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Group structure */}
            <section className="sub-bg pt-120 pb-120">
               <div className="container">
                  <SectionHeader
                     eyebrow="Our group"
                     title="Backed by a regional group and a global distributor"
                  />
                  <div className="ge-structure mt-60">
                     {structure.map((s, i) => (
                        <div key={s.name} className={`ge-card ge-structure__item spotlight wow fadeInUp ${s.highlight ? "is-highlight" : ""}`} data-wow-delay={`${i * 150}ms`} data-wow-duration="1000ms">
                           <div className="ge-structure__logo">
                              {s.logo ? <Image className={s.logo === companyLogos.vanguard ? "is-vanguard" : ""} src={s.logo} alt={s.name} /> : <span className="ge-icon"><i className={s.icon}></i></span>}
                           </div>
                           <span className="ge-structure__role">{s.role}</span>
                           <h3>{s.name}</h3>
                           <p>{s.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Values */}
            <section className="pt-120 pb-120">
               <div className="container">
                  <SectionHeader
                     eyebrow="What we stand for"
                     title="Why business partners choose us"
                  />
                  <div className="row g-4 mt-4">
                     {values.map((v, i) => (
                        <div key={v.title} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={`${i * 100}ms`} data-wow-duration="1000ms">
                           <div className="ge-card ge-value spotlight h-100">
                              <span className="ge-icon"><i className={v.icon}></i></span>
                              <h4>{v.title}</h4>
                              <p>{v.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            <Offices className="sub-bg" />
            <CtaBand
               title="Work with a regional group, locally"
               lead="Meet our Bangkok team to discuss your plans — from a single product to a full solution or Redington service."
            />
         </main>
         <FooterOne />
      </>
   )
}

export default About
