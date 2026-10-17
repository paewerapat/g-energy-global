import Counter from "../common/Counter"
import SectionHeader from "../common/SectionHeader"
import { cases, groupStats } from "@/data/company"

const TrackRecord = () => {
   return (
      <section id="case-studies" className="ge-track sub-bg pt-120 pb-120">
         <div className="container">
            <SectionHeader
               eyebrow="Track record"
               title="Results for banks, insurers and enterprises across the region"
               lead="Delivered by the Vanguard Biztech group — the same teams, partners and playbooks now serving Thailand."
            />

            <div className="ge-track__stats mt-60 wow fadeInUp" data-wow-duration="1000ms">
               {groupStats.map((s) => (
                  <div key={s.label} className="ge-track__stat">
                     <strong>{s.text ?? <Counter value={s.value} suffix={s.suffix} />}</strong>
                     <span>{s.label}</span>
                  </div>
               ))}
            </div>

            <div className="row g-4 mt-2">
               {cases.map((c, i) => (
                  <div key={c.title} className="col-lg-6 wow fadeInUp" data-wow-delay={`${i * 150}ms`} data-wow-duration="1000ms">
                     <article className="ge-card ge-case spotlight h-100">
                        <span className="ge-case__tag">{c.tag}</span>
                        <h3>{c.title}</h3>
                        <dl className="ge-case__body">
                           <div>
                              <dt><i className="fa-light fa-bullseye-arrow"></i> Challenge</dt>
                              <dd>{c.challenge}</dd>
                           </div>
                           <div>
                              <dt><i className="fa-light fa-lightbulb"></i> Solution</dt>
                              <dd>{c.solution}</dd>
                           </div>
                        </dl>
                        <ul className="ge-case__results">
                           {c.results.map((r) => (
                              <li key={r.label}><strong>{r.value}</strong><span>{r.label}</span></li>
                           ))}
                        </ul>
                     </article>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default TrackRecord
