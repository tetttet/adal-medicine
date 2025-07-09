"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Phone } from "lucide-react";

const Content = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1625750998899-61a72bc58c80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY0fHxkb2N0b3J8ZW58MHx8MHx8fDA%3D"
        subheading="Сотрудничество"
        heading="Создано для вашего здоровья"
      >
        <Introduction />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://plus.unsplash.com/premium_photo-1681966840324-cd04a64b7ac1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgxfHxkb2N0b3J8ZW58MHx8MHx8fDA%3D"
        subheading="Качество"
        heading="Без компромиссов"
      >
        <First />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1666214280138-358232b8f5e5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHxkb2N0b3J8ZW58MHx8MHx8fDA%3D"
        subheading="Современность"
        heading="Медицина нового поколения"
      >
        <Second />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 0;

type TextParallaxContentProps = {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
};

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-black/30"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

type OverlayCopyProps = {
  subheading: string;
  heading: string;
};

const OverlayCopy = ({ subheading, heading }: OverlayCopyProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const Introduction = () => (
  <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 overflow-hidden">
    {/* Декоративные элементы (нежные пастельные круги) */}
    <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl" />
    <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

    <div className="relative grid grid-cols-1 gap-20 lg:grid-cols-12">
      {/* Заголовок */}
      <div className="lg:col-span-5">
        <div className="relative pl-6">
          <div className="absolute left-0 top-1 h-16 w-1 rounded-full bg-gradient-to-b from-teal-400 to-blue-500" />
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 lg:text-6xl">
            Забота,{" "}
            <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
              которой можно доверять
            </span>
          </h1>
        </div>
      </div>

      {/* Основной контент */}
      <div className="lg:col-span-7 space-y-10">
        <p className="text-2xl text-gray-700 leading-[1.8]">
          В <span className="font-semibold text-teal-600">Adal Medicine</span>{" "}
          мы предлагаем не просто медицинский туризм, а{" "}
          <span className="text-blue-600 font-semibold">
            осознанный путь к здоровью
          </span>
          , созданный с учётом ваших потребностей, истории и приоритетов.
        </p>

        <p className="text-2xl text-gray-700 leading-[1.8]">
          Наши пациенты получают доступ к{" "}
          <span className="font-semibold text-blue-600">
            высокотехнологичным методам диагностики и лечения
          </span>{" "}
          в лучших клиниках Стамбула. Мы гарантируем полное сопровождение — от
          первой консультации до возвращения домой.
        </p>

        <p className="text-2xl text-gray-700 leading-[1.8]">
          Мы верим, что{" "}
          <span className="italic text-teal-700">
            здоровье — это главный приоритет
          </span>
          . Именно поэтому каждый шаг мы проектируем с вниманием к деталям,
          уважением к вам и стремлением к безупречному результату.
        </p>

        {/* Кнопки */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 px-10 py-5 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:to-blue-700">
            <span>Ознакомиться с программами</span>
            <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-300 to-blue-300 opacity-0 transition-opacity duration-300 group-hover:opacity-20 rounded-xl" />
          </button>

          <button className="flex items-center justify-center gap-3 rounded-xl border-2 border-blue-500 px-10 py-5 text-xl font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-50">
            <span>Связаться с врачом</span>
            <Phone className="text-blue-500" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const First = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-24">
    {/* Декоративные элементы */}
    <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-teal-100/40 blur-[100px]" />
    <div className="absolute bottom-20 left-0 h-64 w-64 rounded-full bg-blue-100/40 blur-[80px]" />

    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
        {/* Заголовок с акцентом */}
        <div className="lg:col-span-5">
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-teal-500" />
            <h2 className="text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                Миссия
              </span>{" "}
              и ценности ADAL MEDICINE
            </h2>
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-blue-400 to-teal-400" />
          </div>
        </div>

        {/* Контент с улучшенной типографикой */}
        <div className="lg:col-span-7">
          <div className="space-y-8">
            <p className="text-xl leading-relaxed text-gray-600 lg:text-2xl lg:leading-9">
              <span className="font-semibold text-blue-600">ADAL MEDICINE</span>{" "}
              — это синтез многолетнего врачебного опыта и передовых медицинских
              технологий. Мы создаём пространство, где каждый пациент получает
              персонализированное лечение по международным стандартам.
            </p>

            <p className="text-xl leading-relaxed text-gray-600 lg:text-2xl lg:leading-9">
              Наша философия основана на трёх принципах:
              <span className="font-semibold text-teal-600">
                {" "}
                научный подход
              </span>
              ,
              <span className="font-semibold text-blue-600">
                {" "}
                индивидуальное внимание
              </span>{" "}
              и
              <span className="font-semibold text-teal-600">
                {" "}
                бескомпромиссное качество
              </span>
              . Это позволяет нам добиваться выдающихся результатов в
              диагностике и лечении.
            </p>

            <div className="pt-4">
              <button className="group relative inline-flex items-center overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-8 py-4 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl">
                <span>Узнать о нашей философии</span>
                <FiArrowUpRight className="ml-2 transition-transform duration-300 group-hover:rotate-45" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-teal-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Дополнительный блок с цифрами */}
      <div className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4">
        {[
          { value: "15+", label: "Лет медицинского опыта" },
          { value: "50+", label: "Высококлассных специалистов" },
          { value: "10k+", label: "Довольных пациентов" },
          { value: "100%", label: "Ориентация на качество" },
        ].map((item, index) => (
          <div key={index} className="rounded-xl bg-white p-6 shadow-lg">
            <p className="text-4xl font-bold text-blue-600">{item.value}</p>
            <p className="mt-2 text-lg text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Second = () => (
  <div className="relative mx-auto max-w-6xl grid grid-cols-1 gap-10 px-6 py-24 md:grid-cols-12">
    {/* Заголовок */}
    <h2 className="col-span-1 text-4xl font-extrabold tracking-tight text-gray-900 md:col-span-4 md:text-5xl">
      Забота <br className="hidden md:block" />
      <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
        и инновации
      </span>{" "}
      в каждом шаге
    </h2>

    {/* Описание */}
    <div className="col-span-1 md:col-span-8 space-y-8 text-gray-700">
      <p className="text-2xl leading-[1.8]">
        В <span className="font-semibold text-teal-600">Adal Medicine</span> мы
        сочетаем медицинскую экспертизу с{" "}
        <span className="text-blue-600 font-semibold">
          технологиями нового поколения
        </span>
        , чтобы предложить пациентам продуманное, безопасное и эффективное
        лечение в лучших клиниках Турции.
      </p>

      <p className="text-2xl leading-[1.8]">
        Мы заботимся о каждом этапе — от диагностики до реабилитации. Все
        процессы прозрачны, персонализированы и направлены на ваш комфорт и
        быстрое восстановление.
      </p>

      {/* Кнопка */}
      <button className="group relative inline-flex items-center gap-3 rounded-xl bg-neutral-900 px-10 py-5 text-xl font-semibold text-white shadow-md transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg">
        Подробнее
        <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-blue-300 opacity-0 group-hover:opacity-10" />
      </button>
    </div>
  </div>
);

export default Content;
