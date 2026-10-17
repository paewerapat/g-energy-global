import Image from "next/image"
import Link from "next/link"
import Logo from "../headers/Logo"
import site from "@/data/site"
import solutions from "@/data/solutions"
import { redingtonServices } from "@/data/redington"
import { companyLogos } from "@/data/brands"

import shape_1 from "@/assets/images/shape/footer-regular-left.png"
import shape_2 from "@/assets/images/shape/footer-solid-left.png"
import shape_3 from "@/assets/images/shape/footer-regular-right.png"
import shape_4 from "@/assets/images/shape/footer-solid-right.png"
import shape_5 from "@/assets/images/shape/footer-shadow-shape.png"

const socials = [
   { key: "linkedin", icon: "fa-linkedin-in", label: "LinkedIn" },
   { key: "facebook", icon: "fa-facebook-f", label: "Facebook" },
   { key: "youtube", icon: "fa-youtube", label: "YouTube" },
] as const

const FooterOne = () => {
   const activeSocials = socials.filter((s) => site.socials[s.key])

   return (
      <footer className="footer-area secondary-bg ge-footer">
         <div className="footer__shape-regular-left wow slideInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
            <Image src={shape_1} alt="" />
         </div>
         <div className="footer__shape-solid-left wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Image className="sway_Y__animation" src={shape_2} alt="" />
         </div>
         <div className="footer__shape-solid-right wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
            <Image className="sway_Y__animation" src={shape_3} alt="" />
         </div>
         <div className="footer__shape-regular-right wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Image src={shape_4} alt="" />
         </div>
         <div className="footer__shadow-shape">
            <Image src={shape_5} alt="" />
         </div>
         <div className="container">
            <div className="ge-footer__grid pt-100 pb-80">
               <div className="ge-footer__brand wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1200ms">
                  <Logo className="mb-25" />
                  <p>{site.legalName} brings global enterprise technology and the full {site.distributionPartner} service portfolio to organisations in Thailand — with local delivery and support.</p>
                  <div className="ge-footer__badges">
                     <div>
                        <small>Part of</small>
                        <Image className="is-vanguard" src={companyLogos.vanguardWhite} alt={site.parentGroup} />
                     </div>
                     <div>
                        <small>Authorised partner</small>
                        <Image src={companyLogos.redingtonWhite} alt={site.distributionPartner} />
                     </div>
                  </div>
                  {activeSocials.length > 0 && (
                     <div className="social-icon mt-25">
                        {activeSocials.map((s) => (
                           <a key={s.key} href={site.socials[s.key]} target="_blank" rel="noreferrer" aria-label={s.label}><i className={`fa-brands ${s.icon}`}></i></a>
                        ))}
                     </div>
                  )}
               </div>
               <div className="wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1200ms">
                  <h3 className="footer-title">Solutions</h3>
                  <ul className="ge-footer__links">
                     {solutions.map((s) => (
                        <li key={s.slug}><Link href={`/solutions#${s.slug}`}>{s.title}</Link></li>
                     ))}
                  </ul>
               </div>
               <div className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                  <h3 className="footer-title">Redington Services</h3>
                  <ul className="ge-footer__links">
                     {redingtonServices.slice(0, 6).map((s) => (
                        <li key={s.slug}><Link href={`/redington#${s.slug}`}>{s.title}</Link></li>
                     ))}
                     <li><Link href="/redington#services">All services</Link></li>
                  </ul>
               </div>
               <div className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms">
                  <h3 className="footer-title">Contact</h3>
                  <ul className="footer-contact">
                     <li>
                        <i className="fa-light fa-envelope"></i>
                        <div className="info">
                           <h5>Email</h5>
                           <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
                        </div>
                     </li>
                     {site.phone && (
                        <li>
                           <i className="fa-light fa-phone"></i>
                           <div className="info">
                              <h5>Phone</h5>
                              <p><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></p>
                           </div>
                        </li>
                     )}
                     <li>
                        <i className="fa-light fa-location-dot"></i>
                        <div className="info">
                           <h5>Office</h5>
                           <p><a href={site.mapUrl} target="_blank" rel="noreferrer">{site.address}</a></p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="footer__copyright">
            <div className="container">
               <div className="d-flex gap-2 flex-wrap align-items-center justify-content-md-between justify-content-center">
                  <p>&copy; {new Date().getFullYear()} {site.legalName} All rights reserved.</p>
                  <ul className="d-flex align-items-center gap-4">
                     <li><Link href="/about">About</Link></li>
                     <li><Link href="/contact">Contact</Link></li>
                     {/* TODO(client): add Privacy Policy and Terms pages */}
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
