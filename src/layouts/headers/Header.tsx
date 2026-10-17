"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import { useState } from "react";
import UseSticky from "@/hooks/UseSticky";
import Offcanvas from "./Menu/Offcanvas";
import Logo from "./Logo";

const Header = () => {

   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);

   return (
      <>
         <header className={`header-area header-three-area ge-header ${sticky ? "menu-fixed" : ""}`}>
            <div className="container header__container">
               <div className="header__main">
                  <Logo />
                  <nav className="main-menu d-none d-lg-block" aria-label="Main">
                     <ul>
                        <NavMenu />
                     </ul>
                  </nav>
                  <div className="d-none d-lg-inline-block">
                     <Link href="/contact" className="btn-one ge-header__cta">Talk to our team <i
                        className="fa-regular fa-arrow-right-long"></i></Link>
                  </div>
                  <button
                     type="button"
                     className="bars d-block d-lg-none"
                     onClick={() => setOffCanvas(true)}
                     aria-label="Open menu"
                     aria-expanded={offCanvas}
                     aria-controls="targetElement"
                  >
                     <i className="fa-solid fa-bars"></i>
                  </button>
               </div>
            </div>
         </header>
         <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
      </>
   )
}

export default Header
