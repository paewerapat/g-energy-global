import Image from "next/image"

import shape_1 from "@/assets/images/icon/section-title.png"

const advantages = [
   {
      title: "Strategic Partnerships",
      description: "Working alongside trusted industry partners to strengthen capabilities, accelerate innovation, and support sustainable growth.",
      icon: "fa-handshake",
   },
   {
      title: "Industry Expertise",
      description: "Deep understanding of energy, technology, and infrastructure sectors.",
      icon: "fa-lightbulb",
   },
   {
      title: "Operational Excellence",
      description: "Commitment to quality, reliability, and efficient project execution.",
      icon: "fa-gears",
   },
   {
      title: "Sustainable Growth",
      description: "Long-term value creation through innovation and responsible business practices.",
      icon: "fa-leaf",
   },
]

const StrategicAdvantages = () => {
   return (
      <section className="testimonial-area pt-120 pb-120">
         <div className="container">
            <div className="section-header text-center mb-60">
               <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <Image className="me-1" src={shape_1} alt="icon" />
                  STRATEGIC ADVANTAGES
               </h5>
               <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Why business partners choose G-Energy Great</h2>
            </div>
            <div className="row g-4">
               {advantages.map((item, index) => (
                  <div key={item.title} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${index * 100}ms`} data-wow-duration="1500ms">
                     <div className="service-two__item text-center p-4 h-100">
                        <div className="content">
                           <i className={`fa-solid ${item.icon} mb-3`} style={{ fontSize: "28px", color: "#3C72FC" }}></i>
                           <h4 className="mb-15">{item.title}</h4>
                           <p>{item.description}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default StrategicAdvantages
