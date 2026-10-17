import SectionHeader from "./SectionHeader"
import { process } from "@/data/company"

const Process = ({ className = "" }: { className?: string }) => {
   return (
      <section id="how-we-deliver" className={`ge-process pt-120 pb-120 ${className}`}>
         <div className="container">
            <SectionHeader
               eyebrow="How we deliver"
               title="From first conversation to measurable results"
               lead="Every engagement follows the same four phases, so you always know what happens next."
            />
            <ol className="ge-process__list mt-60">
               <span className="ge-process__line wow" data-wow-duration="1600ms" aria-hidden="true"></span>
               {process.map((p, i) => (
                  <li key={p.step} className="ge-process__item wow fadeInUp" data-wow-delay={`${i * 150}ms`} data-wow-duration="1000ms">
                     <div className="ge-process__icon">
                        <i className={p.icon}></i>
                        <span>{p.step}</span>
                     </div>
                     <h4>{p.title}</h4>
                     <p>{p.desc}</p>
                  </li>
               ))}
            </ol>
         </div>
      </section>
   )
}

export default Process
