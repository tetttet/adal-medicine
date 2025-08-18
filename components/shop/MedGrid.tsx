// components/MedGrid.tsx
import React from "react";
import MedCard from "./ui/MedCard";

const products = [
  {
    id: 1,
    name: "Парацетамол",
    price: "500 ₸",
    image: "/images/grid/paracetamol.jpeg",
    description:
      "Обезболивающее и жаропонижающее средство. Используется при простуде, гриппе и головной боли.",
  },
  {
    id: 2,
    name: "Ибупрофен",
    price: "700 ₸",
    image: "/images/grid/ibuprofen.jpeg",
    description:
      "Противовоспалительное средство. Эффективен при боли в суставах, мышцах и мигренях.",
  },
  {
    id: 3,
    name: "Аскорбиновая кислота (Витамин C)",
    price: "1 000 ₸",
    image: "/images/grid/vitamin-c.jpeg",
    description:
      "Укрепляет иммунитет, ускоряет восстановление после болезней, поддерживает здоровье кожи.",
  },
  {
    id: 4,
    name: "Амоксициллин",
    price: "1 500 ₸",
    image: "/images/grid/amoxicillin.jpeg",
    description:
      "Антибиотик широкого спектра действия. Применяется при инфекциях дыхательных путей и мочеполовой системы.",
  },
  {
    id: 5,
    name: "Цитрамон",
    price: "600 ₸",
    image: "/images/grid/citramon.jpeg",
    description:
      "Комбинированное средство от головной боли и жара. Содержит кофеин для усиления действия.",
  },
  {
    id: 6,
    name: "Но-шпа (Дротаверин)",
    price: "800 ₸",
    image: "/images/grid/noshpa.jpeg",
    description:
      "Спазмолитическое средство. Эффективно при болях в животе, коликах и спазмах.",
  },
  {
    id: 7,
    name: "Активированный уголь",
    price: "300 ₸",
    image: "/images/grid/charcoal.jpeg",
    description:
      "Энтеросорбент для очищения организма. Применяется при отравлениях и проблемах с пищеварением.",
  },
  {
    id: 8,
    name: "Мезим Форте",
    price: "1 200 ₸",
    image: "/images/grid/mezym.jpeg",
    description:
      "Ферментный препарат для улучшения пищеварения. Помогает при тяжести в желудке и переедании.",
  },
  {
    id: 9,
    name: "Супрастин",
    price: "1 100 ₸",
    image: "/images/grid/suprastin.jpeg",
    description:
      "Антигистаминное средство. Используется при аллергиях, зуде и кожных высыпаниях.",
  },
  {
    id: 10,
    name: "Анальгин",
    price: "400 ₸",
    image: "/images/grid/analgin.jpeg",
    description:
      "Обезболивающее и жаропонижающее средство. Подходит при зубной боли, мигренях и высокой температуре.",
  },
  {
    id: 11,
    name: "Омепразол",
    price: "1 400 ₸",
    image: "/images/grid/omeprazol.jpeg",
    description:
      "Снижает кислотность желудочного сока. Применяется при язве и гастрите.",
  },
  {
    id: 12,
    name: "Лоратадин",
    price: "900 ₸",
    image: "/images/grid/loratadin.jpeg",
    description:
      "Современный антигистамин. Устраняет симптомы аллергии без сонливости.",
  },
  {
    id: 13,
    name: "Фурацилин",
    price: "500 ₸",
    image: "/images/grid/furacilin.jpeg",
    description: "Антисептик для полоскания горла и обработки ран.",
  },
  {
    id: 14,
    name: "Йод",
    price: "200 ₸",
    image: "/images/grid/iodine.jpeg",
    description:
      "Антисептический раствор для обработки кожи при порезах и ссадинах.",
  },
  {
    id: 15,
    name: "Зеленка (Бриллиантовый зеленый)",
    price: "200 ₸",
    image: "/images/grid/zelenka.jpeg",
    description: "Классический антисептик для обработки ран и ссадин.",
  },
  {
    id: 16,
    name: "Валидол",
    price: "350 ₸",
    image: "/images/grid/validol.jpeg",
    description: "Средство для снятия стресса и легкого седативного действия.",
  },
  {
    id: 17,
    name: "Корвалол",
    price: "450 ₸",
    image: "/images/grid/corvalol.jpeg",
    description: "Седативное средство. Помогает при бессоннице и тревожности.",
  },
  {
    id: 18,
    name: "Эссенциале Форте",
    price: "3 500 ₸",
    image: "/images/grid/essentiale.jpeg",
    description:
      "Гепатопротектор для восстановления печени при гепатите и интоксикациях.",
  },
  {
    id: 19,
    name: "Рыбий жир",
    price: "2 000 ₸",
    image: "/images/grid/fishoil.jpeg",
    description:
      "Источник Омега-3 кислот. Поддерживает здоровье сердца, мозга и суставов.",
  },
];

const MedGrid = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <MedCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default MedGrid;
