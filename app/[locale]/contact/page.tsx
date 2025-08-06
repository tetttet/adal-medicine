import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/Form";
import HeroSub from "@/components/SharedComponent/HeroSub";
import Volunteer from "@/components/SharedComponent/Volunteer";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSub title="Contact Us" />
      <ContactInfo />
      <ContactForm />

      <Volunteer />
    </>
  );
};

export default page;
