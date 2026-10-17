import FooterOne from "@/layouts/footers/FooterOne"
import Header from "@/layouts/headers/Header"
import Hero from "./Hero"
import TrustStrip from "./TrustStrip"
import WhyUs from "./WhyUs"
import SolutionsGrid from "./SolutionsGrid"
import RedingtonShowcase from "./RedingtonShowcase"
import TrackRecord from "./TrackRecord"
import Process from "../common/Process"
import Offices from "../common/Offices"
import CtaBand from "../common/CtaBand"

const Home = () => {
   return (
      <>
         <Header />
         <main id="main">
            <Hero />
            <TrustStrip />
            <WhyUs />
            <SolutionsGrid />
            <RedingtonShowcase />
            <Process />
            <TrackRecord />
            <Offices />
            <CtaBand />
         </main>
         <FooterOne />
      </>
   )
}

export default Home
