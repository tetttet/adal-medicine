import React, { FC } from "react";

interface HeroSubProps {
  title: string;
}

const HeroSub: FC<HeroSubProps> = ({ title }) => {
  return (
    <>
      <section className="py-32 bg-gradient-to-r from-[#006570] to-[#00afc2]">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
          <h2
            className="text-white md:text-6xl text-4xl font-medium"
            data-aos="fade-right"
          >
            {title}
          </h2>
        </div>
      </section>
    </>
  );
};

export default HeroSub;
