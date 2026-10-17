"use client"
import Link from "next/link"
import { useEffect, useRef } from "react";
import MobileMenu from "./MobileMenu";
import Logo from "../Logo";
import site from "@/data/site";

interface MobileSidebarProps {
   offCanvas: boolean;
   setOffCanvas: (offCanvas: boolean) => void;
}

const Offcanvas = ({ offCanvas, setOffCanvas }: MobileSidebarProps) => {
   const close = () => setOffCanvas(false);
   const panelRef = useRef<HTMLDivElement>(null);
   const closeRef = useRef<HTMLButtonElement>(null);

   // Dialog behaviour: focus moves inside, Tab is trapped, Escape closes, the page behind
   // is inert, and focus returns to the menu button on close.
   useEffect(() => {
      // Set imperatively: React 18 cannot render the `inert` attribute from a prop.
      panelRef.current?.toggleAttribute("inert", !offCanvas);
      if (!offCanvas) return;
      const opener = document.activeElement as HTMLElement | null;
      const background = document.querySelectorAll<HTMLElement>("main, footer, header");
      background.forEach((el) => el.setAttribute("inert", ""));
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();

      const onKey = (e: KeyboardEvent) => {
         if (e.key === "Escape") return setOffCanvas(false);
         if (e.key !== "Tab" || !panelRef.current) return;
         const focusables = panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
         const first = focusables[0];
         const last = focusables[focusables.length - 1];
         if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
         } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
         }
      };
      document.addEventListener("keydown", onKey);
      return () => {
         document.removeEventListener("keydown", onKey);
         background.forEach((el) => el.removeAttribute("inert"));
         document.body.style.overflow = "";
         opener?.focus();
      };
   }, [offCanvas, setOffCanvas]);

   return (
      <div
         id="targetElement"
         ref={panelRef}
         className={`sidebar-area ge-sidebar ${offCanvas ? "" : "sidebar__hide"}`}
         role="dialog"
         aria-modal="true"
         aria-label="Menu"
         aria-hidden={!offCanvas}
      >
         <div onClick={close} className="sidebar__overlay"></div>
         <button ref={closeRef} type="button" onClick={close} id="closeButton" className="text-white" aria-label="Close menu"><i className="fa-solid fa-xmark"></i></button>
         <Logo className="mb-40" onClick={close} />
         <nav className="mobile-menu overflow-hidden mean-container" aria-label="Mobile">
            <div className="mean-bar">
               <div className="mean-nav">
                  <MobileMenu onNavigate={close} />
               </div>
            </div>
         </nav>
         <Link href="/contact" onClick={close} className="btn-one d-block text-center mt-30">
            Talk to our team <i className="fa-regular fa-arrow-right-long"></i>
         </Link>
         <ul className="info pt-40 mt-40">
            <li><i className="fa-solid primary-color fa-paper-plane"></i> <a href={`mailto:${site.email}`}>{site.email}</a></li>
            {site.phone && <li className="pt-2"><i className="fa-solid primary-color fa-phone"></i> <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></li>}
            <li className="pt-2"><i className="fa-solid primary-color fa-location-dot"></i> <a href={site.mapUrl} target="_blank" rel="noreferrer">{site.address}</a></li>
         </ul>
      </div>
   )
}

export default Offcanvas
