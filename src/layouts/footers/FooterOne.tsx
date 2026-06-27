"use client"
import Image from "next/image"
import Link from "next/link"

import shape_1 from "@/assets/images/shape/footer-regular-left.png"
import shape_2 from "@/assets/images/shape/footer-solid-left.png"
import shape_3 from "@/assets/images/shape/footer-regular-right.png"
import shape_4 from "@/assets/images/shape/footer-solid-right.png"
import shape_5 from "@/assets/images/shape/footer-shadow-shape.png"

const FooterOne = () => {

   return (
      <footer className="footer-area secondary-bg">
         <div className="footer__shape-regular-left wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
            <Image src={shape_1} alt="shape" />
         </div>
         <div className="footer__shape-solid-left wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Image className="sway_Y__animation" src={shape_2} alt="shape" />
         </div>
         <div className="footer__shape-solid-right wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms">
            <Image className="sway_Y__animation" src={shape_3} alt="shape" />
         </div>
         <div className="footer__shape-regular-right wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Image src={shape_4} alt="shape" />
         </div>
         <div className="footer__shadow-shape">
            <Image src={shape_5} alt="shodow" />
         </div>
         <div className="container">
            <div className="footer__wrp pt-100 pb-100">
               <div className="footer__item item-big wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <Link href="/" className="logo mb-30 fw-bold fs-4 text-white d-block">
                     G-Energy Great Co., Ltd.
                  </Link>
                  <p>Independent energy, technology, and business support solutions designed for sustainable growth and reliable execution.</p>
                  <div className="social-icon">
                     <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                     <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                     <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                     <Link href="#"><i className="fa-brands fa-youtube"></i></Link>
                  </div>
               </div>
               <div className="footer__item item-sm wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <h3 className="footer-title">Solutions</h3>
                  <ul>
                     <li><Link href="/about#offer-section"><i className="fa-regular fa-angles-right me-1"></i> Energy Solutions</Link></li>
                     <li><Link href="/about#offer-section"><i className="fa-regular fa-angles-right me-1"></i> Technology Distribution</Link></li>
                     <li><Link href="/about#offer-section"><i className="fa-regular fa-angles-right me-1"></i> Digital Infrastructure</Link></li>
                     <li><Link href="/about#offer-section"><i className="fa-regular fa-angles-right me-1"></i> Business Consulting</Link></li>
                  </ul>
               </div>
               <div className="footer__item item-sm wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <h3 className="footer-title">Quick Link</h3>
                  <ul>
                     <li><Link href="/about"><i className="fa-regular fa-angles-right me-1"></i> About G-Energy Great</Link></li>
                     <li><Link href="/about#offer-section"><i className="fa-regular fa-angles-right me-1"></i> Solutions</Link></li>
                     <li><Link href="/about#case-section"><i className="fa-regular fa-angles-right me-1"></i> Our Capabilities</Link></li>
                     <li><Link href="/about#lets-connect"><i className="fa-regular fa-angles-right me-1"></i> Contact Us</Link></li>
                  </ul>
               </div>
               <div className="footer__item item-big wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <h3 className="footer-title">Contact Us</h3>
                  <p className="mb-20">G-Energy Great Co., Ltd. is ready to support operational, strategic, and partnership-driven initiatives.</p>
                  <ul className="footer-contact">
                     <li>
                        <i className="fa-regular fa-envelope"></i>
                        <div className="info">
                           <h5>Email:</h5>
                           <p><Link href="mailto:info@g-energy.global">info@g-energy.global</Link></p>
                        </div>
                     </li>
                     <li>
                        <i className="fa-regular fa-globe"></i>
                        <div className="info">
                           <h5>Website:</h5>
                           <p><Link href="https://www.g-energy.global" target="_blank" rel="noreferrer">www.g-energy.global</Link></p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="footer__copyright">
            <div className="container">
               <div
                  className="d-flex gap-1 flex-wrap align-items-center justify-content-md-between justify-content-center">
                  <p className="wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">&copy; 2026 G-Energy Great Co., Ltd. All Rights Reserved.</p>
                  <ul className="d-flex align-items-center gap-4 wow fadeInDown" data-wow-delay="200ms"
                     data-wow-duration="1500ms">
                     <li><Link href="#">Terms & Condition</Link></li>
                     <li><Link href="#">Privacy Policy</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
