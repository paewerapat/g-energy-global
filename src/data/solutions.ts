// Product pillars aligned with the Vanguard Biztech group portfolio, plus energy for the Thai market.
import { Brand, brands } from "./brands";

export interface Solution {
   slug: string;
   icon: string;
   title: string;
   short: string;
   desc: string;
   capabilities: string[];
   partners: Brand[];
   mock: "infra" | "pipeline" | "profile" | "activity" | "energy";
}

const solutions: Solution[] = [
   {
      slug: "cloud-infrastructure",
      icon: "fa-light fa-cloud",
      title: "Cloud & Infrastructure",
      short: "Public cloud, servers, storage and hyper-converged systems.",
      desc: "Run ERP, web apps, AI/GPU and data workloads across public cloud and on-premises infrastructure — sized, deployed and supported by one partner.",
      capabilities: ["Public cloud compute, storage & databases", "Rack & GPU servers", "Enterprise storage", "Hyper-converged infrastructure (HCI)", "Certified refurbished hardware"],
      partners: [brands.tencentCloud, brands.huawei, brands.supermicro, brands.kaytus, brands.mitac, { ...brands.lenovo, name: "Lenovo Certified Refurbished" }, brands.sapphireUno],
      mock: "infra",
   },
   {
      slug: "open-source-devops",
      icon: "fa-light fa-code-branch",
      title: "Open Source & DevOps",
      short: "Databases, Linux, DevSecOps and backup.",
      desc: "Enterprise-grade open source with real support: databases, Linux platforms, secure software supply chains and reliable backup and recovery.",
      capabilities: ["Enterprise MariaDB databases", "Ubuntu & Linux platforms", "DevSecOps & artifact management", "Backup & disaster recovery"],
      partners: [brands.mariadb, brands.jfrog, brands.canonical, brands.catalogic],
      mock: "pipeline",
   },
   {
      slug: "cx-data-analytics",
      icon: "fa-light fa-chart-mixed",
      title: "CX, Data & Analytics",
      short: "Customer data, journeys and analytics.",
      desc: "Unify customer data, orchestrate journeys across channels and turn engagement signals into next-best actions your teams can use.",
      capabilities: ["Customer data platform", "Journey orchestration", "Real-time segmentation", "Engagement analytics"],
      partners: [brands.resulticks],
      mock: "profile",
   },
   {
      slug: "cybersecurity",
      icon: "fa-light fa-shield-check",
      title: "Cybersecurity",
      short: "Insider-threat detection and data loss prevention.",
      desc: "See who is moving sensitive data, block risky actions in real time and stay audit-ready with clear activity trails.",
      capabilities: ["Data loss prevention (DLP)", "Insider-threat detection", "User activity monitoring", "Audit & compliance reporting"],
      partners: [brands.dataResolve],
      mock: "activity",
   },
   {
      slug: "energy-solar",
      icon: "fa-light fa-solar-panel",
      title: "Energy & Solar",
      short: "Solar products and energy solutions for business.",
      desc: "Lower operating costs and meet sustainability targets with solar and energy solutions supplied through our Redington distribution network.",
      capabilities: ["Commercial rooftop solar", "Inverters & storage", "Energy advisory", "Project supply & logistics"],
      partners: [{ ...brands.redington, name: "Redington Solar" }],
      mock: "energy",
   },
];

export default solutions;
