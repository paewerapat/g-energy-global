import Image from "next/image"
import Link from "next/link"
import site from "@/data/site"

import brandMark from "@/assets/images/brand/ge-mark-reversed.svg"
import brandWaves from "@/assets/images/brand/brand-waves.svg"

const heroStats = [
   { value: "500+", label: "Enterprise clients in the group" },
   { value: "450+", label: "Brands via Redington" },
   { value: "3", label: "Group offices in SEA" },
]

const Hero = () => {
   return (
      <section className="banner-three-area ge-hero">
         <div className="ge-hero__orb ge-hero__orb--1" aria-hidden="true"></div>
         <div className="ge-hero__orb ge-hero__orb--2" aria-hidden="true"></div>
         <div className="ge-hero__waves" aria-hidden="true">
            <Image src={brandWaves} alt="" priority />
         </div>

         <div className="banner-three__container">
            <div className="row align-items-center g-5">
               <div className="col-lg-7">
                  <div className="banner-three__content ge-hero__content">
                     <div className="ge-hero__badge wow fadeInUp" data-wow-duration="1000ms">
                        <span className="ge-pulse" aria-hidden="true"></span>
                        A {site.parentGroup} company · Authorised {site.distributionPartner} partner
                     </div>
                     <h1 className="text-white wow fadeInUp" data-wow-delay="150ms" data-wow-duration="1000ms">
                        Technology that moves <span className="ge-gradient-text">business forward</span>
                     </h1>
                     <p className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1000ms">
                        We help organisations in Thailand choose, deploy and support technology from the world&apos;s leading
                        brands — cloud, infrastructure, data, security and energy — backed by the full {site.distributionPartner} service portfolio.
                     </p>
                     <div className="ge-hero__actions wow fadeInUp" data-wow-delay="450ms" data-wow-duration="1000ms">
                        <Link className="btn-one" href="/contact">Talk to our team <i className="fa-regular fa-arrow-right-long"></i></Link>
                        <Link className="ge-btn-ghost" href="/solutions">Explore solutions <i className="fa-regular fa-arrow-right-long ms-2"></i></Link>
                     </div>
                     <ul className="ge-hero__stats wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1000ms">
                        {heroStats.map((s) => (
                           <li key={s.label}>
                              <strong>{s.value}</strong>
                              <span>{s.label}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="ge-hero__visual wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1200ms">
                     <div className="ge-hero__ring" aria-hidden="true"></div>
                     <div className="ge-hero__ring ge-hero__ring--inner" aria-hidden="true"></div>
                     <div className="ge-hero__glow" aria-hidden="true"></div>
                     <div className="ge-hero__mark">
                        <Image src={brandMark} alt="G-Energy" priority />
                     </div>
                     <div className="ge-float ge-float--bottom" aria-hidden="true">
                        <span className="ge-float__icon is-green"><i className="fa-light fa-chart-line-up"></i></span>
                        <div>
                           <strong>Cloud costs under control</strong>
                           <small>Tencent · Huawei Cloud</small>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <a href="#trust" className="ge-hero__scroll" aria-label="Scroll to content">
            <span></span>
         </a>
      </section>
   )
}

export default Hero
