"use client";

import { Carousel } from "@/components/Element/carousel";

const Slider = () => {
  const slideData = [
    {
      title: "Современные клиники",
      button: "Подробнее",
      src: "https://images.unsplash.com/photo-1640669860995-91178ad3bef1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Опытные врачи",
      button: "Узнать больше",
      src: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Передовые технологии",
      button: "Смотреть услуги",
      src: "https://images.unsplash.com/photo-1639154968821-6dbc3efb8d23?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Доступная помощь",
      button: "Записаться",
      src: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
};

export default Slider;
