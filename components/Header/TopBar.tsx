"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

const TopBar = () => {
  const t = useTranslations("Topbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "ru" : "en";
    const segments = pathname.split("/").filter(Boolean);

    if (segments[0] === "en" || segments[0] === "ru") {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    const newPath = "/" + segments.join("/");
    router.push(newPath);
  };

  return (
    <section className="bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="w-full md:w-auto">
          <h2
            className="text-gray-900 text-base sm:text-lg md:text-xl font-semibold text-center md:text-left"
            dangerouslySetInnerHTML={{
              __html: t
                .raw("title")
                .replace("<b>", "<span class='font-bold text-[#007AFF]'>")
                .replace("</b>", "</span>")
                .replace(
                  "<u>",
                  "<span class='underline decoration-[#007AFF] underline-offset-2'>"
                )
                .replace("</u>", "</span>"),
            }}
          />
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row justify-center md:justify-end gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div className="flex gap-2 justify-center">
            <button
              onClick={toggleLocale}
              className={`text-sm font-medium px-3 py-1 border rounded ${
                locale === "ru"
                  ? "bg-primary text-white"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              Рус
            </button>
            <button
              onClick={toggleLocale}
              className={`text-sm font-medium px-3 py-1 border rounded ${
                locale === "en"
                  ? "bg-primary text-white"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              Eng
            </button>
          </div>

          {/* Подробнее */}
          <button className="bg-primary text-white px-5 py-2 rounded-[4px] text-sm font-medium shadow-sm hover:shadow-lg hover:bg-[#005FCC] transition w-full sm:w-auto">
            {t("button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
