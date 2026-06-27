import Link from "next/link"

import shape from "@/assets/images/icon/section-title.png"
import Image from "next/image"

const ContactArea = () => {
   return (
      <section className="contact-area pt-120 pb-120">
         <div className="container">
            <div className="row g-4">
               <div className="col-lg-5">
                  <div className="contact__left-item primary-bg">
                     <h3 className="text-white mb-30">Let&apos;s Connect</h3>
                     <p className="text-white">We welcome conversations around energy, technology, partnerships, and long-term business opportunities.</p>
                     <ul className="mt-40 mb-40">
                        <li>
                           <i className="fa-regular fa-envelope"></i>
                           <div>
                              <span className="text-white">Email Us</span>
                              <h3 className="mt-1"><Link className="text-white" href="mailto:info@g-energy.global">info@g-energy.global</Link></h3>
                           </div>
                        </li>
                        <li>
                           <i className="fa-brands fa-whatsapp"></i>
                           <div>
                              <span className="text-white">WhatsApp</span>
                              <h3 className="mt-1"><Link className="text-white" href="https://wa.me/66800000000" target="_blank" rel="noreferrer">+66 800 000 000</Link></h3>
                           </div>
                        </li>
                        <li>
                           <i className="fa-regular fa-calendar"></i>
                           <div>
                              <span className="text-white">Book a Meeting</span>
                              <h3 className="mt-1"><Link className="text-white" href="https://calendly.com" target="_blank" rel="noreferrer">Calendly</Link></h3>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="contact__right-item">
                     <div className="section-header mb-20">
                        <h5 className="wow fadeInUp pb-2" data-wow-delay="00ms" data-wow-duration="1500ms">
                           <Image className="me-1" src={shape} alt="icon" />
                           GET IN TOUCH
                        </h5>
                        <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Start a conversation with G-Energy Great</h2>
                        <p className="wow fadeInUp mt-3" data-wow-delay="400ms" data-wow-duration="1500ms">Share your requirements and we will help connect the right solution, partnership, or next step.</p>
                     </div>
                     <div className="row g-3">
                        <div className="col-md-6">
                           <Link href="mailto:info@g-energy.global" className="btn-one d-block text-center">Email Us <i className="fa-regular fa-arrow-right-long"></i></Link>
                        </div>
                        <div className="col-md-6">
                           <Link href="https://wa.me/66800000000" target="_blank" rel="noreferrer" className="btn-one d-block text-center">WhatsApp <i className="fa-regular fa-arrow-right-long"></i></Link>
                        </div>
                        <div className="col-md-6">
                           <Link href="https://calendly.com" target="_blank" rel="noreferrer" className="btn-one d-block text-center">Book a Meeting <i className="fa-regular fa-arrow-right-long"></i></Link>
                        </div>
                        <div className="col-md-6">
                           <Link href="/contact" className="btn-one d-block text-center">Request Information <i className="fa-regular fa-arrow-right-long"></i></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ContactArea
