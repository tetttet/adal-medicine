import FAQ from "@/components/About/FAQs";
import GetInTouch from "@/components/About/GetInTouch";
import Hero from "@/components/About/Hero";
import Services from "@/components/About/Services";
import Content from "@/components/UI/Content";
//import Slider from "@/components/UI/Slider";
//import Tracing from "@/components/UI/Tracing";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Services />
      <div className="my-12">
        <GetInTouch />
      </div>
      <FAQ />

      <div className="mt-24">
        <Content />
      </div>
    </>
  );
};

export default page;
