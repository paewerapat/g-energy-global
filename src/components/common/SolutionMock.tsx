import { Solution } from "@/data/solutions"

// Small illustrative UI panels (decorative) that show what each solution area looks like in practice.
const SolutionMock = ({ type }: { type: Solution["mock"] }) => {
   if (type === "infra") {
      return (
         <div className="ge-mock" aria-hidden="true">
            <div className="ge-mock__head"><span></span><span></span><span></span><em>workloads</em></div>
            <div className="ge-mock__infra">
               {["ERP", "Web apps", "AI / GPU", "Data"].map((w) => <b key={w}>{w}</b>)}
            </div>
            <div className="ge-mock__split">
               <div><small>Public cloud</small><i className="ge-bar" style={{ ["--w" as string]: "78%" }}></i></div>
               <div><small>On-premises</small><i className="ge-bar" style={{ ["--w" as string]: "52%" }}></i></div>
            </div>
         </div>
      )
   }
   if (type === "pipeline") {
      return (
         <div className="ge-mock" aria-hidden="true">
            <div className="ge-mock__head"><span></span><span></span><span></span><em>release v2.4.1</em></div>
            <ol className="ge-mock__pipeline">
               {["Code", "Build", "Run", "Data", "Backup"].map((s) => <li key={s}><i className="fa-solid fa-check"></i>{s}</li>)}
            </ol>
            <div className="ge-mock__status"><span className="ge-dot is-green"></span>Deployed</div>
         </div>
      )
   }
   if (type === "profile") {
      return (
         <div className="ge-mock" aria-hidden="true">
            <div className="ge-mock__head"><span></span><span></span><span></span><em>customer 360</em></div>
            <div className="ge-mock__profile">
               <div className="ge-mock__avatar">AK</div>
               <div>
                  <b>Segment · Loyal</b>
                  <small>Next best action: renewal offer</small>
               </div>
               <div className="ge-mock__score"><strong>86</strong><small>score</small></div>
            </div>
         </div>
      )
   }
   if (type === "activity") {
      return (
         <div className="ge-mock" aria-hidden="true">
            <div className="ge-mock__head"><span></span><span></span><span></span><em>activity log</em></div>
            <ul className="ge-mock__log">
               <li><span>Open CRM report</span><b className="is-ok">Allowed</b></li>
               <li><span>Copy files to USB</span><b className="is-bad">Blocked</b></li>
               <li><span>Upload to personal drive</span><b className="is-warn">Flagged</b></li>
            </ul>
         </div>
      )
   }
   return (
      <div className="ge-mock" aria-hidden="true">
         <div className="ge-mock__head"><span></span><span></span><span></span><em>site energy</em></div>
         <div className="ge-mock__energy">
            {[40, 62, 75, 90, 82, 68, 50].map((h, i) => <i key={i} style={{ ["--h" as string]: `${h}%` }}></i>)}
         </div>
         <div className="ge-mock__status"><span className="ge-dot is-green"></span>Solar generation today</div>
      </div>
   )
}

export default SolutionMock
