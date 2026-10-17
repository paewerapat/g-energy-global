import solutions from "./solutions";
import { redingtonServices } from "./redington";

export interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
        icon?: string;
        /** "view all" style link rendered as a footer row of the dropdown */
        isAll?: boolean;
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        has_dropdown: false,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        has_dropdown: true,
        title: "Solutions",
        link: "/solutions",
        sub_menus: [
            ...solutions.map((s) => ({ title: s.title, link: `/solutions#${s.slug}`, icon: s.icon })),
            { title: "All solutions", link: "/solutions", isAll: true },
        ],
    },
    {
        id: 3,
        has_dropdown: true,
        title: "Redington Services",
        link: "/redington",
        sub_menus: [
            ...redingtonServices.slice(0, 7).map((s) => ({ title: s.title, link: `/redington#${s.slug}`, icon: s.icon })),
            { title: "View all services", link: "/redington#services", isAll: true },
        ],
    },
    {
        id: 4,
        has_dropdown: false,
        title: "About",
        link: "/about",
    },
    {
        id: 5,
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },
];

export default menu_data;
