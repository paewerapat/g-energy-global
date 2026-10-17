import type { Metadata } from "next";
import About from "@/components/about";
import Wrapper from "@/layouts/Wrapper";

export const metadata: Metadata = {
  title: "About us",
  description: "Part of the Vanguard Biztech group and an authorised Redington partner, G-Energy Global brings global enterprise technology to organisations in Thailand.",
};

const page = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}

export default page
