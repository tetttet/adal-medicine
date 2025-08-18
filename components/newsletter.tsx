"use client";
import React from "react";
const Newsletter = () => {
  return (
    <section className="max-w-5xl border-b border-indigo-300 mx-auto my-16 p-10 bg-gradient-to-b from-[#6da0f3] via-[#6096ee] to-[#2163cc] rounded-2xl shadow-lg text-center">
      <h3 className="text-3xl font-extrabold mb-4 text-white">
        Ваше здоровье — наша забота
      </h3>
      <p className="text-lg mb-6 text-gray-50">
        Adal Medicine помогает вам пройти диагностику и лечение в лучших
        клиниках Стамбула. Получите бесплатную консультацию и индивидуальный
        план поездки уже сегодня.
      </p>
      <button className="px-7 py-3 bg-blue text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 hover:shadow-xl transition-all duration-300">
        Связаться с Adal Medicine
      </button>
    </section>
  );
};

export default Newsletter;
