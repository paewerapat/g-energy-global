// Company-level content shared across pages: values, delivery process, track record, offices.
import { Brand, brands } from "./brands";
import site from "./site";

export const values = [
   { icon: "fa-light fa-magnifying-glass", title: "Deep Understanding", desc: "We get to the root of what matters to your business before we recommend anything." },
   { icon: "fa-light fa-rocket-launch", title: "Proven Execution", desc: "Strategy turned into working systems and measurable results." },
   { icon: "fa-light fa-handshake", title: "Trusted Partnerships", desc: "One accountable partner across every brand and supplier." },
   { icon: "fa-light fa-seedling", title: "Sustainable Growth", desc: "Technology and energy choices that keep paying off as you grow." },
];

// Problems customers bring us → the outcome after working with us.
export const problems = [
   { icon: "fa-light fa-triangle-exclamation", tone: "danger", text: "Cloud bill doubled — no one knows why" },
   { icon: "fa-light fa-ticket", tone: "warn", text: "37 open tickets across 6 suppliers" },
   { icon: "fa-light fa-shield-exclamation", tone: "danger", text: "14 admin accounts without MFA" },
   { icon: "fa-light fa-clock", tone: "warn", text: "312 licences expiring in 5 days" },
   { icon: "fa-light fa-server", tone: "warn", text: "Legacy servers out of support" },
];

export const outcomes = [
   { icon: "fa-light fa-chart-line-up", text: "Reports ready the same day" },
   { icon: "fa-light fa-sack-dollar", text: "Cloud costs under control" },
   { icon: "fa-light fa-shield-check", text: "Audit-ready security" },
   { icon: "fa-light fa-handshake-angle", text: "One partner for every system" },
];

export const process = [
   { step: "01", icon: "fa-light fa-comments", title: "Understand", desc: "An in-person session with your team to learn how the business runs and where it is constrained." },
   { step: "02", icon: "fa-light fa-compass-drafting", title: "Design", desc: "A solution workshop that matches the right partner technology and proposes a clear plan." },
   { step: "03", icon: "fa-light fa-rocket-launch", title: "Deliver", desc: "Implementation and go-live with certified implementation partners." },
   { step: "04", icon: "fa-light fa-chart-line-up", title: "Drive impact", desc: "Regular reviews and support — tracking results and adjusting as you grow." },
];

// Vanguard Biztech group figures — label as group-level. `text` renders as-is (no count-up).
export const groupStats: { value: number; suffix: string; label: string; text?: string }[] = [
   { value: 500, suffix: "+", label: "Enterprise clients across the group" },
   { value: 3, suffix: "", label: "Markets: Singapore, Indonesia, Thailand" },
   { value: 13, suffix: "+", label: "Global technology partners" },
   { value: 24, suffix: "/7", text: "24/7", label: "Support for critical systems" },
];

export const cases = [
   {
      tag: "Financial services · Indonesia",
      title: "Core system replacement for a digital bank",
      challenge: "A massive-scale, reliable database for high-concurrency financial workloads.",
      solution: "Tencent Cloud TDSQL distributed database running active-active across two data centres.",
      results: [
         { value: "2M", label: "transactions / day" },
         { value: "20M", label: "users served" },
         { value: "0", label: "downtime" },
      ],
   },
   {
      tag: "Reinsurance · Southeast Asia",
      title: "Scalable IT infrastructure for a reinsurer",
      challenge: "Secure, scalable infrastructure that meets financial-industry standards without heavy upfront spend.",
      solution: "A complete IT estate on Tencent Cloud IaaS — compute, databases and security.",
      results: [
         { value: "$0", label: "upfront hardware" },
         { value: "100%", label: "cloud-hosted estate" },
         { value: "FSI", label: "grade security" },
      ],
   },
];

export const offices = [
   { city: "Bangkok", country: "Thailand", tz: "UTC+7", covers: ["Thailand", "Myanmar", "Laos", "Vietnam"], address: site.addressShort, home: true, x: 36, y: 38 },
   { city: "Singapore", country: "Singapore", tz: "UTC+8", covers: ["Singapore", "Brunei", "Cambodia"], home: false, x: 44, y: 70 },
   { city: "Jakarta", country: "Indonesia", tz: "UTC+7", covers: ["Indonesia", "Malaysia", "Philippines"], home: false, x: 58, y: 90 },
];

export const vanguardPartners: Brand[] = [
   brands.tencentCloud, brands.huawei, brands.supermicro, brands.kaytus, brands.mitac, brands.lenovo, brands.sapphireUno,
   brands.mariadb, brands.jfrog, brands.canonical, brands.catalogic, brands.resulticks, brands.dataResolve,
];
