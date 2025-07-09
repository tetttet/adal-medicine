"use client";
import React from "react";
import Mail from "../Svg/Mail";

const Newsletter = () => {
  return (
    <section className="py-28 relative">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:px-8 md:flex">
        <div className="flex-1 max-w-lg">
          <h3 className="text-3xl font-bold">
            Получайте нашу полезную рассылку прямо на почту.
          </h3>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-x-3 md:justify-end"
          >
            <div className="relative">
              <Mail />
              <input
                type="email"
                required
                placeholder="Введите ваш email"
                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border shadow-sm rounded-lg"
              />
            </div>
            <button className="block w-auto py-3 px-4 font-semibold text-sm text-center text-white bg-primary active:shadow-none rounded-lg shadow">
              Подписаться
            </button>
          </form>
        </div>
      </div>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(143.6deg,
  rgba(9, 145, 152, 0) 20.79%,
  rgba(9, 145, 152, 0.26) 40.92%,
  rgba(9, 145, 152, 0) 70.35%)`,
        }}
      ></div>
    </section>
  );
};

export default Newsletter;
