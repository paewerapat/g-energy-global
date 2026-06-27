"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import { useState } from "react";
import UseSticky from "@/hooks/UseSticky";
import Offcanvas from "./Menu/Offcanvas";

const HeaderThree = () => {

   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);

   return (
      <>
         <header className={`header-area header-three-area ${sticky ? "menu-fixed fadeInDown" : ""}`}>
            <div className="container header__container">
               <div className="header__main">
                  <Link href="/" className="logo text-white fw-bold fs-5">
                     G-Energy Great Co., Ltd.
                  </Link>
                  <div className="main-menu d-none d-lg-block">
                     <nav>
                        <ul>
                           <NavMenu />
                        </ul>
                     </nav>
                  </div>
                  <div className="d-none d-lg-inline-block">
                     <Link href="/about#lets-connect" className="btn-one">Get A Quote <i
                        className="fa-regular fa-arrow-right-long"></i></Link>
                  </div>
                  <div className="bars d-block d-lg-none" onClick={() => setOffCanvas(true)}>
                     <i id="openButton" className="fa-solid fa-bars"></i>
                  </div>
               </div>
            </div>
         </header>
         <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
      </>
   )
}

export default HeaderThree
