// components/MedCard.tsx
import React from "react";
import Image from "next/image";

type MedCardProps = {
  name: string;
  price: string;
  image: string;
  description: string;
};

const MedCard: React.FC<MedCardProps> = ({
  name,
  price,
  image,
  description,
}) => {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-5 flex flex-col justify-between h-[420px] hover:shadow-2xl transition duration-300 ease-in-out border border-gray-100">
      {/* Image */}
      <div className="flex justify-center">
        <Image
          src={image}
          alt={name}
          width={180}
          height={180}
          className="rounded-xl object-contain"
        />
      </div>

      {/* Title + Description */}
      <div className="flex-1 mt-4">
        <h3 className="text-lg font-semibold text-gray-800 text-center">
          {name}
        </h3>
        <p className="text-gray-500 text-sm mt-2 leading-relaxed text-center line-clamp-3">
          {description}
        </p>
      </div>

      {/* Price + Button */}
      <div className="flex justify-between items-center mt-5">
        <span className="text-blue-700 font-bold text-lg">{price}</span>
        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-xl text-sm font-medium shadow hover:from-blue-600 hover:to-indigo-700 transition">
          Купить
        </button>
      </div>
    </div>
  );
};

export default MedCard;
