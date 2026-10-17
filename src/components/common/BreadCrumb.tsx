import Image from "next/image";
import Link from "next/link";

import shape_1 from "@/assets/images/banner/inner-banner-shape2.png"
import shape_2 from "@/assets/images/banner/inner-banner-shape1.png"
import shape_3 from "@/assets/images/banner/inner-banner-shape3.png"

interface DataType {
   sub_title: string;
   title: string;
   eyebrow?: string;
   lead?: string;
}
const BreadCrumb = ({ sub_title, title, eyebrow, lead }: DataType) => {
   return (
      <section className="banner__inner-page ge-page-hero">
         <div className="ge-hero__grid" aria-hidden="true"></div>
         <div className="ge-hero__orb ge-hero__orb--1" aria-hidden="true"></div>
         <div className="shape2 wow slideInLeft" data-wow-duration="1500ms" aria-hidden="true">
            <Image src={shape_1} alt="" />
         </div>
         <div className="shape1 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms" aria-hidden="true">
            <Image src={shape_2} alt="" />
         </div>
         <div className="shape3 wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms" aria-hidden="true">
            <Image className="sway__animationX" src={shape_3} alt="" />
         </div>
         <div className="container position-relative">
            <nav className="breadcrumb-list wow fadeInUp" data-wow-duration="1000ms" aria-label="Breadcrumb">
               <Link href="/">Home</Link><span><i className="fa-regular fa-angle-right mx-2"></i>{sub_title}</span>
            </nav>
            {eyebrow && <span className="ge-eyebrow-light d-block mt-3 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1000ms">{eyebrow}</span>}
            <h1 className="wow fadeInUp" data-wow-delay="150ms" data-wow-duration="1000ms">{title}</h1>
            {lead && <p className="ge-page-hero__lead wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1000ms">{lead}</p>}
         </div>
      </section>
   )
}

export default BreadCrumb
