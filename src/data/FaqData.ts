interface DataType {
   id: number;
   page: string
   title: string;
   desc: string;
   showAnswer: boolean;
};

const faq_data: DataType[] = [
   {
      id: 1,
      page: "home_2",
      showAnswer: false,
      title: "Where should I incorporate my business?",
      desc: "G-Energy Great Co. supports business expansion through strategic partnerships in key markets. We help identify optimal locations and regulatory frameworks for your operations in the energy and technology sectors.",
   },
   {
      id: 2,
      page: "home_2",
      showAnswer: false,
      title: "What happens after my initial consultation?",
      desc: "After your consultation, our team develops a comprehensive proposal tailored to your specific business needs. We provide detailed timelines, resource allocation, and success metrics to guide implementation.",
   },
   {
      id: 3,
      page: "home_2",
      showAnswer: false,
      title: "What is included in your services?",
      desc: "Our services include energy solutions consulting, technology distribution, digital infrastructure development, business support services, and long-term partnership management to ensure sustainable growth.",
   },
   {
      id: 4,
      page: "home_2",
      showAnswer: false,
      title: "What type of partnership does G-Energy offer?",
      desc: "G-Energy partners with businesses of all sizes - from startups to enterprises. We specialize in energy infrastructure, technology solutions, and business development across diverse industries.",
   },
]

export default faq_data;