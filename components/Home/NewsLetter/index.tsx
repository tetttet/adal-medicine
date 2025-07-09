import Link from "next/link";
import { getAllPosts } from "@/utils/markdown";
import BlogCard from "./blogCard";

const Newsletter = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  return (
    <section className="lg:py-28 py-16 dark:bg-dark">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-44">
          {/* Левая часть — форма подписки */}
          <div data-aos="fade-left">
            <div className="mb-8">
              <p className="text-base text-primary mb-3">
                Подписка на обновления
              </p>
              <h2 className="text-3xl font-semibold mb-6">
                Получайте полезную медицинскую информацию
              </h2>
              <p className="text-base text-muted dark:text-white/60">
                Подпишитесь на рассылку Adal Medicine и первыми узнавайте о
                новых медицинских программах, инновационных методах лечения и
                проверенных клиниках. Только актуальные и полезные материалы —
                ничего лишнего.
              </p>
            </div>
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full p-4 border border-border dark:border-dark_border focus:border-primary dark:focus:border-primary dark:bg-dark rounded-sm focus-visible:outline-hidden"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="w-full p-4 border border-border dark:border-dark_border focus:border-primary dark:focus:border-primary dark:bg-dark rounded-sm focus-visible:outline-hidden"
                />
              </div>
              <div className="flex justify-center mb-6">
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-teal-500 to-teal-400 px-7 py-4 rounded-sm w-full transition-all duration-300 hover:from-teal-600 hover:to-teal-500"
                >
                  Подписаться
                </button>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <input type="checkbox" name="condition" id="condition" />
                <label
                  htmlFor="condition"
                  className="text-base text-muted dark:text-white/60"
                >
                  Я согласен с условиями обработки персональных данных
                </label>
              </div>
            </form>
          </div>

          {/* Правая часть — блог */}
          <div className="lg:mt-0 mt-8">
            <div className="flex justify-between items-center border-b border-border dark:border-dark_border pb-6 mb-8">
              <h4 className="text-base mb-0 font-semibold">
                Последние статьи и новости
              </h4>
              <Link
                href="/blog"
                className="text-teal-500 hover:text-teal-400 text-base transition"
              >
                Смотреть все
              </Link>
            </div>
            {posts.slice(0, 3).map((blog, i) => (
              <div
                key={i}
                className="lg:mb-10 mb-6"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
