import { ImagesSliderDemo } from "@/components/Demo/ImagesSliderDemo";
// import CallToAction from "@/components/Element/CallToAction";
import Causes from "@/components/Home/Causes";
// import FutureEvents from "@/components/Home/FutureEvents";
import Help from "@/components/Home/Help";
import Hero from "@/components/Home/Hero";
import Newsletter from "@/components/Home/NewsLetter";
// import Testimonial from "@/components/Home/Testimonial";
import UrgentDonation from "@/components/Home/UrgentDonation";
import Volunteer from "@/components/SharedComponent/Volunteer";
import Banner from "@/components/UI/Banner";
import Testimonial from "./patients/testimonials/page";
import FAQ from "@/components/Faq";
import { faqItems } from "@/constant/Info";
// import Pricing from "@/components/UI/Pricing";

export default function Home() {
  return (
    <>
      <Banner />
      <ImagesSliderDemo />
      <Help />

      <Hero />
      <Causes />
      {/* <FutureEvents /> */}
      <UrgentDonation />
      {/* <Pricing /> */}
      <Newsletter />
      {/* <Testimonial /> */}
      <Volunteer />

      <div className="bg-white py-16">
        <FAQ
          title="Часто задаваемые вопросы"
          description="Ответы на ваши вопросы о медицинском туризме"
          items={faqItems}
        />
      </div>
      <Testimonial />
    </>
  );
}
