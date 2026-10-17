import { StaticImageData } from "next/image";

// Logo sources:
// - Vanguard Biztech technology partners: vanguard-biz-landing-next.onrender.com/brand/partners
// - Redington logo: redingtongroup.com
// - Redington network brands: Wikimedia Commons official logo files
// Logos are trademarks of their owners and are shown to identify the brands we supply.
import tencentCloud from "@/assets/images/logos/tencent-cloud.svg";
import huawei from "@/assets/images/logos/huawei.svg";
import supermicro from "@/assets/images/logos/supermicro.svg";
import kaytus from "@/assets/images/logos/kaytus.svg";
import mitac from "@/assets/images/logos/mitac.svg";
import lenovo from "@/assets/images/logos/lenovo.svg";
import sapphireUno from "@/assets/images/logos/sapphire-uno.webp";
import mariadb from "@/assets/images/logos/mariadb.svg";
import jfrog from "@/assets/images/logos/jfrog.svg";
import canonical from "@/assets/images/logos/canonical.svg";
import catalogic from "@/assets/images/logos/catalogic.svg";
import resulticks from "@/assets/images/logos/resulticks.svg";
import dataResolve from "@/assets/images/logos/data-resolve.webp";
import microsoft from "@/assets/images/logos/microsoft.svg";
import aws from "@/assets/images/logos/aws.svg";
import googleCloud from "@/assets/images/logos/google-cloud.svg";
import apple from "@/assets/images/logos/apple.svg";
import dell from "@/assets/images/logos/dell.svg";
import cisco from "@/assets/images/logos/cisco.svg";
import ibm from "@/assets/images/logos/ibm.svg";
import fortinet from "@/assets/images/logos/fortinet.svg";
import paloalto from "@/assets/images/logos/paloalto.svg";
import autodesk from "@/assets/images/logos/autodesk.svg";
import hp from "@/assets/images/logos/hp.svg";
import redington from "@/assets/images/logos/redington.svg";
import redingtonWhite from "@/assets/images/logos/redington-white.svg";
import vanguard from "@/assets/images/logos/vanguard.svg";
import vanguardWhite from "@/assets/images/logos/vanguard-white.svg";

export interface Brand {
   name: string;
   logo: StaticImageData;
   /** square marks look small next to wordmarks, so they render a little larger */
   square?: boolean;
}

export const brands = {
   tencentCloud: { name: "Tencent Cloud", logo: tencentCloud },
   huawei: { name: "Huawei Cloud", logo: huawei, square: true },
   supermicro: { name: "Supermicro", logo: supermicro },
   kaytus: { name: "Kaytus", logo: kaytus },
   mitac: { name: "MiTAC", logo: mitac },
   lenovo: { name: "Lenovo", logo: lenovo },
   sapphireUno: { name: "SapphireUNO", logo: sapphireUno, square: true },
   mariadb: { name: "MariaDB", logo: mariadb },
   jfrog: { name: "JFrog", logo: jfrog, square: true },
   canonical: { name: "Canonical Ubuntu", logo: canonical },
   catalogic: { name: "Catalogic", logo: catalogic },
   resulticks: { name: "Resulticks", logo: resulticks },
   dataResolve: { name: "Data Resolve", logo: dataResolve },
   microsoft: { name: "Microsoft", logo: microsoft },
   aws: { name: "AWS", logo: aws, square: true },
   googleCloud: { name: "Google Cloud", logo: googleCloud },
   apple: { name: "Apple", logo: apple, square: true },
   dell: { name: "Dell Technologies", logo: dell, square: true },
   cisco: { name: "Cisco", logo: cisco, square: true },
   ibm: { name: "IBM", logo: ibm },
   fortinet: { name: "Fortinet", logo: fortinet },
   paloalto: { name: "Palo Alto Networks", logo: paloalto },
   autodesk: { name: "Autodesk", logo: autodesk },
   hp: { name: "HP", logo: hp, square: true },
   redington: { name: "Redington", logo: redington },
} satisfies Record<string, Brand>;

export const companyLogos = {
   vanguard,
   vanguardWhite,
   redington,
   redingtonWhite,
};
