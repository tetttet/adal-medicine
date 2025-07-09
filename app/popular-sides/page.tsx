import CauseList from "@/components/Cause/CauseList";
import { HeroParallaxDemo } from "@/components/Demo/HeroParallaxDemo";
import HeroSub from "@/components/SharedComponent/HeroSub";
import Volunteer from "@/components/SharedComponent/Volunteer";
import React from "react";

const page = () => {
  return (
    <>
      <HeroParallaxDemo />
      <div className="-mt-60 mb-20">
        <HeroSub title="Популярные Направления" />
        <CauseList />
        <Volunteer />
      </div>
    </>
  );
};

export default page;
