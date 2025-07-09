import React from "react";
import Diagram from "../Svg/Diagram";
import Secure from "../Svg/Secure";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      icon: <Diagram />,
      title: "Медицинская аналитика",
      desc: "Современные инструменты анализа данных помогают врачам принимать точные решения и улучшать качество лечения.",
    },
    {
      icon: <Secure />,
      title: "Безопасность данных",
      desc: "Защита медицинской информации и конфиденциальность пациентов — наш приоритет в работе с данными.",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
        <div>
          <div className="max-w-xl space-y-3">
            <h3 className="text-primary-dark font-semibold">Особенности</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Простые решения для сложных медицинских задач
            </p>
            <p>
              Мы предлагаем инновационные технологии для поддержки врачей и медицинских учреждений, обеспечивая эффективность и безопасность.
            </p>
          </div>
          <div className="mt-12 max-w-lg lg:max-w-none">
            <ul className="space-y-8">
              {features.map((item, idx) => (
                <li key={idx} className="flex gap-x-4">
                  <div className="flex-none w-12 h-12 bg-indigo-50 text-primary-dark rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-800 font-semibold">
                      {item.title}
                    </h4>
                    <p className="mt-3">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[600px]">
          <Image
            alt="медицинская иллюстрация"
            width={1500}
            height={1500}
            priority
            src="https://plus.unsplash.com/premium_vector-1682311103965-afda66f33530?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fG1lZGljaW5lfGVufDB8fDB8fHww"
            className="w-full shadow-sm rounded-lg border"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
