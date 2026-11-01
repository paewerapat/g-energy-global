import Image from "next/image"
import { Brand } from "@/data/brands"

interface BrandLogoProps {
   brand: Brand;
   size?: "sm" | "md" | "lg";
   className?: string;
}

// A brand logo on a white tile, so every logo stays legible on light and dark sections.
// Brands without a supplied logo file render their name as a wordmark in the same tile.
const BrandLogo = ({ brand, size = "md", className = "" }: BrandLogoProps) => {
   return (
      <span className={`ge-brand ge-brand--${size} ${brand.square ? "is-square" : ""} ${brand.logo ? "" : "is-text"} ${className}`} title={brand.name}>
         {brand.logo ? <Image src={brand.logo} alt={brand.name} /> : <span className="ge-brand__name">{brand.name}</span>}
      </span>
   )
}

export default BrandLogo
