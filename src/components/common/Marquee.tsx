import BrandLogo from "./BrandLogo"
import { Brand } from "@/data/brands"

interface MarqueeProps {
   items: Brand[];
   reverse?: boolean;
   speed?: number; // seconds per loop
   label: string;
}

// Infinite CSS marquee of brand logos. Content is duplicated once for a seamless loop;
// the duplicate is hidden from assistive tech.
const Marquee = ({ items, reverse = false, speed = 40, label }: MarqueeProps) => {
   return (
      <div className="ge-marquee">
         <div
            className={`ge-marquee__track ${reverse ? "is-reverse" : ""}`}
            style={{ animationDuration: `${speed}s` }}
         >
            {[0, 1].map((copy) => (
               <ul
                  key={copy}
                  className="ge-marquee__group"
                  aria-label={copy === 0 ? label : undefined}
                  aria-hidden={copy === 1 ? true : undefined}
               >
                  {items.map((item) => (
                     <li key={item.name} className="ge-marquee__item">
                        <BrandLogo brand={item} size="lg" />
                     </li>
                  ))}
               </ul>
            ))}
         </div>
      </div>
   )
}

export default Marquee
