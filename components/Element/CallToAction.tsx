"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000); // Показываем через 4 секунды

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-[1000] p-4">
      <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-colors shadow-md"
          aria-label="Закрыть окно"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="md:w-2/5 relative">
          <Image
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            alt="Медицинский консультант"
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-800/30 to-cyan-500/20" />
        </div>

        <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
          <div className="mb-1 text-cyan-600 font-medium flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                clipRule="evenodd"
              />
            </svg>
            Профессиональная помощь
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Нужна помощь в выборе клиники?
          </h2>

          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Наши эксперты по медицинскому туризму бесплатно подберут для вас
            оптимальный вариант лечения с учетом всех ваших потребностей и
            предпочтений.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-cyan-600 mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">Персональный подбор клиник</span>
            </div>

            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-cyan-600 mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">
                Организация лечения под ключ
              </span>
            </div>

            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-cyan-600 mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">Поддержка на всех этапах</span>
            </div>
          </div>

          <button className="mt-8 bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-4 px-8 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:opacity-90 flex items-center justify-center">
            Получить бесплатную консультацию
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
