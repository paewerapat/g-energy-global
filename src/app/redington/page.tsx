import type { Metadata } from "next";
import Redington from "@/components/redington";
import Wrapper from "@/layouts/Wrapper";

export const metadata: Metadata = {
  title: "Redington Services in Thailand",
  description: "The complete Redington service portfolio in Thailand: technology, cloud, channel, logistics, BPM, financing, managed and specialized services.",
};

const page = () => {
  return (
    <Wrapper>
      <Redington />
    </Wrapper>
  )
}

export default page
