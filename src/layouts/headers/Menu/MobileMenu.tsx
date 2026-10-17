"use client";
import menu_data from "@/data/MenuData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface MobileMenuProps {
   onNavigate: () => void;
}

const MobileMenu = ({ onNavigate }: MobileMenuProps) => {
   const currentRoute = usePathname();
   const [openMenu, setOpenMenu] = useState("");

   const isActive = (link: string) =>
      link === "/" ? currentRoute === "/" : currentRoute.startsWith(link.split("#")[0]);

   return (
      <ul>
         {menu_data.map((menu) => (
            <li key={menu.id}>
               <Link href={menu.link} onClick={onNavigate} className={isActive(menu.link) ? "active" : ""}>
                  {menu.title}
               </Link>

               {menu.has_dropdown && menu.sub_menus && (
                  <>
                     <button
                        type="button"
                        className={`mean-expand ${openMenu === menu.title ? "mean-clicked" : ""}`}
                        onClick={() => setOpenMenu((prev) => (prev === menu.title ? "" : menu.title))}
                        aria-expanded={openMenu === menu.title}
                        aria-label={`Toggle ${menu.title} submenu`}
                     >
                        {openMenu === menu.title ? "−" : "+"}
                     </button>
                     <ul className="sub-menu" style={{ display: openMenu === menu.title ? "block" : "none" }}>
                        {menu.sub_menus.map((sub_m) => (
                           <li key={sub_m.link}>
                              <Link href={sub_m.link} onClick={onNavigate}>{sub_m.title}</Link>
                           </li>
                        ))}
                     </ul>
                  </>
               )}
            </li>
         ))}
      </ul>
   );
};

export default MobileMenu;
