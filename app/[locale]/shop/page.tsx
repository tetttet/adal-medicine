import CardsSection from "@/components/shop/CardsSection";
import CustomCarousel from "@/components/shop/carousel";
import { CarouselSize } from "@/components/shop/CarouselSize";
import MedGrid from "@/components/shop/MedGrid";
import React from "react";

const page = () => {
  return (
    <>
      <CustomCarousel />
      <CardsSection />
      <CarouselSize />
      <MedGrid />
    </>
  );
};

export default page;
