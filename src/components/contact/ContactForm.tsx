"use client"
import { useEffect, useState } from "react"
import site from "@/data/site"
import solutions from "@/data/solutions"
import { redingtonServices } from "@/data/redington"

const topics = [
   ...solutions.map((s) => ({ value: s.slug, label: s.title })),
   ...redingtonServices.map((s) => ({ value: s.slug, label: `Redington · ${s.title}` })),
   { value: "partnership", label: "Channel / reseller partnership" },
   { value: "other", label: "Something else" },
]

// No backend yet: composes an email in the visitor's mail client and keeps the form filled in
// so nothing is lost if no mail app opens.
// TODO(client): connect to a form endpoint / CRM so enquiries are captured server-side.
const ContactForm = () => {
   const [topic, setTopic] = useState("")
   const [sent, setSent] = useState(false)

   useEffect(() => {
      const t = new URLSearchParams(window.location.search).get("topic")
      if (t && topics.some((x) => x.value === t)) setTopic(t)
   }, [])

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const data = new FormData(e.currentTarget)
      const get = (k: string) => String(data.get(k) ?? "").trim()
      const topicLabel = topics.find((x) => x.value === get("topic"))?.label ?? "General enquiry"
      const subject = encodeURIComponent(`[Website] ${topicLabel} — ${get("company") || get("name")}`)
      const body = encodeURIComponent(
         `Name: ${get("name")}\nCompany: ${get("company")}\nEmail: ${get("email")}\nPhone: ${get("phone")}\nTopic: ${topicLabel}\n\n${get("message")}`
      )
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
      setSent(true)
   }

   return (
      <form onSubmit={handleSubmit} className="ge-form">
         <div className="row g-3">
            <div className="col-md-6">
               <label htmlFor="cf-name">Full name <span aria-hidden="true">*</span></label>
               <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder="Your name" />
            </div>
            <div className="col-md-6">
               <label htmlFor="cf-company">Company</label>
               <input id="cf-company" name="company" type="text" autoComplete="organization" placeholder="Company name" />
            </div>
            <div className="col-md-6">
               <label htmlFor="cf-email">Work email <span aria-hidden="true">*</span></label>
               <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="name@company.com" />
            </div>
            <div className="col-md-6">
               <label htmlFor="cf-phone">Phone</label>
               <input id="cf-phone" name="phone" type="tel" autoComplete="tel" placeholder="+66" />
            </div>
            <div className="col-12">
               <label htmlFor="cf-topic">I&apos;m interested in</label>
               <select id="cf-topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
                  <option value="">Select a topic</option>
                  <optgroup label="Solutions">
                     {topics.slice(0, solutions.length).map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </optgroup>
                  <optgroup label="Redington services">
                     {topics.slice(solutions.length, solutions.length + redingtonServices.length).map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </optgroup>
                  <optgroup label="Other">
                     {topics.slice(solutions.length + redingtonServices.length).map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </optgroup>
               </select>
            </div>
            <div className="col-12">
               <label htmlFor="cf-message">How can we help? <span aria-hidden="true">*</span></label>
               <textarea id="cf-message" name="message" required rows={5} placeholder="Tell us about your project, timeline and goals"></textarea>
            </div>
            <div className="col-12 d-flex flex-wrap align-items-center justify-content-between gap-3">
               <small className="ge-form__note">
                  <span aria-hidden="true">*</span> Required. We use your details only to respond to this enquiry.
                  {/* TODO(client): link the privacy notice (PDPA) here once /privacy exists. */}
               </small>
               <button type="submit" className="btn-one">Send enquiry <i className="fa-regular fa-paper-plane"></i></button>
            </div>
            <div className="col-12" aria-live="polite">
               {sent && (
                  <div className="ge-form__status">
                     <i className="fa-solid fa-circle-check"></i>
                     <p>
                        Your email app should now open with the enquiry ready to send. If nothing opened, email us directly at{" "}
                        <a href={`mailto:${site.email}`}>{site.email}</a> — your details are still filled in above.
                     </p>
                  </div>
               )}
            </div>
         </div>
      </form>
   )
}

export default ContactForm
