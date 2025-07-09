"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import X from "../Svg/X";
import Menu from "../Svg/Menu";
import Down from "../Svg/Down";
import { BsFacebook, BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  const subLinks = [
    { title: "О нас", path: "/about" },
    { title: "Популярные направления", path: "/popular-sides" },
    {
      title: "Пациентам",
      path: "/patients",
      submenu: [
        { title: "Как это работает", path: "/patients" },
        { title: "Вопросы и ответы", path: "/patients/faq" },
        { title: "Отзывы", path: "/patients/testimonials" },
        { title: "Медицинская виза", path: "/patients/visa" },
        { title: "Поддержка на месте", path: "/patients/support" },
      ],
    },
    {
      title: "Процедуры",
      path: "/",
      submenu: [
        { title: "Хирургия", path: "/procedures/surgery" },
        { title: "Стоматология", path: "/procedures/dentistry" },
        { title: "Диагностика", path: "/procedures/diagnostics" },
        { title: "Эстетическая медицина", path: "/procedures/aesthetic" },
        { title: "Реабилитация", path: "/procedures/rehabilitation" },
      ],
    },
    { title: "Контакты", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/20 backdrop-blur-xl shadow-md"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center lg:px-8">
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image
              src="/Logo.jpeg"
              alt="Adal Medicine Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-2xl font-semibold text-[#2B7A78]">
              ADAL MEDICINE
            </span>
          </div>
        </Link>

        <div className="lg:hidden">
          <button
            className="text-gray-600 "
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <nav
          className={`absolute left-0 right-0 top-16 p-2 transition-all duration-300 shadow-md lg:shadow-none lg:static lg:flex lg:items-center lg:space-x-3 ${
            open ? "block bg-white" : "hidden"
          }`}
        >
          <Link
            href={"/"}
            className="block py-2 font-medium text-red-600 hover:text-red-700"
          >
            <BsYoutube className="w-5 h-5" />
          </Link>
          <Link
            href={"/"}
            className="block py-2 font-medium text-pink-600 hover:text-pink-700"
          >
            <BsInstagram className="w-5 h-5" />
          </Link>
          <Link
            href={"/"}
            className="block py-2 font-medium text-green-600 hover:text-green-700"
          >
            <BsWhatsapp className="w-5 h-5" />
          </Link>
          <Link
            href={"/"}
            className="block py-2 font-medium text-blue-600 hover:text-blue-700"
          >
            <BsFacebook className="w-5 h-5" />
          </Link>
        </nav>
      </div>

      <div className="border-t bg-gray-50">
        {/* Mobile toggle */}
        <div className="lg:hidden flex justify-between items-center px-4 py-2">
          <span className="text-lg font-bold"></span>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            <Menu />
          </button>
        </div>

        {/* Navigation */}
        {hasMounted && (
          <ul
            className={`flex flex-col lg:flex-row gap-2 lg:gap-4 px-4 lg:px-8 py-2 max-w-screen-xl mx-auto transition-all duration-300 ease-in-out ${
              menuOpen ? "block" : "hidden lg:flex"
            }`}
          >
            {subLinks.map((item, id) => (
              <li key={id} className="relative group">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.path}
                    className="text-sm font-medium text-gray-600 px-3 py-2 rounded-lg hover:bg-[#DEF2F1] hover:text-[#2B7A78] transition flex items-center justify-between w-full"
                    onClick={() =>
                      openDropdown === id
                        ? setOpenDropdown(null)
                        : setOpenDropdown(id)
                    }
                  >
                    {item.title}
                    {item.submenu && (
                      <span className="ml-2">
                        <Down />
                      </span>
                    )}
                  </Link>
                </div>

                {item.submenu && (
                  <ul
                    className={`${
                      openDropdown === id || typeof window === "undefined"
                        ? "block"
                        : "hidden lg:block"
                    } absolute lg:group-hover:opacity-100 lg:group-hover:visible lg:opacity-0 lg:invisible left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 z-50`}
                  >
                    {item.submenu.map((subItem, subId) => (
                      <li key={subId}>
                        <Link
                          href={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#DEF2F1] hover:text-[#2B7A78] transition"
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
