"use client";
import React, { useState } from "react";
import Image from "next/image";
import { sendContactEmail } from "@/lib/resend";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    specialist: "",
    date: "",
    time: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendContactEmail({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        Specialist: formData.specialist,
        DateTime: `${formData.date}T${formData.time}:00Z`,
        Time: formData.time,
      });
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        specialist: "",
        date: "",
        time: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="dark:bg-dark pb-24">
      <div className="container mx-auto lg:max-w-7xl px-4">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
          <div className="lg:col-span-6 lg:order-1 order-2">
            <h2 className="max-w-72 text-[40px] leading-tight font-bold mb-9 text-midnight_text dark:text-white">
              Get online consultation
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-wrap w-full m-auto justify-between">
              {/* First & Last Name */}
              <div className="sm:flex gap-3 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="firstName" className="pb-3 inline-block text-base">First Name*</label>
                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full text-base px-4 rounded-lg py-2.5 border-border dark:border-dark_border border-solid dark:text-white dark:bg-dark border transition-all duration-500 focus:border-primary focus:outline-0"
                    required
                  />
                </div>
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="lastName" className="pb-3 inline-block text-base">Last Name*</label>
                  <input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-dark border transition-all duration-500 focus:border-primary focus:outline-0"
                    required
                  />
                </div>
              </div>

              {/* Email & Specialist */}
              <div className="sm:flex gap-3 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="email" className="pb-3 inline-block text-base">Email address*</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-dark border transition-all duration-500 focus:border-primary focus:outline-0"
                    required
                  />
                </div>
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="specialist" className="pb-3 inline-block text-base">Specialist*</label>
                  <select
                    id="specialist"
                    value={formData.specialist}
                    onChange={handleChange}
                    className="w-full text-base px-4 py-2.5 rounded-lg border-border dark:text-white border-solid dark:bg-dark border transition-all duration-500 focus:border-primary focus:outline-0"
                    required
                  >
                    <option value="">Choose a specialist</option>
                    <option value="Cardiologist">Cardiologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Neurologist">Neurologist</option>
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="sm:flex gap-3 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="date" className="pb-3 inline-block text-base">Date*</label>
                  <input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full text-base px-4 rounded-lg py-2.5 border-border dark:text-white dark:bg-dark border-solid border transition-all duration-500 focus:border-primary focus:outline-0"
                    required
                  />
                </div>
                <div className="mx-0 my-2.5 flex-1">
                  <label htmlFor="time" className="pb-3 inline-block text-base">Time*</label>
                  <input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full text-base px-4 rounded-lg py-2.5 border-border dark:text-white dark:bg-dark border-solid border transition-all duration-500 focus:border-primary focus:outline-0"
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mx-0 my-2.5 w-full">
                <button
                  type="submit"
                  className="bg-linear-to-r from-primary to-secondary rounded-lg text-white py-4 px-8 mt-4 inline-block hover:from-transparent hover:to-transparent hover:text-primary border hover:border-primary"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Make an appointment"}
                </button>
                {status === "success" && <p className="text-green-500 mt-2">Appointment successfully sent!</p>}
                {status === "error" && <p className="text-red-500 mt-2">Failed to send. Try again.</p>}
              </div>
            </form>
          </div>

          {/* Image */}
          <div className="lg:col-span-6 lg:order-2 order-1">
            <Image
              src="/images/contact-page/contact.jpg"
              alt="Contact"
              width={1300}
              height={0}
              quality={100}
              style={{ width: "100%", height: "auto" }}
              className="bg-no-repeat bg-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
