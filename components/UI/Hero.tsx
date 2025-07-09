"use client";
import Image from "next/image";
import React from "react";
import Right from "../Svg/Right";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 blur-xl h-[580px] bg-gradient-to-r from-[#e0f2f1] to-[#f5f5f5]"></div>
      <div className="relative">
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
            <div className="flex-none space-y-5 max-w-xl">
              <a
                href="javascript:void(0)"
                className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white"
              >
                <span className="inline-block rounded-full px-3 py-1 bg-primary-dark text-white">
                  Новости
                </span>
                <p className="flex items-center">
                  Ознакомьтесь с последними обновлениями
                  <Right />
                </p>
              </a>
              <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                Современные медицинские решения для вашей клиники
              </h1>
              <p>
                Мы предоставляем инновационные технологии и надежные решения для
                медицинских учреждений и частных специалистов.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <Link
                  href="javascript:void(0)"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-primary duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                >
                  Начать работу
                  <Right />
                </Link>
                <Link
                  href="javascript:void(0)"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex"
                >
                  Связаться с отделом продаж
                  <Right />
                </Link>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              <Image
                alt="hero"
                width={1000}
                height={1000}
                priority
                src="https://plus.unsplash.com/premium_vector-1714618832742-6fd6973ee675?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D"
                className="rounded-full"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export const HospitalBanner = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#e0f2f1] to-[#f5f5f5] overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        {/* Image container with decorative elements */}
        <div className="relative w-full md:w-5/12 lg:w-1/2 mb-12 md:mb-0">
          <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#b2ebf2] opacity-40 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute -bottom-12 -right-8 w-64 h-64 bg-[#80deea] opacity-40 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="relative z-10 w-full max-w-md mx-auto">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl shadow-md">
              <Image
                width={600}
                height={400}
                priority
                src="https://plus.unsplash.com/premium_photo-1731617406351-341bb949e682?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8"
                alt="Медицинский веб-сайт"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Content container */}
        <div className="w-full md:w-7/12 lg:w-1/2 px-4 md:px-8 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00695c] leading-tight">
            Комплексный медицинский уход{" "}
            <span className="text-[#00897b]">онлайн</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Профессиональные консультации, точная диагностика и эффективное
            лечение от наших опытных специалистов. Заботимся о вашем здоровье с
            комфортом и надежностью.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <button className="px-6 py-3 bg-white text-[#00897b] border border-[#00897b] rounded-full hover:bg-[#e0f2f1] transition-all duration-300 shadow-sm hover:shadow-md">
              Онлайн консультация
            </button>
            <button className="px-6 py-3 bg-white text-[#00897b] border border-[#00897b] rounded-full hover:bg-[#e0f2f1] transition-all duration-300 shadow-sm hover:shadow-md">
              Результаты анализов
            </button>
            <button className="px-6 py-3 bg-[#00897b] text-white rounded-full hover:bg-[#00695c] transition-all duration-300 shadow-md hover:shadow-lg">
              Медицинский чек-ап
            </button>
            <button className="px-6 py-3 bg-[#00695c] text-white rounded-full hover:bg-[#004d40] transition-all duration-300 shadow-md hover:shadow-lg">
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
