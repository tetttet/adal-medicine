import FAQ from "@/components/Faq";
import Newsletter from "@/components/newsletter";
import { faqItems } from "@/constant/Info";
import React from "react";

const page = () => {
  return (
    <div>
      <FAQ
        title="Часто задаваемые вопросы"
        description="Мы собрали ответы на самые популярные вопросы о медицинском туризме и услугах Adal Medicine."
        items={faqItems}
      />
      <Newsletter />
    </div>
  );
};

export default page;
