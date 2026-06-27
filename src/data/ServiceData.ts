import { StaticImageData } from "next/image";

import icon3_1 from "@/assets/images/icon/service-three-icon1.png"
import icon3_2 from "@/assets/images/icon/service-three-icon2.png"
import icon3_3 from "@/assets/images/icon/service-three-icon3.png"

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
