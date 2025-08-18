import React from "react";
import CardWithForm from "./CardWithForm";
export default function CardsSection() {
  return (
    <div className="container mx-auto px-12 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-12">
      <CardWithForm
        title="SPECIAL OFFERS ON"
        description="Cough Syrup"
        image="/images/shop/1.jpg"
        button="SHOP NOW"
      />
      <CardWithForm
        title="MULTI VITAMIN TABLETS"
        description="Get 20% Offer"
        image="/images/shop/2.webp"
        button="SHOP NOW"
      />
      <CardWithForm
        title="30% DISCOUNT ON"
        description="Fish Oil Tablets"
        image="/images/shop/4.jpg"
        button="SHOP NOW"
      />
      <CardWithForm
        title="SAVE UPTO 20% ON"
        description="Cardio Productive Medicines"
        image="/images/shop/5.jpeg"
        button="SHOP NOW"
      />
      {/* <CardWithForm title="Upto 10% OFF" description="Health Products" image="/GroupOne.jpg" button="SHOP NOW"/> */}
    </div>
  );
}
