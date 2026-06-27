import { StaticImageData } from "next/image";

import Case_1 from "@/assets/images/case/case-image1.jpg"
import Case_2 from "@/assets/images/case/case-image2.jpg"
import Case_3 from "@/assets/images/case/case-image3.jpg"
import Case_4 from "@/assets/images/case/case-image4.jpg"
import Case2_1 from "@/assets/images/case/case-two-image1.jpg"
import Case2_2 from "@/assets/images/case/case-two-image2.jpg"
import Case2_3 from "@/assets/images/case/case-two-image3.jpg"
import Case2_4 from "@/assets/images/case/case-two-image4.jpg"

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
      title: "Energy Solutions",
   },
   {
      id: 2,
      page: "home_1",
      thumb: Case_2,
      sub_title: "Technology",
      title: "Infrastructure Development",
   },
   {
      id: 3,
      page: "home_1",
      thumb: Case_3,
      sub_title: "Solution",
      title: "Digital Transformation",
   },
   {
      id: 4,
      page: "home_1",
      thumb: Case_4,
      sub_title: "Security",
      title: "System Integration",
   },
   {
      id: 5,
      page: "home_1",
      thumb: Case_2,
      sub_title: "Technology",
      title: "Infrastructure Development",
   },

   // home_2
   {
      id: 1,
      page: "home_2",
      thumb: Case2_1,
      sub_title: "Solution",
      title: "Energy Solutions",
   },
   {
      id: 2,
      page: "home_2",
      thumb: Case2_2,
      sub_title: "Technology",
      title: "Digital Transformation",
   },
   {
      id: 3,
      page: "home_2",
      thumb: Case2_3,
      sub_title: "Security",
      title: "System Integration",
   },
   {
      id: 4,
      page: "home_2",
      thumb: Case2_4,
      sub_title: "Technology",
      title: "Infrastructure Development",
   },
   {
      id: 5,
      page: "home_2",
      thumb: Case2_2,
      sub_title: "Technology",
      title: "Digital Transformation",
   },

   // case_1
   {
      id: 1,
      page: "case_1",
      thumb: Case_1,
      sub_title: "Solution",
      title: "Energy Solutions",
   },
   {
      id: 2,
      page: "case_1",
      thumb: Case_2,
      sub_title: "Technology",
      title: "Infrastructure Development",
   },
   {
      id: 3,
      page: "case_1",
      thumb: Case_3,
      sub_title: "Solution",
      title: "Digital Transformation",
   },
   {
      id: 4,
      page: "case_1",
      thumb: Case_4,
      sub_title: "Security",
      title: "System Integration",
   },
   {
      id: 5,
      page: "case_1",
      thumb: Case2_1,
      sub_title: "DEVELOPMENT",
      title: "Strategic Partnership",
   },
   {
      id: 6,
      page: "case_1",
      thumb: Case2_4,
      sub_title: "Design",
      title: "Technology Planning",
   },

   // case_2

   {
      id: 1,
      page: "case_2",
      thumb: Case2_1,
      sub_title: "Solution",
      title: "Energy Solutions",
   },
   {
      id: 2,
      page: "case_2",
      thumb: Case2_2,
      sub_title: "Technology",
      title: "Infrastructure Development",
   },
   {
      id: 3,
      page: "case_2",
      thumb: Case2_3,
      sub_title: "Solution",
      title: "Digital Transformation",
   },
   {
      id: 4,
      page: "case_2",
      thumb: Case2_4,
      sub_title: "Security",
      title: "System Integration",
   },
   {
      id: 5,
      page: "case_2",
      thumb: Case_1,
      sub_title: "DEVELOPMENT",
      title: "Strategic Partnership",
   },
   {
      id: 6,
      page: "case_2",
      thumb: Case_2,
      sub_title: "Design",
      title: "Technology Planning",
   },
];

export default Case_data;