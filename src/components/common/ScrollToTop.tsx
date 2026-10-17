"use client"
import UseSticky from "@/hooks/UseSticky";

const ScrollToTop = () => {
   const { sticky } = UseSticky();

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <button
         type="button"
         onClick={scrollTop}
         className={`scroll-up ${sticky ? "active-scroll" : ""}`}
         aria-label="Back to top"
         tabIndex={sticky ? 0 : -1}
      >
         <svg className="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102" aria-hidden="true">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
         </svg>
      </button>
   )
}

export default ScrollToTop
