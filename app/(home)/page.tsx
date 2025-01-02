import TopHeader from "../component/shared/Header/TopHeader";
import {
  Banner,
  About,
  OurService,
  Testimonial,
  Address,
  FAQ,
} from "./component";

export default function Home() {
  return (
    <>
      <Banner />
      <TopHeader />
      <About />
      <OurService />
      <Testimonial />
      <Address />
      <FAQ />
    </>
  );
}
