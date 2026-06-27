"use client"
import { useInView } from "react-intersection-observer";

interface SkillItem {
   title: string;
   percentage: number;
   duration: string;
}

const skills: SkillItem[] = [
   { title: "Energy Solutions", percentage: 90, duration: ".8s" },
   { title: "Infrastructure Development", percentage: 85, duration: ".9s" },
   { title: "Digital Transformation", percentage: 95, duration: ".8s" },
   { title: "Strategic Partnerships", percentage: 98, duration: ".9s" },
];

const Skill = () => {

   const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0.3,
   });

   const midIndex = Math.ceil(skills.length / 2);
   const column1 = skills.slice(0, midIndex);
   const column2 = skills.slice(midIndex);

   return (
      <div className="skills mt-40" ref={ref}>
         <div className="row g-4">
            {[column1, column2].map((column, colIndex) => (
               <div className="col-md-6" key={colIndex}>
                  <div className="experience-progress-wrapper">
                     {column.map((skill, index) => (
                        <div className="experience-progress pb-4" key={index}>
                           <div className="experience-title-wrapper d-flex align-items-center justify-content-between">
                              <h5 className="experience-title pb-2">{skill.title}</h5>
                              <span className="exp">{skill.percentage}%</span>
                           </div>
                           <div className="progress">
                              <div
                                 className={`progress-bar ${inView ? "animate" : ""}`}
                                 style={{
                                    width: inView ? `${skill.percentage}%` : "0%",
                                    transition: `width ${skill.duration} ease`,
                                 }}
                                 role="progressbar"
                                 aria-valuenow={skill.percentage}
                                 aria-valuemin={0}
                                 aria-valuemax={100}
                              ></div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Skill;