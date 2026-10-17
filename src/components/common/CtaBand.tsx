import Link from "next/link"
import site from "@/data/site"

interface CtaBandProps {
   title?: string;
   lead?: string;
}

const CtaBand = ({
   title = "Let's talk about what you need",
   lead = "Tell us what you're working on. A specialist from our Bangkok team will get back to you with the right next step.",
}: CtaBandProps) => {
   return (
      <section className="ge-cta pb-120">
         <div className="container">
            <div className="ge-cta__box wow fadeInUp" data-wow-duration="1000ms">
               <div className="ge-cta__glow" aria-hidden="true"></div>
               <div className="ge-cta__grid" aria-hidden="true"></div>
               <div className="row g-4 align-items-center position-relative">
                  <div className="col-lg-8">
                     <span className="ge-eyebrow-light">Talk to our team</span>
                     <h2 className="text-white mt-2">{title}</h2>
                     <p className="mt-3">{lead}</p>
                  </div>
                  <div className="col-lg-4 text-lg-end">
                     <div className="d-flex flex-wrap gap-3 justify-content-lg-end">
                        <Link href="/contact" className="btn-one ge-btn-white">Send an enquiry <i className="fa-regular fa-arrow-right-long"></i></Link>
                        <a href={`mailto:${site.email}`} className="ge-btn-ghost"><i className="fa-light fa-envelope me-2"></i>{site.email}</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default CtaBand
