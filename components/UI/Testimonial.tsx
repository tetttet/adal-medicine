import Image from "next/image";
import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Марина Петрова",
      title: "Основатель клиники Медисфера",
      quote:
        "Современные медицинские технологии действительно помогают нам улучшать качество жизни пациентов и обеспечивать точные диагнозы.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Екатерина Смирнова",
      title: "Ведущий дизайнер медицинских интерфейсов",
      quote:
        "Важно создавать удобные и понятные интерфейсы, чтобы медицинский персонал мог быстро и эффективно использовать технологии.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Игорь Кузнецов",
      title: "Инженер по DevOps в здравоохранении",
      quote:
        "Надёжность и безопасность медицинских данных — наша главная задача, требующая постоянного внимания и инноваций.",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Что говорят наши клиенты и партнеры
          </h3>
          <p className="mt-3 text-gray-600">
            Мы гордимся доверием медицинских учреждений и специалистов, которые используют наши решения для улучшения здоровья людей.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                <figure>
                  <div className="flex items-center gap-x-4">
                    <Image
                      alt={item.name}
                      width={500}
                      height={500}
                      src={item.avatar}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <span className="block text-gray-800 font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-gray-600 text-sm mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 text-gray-700">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
