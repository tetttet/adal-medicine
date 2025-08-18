"use client";
import * as React from "react";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Pill,
  Stethoscope,
  HeartPulse,
  Syringe,
  ShieldPlus,
  Hospital,
} from "lucide-react";

export function CarouselSize() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  // Элементы карусели под Adal Medicine
  const carouselItems = [
    {
      icon: Pill,
      title: "Лекарства",
      paragraph: "Широкий выбор качественных препаратов",
    },
    {
      icon: Stethoscope,
      title: "Диагностика",
      paragraph: "Современные методы обследования",
    },
    {
      icon: HeartPulse,
      title: "Кардиология",
      paragraph: "Забота о здоровье сердца",
    },
    {
      icon: Syringe,
      title: "Вакцинация",
      paragraph: "Надёжная защита для всей семьи",
    },
    {
      icon: ShieldPlus,
      title: "Профилактика",
      paragraph: "Предотвращение заболеваний",
    },
    {
      icon: Hospital,
      title: "Клиники-партнёры",
      paragraph: "Лучшие центры в Стамбуле",
    },
  ];

  return (
    <div className="flex justify-center mx-12">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
        }}
        className="w-full max-w-none md:max-w-6xl"
      >
        <CarouselContent>
          {carouselItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between gap-4">
                        <div className="w-18 h-13 flex items-center justify-center rounded-full bg-indigo-700 text-white">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-center">
                          <h5 className="font-semibold">{item.title}</h5>
                          <p className="text-sm text-gray-600">
                            {item.paragraph}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
