"use client";

import { WHATSAPP_NUMBER } from "@/constant/links";

const Volunteer = () => {
  return (
    <section className="lg:py-28 py-16 bg-[url('/images/hero/hero-4.png')] bg-no-repeat bg-cover overflow-hidden relative">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="relative z-10">
          <div className="bg-black/50 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-semibold text-white mb-6">
              Получите бесплатную консультацию
            </h2>
            <p className="text-base text-white max-w-3xl mx-auto mb-6">
              Мы поможем вам подобрать клинику и врача, объясним все этапы
              лечения и организуем вашу поездку в Турцию. Без лишних затрат, без
              стресса — с заботой о вас.
            </p>
            <div className="flex justify-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white rounded-md bg-gradient-to-r from-primary to-secondary text-sm font-semibold px-7 py-4 hover:from-transparent hover:to-transparent border border-transparent hover:border-primary hover:text-primary"
              >
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
