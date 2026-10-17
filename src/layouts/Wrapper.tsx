/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "@/components/common/ScrollToTop";
import MotionProvider from "@/components/common/MotionProvider";

const Wrapper = ({ children }: any) => {

    return <>
        <MotionProvider />
        {children}
        <ScrollToTop />
        <ToastContainer position="top-center" />
    </>;
}

export default Wrapper
