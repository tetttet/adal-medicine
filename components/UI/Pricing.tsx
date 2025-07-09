"use client";
import React, { useState } from "react";
import Check from "../Svg/Check";
import Minus from "../Svg/Minus";
import Switch from "../Svg/Switch";
import Light from "../Svg/Light";
import Diagram from "../Svg/Diagram";
import Stop from "../Svg/Stop";

const Pricing = () => {
  const plans = [
    {
      name: "Базовый",
      desc: "Общий медицинский осмотр и базовые анализы.",
      price: "1500",
    },
    {
      name: "Расширенный",
      desc: "Полный чек-ап с исследованиями.",
      price: "3500",
    },
    {
      name: "Премиум",
      desc: "Комплексное обследование с куратором.",
      price: "7500",
    },
  ];

  const tables = [
    {
      label: "Услуги",
      label_icon: <Light />,
      items: [
        {
          name: "Общий осмотр",
          basic: <Check />,
          business: <Check />,
          enterprise: <Check />,
        },
        {
          name: "Лабораторные анализы",
          basic: <Minus />,
          business: <Check />,
          enterprise: <Check />,
        },
        {
          name: "Консультация специалиста",
          basic: <Minus />,
          business: <Minus />,
          enterprise: <Check />,
        },
        {
          name: "УЗИ и диагностика",
          basic: <Minus />,
          business: "2 процедуры",
          enterprise: "Неограниченно",
        },
      ],
    },
    {
      label: "Диагностика",
      label_icon: <Diagram />,
      items: [
        {
          name: "Общий анализ крови",
          basic: <Check />,
          business: <Check />,
          enterprise: <Check />,
        },
        {
          name: "Биохимический анализ",
          basic: <Minus />,
          business: <Check />,
          enterprise: <Check />,
        },
        {
          name: "МРТ/КТ диагностика",
          basic: <Minus />,
          business: <Minus />,
          enterprise: <Check />,
        },
        {
          name: "Количество консультаций",
          basic: "1",
          business: "3",
          enterprise: "Безлимит",
        },
        {
          name: "Срочный результат",
          basic: <Minus />,
          business: "За 3 дня",
          enterprise: "За 1 день",
        },
      ],
    },
    {
      label: "Поддержка",
      label_icon: <Stop />,
      items: [
        {
          name: "Телефонная поддержка",
          basic: <Check />,
          business: <Check />,
          enterprise: <Check />,
        },
        {
          name: "Онлайн-консультация",
          basic: <Minus />,
          business: <Check />,
          enterprise: <Check />,
        },
        {
          name: "Персональный менеджер",
          basic: <Minus />,
          business: <Minus />,
          enterprise: <Check />,
        },
        {
          name: "Поддержка 24/7",
          basic: <Minus />,
          business: "Рабочие часы",
          enterprise: "Круглосуточно",
        },
      ],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(plans[0].name);

  return (
    <section className="py-14 text-gray-600">
      <div className="relative max-w-xl mx-auto space-y-4 px-6 sm:text-center md:px-0 font-sans">
        <h3 className="text-primary-dark font-semibold tracking-wide text-sm uppercase">
          Тарифы
        </h3>
        <p className="text-gray-900 text-3xl font-extrabold sm:text-4xl leading-tight">
          Выберите подходящий медицинский план
        </p>
        <div className="max-w-xl mx-auto">
          <p className="text-gray-600 text-base leading-relaxed">
            Современные решения для вашего здоровья — персонализированные
            программы с гарантией качества и поддержки 24/7.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <div className="sticky top-32 py-6 border-b bg-white">
          <div className="max-w-screen-xl mx-auto">
            <ul className="ml-auto flex gap-x-6 px-4 md:px-8 lg:max-w-3xl">
              {plans.map((item, idx) => (
                <li
                  key={idx}
                  className={`space-y-6 w-full ${
                    item.name !== selectedPlan ? "hidden lg:block" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 font-semibold tracking-wide text-base">
                      {item.name}
                    </span>
                    <div className="relative lg:hidden">
                      <Switch />
                      <select
                        value={selectedPlan}
                        className="bg-transparent appearance-none outline-none px-8 cursor-pointer text-gray-700 font-medium"
                        onChange={(e) => setSelectedPlan(e.target.value)}
                      >
                        <option disabled>Выберите план</option>
                        {plans.map((option, idx) => (
                          <option key={idx} value={option.name}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="text-gray-900 text-3xl font-extrabold leading-tight">
                    {item.price} ₽{" "}
                    <span className="text-lg text-gray-500 font-normal">
                      / месяц
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <button className="w-full py-3 rounded-xl bg-primary text-white font-semibold text-sm transition duration-150 hover:bg-blue-700 active:bg-blue-800">
                    Начать
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto mt-10 space-y-4 px-4 overflow-auto md:overflow-visible md:px-8">
          {tables.map((table, idx) => (
            <table key={idx} className="w-full table-auto text-sm text-left">
              <thead className="text-gray-600 font-medium border-b border-gray-400">
                <tr>
                  <th className="z-20 top-12 py-6 lg:sticky">
                    <div className="flex items-center gap-x-3">
                      <div className="w-12 h-12 text-primary-dark rounded-full border flex items-center justify-center">
                        {table.label_icon}
                      </div>
                      <h4 className="text-gray-800 text-xl font-medium">
                        {table.label}
                      </h4>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y divide-gray-200">
                {table.items.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    {/* For large devices */}
                    <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                      {item.basic}
                    </td>
                    <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                      {item.business}
                    </td>
                    <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                      {item.enterprise}
                    </td>
                    {/* For small devices */}
                    <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap lg:hidden">
                      {item[
                        selectedPlan === "Базовый"
                          ? "basic"
                          : selectedPlan === "Расширенный"
                          ? "business"
                          : "enterprise"
                      ]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
