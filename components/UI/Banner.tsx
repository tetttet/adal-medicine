"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm"
        >
          <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-start justify-between text-gray-900 sm:items-center md:px-8">
            <div className="flex-1 justify-center flex items-start gap-x-4 sm:items-center">
              <div className="flex-none px-4 py-1.5 rounded-full bg-[#E0F0F8] text-[#007AFF] text-sm font-medium">
                Обновление
              </div>
              <p className="font-medium text-sm sm:text-base">
                Мы запустили новую версию нашей медицинской платформы!{" "}
                <a
                  href="#"
                  className="font-semibold text-[#007AFF] underline underline-offset-2 hover:opacity-80 inline-flex items-center gap-x-1 transition"
                >
                  Узнать больше
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </p>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Закрыть уведомление"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-5 h-5 text-gray-500"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Banner;
