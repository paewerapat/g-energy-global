import Marquee from "../common/Marquee"
import { vanguardPartners } from "@/data/company"
import { redingtonBrands } from "@/data/redington"

const TrustStrip = () => {
   return (
      <section id="trust" className="ge-trust">
         <div className="container">
            <p className="ge-trust__label wow fadeInUp" data-wow-duration="1000ms">
               Technology from the world&apos;s leading brands — through Vanguard Biztech and the Redington network
            </p>
         </div>
         <Marquee items={vanguardPartners} speed={50} label="Vanguard Biztech technology partners" />
         <Marquee items={redingtonBrands} speed={55} reverse label="Brands available through Redington" />
      </section>
   )
}

export default TrustStrip
