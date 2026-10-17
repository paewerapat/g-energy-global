import Image from "next/image"
import { ReactNode } from "react"

import title_icon from "@/assets/images/icon/section-title.png"

interface SectionHeaderProps {
   eyebrow: string;
   title: ReactNode;
   lead?: ReactNode;
   align?: "left" | "center";
   light?: boolean;
   className?: string;
}

const SectionHeader = ({ eyebrow, title, lead, align = "center", light = false, className = "" }: SectionHeaderProps) => {
   return (
      <div className={`section-header ge-section-header ${align === "center" ? "text-center mx-auto" : ""} ${light ? "is-light" : ""} ${className}`}>
         <p className="ge-eyebrow wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1000ms">
            <Image className="me-1" src={title_icon} alt="" />
            {eyebrow}
         </p>
         <h2 className="wow fadeInUp" data-wow-delay="120ms" data-wow-duration="1000ms">{title}</h2>
         {lead && <p className="ge-lead wow fadeInUp" data-wow-delay="240ms" data-wow-duration="1000ms">{lead}</p>}
      </div>
   )
}

export default SectionHeader
