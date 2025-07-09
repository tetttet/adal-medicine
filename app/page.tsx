import { ImagesSliderDemo } from "@/components/Demo/ImagesSliderDemo";
import CallToAction from "@/components/Element/CallToAction";
import Causes from "@/components/Home/Causes";
import FutureEvents from "@/components/Home/FutureEvents";
import Help from "@/components/Home/Help";
import Hero from "@/components/Home/Hero";
import Newsletter from "@/components/Home/NewsLetter";
import Testimonial from "@/components/Home/Testimonial";
import UrgentDonation from "@/components/Home/UrgentDonation";
import Volunteer from "@/components/SharedComponent/Volunteer";
import Banner from "@/components/UI/Banner";
import Pricing from "@/components/UI/Pricing";

export default function Home() {
  return (
    <>
      <CallToAction />
      <Banner />
      <ImagesSliderDemo />
      <Help />

      <Hero />
      <Causes />
      <FutureEvents />
      <UrgentDonation />
      <Pricing />
      <Newsletter />
      <Testimonial />
      <Volunteer />
    </>
  );
}
