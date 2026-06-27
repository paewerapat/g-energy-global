"use client"
import { useRef, useState } from "react"
import { toast } from "react-toastify"
import Image from "next/image"

import shape_1 from "@/assets/images/icon/section-title.png"

const CONTACT_EMAIL = "info@g-energy.global"
// TODO: replace with the real WhatsApp link, e.g. https://wa.me/<countrycode+number>
const WHATSAPP_LINK = "#"
// TODO: replace with the real Calendly (or other booking tool) link
const CALENDLY_LINK = "#"

const LetsConnect = () => {
   const [showForm, setShowForm] = useState(false)
   const formRef = useRef<HTMLFormElement>(null)

   const handlePlaceholderClick = (e: React.MouseEvent) => {
      e.preventDefault()
   }

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const data = new FormData(e.currentTarget)
      const name = data.get("name") as string
      const email = data.get("email") as string
      const message = data.get("message") as string
      const subject = encodeURIComponent(`Information Request from ${name}`)
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
      toast.success("Opening your email client to send the request...", { position: "top-center" })
      formRef.current?.reset()
      setShowForm(false)
   }

   return (
      <section id="lets-connect" className="testimonial-area pt-120 pb-120">
         <div className="container">
            <div className="section-header text-center mb-60">
               <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <Image className="me-1" src={shape_1} alt="icon" />
                  GET IN TOUCH
               </h5>
               <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Let&apos;s Connect</h2>
            </div>
            <div className="row g-4 justify-content-center">
               <div className="col-lg-3 col-md-6">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="service-two__item d-block text-center p-4 h-100">
                     <i className="fa-regular fa-envelope mb-3" style={{ fontSize: "28px", color: "#3C72FC" }}></i>
                     <h4 className="mb-0">Email Us</h4>
                  </a>
               </div>
               <div className="col-lg-3 col-md-6">
                  <a href={WHATSAPP_LINK} onClick={handlePlaceholderClick} className="service-two__item d-block text-center p-4 h-100">
                     <i className="fa-brands fa-whatsapp mb-3" style={{ fontSize: "28px", color: "#3C72FC" }}></i>
                     <h4 className="mb-0">WhatsApp</h4>
                  </a>
               </div>
               <div className="col-lg-3 col-md-6">
                  <a href={CALENDLY_LINK} onClick={handlePlaceholderClick} className="service-two__item d-block text-center p-4 h-100">
                     <i className="fa-regular fa-calendar-days mb-3" style={{ fontSize: "28px", color: "#3C72FC" }}></i>
                     <h4 className="mb-0">Book a Meeting</h4>
                  </a>
               </div>
               <div className="col-lg-3 col-md-6">
                  <button type="button" onClick={() => setShowForm(true)} className="service-two__item text-center p-4 h-100 w-100 border-0 bg-transparent">
                     <i className="fa-regular fa-file-lines mb-3" style={{ fontSize: "28px", color: "#3C72FC" }}></i>
                     <h4 className="mb-0">Request Information</h4>
                  </button>
               </div>
            </div>
         </div>

         {showForm && (
            <div
               onClick={() => setShowForm(false)}
               style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
            >
               <div onClick={(e) => e.stopPropagation()} className="bg-white p-4 rounded" style={{ maxWidth: "480px", width: "100%" }}>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                     <h4 className="mb-0">Request Information</h4>
                     <button type="button" onClick={() => setShowForm(false)} className="border-0 bg-transparent fs-4" aria-label="Close">
                        <i className="fa-solid fa-xmark"></i>
                     </button>
                  </div>
                  <form ref={formRef} onSubmit={handleSubmit}>
                     <div className="mb-3">
                        <label htmlFor="lc-name">Your Name*</label>
                        <input id="lc-name" name="name" type="text" required placeholder="Your Name" className="form-control" />
                     </div>
                     <div className="mb-3">
                        <label htmlFor="lc-email">Your Email*</label>
                        <input id="lc-email" name="email" type="email" required placeholder="Your Email" className="form-control" />
                     </div>
                     <div className="mb-3">
                        <label htmlFor="lc-message">Message*</label>
                        <textarea id="lc-message" name="message" required placeholder="Tell us what you'd like to know" className="form-control" rows={4}></textarea>
                     </div>
                     <button type="submit" className="btn-one d-block w-100 text-center">Send Request <i className="fa-regular fa-arrow-right-long"></i></button>
                  </form>
               </div>
            </div>
         )}
      </section>
   )
}

export default LetsConnect
