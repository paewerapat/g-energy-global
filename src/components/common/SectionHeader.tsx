import { ReactNode } from "react"

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
            <span className="ge-eyebrow__rule" aria-hidden="true"></span>
            {eyebrow}
         </p>
         <h2 className="wow fadeInUp" data-wow-delay="120ms" data-wow-duration="1000ms">{title}</h2>
         {lead && <p className="ge-lead wow fadeInUp" data-wow-delay="240ms" data-wow-duration="1000ms">{lead}</p>}
      </div>
   )
}

export default SectionHeader
