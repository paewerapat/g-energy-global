import Image from "next/image"
import Link from "next/link"
import site from "@/data/site"

import logoReversed from "@/assets/images/brand/ge-logo-reversed.svg"
import logoPrimary from "@/assets/images/brand/ge-logo.svg"

interface LogoProps {
   className?: string;
   onClick?: () => void;
   /** "reversed" for navy/dark backgrounds (header, footer, mobile menu), "primary" for light ones */
   variant?: "reversed" | "primary";
   /** show the legal-name line under the wordmark (footer only — too small to read in the header) */
   withLegalName?: boolean;
}

// Official "Aperture G" logo. The SVGs are outlined from the brand artwork, so they render
// identically without the Poppins font installed.
const Logo = ({ className = "", onClick, variant = "reversed", withLegalName = false }: LogoProps) => {
   return (
      <Link href="/" className={`logo ge-logo ge-logo--${variant} ${className}`} onClick={onClick} aria-label={`${site.brand} home`}>
         <Image src={variant === "reversed" ? logoReversed : logoPrimary} alt={site.brand} priority />
         {withLegalName && <span className="ge-logo__legal">{site.legalName}</span>}
      </Link>
   )
}

export default Logo
