import FooterOne from "@/layouts/footers/FooterOne"
import HeaderThree from "@/layouts/headers/HeaderThree"
import Banner from "./Banner"
import Service from "./Service"
import Brand from "./Brand"
import About from "./About"
import Project from "./Project"
import StrategicAdvantages from "@/components/common/StrategicAdvantages"

const HomeThree = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Banner />
            <Service />
            <Brand />
            <About />
            <Project />
            <StrategicAdvantages />
         </main>
         <FooterOne />
      </>
   )
}

export default HomeThree
