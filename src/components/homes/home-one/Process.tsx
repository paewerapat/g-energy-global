import Image, { StaticImageData } from "next/image";

import img_1 from "@/assets/images/process/process-image1.png"
import img_2 from "@/assets/images/process/process-image2.png"
import img_3 from "@/assets/images/process/process-image3.png"
import shape from "@/assets/images/icon/section-title.png"
import shape_2 from "@/assets/images/process/process-arry.png"

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   desc: string;
}

const process_data: DataType[] = [
   {
      id: 1,
      img: img_1,
      title: "Define Requirements",
      desc: "In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur",
   },
   {
      id: 2,
      img: img_2,
      title: "Design & Prototyping",
      desc: "In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur",
   },
   {
      id: 3,
      img: img_3,
      title: "Finial Solution",
      desc: "In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur",
   },
];

const Process = () => {
   return (
      <section className="process-area pt-120 pb-120">
         <div className="container">
            <div className="section-header text-center mb-60">
               <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <Image className="me-1" src={shape} alt="icon" />
                  Work Process
               </h5>
               <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Our Development Process
               </h2>
            </div>
            <div className="row g-4">
               {process_data.map((item) => (
                  <div key={item.id} className="col-lg-4 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                     <div className="process__item mb-100">
                        <div className="process-arry bobble__animation">
                           <Image src={shape_2} alt="arry-icon" />
                        </div>
                        <div className="process__image">
                           <Image src={item.img} alt="image" />
                           <span className="process-number">{item.id}</span>
                        </div>
                        <div className="process__content">
                           <h4 className="mt-25 mb-10">{item.title}</h4>
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Process
