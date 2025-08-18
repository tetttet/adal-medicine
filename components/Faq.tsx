"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  title: string;
  description: string;
  items: FAQItem[];
};

export default function FAQ({ title, description, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative flex flex-col lg:flex-row max-w-7xl mx-auto py-16 px-6 gap-10">
      {/* Фоновой градиент */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[600px] h-[1000px] rounded-full bg-gradient-to-tr from-indigo-400 via-blue-300 to-sky-200 blur-3xl opacity-40 animate-pulse" />
      </div>

      {/* Левая часть — только FAQ */}
      <div className="flex-1 lg:max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center lg:text-left mb-3 text-zinc-900">
          {title}
        </h2>
        <p className="text-center lg:text-left text-zinc-500 mb-10">
          {description}
        </p>

        <div className="space-y-5">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                layout
                transition={{
                  layout: { duration: 0.5, ease: [0.25, 0.8, 0.25, 1] },
                }}
                className="rounded-3xl border border-zinc-200 bg-white/70 backdrop-blur-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-5 text-left hover:bg-white/30 transition-colors duration-300"
                >
                  <span className="font-medium text-lg text-zinc-900">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-zinc-500"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                {isOpen && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-5 pb-5 text-zinc-600 text-base"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Правая картинка */}
      <div className="hidden lg:flex flex-1 justify-end">
        <Image
          src="/images/content/IMG_5147.DNG"
          alt="FAQ illustration"
          width={800}
          height={600}
          className="rounded-2xl shadow-xl object-cover w-full h-auto"
        />
      </div>
    </section>
  );
}
