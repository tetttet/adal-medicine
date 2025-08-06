import { ImagesSliderDemo } from "@/components/Demo/ImagesSliderDemo";
import { TracingBeamDemo } from "@/components/Demo/TracingBeamDemo";
import React from "react";

const page = () => {
  return (
    <>
      <ImagesSliderDemo />
      <div className="my-20">
        <TracingBeamDemo />
      </div>
    </>
  );
};

export default page;
