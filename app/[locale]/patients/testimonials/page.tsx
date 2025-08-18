"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Adal Medicine помогла мне пройти полное обследование в Стамбуле. Всё организовано на высшем уровне — перелёт, трансфер и консультации.",
    author: "Алия К.",
    rating: 5,
  },
  {
    text: "Очень впечатлило внимание к деталям. Команда всегда была на связи и заботилась о моём комфорте.",
    author: "Данияр С.",
    rating: 5,
  },
  {
    text: "Получила консультацию и лечение в клинике класса А. Чувствовала себя в надёжных руках.",
    author: "Марина В.",
    rating: 5,
  },
  {
    text: "Благодаря Adal Medicine я прошёл чекап в современной клинике. Всё было быстро и удобно.",
    author: "Ермек А.",
    rating: 4,
  },
  {
    text: "Очень понравился сервис: встреча в аэропорту, переводчик и круглосуточная поддержка. Всё было идеально.",
    author: "Жанар Б.",
    rating: 5,
  },
  {
    text: "Доктора и клиника оказались на высшем уровне. Я полностью доверял Adal Medicine и не пожалел.",
    author: "Руслан Т.",
    rating: 5,
  },
  {
    text: "Чувствовалась забота с первого звонка. Всё продумано, начиная от диагностики и заканчивая проживанием.",
    author: "Сауле М.",
    rating: 5,
  },
  {
    text: "Очень помогли с оформлением документов и визы. Всё прошло гладко и без стресса.",
    author: "Айгерим Ж.",
    rating: 4,
  },
  {
    text: "Проходил лечение в кардиологической клинике. Огромное спасибо за профессионализм и заботу.",
    author: "Марат Н.",
    rating: 5,
  },
  {
    text: "Adal Medicine — это команда, которой можно доверять. Всё было прозрачно и честно.",
    author: "Гульмира С.",
    rating: 5,
  },
  {
    text: "Я приехал с супругой, и обоих встретили очень тепло. Нам организовали проживание и полный сервис.",
    author: "Айдар К.",
    rating: 5,
  },
  {
    text: "Лечение прошло успешно, чувствую себя замечательно. Спасибо за сопровождение и поддержку.",
    author: "Наталья Р.",
    rating: 5,
  },
  {
    text: "Впервые воспользовалась медицинским туризмом и осталась очень довольна. Всё безопасно и комфортно.",
    author: "Асель Д.",
    rating: 5,
  },
  {
    text: "Приятно удивила стоимость: услуги качественные, но цены ниже, чем в Европе.",
    author: "Ильяс Х.",
    rating: 4,
  },
  {
    text: "Персональный подход чувствовался во всём: от выбора клиники до рекомендаций врачей.",
    author: "Камила П.",
    rating: 5,
  },
  {
    text: "Спасибо за помощь в подборе врача и организации лечения. Всё прошло без лишних забот.",
    author: "Олжас М.",
    rating: 5,
  },
  {
    text: "Очень комфортно, что всегда был переводчик. Я не чувствовал языкового барьера.",
    author: "Алина С.",
    rating: 5,
  },
  {
    text: "Все услуги были «под ключ». Мне оставалось только сосредоточиться на здоровье.",
    author: "Дамир Ж.",
    rating: 5,
  },
  {
    text: "Adal Medicine подарила ощущение уверенности и спокойствия. Я знала, что всё под контролем.",
    author: "Сания А.",
    rating: 5,
  },
  {
    text: "Организация на мировом уровне. Я чувствовал себя как VIP-гость.",
    author: "Тимур Е.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#22b8bd] via-[#239b9f] to-[#16888c] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Что говорят наши пациенты</h2>

        <motion.div
          className="flex w-max space-x-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-md bg-white/0 backdrop-blur-md rounded-2xl border border-gray-300 p-6 shadow-lg"
            >
              <p className="text-lg italic mb-4">&quot;{item.text}&quot;</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-300 fill-yellow-300"
                  />
                ))}
              </div>
              <p className="font-semibold">— {item.author}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
