import { StaticImageData } from "next/image";

interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    mega_munu?: {
        id: number;
        img: StaticImageData;
        btn_1: string;
        btn_link1: string;
        btn_2?: string;
        btn_link2?: string;
        title: string;
    }[];
    sub_menus?: {
        link: string;
        title: string;
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
        has_dropdown: false,
        title: "About",
        link: "/about",
    },
    {
        id: 3,
        has_dropdown: false,
        title: "Solutions",
        link: "/about#offer-section",
    },
    {
        id: 4,
        has_dropdown: false,
        title: "Partners",
        link: "/about#brand-section",
    },
    {
        id: 5,
        has_dropdown: false,
        title: "Contact",
        link: "/about#lets-connect",
    },
];

export default menu_data;