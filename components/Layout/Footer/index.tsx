import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Header/Logo";
import { footerLinks } from "@/data";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-12 pb-14">
          {/* Логотип и описание */}
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <Logo />
            <div className="mt-6">
              <p className="text-sm text-muted mb-6">
                Adal Medicine — ваш надежный партнёр в мире медицинского
                туризма. Мы сопровождаем вас на каждом этапе пути к
                восстановлению здоровья.
              </p>
              <p className="text-sm text-muted">
                Премиум-сервис, проверенные клиники и настоящая забота — с нами
                вы в надёжных руках.
              </p>
            </div>
          </div>

          {/* Контактная информация */}
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <div className="lg:pl-10 space-y-8">
              <div className="flex items-start gap-4">
                <Image
                  src="/images/icons/icon-pin.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <div>
                  <h5 className="text-sm text-midnight_text mb-2 font-semibold">
                    Офис в Стамбуле
                  </h5>
                  <p className="text-sm text-muted">
                    Merkez Mah., Şişli, İstanbul, Turkey
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Image
                  src="/images/icons/icon-phone.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <Link
                  href="tel:+905555555555"
                  className="text-sm text-midnight_text hover:text-primary transition"
                >
                  +90 555 555 55 55
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <Image
                  src="/images/icons/icon-mail.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <Link
                  href="mailto:info@adalmedicine.com"
                  className="text-sm text-midnight_text hover:text-primary transition"
                >
                  info@adalmedicine.com
                </Link>
              </div>
            </div>
          </div>

          {/* Навигация: Услуги */}
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <h4 className="text-base font-semibold text-midnight_text mb-4">
              Услуги
            </h4>
            <ul className="pl-5">
              {footerLinks.slice(0, 5).map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    href="#"
                    className="text-sm text-muted hover:text-primary relative before:content-[''] before:absolute before:w-2 before:h-2 before:border-t-2 before:border-r-2 before:top-1 before:-left-5 before:rotate-45 before:border-muted hover:before:border-primary"
                  >
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Навигация: Поддержка */}
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <h4 className="text-base font-semibold text-midnight_text mb-4">
              Поддержка
            </h4>
            <ul className="pl-5">
              {footerLinks.slice(5, 10).map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    href="#"
                    className="text-sm text-muted hover:text-primary relative before:content-[''] before:absolute before:w-2 before:h-2 before:border-t-2 before:border-r-2 before:top-1 before:-left-5 before:rotate-45 before:border-muted hover:before:border-primary"
                  >
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Низ футера */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 max-w-7xl flex flex-wrap justify-between items-center py-6 gap-4">
          <p className="text-sm text-midnight_text">
            © {new Date().getFullYear()} Adal Medicine. Все права защищены.
          </p>
          <div className="flex items-center gap-5">
            <Link href="#">
              <Facebook className="text-xl text-midnight_text hover:text-primary transition" />
            </Link>
            <Link href="#">
              <Instagram className="text-xl text-midnight_text hover:text-primary transition" />
            </Link>
            <Link href="#">
              <Linkedin className="text-xl text-midnight_text hover:text-primary transition" />
            </Link>
            <Link href="#">
              <Twitter className="text-xl text-midnight_text hover:text-primary transition" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
