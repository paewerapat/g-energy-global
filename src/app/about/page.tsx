import About from "@/components/about";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "About G-Energy Great",
};
const page = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}

export default page