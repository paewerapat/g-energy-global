import { StaticImageData } from "next/image";

import icon_1 from "@/assets/images/icon/service-icon1.png"
import icon_2 from "@/assets/images/icon/service-icon2.png"
import icon_3 from "@/assets/images/icon/service-icon3.png"
import icon2_1 from "@/assets/images/icon/service-two-icon1.png"
import icon2_2 from "@/assets/images/icon/service-two-icon2.png"
import icon2_3 from "@/assets/images/icon/service-two-icon3.png"
import icon2_4 from "@/assets/images/icon/service-two-icon4.png"
import icon2_5 from "@/assets/images/icon/service-two-icon5.png"
import icon2_6 from "@/assets/images/icon/service-two-icon6.png"
import icon3_1 from "@/assets/images/icon/service-three-icon1.png"
import icon3_2 from "@/assets/images/icon/service-three-icon2.png"
import icon3_3 from "@/assets/images/icon/service-three-icon3.png"

import service_thumb1 from "@/assets/images/service/service-image1.jpg"
import service_thumb2 from "@/assets/images/service/service-image2.jpg"
import service_thumb3 from "@/assets/images/service/service-image3.jpg"
import service_thumb4 from "@/assets/images/service/service-image4.jpg"
import service_thumb5 from "@/assets/images/service/service-image5.jpg"
import service_thumb6 from "@/assets/images/service/service-image6.jpg"
import service3_thumb1 from "@/assets/images/service/service-three-image.jpg"
import service3_thumb2 from "@/assets/images/service/service-three-image2.jpg"
import service3_thumb3 from "@/assets/images/service/service-three-image3.jpg"

interface DataType {
   id: number;
   page: string;
   thumb?: StaticImageData;
   icon: StaticImageData;
   title: string;
   desc: string;
}

const service_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      icon: icon_1,
      title: "Energy Solutions",
      desc: "Comprehensive energy consulting and strategic partnership development for sustainable business growth."
   },
   {
      id: 2,
      page: "home_1",
      icon: icon_2,
      title: "Technology Distribution",
      desc: "Strategic technology solutions and infrastructure distribution tailored to industry-specific needs."
   },
   {
      id: 3,
      page: "home_1",
      icon: icon_3,
      title: "Digital Infrastructure",
      desc: "Modern digital transformation and infrastructure development for enhanced operational efficiency."
   },

   // home_2
   {
      id: 1,
      page: "home_2",
      thumb: service_thumb1,
      icon: icon2_1,
      title: "Energy Infrastructure",
      desc: "Building resilient and efficient energy infrastructure for long-term operational success."
   },
   {
      id: 2,
      page: "home_2",
      thumb: service_thumb2,
      icon: icon2_2,
      title: "Business Development",
      desc: "Strategic business partnership and development consulting across energy and technology sectors."
   },
   {
      id: 3,
      page: "home_2",
      thumb: service_thumb3,
      icon: icon2_3,
      title: "Technology Solutions",
      desc: "Integrated technology solutions designed to support sustainable business growth."
   },
   {
      id: 4,
      page: "home_2",
      thumb: service_thumb4,
      icon: icon2_4,
      title: "Strategic Consulting",
      desc: "Expert guidance on energy sector transformation and market expansion strategies."
   },
   {
      id: 5,
      page: "home_2",
      thumb: service_thumb5,
      icon: icon2_5,
      title: "Digital Transformation",
      desc: "Comprehensive digital modernization services for operational excellence and innovation."
   },
   {
      id: 6,
      page: "home_2",
      thumb: service_thumb6,
      icon: icon2_6,
      title: "Partnership Support",
      desc: "Dedicated support services ensuring successful long-term partnerships and growth."
   },

   // home_3
   {
      id: 1,
      page: "home_3",
      thumb: service3_thumb1,
      icon: icon3_1,
      title: "Energy Solutions",
      desc: "Comprehensive energy consulting and strategic partnership development for sustainable business growth."
   },
   {
      id: 2,
      page: "home_3",
      thumb: service3_thumb2,
      icon: icon3_2,
      title: "Technology Distribution",
      desc: "Strategic technology solutions and infrastructure distribution tailored to industry-specific needs."
   },
   {
      id: 3,
      page: "home_3",
      thumb: service3_thumb3,
      icon: icon3_3,
      title: "Digital Infrastructure",
      desc: "Modern digital transformation and infrastructure development for enhanced operational efficiency."
   },
];

export default service_data;