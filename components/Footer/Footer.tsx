"use client";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  const data = [
    {
      title: t("sections.about.title"),
      links: [
        { label: t("sections.about.services"), link: "#" },
        { label: t("sections.about.pricing"), link: "#" },
        { label: t("sections.about.support"), link: "#" },
        { label: t("sections.about.testimonials"), link: "#" },
      ],
    },
    {
      title: t("sections.info.title"),
      links: [
        { label: t("sections.info.howItWorks"), link: "#" },
        { label: t("sections.info.media"), link: "#" },
        { label: t("sections.info.updates"), link: "#" },
        { label: t("sections.info.news"), link: "#" },
      ],
    },
    {
      title: t("sections.community.title"),
      links: [
        { label: t("sections.community.chat"), link: "#" },
        { label: t("sections.community.instagram"), link: "#" },
        { label: t("sections.community.newsletter"), link: "#" },
        { label: t("sections.community.forum"), link: "#" },
      ],
    },
  ];

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
          <p className="text-sm text-gray-500">{t("description")}</p>
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
        <span className="text-sm text-gray-500">{t("copyright")}</span>
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
