import Link from "next/link"
import MobileMenu from "./MobileMenu";

interface MobileSidebarProps {
   offCanvas: boolean;
   setOffCanvas: (offCanvas: boolean) => void;
}

const Offcanvas = ({offCanvas, setOffCanvas }: MobileSidebarProps) => {

   return (
      <>
         <div id="targetElement" className={`sidebar-area ${offCanvas ? "" : "sidebar__hide"}`}>
            <div onClick={() => setOffCanvas(false)} className="sidebar__overlay"></div>
            <Link href="/" className="logo mb-40 fw-bold fs-5 d-block">
               G-Energy Great Co., Ltd.
            </Link>
            <div className="sidebar__search mb-30">
               <input type="text" placeholder="Search..." />
               <i className="fa-regular fa-magnifying-glass"></i>
            </div>
            <div className="mobile-menu overflow-hidden mean-container">
               <div className="mean-bar">
                  <nav className="mean-nav">
                     <MobileMenu />
                  </nav>
               </div>
            </div>
            <ul className="info pt-40">
               <li><i className="fa-solid primary-color fa-paper-plane"></i> <Link href="mailto:info@g-energy.global">info@g-energy.global</Link></li>
               <li className="py-2"><i className="fa-solid primary-color fa-globe"></i> <Link href="https://www.g-energy.global" target="_blank" rel="noreferrer">www.g-energy.global</Link></li>
               <li><i className="fa-solid primary-color fa-location-dot"></i> <span>Bangkok, Thailand</span></li>
            </ul>
            <div className="social-icon mt-20">
               <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
               <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
               <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
               <Link href="#"><i className="fa-brands fa-youtube"></i></Link>
            </div>
            <button onClick={() => setOffCanvas(false)} id="closeButton" className="text-white"><i className="fa-solid fa-xmark"></i></button>
         </div>
      </>
   )
}

export default Offcanvas
