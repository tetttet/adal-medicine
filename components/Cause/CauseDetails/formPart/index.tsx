"use client";
import Link from "next/link";
import { useState } from "react";
import { sendEmail } from "@/lib/resend";

const FormPart = () => {

  const [formData, setFormData] = useState({
    amount: "",
    contact: "whatsapp",
    firstName: "",
    lastName: "",
    emailOrWhatsapp: "",
    saveData: false,
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? target.checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(formData);
  };

  function send(data: typeof formData) {
    sendEmail({
      firstName: data.firstName,
      lastName: data.lastName,
      emailOrWhatsapp: data.emailOrWhatsapp,
      contact: data.contact,
      amount: data.amount,
      comment: data.comment,
    });
  }

  return (
    <>
      <div className="bg-grey dark:bg-darkmode py-5 px-8 rounded-sm border border-border dark:border-dark_border mb-8">
        <p className="mb-0 text-base text-muted dark:text-white/60">
          <span className="text-midnight_text dark:text-white">Внимание:</span>{" "}
          Это форма для предварительной заявки. Мы свяжемся с вами в ближайшее
          время, чтобы уточнить детали и предложить индивидуальное решение.
        </p>
      </div>

      <div className="bg-grey dark:bg-darkmode px-8 py-14 rounded-sm border border-border dark:border-dark_border mb-8">
        <div className="border border-border dark:border-dark_border py-5 px-10 rounded-md mb-11">
          <p className="text-sm text-muted dark:text-white/60">
            Пожалуйста, укажите ваши контактные данные и предполагаемый бюджет — это поможет нам подготовить наиболее подходящий план лечения.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-4">
            <label
              htmlFor="amount"
              className="rounded-s-lg bg-white border border-border dark:bg-darkmode dark:border-dark_border px-4 py-5 text-base"
            >
              $
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Пример: 3,000"
              value={formData.amount}
              onChange={handleChange}
              className="px-4 py-5 border rounded-e-lg dark:focus:border-primary focus:border-primary dark:bg-darkmode focus-visible:outline-hidden dark:border-dark_border text-base"
            />
          </div>
          <p className="text-base text-muted dark:text-white/60">
            Предполагаемый бюджет (необязательно)
          </p>

          <div className="mb-7">
            <h5 className="text-base font-medium mb-4 pb-3 border-b border-border dark:border-dark_border">
              Предпочтительный способ связи
            </h5>
            <div className="flex gap-4">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="contact"
                  id="whatsapp"
                  value="whatsapp"
                  checked={formData.contact === "whatsapp"}
                  onChange={handleChange}
                />
                <label htmlFor="whatsapp" className="text-muted dark:text-white/60">
                  WhatsApp
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="contact"
                  id="email"
                  value="email"
                  checked={formData.contact === "email"}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="text-muted dark:text-white/60">
                  Электронная почта
                </label>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-base font-medium mb-4 pb-3 border-b border-border dark:border-dark_border">
              Личная информация
            </h5>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-7 mb-7">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-base text-muted dark:text-white/60 mb-4">
                  Имя *
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Ваше имя"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="py-5 px-4 border rounded-md border-border dark:focus:border-primary dark:bg-darkmode focus:border-primary focus-visible:outline-hidden dark:border-dark_border text-base"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-base text-muted dark:text-white/60 mb-4">
                  Фамилия
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Ваша фамилия"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="py-5 px-4 border rounded-md border-border dark:focus:border-primary dark:bg-darkmode focus:border-primary focus-visible:outline-hidden dark:border-dark_border text-base"
                />
              </div>
            </div>

            <div className="flex flex-col mb-7">
              <label htmlFor="emailOrWhatsapp" className="text-base text-muted dark:text-white/60 mb-4">
                Email или номер WhatsApp *
              </label>
              <input
                type="text"
                name="emailOrWhatsapp"
                id="emailOrWhatsapp"
                placeholder="example@mail.com / +7 777 123 45 67"
                value={formData.emailOrWhatsapp}
                onChange={handleChange}
                className="py-5 px-4 border rounded-md border-border dark:focus:border-primary dark:bg-darkmode focus:border-primary focus-visible:outline-hidden dark:border-dark_border text-base"
                required
              />
            </div>

            <div className="flex justify-between items-center mb-7 lg:flex-nowrap flex-wrap">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="saveData"
                  name="saveData"
                  checked={formData.saveData}
                  onChange={handleChange}
                />
                <label htmlFor="saveData" className="text-muted dark:text-white/60 text-base">
                  Сохранить мои данные для повторного обращения
                </label>
              </div>
              <div>
                <p className="text-base text-muted dark:text-white/60">
                  Уже обращались?{" "}
                  <Link href="#" className="text-midnight_text dark:text-white hover:text-primary">
                    Войти
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex flex-col mb-7">
              <label htmlFor="comment" className="text-base text-muted dark:text-white/60 mb-4">
                Кратко опишите ваш случай (необязательно)
              </label>
              <textarea
                name="comment"
                id="comment"
                placeholder="Например: Нужно обследование ЖКТ, есть боли после еды"
                value={formData.comment}
                onChange={handleChange}
                className="py-5 px-4 border rounded-md border-border dark:focus:border-primary dark:bg-darkmode focus:border-primary focus-visible:outline-hidden dark:border-dark_border text-base"
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="text-white text-sm bg-linear-to-r from-primary to-secondary font-semibold border border-transparent py-4 px-7 rounded-md hover:text-primary hover:border-primary hover:from-transparent hover:to-transparent"
            >
              Отправить заявку
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormPart;
