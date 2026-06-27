import { StaticImageData } from "next/image";

import Case_1 from "@/assets/images/case/case-image1.jpg"
import Case_2 from "@/assets/images/case/case-image2.jpg"
import Case_3 from "@/assets/images/case/case-image3.jpg"
import Case_4 from "@/assets/images/case/case-image4.jpg"

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   sub_title: string;
   title: string;
}

const Case_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: Case_1,
      sub_title: "Solution",
      title: "Energy & Technology Solutions",
   },
   {
      id: 2,
      page: "home_1",
      thumb: Case_2,
      sub_title: "Distribution",
      title: "Distribution Channel Support",
   },
   {
      id: 3,
      page: "home_1",
      thumb: Case_3,
      sub_title: "Infrastructure",
      title: "Digital Infrastructure Projects",
   },
   {
      id: 4,
      page: "home_1",
      thumb: Case_4,
      sub_title: "Supply",
      title: "Enterprise Technology Supply",
   },
   {
      id: 5,
      page: "home_1",
      thumb: Case_1,
      sub_title: "Integration",
      title: "Business Solution Integration",
   },
];

export default Case_data;
