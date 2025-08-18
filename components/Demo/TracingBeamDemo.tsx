"use client";
import React from "react";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../UI/tracing-beam";
import Image from "next/image";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-5xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-primary text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height={600}
                  width={900}
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
}

const dummyContent = [
  {
    title: "Adal Medicine | Медицинский туризм в Стамбуле",
    description: (
      <>
        <p>
          Adal Medicine — это больше, чем просто медицинский туризм. Мы помогаем
          пациентам со всего мира пройти полное обследование и лечение в лучших
          клиниках Стамбула. Наша команда сопровождает вас от первого звонка и
          до завершения лечения, предоставляя комплексный сервис: консультации,
          перелёт, трансфер, проживание, запись к врачам, перевод и полное
          сопровождение 24/7.
        </p>
        <br />
        <p>
          Наш приоритет — ваше здоровье и комфорт. Мы сотрудничаем только с
          клиниками класса «А», которые имеют международные аккредитации и
          используют современное оборудование. Благодаря этому пациенты получают
          точную диагностику и доступ к самым передовым методам лечения.
        </p>
        <br />
        <p>
          Adal Medicine делает медицинский туризм простым и понятным. С нами вы
          не теряетесь в незнакомой стране — мы всегда рядом, чтобы помочь и
          поддержать.
        </p>
      </>
    ),
    badge: "О компании",
    image: "/images/content/IMG_5153.DNG",
  },
  {
    title: "Почему выбирают Adal Medicine",
    description: (
      <>
        <p>
          Мы создали сервис «всё включено», где каждый пациент получает
          индивидуальный подход. Наша команда помогает подобрать клинику и
          врача, полностью организует поездку и делает процесс лечения
          максимально комфортным.
        </p>
        <br />
        <p>
          Более 1000 пациентов из разных стран уже доверили нам своё здоровье.
          От простых чекапов до сложных операций — мы контролируем каждый этап
          пути.
        </p>
        <br />
        <p>
          Наши ключевые преимущества: международные стандарты качества, опытные
          врачи, прозрачные цены и круглосуточная поддержка.
        </p>
      </>
    ),
    badge: "Преимущества",
    image:
      "https://plus.unsplash.com/premium_photo-1661438133415-ca0ec60b8f3d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY0fHx8ZW58MHx8fHx8",
  },
  {
    title: "Наши услуги",
    description: (
      <>
        <p>
          Мы предлагаем полный спектр медицинских услуг в Стамбуле: чекапы,
          диагностика, кардиология, онкология, пластическая хирургия,
          стоматология, репродуктивная медицина и многое другое.
        </p>
        <br />
        <p>
          Каждый пациент получает программу лечения, адаптированную под его
          состояние и запросы. Мы работаем только с проверенными клиниками и
          врачами, чтобы вы могли быть уверены в результате.
        </p>
        <br />
        <p>
          Adal Medicine — это не просто посредник, а надёжный партнёр, который
          заботится о вашем здоровье на каждом этапе.
        </p>
      </>
    ),
    badge: "Услуги",
    image: "/images/content/IMG_5144.DNG",
  },
];
