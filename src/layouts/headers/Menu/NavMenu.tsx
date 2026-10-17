"use client";
import menu_data from "@/data/MenuData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
    const currentRoute = usePathname();

    const isActive = (link: string) =>
        link === "/" ? currentRoute === "/" : currentRoute.startsWith(link.split("#")[0]);

    return (
        <>
            {menu_data.map((menu) => (
                <li key={menu.id} className={menu.has_dropdown ? "has-dropdown" : ""}>
                    <Link
                        href={menu.link}
                        className={isActive(menu.link) ? "active" : ""}
                        aria-current={isActive(menu.link) ? "page" : undefined}
                    >
                        {menu.title}
                        {menu.has_dropdown && <i className="fa-regular fa-chevron-down ms-1"></i>}
                    </Link>

                    {menu.has_dropdown && menu.sub_menus && (
                        <ul className="sub-menu">
                            {menu.sub_menus.map((sub_m) => (
                                <li key={sub_m.link} className={sub_m.isAll ? "is-all" : ""}>
                                    <Link href={sub_m.link}>
                                        {sub_m.icon && <i className={sub_m.icon}></i>}
                                        <span>{sub_m.title}</span>
                                        {sub_m.isAll && <i className="fa-regular fa-arrow-right-long"></i>}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </>
    );
};

export default NavMenu;
