"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import X from "../Svg/X";
import { Facebook, Instagram, Phone, Linkedin } from "lucide-react";

const Social = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-0 right-60 z-50 hidden md:block">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="bg-white/90 backdrop-blur-md w-56 rounded-3xl shadow-lg flex flex-col border border-gray-200 overflow-hidden"
            style={{
              WebkitBackdropFilter: "blur(15px)",
              backdropFilter: "blur(15px)",
            }}
          >
            <div className="bg-gradient-to-r from-[#14a9b4] to-teal-600 text-white px-6 py-3 rounded-t-3xl flex justify-between items-center shadow-md select-none">
              <span className="font-semibold text-lg">Социальные сети</span>
              <button
                onClick={() => setOpen(false)}
                className="text-white text-2xl hover:text-gray-200 transition rounded-full p-1"
                aria-label="Close popup"
              >
                <X />
              </button>
            </div>

            <div className="flex flex-col gap-4 px-6 py-4 text-gray-800">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <Facebook size={22} />
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-pink-500 transition"
              >
                <Instagram size={22} />
                Instagram
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 hover:text-green-600 transition"
              >
                <Phone size={22} />
                +1 (234) 567-890
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-blue-700 transition"
              >
                <Linkedin size={22} />
                Linkedin
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="rounded-tl-2xl rounded-tr-2xl px-6 py-3 text-white bg-gradient-to-r from-[#14a9b4] via-cyan-500 to-teal-600 shadow-lg font-medium text-lg select-none hover:brightness-110 active:scale-95 transition-transform"
          style={{ height: "48px", width: "200px" }}
        >
          Соцсети
        </button>
      )}
    </div>
  );
};

export default Social;
