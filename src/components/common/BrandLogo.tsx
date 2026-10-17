import Image from "next/image"
import { Brand } from "@/data/brands"

interface BrandLogoProps {
   brand: Brand;
   size?: "sm" | "md" | "lg";
   className?: string;
}

// A brand logo on a white tile, so every logo stays legible on light and dark sections.
const BrandLogo = ({ brand, size = "md", className = "" }: BrandLogoProps) => {
   return (
      <span className={`ge-brand ge-brand--${size} ${brand.square ? "is-square" : ""} ${className}`} title={brand.name}>
         <Image src={brand.logo} alt={brand.name} />
      </span>
   )
}

export default BrandLogo
