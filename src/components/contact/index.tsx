import FooterOne from "@/layouts/footers/FooterOne"
import Header from "@/layouts/headers/Header"
import BreadCrumb from "../common/BreadCrumb"
import Offices from "../common/Offices"
import ContactForm from "./ContactForm"
import SectionHeader from "../common/SectionHeader"
import site from "@/data/site"

const channels = [
   { icon: "fa-light fa-envelope", title: "Email", value: site.email, href: `mailto:${site.email}` },
   { icon: "fa-light fa-phone", title: "Phone", value: site.phone, href: site.phone ? `tel:${site.phone.replace(/\s/g, "")}` : "" },
   { icon: "fa-brands fa-line", title: "LINE", value: site.line ? "Chat with us" : "", href: site.line },
   { icon: "fa-brands fa-whatsapp", title: "WhatsApp", value: site.whatsapp ? "Message us" : "", href: site.whatsapp },
   { icon: "fa-light fa-calendar-days", title: "Book a meeting", value: site.booking ? "Pick a time" : "", href: site.booking },
].filter((c) => c.value && c.href)

const Contact = () => {
   return (
      <>
         <Header />
         <main id="main">
            <BreadCrumb
               title="Contact us"
               sub_title="Contact"
               eyebrow="Talk to our team"
               lead="Tell us what you're working on — products, services, a project or a partnership. We'll connect you with the right specialist."
            />

            <section className="ge-contact pt-120 pb-120">
               <div className="container">
                  <div className="row g-5">
                     <div className="col-lg-5">
                        <SectionHeader
                           align="left"
                           eyebrow="Get in touch"
                           title="Let's start a conversation"
                           lead="Whether you need a single product, a full solution or a Redington service, our Bangkok team is here to help."
                        />
                        <ul className="ge-channels mt-40">
                           {channels.map((c, i) => (
                              <li key={c.title} className="wow fadeInUp" data-wow-delay={`${i * 100}ms`} data-wow-duration="1000ms">
                                 <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="ge-channel spotlight">
                                    <span className="ge-icon"><i className={c.icon}></i></span>
                                    <span>
                                       <small>{c.title}</small>
                                       <strong>{c.value}</strong>
                                    </span>
                                    <i className="fa-regular fa-arrow-up-right ms-auto"></i>
                                 </a>
                              </li>
                           ))}
                           <li className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1000ms">
                              <a href={site.mapUrl} target="_blank" rel="noreferrer" className="ge-channel spotlight">
                                 <span className="ge-icon"><i className="fa-light fa-location-dot"></i></span>
                                 <span>
                                    <small>Office</small>
                                    <strong>{site.address}</strong>
                                 </span>
                                 <i className="fa-regular fa-arrow-up-right ms-auto"></i>
                              </a>
                           </li>
                           {site.hours && (
                              <li className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                                 <div className="ge-channel is-static">
                                    <span className="ge-icon"><i className="fa-light fa-clock"></i></span>
                                    <span>
                                       <small>Business hours</small>
                                       <strong>{site.hours}</strong>
                                    </span>
                                 </div>
                              </li>
                           )}
                        </ul>
                     </div>
                     <div className="col-lg-7">
                        <div className="ge-card ge-contact__form wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                           <h3>Send us an enquiry</h3>
                           <p className="mb-30">Share a few details and we&apos;ll get back to you.</p>
                           <ContactForm />
                        </div>
                     </div>
                  </div>

                  <div className="ge-map-embed mt-60 wow fadeInUp" data-wow-duration="1200ms">
                     <iframe
                        src={site.mapEmbed}
                        title={`Map: ${site.address}`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                     ></iframe>
                     <div className="ge-map-embed__card">
                        <span className="ge-icon"><i className="fa-light fa-building"></i></span>
                        <div>
                           <strong>{site.legalName}</strong>
                           <p>{site.address}</p>
                           <a href={site.mapUrl} target="_blank" rel="noreferrer" className="ge-link">
                              Get directions <i className="fa-regular fa-arrow-right-long"></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <Offices className="sub-bg" />
         </main>
         <FooterOne />
      </>
   )
}

export default Contact
