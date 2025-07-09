"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/Element/tracing-beam";
import Image from "next/image";

const Tracing = () => {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-7xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  width={1000}
                  height={1000}
                  priority
                  src={item.image}
                  alt="blog thumbnail"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
};

const dummyContent = [
  {
    title: "Почему выбирают ADAL MEDICINE",
    description: (
      <>
        <p>
          В ADAL MEDICINE мы стремимся предоставить качественные и доступные
          медицинские услуги каждому. Наша команда опытных врачей использует
          современные методы диагностики и лечения, чтобы обеспечить
          максимальную заботу о вашем здоровье.
        </p>
        <p>
          Мы верим в индивидуальный подход к каждому пациенту. От профилактики
          до сложных операций — мы рядом на каждом этапе пути к выздоровлению.
        </p>
        <p>
          Ваше здоровье — наша главная ценность. Доверьтесь профессионалам и
          почувствуйте разницу уже с первого визита.
        </p>
      </>
    ),
    badge: "О нас",
    image:
      "https://plus.unsplash.com/premium_photo-1661893870720-e2f6d09d96d7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxkb2N0b3J8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Наши услуги",
    description: (
      <>
        <p>
          Мы предлагаем широкий спектр медицинских направлений: терапия,
          кардиология, дерматология, неврология, гинекология, УЗИ-диагностика и
          многое другое. Все процедуры выполняются с использованием современного
          оборудования.
        </p>
        <p>
          В ADAL MEDICINE вы получаете комплексный подход — от консультации до
          полного восстановления. Мы создаём комфортные условия для вашего
          здоровья и благополучия.
        </p>
      </>
    ),
    badge: "Услуги",
    image:
      "https://plus.unsplash.com/premium_photo-1681843015470-5dec0470c64d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxkb2N0b3J8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Мы рядом — всегда",
    description: (
      <>
        <p>
          Забота о пациентах — это не просто слова. Мы сопровождаем вас до
          полного восстановления, всегда открыты для общения и поддержки. В
          любой момент вы можете обратиться к нам за советом и помощью.
        </p>
      </>
    ),
    badge: "Поддержка",
    image:
      "https://images.unsplash.com/photo-1666214275172-ccc3b98e5519?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxkb2N0b3J8ZW58MHx8MHx8fDA%3D",
  },
];

export default Tracing;
