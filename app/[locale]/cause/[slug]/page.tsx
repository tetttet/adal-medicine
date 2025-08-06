"use client";
import React from "react";
import { CauseData } from "@/data";
import { useParams } from "next/navigation";
import FormPart from "@/components/Cause/CauseDetails/formPart";
import TextPart from "@/components/Cause/CauseDetails/textPart";
import Volunteer from "@/components/SharedComponent/Volunteer";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

const Cause = () => {
  const { slug } = useParams();

  // Find the blog post by slug
  const item = CauseData.find((item) => item.slug === slug);
  if (!item) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section className="dark:bg-dark py-12">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-9 col-span-12">
              <div className=" rounded-lg overflow-hidden mb-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={870}
                  height={750}
                  className="w-full h-full"
                />
              </div>
              <h1 className="text-[40px] leading-tight font-semibold mb-8">
                {item.title}
              </h1>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-6 border-b pb-4 border-border dark:border-dark_border">
                  <div className="pr-6 border-r border-border dark:border-dark_border">
                    <p className="text-sm text-muted dark:text-white/60 mb-1">
                      Ориентировочная стоимость
                    </p>
                    <h4 className="text-xl text-midnight_text dark:text-white font-semibold">
                      {item.raised} – {item.goal}
                    </h4>
                  </div>
                  <div>
                    <p className="text-sm text-muted dark:text-white/60 mb-1">
                      Срок лечения / обследования
                    </p>
                    <h4 className="text-xl text-midnight_text dark:text-white font-semibold">
                      3–5 дней
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-6 border-b pb-4 border-border dark:border-dark_border">
                  <div className="pr-6 border-r border-border dark:border-dark_border">
                    <p className="text-sm text-muted dark:text-white/60 mb-1">
                      Клинике в Стамбуле
                    </p>
                    <h4 className="text-base text-midnight_text dark:text-white font-medium">
                      Medical Park, Acibadem
                    </h4>
                  </div>
                  <div>
                    <p className="text-sm text-muted dark:text-white/60 mb-1">
                      Врачи-специалисты
                    </p>
                    <h4 className="text-base text-midnight_text dark:text-white font-medium">
                      Нефролог, терапевт
                    </h4>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted dark:text-white/60 mb-1">
                    В стоимость может входить: консультации, УЗИ, анализы,
                    трансфер и переводчик.
                  </p>
                </div>
              </div>
              <div className="pb-8 mb-8 border-b border-border dark:border-dark_border">
                <div className="w-full bg-light_grey dark:bg-midnight_text rounded-full h-4 overflow-hidden">
                  <div className="w-60% bg-linear-to-r from-primary to-secondary relative z-1 rounded-full h-full"></div>
                </div>
              </div>
              <FormPart />
              <TextPart />
            </div>
            <div className="lg:col-span-3 col-span-12">
              {/* 🔍 Поиск */}
              <h4 className="text-lg font-semibold mb-6">Поиск по услугам</h4>
              <div className="relative mb-10">
                <input
                  type="text"
                  placeholder="Введите направление лечения..."
                  className="text-base px-4 py-3.5 border dark:bg-dark border-border dark:border-dark_border rounded-md w-full focus:border-primary dark:focus:border-primary focus-visible:outline-hidden"
                />
                <span className="text-muted dark:text-white/60 absolute right-5 top-4">
                  <Search width="25" height="25" />
                </span>
              </div>

              {/* 🏷 Категории */}
              <h4 className="text-lg font-semibold mb-6">Категории лечения</h4>
              <ul className="flex flex-col gap-4 mb-14">
                <li>
                  <Link
                    href="#"
                    className="text-base text-muted dark:text-white/60 hover:text-primary"
                  >
                    Полное обследование (Check-Up)
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-muted dark:text-white/60 hover:text-primary"
                  >
                    Хирургия
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-muted dark:text-white/60 hover:text-primary"
                  >
                    Онкология
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-muted dark:text-white/60 hover:text-primary"
                  >
                    Кардиология
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-muted dark:text-white/60 hover:text-primary"
                  >
                    Репродуктивная медицина (ЭКО)
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-muted dark:text-white/60 hover:text-primary"
                  >
                    Реабилитация
                  </Link>
                </li>
              </ul>

              {/* ⭐ Популярные услуги */}
              <h4 className="text-lg font-semibold mb-6">Популярные услуги</h4>
              <ul className="flex flex-col gap-4 mb-14">
                <li>
                  <Link
                    href="#"
                    className="text-base text-muted dark:text-white/60 hover:text-primary"
                  >
                    Женский Check-Up за 1 день
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-muted dark:text-white/60 hover:text-primary"
                  >
                    Лечение миомы матки без операции
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-muted dark:text-white/60 hover:text-primary"
                  >
                    Операции при грыже позвоночника
                  </Link>
                </li>
              </ul>

              {/* 📞 Блок помощи */}
              <div className="bg-primary/10 dark:bg-white/10 p-6 rounded-md border border-border dark:border-dark_border">
                <h4 className="text-lg font-semibold mb-4 text-primary dark:text-white">
                  Нужна помощь?
                </h4>
                <p className="text-base text-muted dark:text-white/70 mb-4">
                  Наши консультанты ответят на все вопросы и помогут подобрать
                  подходящее лечение.
                </p>
                <Link
                  href="/contact"
                  className="inline-block text-center bg-primary hover:bg-primary/80 text-white py-3 px-5 rounded-md font-medium transition"
                >
                  Связаться с нами
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Volunteer />
    </>
  );
};

export default Cause;
