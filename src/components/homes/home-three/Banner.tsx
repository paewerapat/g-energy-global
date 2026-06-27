import Image from "next/image"
import Link from "next/link"

import shape_1 from "@/assets/images/bg/banner-three-bg.png"
import shape_2 from "@/assets/images/banner/banner-three-left-shape.png"
import shape_3 from "@/assets/images/banner/banner-three-right-shape.png"
import banner_thumb from "@/assets/images/banner/banner-three-image.png"

const Banner = () => {
   return (
      <div className="banner-three-area">
            <div className="banner-three__bg">
               <Image className="sway_Y__animation" src={shape_1} alt="bg-image" />
            </div>
            <div className="banner-three__shape-left wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
               <Image className="sway_Y__animationY" src={shape_2} alt="image" />
            </div>
            <div className="banner-three__shape-right wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
               <Image className="sway__animationX" src={shape_3} alt="image" />
            </div>
            <div className="banner-three__container">
               <div className="row align-items-center">
                  <div className="col-lg-7 order-2 order-lg-1">
                     <div className="banner-three__content pt-0 pb-0">
                        <h4 className="wow fadeInUp text-white mb-20" data-wow-delay="00ms" data-wow-duration="1500ms">
                           ENERGY & TECHNOLOGY PARTNERSHIP
                        </h4>
                        <h1 className="wow fadeInUp text-white" data-wow-delay="200ms" data-wow-duration="1500ms">
                           Reliable solutions for energy and growth
                        </h1>
                        <p className="wow fadeInUp mt-20" data-wow-delay="400ms" data-wow-duration="1500ms">
                           G-Energy Great supports clients and partners with strategic insight, practical execution, and long-term value across energy, technology, and infrastructure.
                        </p>
                        <div className="banner-three__info wow fadeInUp mt-50" data-wow-delay="600ms"
                           data-wow-duration="1500ms">
                           <Link className="wow fadeInUp btn-one mt-0" href="/about">Discover Our Approach <i className="fa-regular fa-arrow-right-long"></i></Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-5 order-1 order-lg-2 wow fadeInLeft" data-wow-delay="200ms"
                     data-wow-duration="1500ms">
                     <div className="image">
                        <Image src={banner_thumb} alt="image" />
                     </div>
                  </div>
               </div>
            </div>
      </div>
   )
}

export default Banner
