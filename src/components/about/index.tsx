import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BreadCrumb from "../common/BreadCrumb"
import AboutHome from "../homes/home-two/About"
import Offer from "../homes/home-one/Offer"
import Brand from "../homes/home-one/Brand"
import Case from "../homes/home-one/Case"
import LetsConnect from "./LetsConnect"
import StrategicAdvantages from "../common/StrategicAdvantages"

const About = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb title="About G-Energy Great" sub_title="About G-Energy Great" />
            <AboutHome style={false} />
            <Offer />
            <Brand />
            <Case />
            <LetsConnect />
            <StrategicAdvantages />
         </main>
         <FooterOne />
      </>
   )
}

export default About
