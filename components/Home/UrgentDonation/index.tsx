"use client"

import DonationFormContext from "@/context/donationContext";
import { useContext } from "react";

const UrgentDonation = () => {
  const donationInfo = useContext(DonationFormContext);
  return (
    <section className="bg-[url('https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D')] bg-cover sm:py-52 lg:py-28 py-16 bg-no-repeat">
      <div className="container mx-auto max-w-4xl px-4">
        <div
          className="bg-white dark:bg-dark w-full px-10 py-14 rounded-lg text-center mx-auto shadow-lg"
          data-aos="fade-right"
        >
          <h3 className="sm:text-2xl text-lg font-bold mb-5 text-gray-900 dark:text-white">
            Срочная диагностика и лечение для пациента
          </h3>
          <p className="text-muted dark:text-white/60 sm:text-base text-sm mb-7">
            Один из наших пациентов в Турции срочно нуждается в полном обследовании и медицинской помощи. 
            Ваш вклад поможет обеспечить необходимую диагностику и лечение на высшем уровне.
          </p>
          <button
            onClick={() => donationInfo?.setIsDonationOpen(true)}
            className="bg-gradient-to-r from-teal-500 to-teal-400 px-7 border text-sm font-semibold text-white border-transparent py-4 rounded-sm hover:from-transparent hover:to-transparent hover:border-primary hover:text-primary"
          >
            Помочь с лечением
          </button>
        </div>
      </div>
    </section>
  );
};

export default UrgentDonation;
