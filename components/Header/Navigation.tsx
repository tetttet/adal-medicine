"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, CircleX } from "lucide-react";
import { About } from "./MenuItem";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState<"О Нас" | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const logo = "/logo-removebg.png";

  const navLists: { name: "О Нас"; link: string }[] = [
    { name: "О Нас", link: "/about" },
  ];

  return (
    <div className="sticky top-0 z-50">
      <header
        className="w-full primary-bg-black py-5 sm:px-10 px-5 flex justify-between items-center relative"
        onMouseLeave={() => setActiveItem(null)}
      >
        <nav className="flex w-full max-w-screen-xl mx-auto">
          <Link href="/">
            <Image src={logo} priority alt="Apple" width={100} height={28} />
          </Link>

          <div className="flex-1 flex justify-center items-center max-sm:hidden">
            {navLists.map(({ name, link }) => (
              <Link key={name} href={link}>
                <div
                  className="px-5 text-sm cursor-pointer primary-tx-gray transition-all relative"
                  onMouseEnter={() => setActiveItem(name)}
                >
                  {name}
                </div>
              </Link>
            ))}
          </div>

          {/* Иконки справа */}
          <div className="flex items-center gap-7 max-sm:justify-end max-sm:flex-1">
            <Menu
              onClick={() => setSidebarOpen(true)}
              width={24}
              height={24}
              className="hidden max-sm:block"
            />
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-[100%] left-0 w-full shadow-lg backdrop-blur-3xl bg-opacity-50"
            onMouseEnter={() => setActiveItem(activeItem)}
            onMouseLeave={() => setActiveItem(null)}
          >
            {activeItem === "О Нас" && <About />}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 w-3/4 h-full bg-black shadow-lg z-50 p-5"
          >
            <div className="flex justify-between items-center mb-5">
              <span className="text-lg font-bold">Меню</span>
              <CircleX
                onClick={() => setSidebarOpen(false)}
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>
            <ul className="space-y-4">
              {navLists.map(({ name, link }) => (
                <li key={name} className="text-base text-white cursor-pointer">
                  <Link href={link} onClick={() => setSidebarOpen(false)}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
