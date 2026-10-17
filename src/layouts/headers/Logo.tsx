import Link from "next/link"
import site from "@/data/site"

interface LogoProps {
   className?: string;
   onClick?: () => void;
}

// Text logo with a mark; replace the mark with the official logo file when supplied.
const Logo = ({ className = "", onClick }: LogoProps) => {
   return (
      <Link href="/" className={`logo ge-logo ${className}`} onClick={onClick} aria-label={`${site.brand} home`}>
         <span className="ge-logo__mark" aria-hidden="true">
            <i className="fa-solid fa-bolt-lightning"></i>
         </span>
         <span className="ge-logo__text">
            <strong>{site.brand}</strong>
            <small>A {site.parentGroup} company</small>
         </span>
      </Link>
   )
}

export default Logo
