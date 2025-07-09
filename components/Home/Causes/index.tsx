"use client";
import { CauseData } from "@/data";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const Causes = () => {
  const settings = {
    autoplay: false,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="lg:py-28 py-16 bg-grey dark:bg-darkmode">
      <div className="container mx-auto px-4">
        <h2
          className="text-center text-3xl font-semibold mb-3"
          data-aos="fade-left"
        >
          Популярные направления лечения
        </h2>
        <p className="text-base text-muted dark:text-white/60 text-center">
          Мы подбираем оптимальные решения по лечению с учётом диагноза, бюджета
          и пожеланий пациента. <br className="lg:block hidden" /> Вот некоторые
          из востребованных направлений:
        </p>
        <div className="mt-20">
          <Slider {...settings}>
            {CauseData.slice(0, 3).map((item, index) => (
              <Link
                key={index}
                href={`/cause/${item.slug}`}
                className="group"
                data-aos="fade-up"
                data-aos-delay={`${index * 250}`}
              >
                <div className="px-4">
                  <div
                    className="bg-white group dark:bg-dark rounded-4 overflow-hidden shadow-md h-full flex flex-col"
                    data-aos="fade-up"
                    data-aos-delay={`${index * 250}`}
                  >
                    <div className="overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={350}
                        height={250}
                        className="w-full h-[250px] object-cover group-hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="px-8 pt-8 pb-6 flex flex-col flex-1">
                      <h4 className="text-lg font-bold dark:text-white group-hover:text-primary mb-4">
                        {item.title}
                      </h4>
                      <p className="text-muted dark:text-white/60 text-base pb-6 border-b-2 border-border relative after:content-[''] after:absolute after:w-[70%] after:h-0.5 after:-bottom-0.5 after:left-0 after:bg-gradient-to-r after:from-primary after:to-secondary line-clamp-3">
                        {item.text}
                      </p>
                      <div className="flex gap-4 mt-auto pt-4">
                        <div className="pr-4 border-r-2 dark:border-dark_border">
                          <h4 className="text-muted text-sm dark:text-white/60 mb-1">
                            Минимальная сумма
                          </h4>
                          <h5 className="text-xl">{item.raised}</h5>
                        </div>
                        <div>
                          <h4 className="text-muted text-sm dark:text-white/60 mb-1">
                            Ориентировочная стоимость
                          </h4>
                          <h5 className="text-xl">{item.goal}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Causes;
