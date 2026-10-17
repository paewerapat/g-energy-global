import type { Metadata } from "next";
import Contact from "@/components/contact";
import Wrapper from "@/layouts/Wrapper";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Talk to the G-Energy Global team in Bangkok about solutions, Redington services or partnerships.",
};

const page = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  )
}

export default page
