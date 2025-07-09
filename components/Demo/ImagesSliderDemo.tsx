"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "../UI/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "/images/hero/hero-1.avif",
    "/images/hero/hero-2.avif",
    "/images/hero/hero-3.avif",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-100 to-neutral-400 py-4">
          Adal Medicine Patients
          <br />
          Medical Tourism
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/20 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Забронировать Собеседования →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
