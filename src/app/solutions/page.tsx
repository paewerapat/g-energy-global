import type { Metadata } from "next";
import Solutions from "@/components/solutions";
import Wrapper from "@/layouts/Wrapper";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Cloud & infrastructure, open source & DevOps, CX & data analytics, cybersecurity and energy solutions — delivered and supported in Thailand.",
};

const page = () => {
  return (
    <Wrapper>
      <Solutions />
    </Wrapper>
  )
}

export default page
