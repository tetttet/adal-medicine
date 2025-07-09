"use client";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "О нас",
    links: [
      { label: "Наши услуги", link: "#" },
      { label: "Цены", link: "#" },
      { label: "Поддержка", link: "#" },
      { label: "Отзывы", link: "#" },
    ],
  },
  {
    title: "Информация",
    links: [
      { label: "Как это работает", link: "#" },
      { label: "Медиа материалы", link: "#" },
      { label: "Обновления", link: "#" },
      { label: "Новости", link: "#" },
    ],
  },
  {
    title: "Сообщество",
    links: [
      { label: "Присоединиться к чату", link: "#" },
      { label: "Следите за нами в Instagram", link: "#" },
      { label: "Подписка на рассылку", link: "#" },
      { label: "Обсуждения на форуме", link: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-xl font-bold mb-2">
            <Image
              src="/Logo-removebg.png"
              alt="ADAL MEDICINE Logo"
              width={100}
              height={100}
              className="h-20 w-auto"
            />
          </div>
          <p className="text-sm text-gray-500">
            ADAL MEDICINE — ваша надёжная платформа для медицинских решений и
            онлайн-консультаций.
          </p>
        </div>
        {data.map((group) => (
          <div key={group.title}>
            <h3 className="text-md font-semibold mb-2">{group.title}</h3>
            <ul className="space-y-1">
              {group.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.link}
                    className="text-sm text-gray-600 hover:text-gray-900"
                    onClick={(e) => e.preventDefault()}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-300 mt-6 py-4 px-4 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <span className="text-sm text-gray-500">
          © 2025 ADAL MEDICINE. Все права защищены.
        </span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaYoutube size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
