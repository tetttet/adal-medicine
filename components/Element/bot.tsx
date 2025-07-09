"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import X from "../Svg/X";
import Mail from "../Svg/Mail";

const Bot = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-0 right-6 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 300 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-white w-[300px] h-[400px] shadow-2xl rounded-t-2xl flex flex-col"
          >
            <div className="bg-primary text-white px-4 py-2 rounded-t-2xl flex justify-between items-center">
              <span>Чат-бот</span>
              <button
                onClick={() => setOpen(false)}
                className="font-bold text-xl"
              >
                <X />
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              <p className="text-gray-500">Отправь сообщение...</p>
            </div>
            <div className="p-2 border-t">
              <input
                type="text"
                placeholder="Введите сообщение"
                className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none"
              />
            </div>
          </motion.div>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="rounded-tl-2xl px-6 py-3 text-white bg-gradient-to-r from-[#14a9b4] via-cyan-500 to-teal-600"
          >
            <span className="mr-5">
              <Mail />
            </span>
            Отправь сообщение
          </button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Bot;
