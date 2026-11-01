// Full Redington service portfolio, offered in Thailand through G-Energy.
import { Brand, brands } from "./brands";

export interface ServiceGroup {
   slug: string;
   icon: string;
   title: string;
   desc: string;
   items: string[];
}

export const redingtonServices: ServiceGroup[] = [
   {
      slug: "technology-services",
      icon: "fa-light fa-microchip",
      title: "Technology Services",
      desc: "End-to-end technology services aligned with your business strategy.",
      items: ["Infrastructure Transformation", "Software Consulting", "Virtualization & Application Delivery", "Networking", "Cybersecurity Services"],
   },
   {
      slug: "cloud-services",
      icon: "fa-light fa-cloud",
      title: "Cloud Services",
      desc: "From first migration to fully managed multi-cloud, including the CloudQuarks marketplace.",
      items: ["Cloud Migration", "Cloud Consulting", "Modernization", "Managed Services", "Cloud Security", "Digital Workplace", "Data Analytics & AI", "Support Services", "CloudQuarks Marketplace"],
   },
   {
      slug: "channel-services",
      icon: "fa-light fa-handshake",
      title: "Channel Services",
      desc: "Grow your reseller business with expertise delivered as a service.",
      items: ["Consulting as a Service", "Marketing as a Service", "Training as a Service", "Exchange for Change"],
   },
   {
      slug: "logistics-services",
      icon: "fa-light fa-truck-fast",
      title: "Logistics Services",
      desc: "Integrated supply chain from warehouse to last mile and back.",
      items: ["Warehousing", "Transportation", "Reverse Logistics", "In-plant Logistics Management", "Project Management", "Supply Chain Consulting", "E-commerce Fulfilment", "Mission-critical Logistics"],
   },
   {
      slug: "business-process",
      icon: "fa-light fa-diagram-project",
      title: "Business Process Solutions",
      desc: "Automation-led BPM that improves customer experience, productivity and cost.",
      items: ["Supply Chain Management", "Sourcing & Procurement", "Sales & Lead Generation", "Data & Analytics", "Finance & Accounting", "RPA Automation"],
   },
   {
      slug: "financial-services",
      icon: "fa-light fa-hand-holding-dollar",
      title: "Financial Services",
      desc: "Flexible financing that keeps technology projects moving.",
      items: ["Channel Financing", "Project Financing", "Leasing", "Credit Card Based Financing", "Buy Now Pay Later"],
   },
   {
      slug: "managed-support",
      icon: "fa-light fa-headset",
      title: "Support & Managed Services",
      desc: "Implementation, support and managed IT delivered to your SLAs.",
      items: ["Implementation Services", "Support Services", "Managed Services", "Track My Cloud", "Digi Glass"],
   },
   {
      slug: "specialized-services",
      icon: "fa-light fa-brain-circuit",
      title: "Specialized Services",
      desc: "IoT, data and everything-as-a-service models for new business outcomes.",
      items: ["IoT Quarks", "Data Analytics Services", "Everything-as-a-Service (XaaS)"],
   },
   {
      slug: "online-platform",
      icon: "fa-light fa-store",
      title: "Online Distribution Platform",
      desc: "Order from hundreds of brands, any time, with integrated credit and tracking.",
      items: ["Multi-brand Catalogue", "24×7×365 Ordering", "Partner Financing", "Integrated Credit", "Shipment Tracking"],
   },
];

export const redingtonTechnologies: { icon: string; title: string }[] = [
   { icon: "fa-light fa-robot", title: "AI & Automation" },
   { icon: "fa-light fa-shield-check", title: "Security" },
   { icon: "fa-light fa-cloud", title: "Cloud" },
   { icon: "fa-light fa-chart-pie", title: "Data & Analytics" },
   { icon: "fa-light fa-solar-panel", title: "Solar" },
   { icon: "fa-light fa-network-wired", title: "Network Modernisation" },
   { icon: "fa-light fa-server", title: "Infrastructure" },
   { icon: "fa-light fa-layer-group", title: "Software Applications" },
   { icon: "fa-light fa-print", title: "Digital & 3D Printing" },
   { icon: "fa-light fa-tv", title: "Professional Displays" },
   { icon: "fa-light fa-vr-cardboard", title: "AR & VR" },
   { icon: "fa-light fa-gamepad", title: "Gaming" },
   { icon: "fa-light fa-mobile-screen", title: "Mobility & Wearables" },
   { icon: "fa-light fa-house-signal", title: "Home Automation" },
   { icon: "fa-light fa-laptop", title: "Computing" },
   { icon: "fa-light fa-arrows-rotate", title: "Refurbished Devices" },
];

export const redingtonIndustries: { icon: string; title: string }[] = [
   { icon: "fa-light fa-hospital", title: "Healthcare" },
   { icon: "fa-light fa-industry", title: "Manufacturing" },
   { icon: "fa-light fa-building-columns", title: "Finance" },
   { icon: "fa-light fa-graduation-cap", title: "Education" },
   { icon: "fa-light fa-hotel", title: "Hospitality" },
   { icon: "fa-light fa-store", title: "Retail" },
   { icon: "fa-light fa-landmark", title: "Government" },
   { icon: "fa-light fa-print", title: "Print Service Providers" },
   { icon: "fa-light fa-microchip", title: "IT / ITeS" },
];

export const redingtonSegments = ["SMB", "Enterprise", "Government", "Consumer"];

// Network-level figures published by Redington — always label as "Redington network".
export const redingtonStats = [
   { value: 40, suffix: "", label: "Markets served" },
   { value: 450, suffix: "+", label: "Global brands" },
   { value: 39500, suffix: "+", label: "Channel partners" },
   { value: 7, suffix: "M+", label: "Sq. ft. of warehousing" },
];

export const redingtonBrands: Brand[] = [
   brands.microsoft, brands.aws, brands.googleCloud, brands.apple, brands.dell, brands.cisco,
   brands.ibm, brands.fortinet, brands.paloalto, brands.autodesk, brands.hp,
];

// Redington Product Line 2026 (source: "Redington Product Line 2026.pdf" supplied by the client).
export interface ProductCategory {
   key: string;
   title: string;
   short: string;
   icon: string;
}

export interface Product {
   brand: Brand;
   category: ProductCategory["key"];
   desc: string;
   verticals: string[];
}

export const productCategories: ProductCategory[] = [
   { key: "infra", title: "Software & Infrastructure", short: "Software / Infra", icon: "fa-light fa-server" },
   { key: "security", title: "Cybersecurity", short: "Cybersecurity", icon: "fa-light fa-shield-check" },
   { key: "cloud-ai", title: "Cloud & AI", short: "Cloud / AI", icon: "fa-light fa-brain-circuit" },
];

export const productLine: Product[] = [
   {
      brand: brands.qumulo,
      category: "infra",
      desc: "Scale-out unstructured hybrid file storage, real-time data visibility and multi-cloud bursting (AWS / Azure / GCP).",
      verticals: ["Media & Entertainment", "Life Sciences", "Healthcare", "Academic / HPC"],
   },
   {
      brand: brands.mariadb,
      category: "infra",
      desc: "Distributed SQL / relational database, open-source SkySQL DBaaS, high-concurrency OLTP and Galera clustering.",
      verticals: ["Government / Smart Nation", "FinTech", "Logistics", "eCommerce"],
   },
   {
      brand: brands.resulticks,
      category: "infra",
      desc: "Real-time omnichannel customer engagement, marketing automation, CDP and audience segmentation.",
      verticals: ["Retail & FMCG", "BFSI", "Telecommunications", "Hospitality"],
   },
   {
      brand: brands.turingData,
      category: "infra",
      desc: "High-throughput AI storage software with a distributed metadata engine, GPU-direct storage (GDS / RDMA) and multi-tier object offload.",
      verticals: ["GenAI Startups", "Autonomous Systems", "Defense / Research", "Higher Education"],
   },
   {
      brand: brands.supermicro,
      category: "infra",
      desc: "Building Block Solutions®, high-density GPU servers (NVIDIA HGX / GB200), direct-to-chip liquid cooling and edge / rack-scale compute.",
      verticals: ["GenAI / LLM Training & Inference", "Autonomous Driving", "Life Sciences", "FinTech (HFT)"],
   },
   {
      brand: brands.kaytus,
      category: "infra",
      desc: "Hyperscale and enterprise servers, multi-node high-density architectures, all-liquid cooling (PUE < 1.1) and turnkey modular AI Compute Pods.",
      verticals: ["Data Center Co-location", "Cloud Service Providers", "AI Startups / HPC", "Higher Education"],
   },
   {
      brand: brands.cloudcasa,
      category: "security",
      desc: "Cloud-native Kubernetes backup and disaster recovery — K8s databases, PV / PVCs and multi-cloud cluster migration. By Catalogic.",
      verticals: ["Cloud-native ISVs", "FinTech", "Digital Native Businesses", "Enterprise DevSecOps"],
   },
   {
      brand: brands.gambitCyber,
      category: "security",
      desc: "AI-native Continuous Threat Exposure Management (CTEM), threat-informed defense, purple-teaming automation and attack-surface validation.",
      verticals: ["BFSI", "Critical Information Infrastructure", "Defense / GovTech", "Managed SOCs"],
   },
   {
      brand: brands.legit,
      category: "security",
      desc: "Automated privacy governance — DSAR automation, RoPA, continuous consent and policy-driven data deletion.",
      verticals: ["Healthcare", "FinTech", "Legal Services", "Cross-Border Retail / BPO"],
   },
   {
      brand: brands.dataResolve,
      category: "security",
      desc: "Insider-threat detection, user behavior analytics (UBA), DLP and employee endpoint activity auditing.",
      verticals: ["Corporate Legal", "Professional Services", "High-Tech Manufacturing", "BPOs"],
   },
   {
      brand: { ...brands.tencentCloud, name: "Tencent Cloud" },
      category: "cloud-ai",
      desc: "Hyperscale public cloud, edge compute, low-latency audio / video streaming (TRTC), gaming solutions and the WeChat ecosystem.",
      verticals: ["Gaming / eSports", "Cross-Border eCommerce", "Web3", "OTT / Media"],
   },
   {
      brand: brands.koreAi,
      category: "cloud-ai",
      desc: "Enterprise conversational AI, agentic workflow automation, GenAI fine-tuning / orchestration and contact-center AI.",
      verticals: ["Banking / FinTech", "Public Sector", "Telco", "Healthcare"],
   },
   {
      brand: brands.crayonData,
      category: "cloud-ai",
      desc: "maya.ai customer personalization engine, lifestyle AI recommendation graph, behavioral targeting and cross-merchant marketplace monetization.",
      verticals: ["Tier-1 & Digital Banking", "Cards & Payments", "Travel & Airlines", "eCommerce"],
   },
   {
      brand: brands.sapphireUno,
      category: "cloud-ai",
      desc: "Unified enterprise orchestration — low-code IT Service Management (ITSM), Enterprise Asset Management (EAM) and Source-to-Pay procurement.",
      verticals: ["Mid-to-Large Enterprises", "Healthcare", "Manufacturing", "Smart Facility Operations"],
   },
];
