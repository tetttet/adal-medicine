import Link from "next/link";

const GetInTouch: React.FC = () => {
  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="relative rounded-t-2xl overflow-hidden">
          <video
            className="w-full h-[100vh] absolute top-0 left-0 object-cover -z-10" // Изменил height на 150vh (150% высоты экрана)
            autoPlay
            loop
            muted
            aria-label="Video background showing luxurious real estate"
          >
            <source src="/videos/1.mov" type="video/mp4" />
          </video>

          <div className="bg-black/30 lg:py-96 md:py-48 py-24">
            {" "}
            {/* Увеличил вертикальные отступы */}
            <div className="flex flex-col items-center gap-8">
              <h2 className="text-white lg:text-52 md:text-40 text-3xl max-w-3/4 text-center font-medium">
                Ваше здоровье — наша забота
              </h2>
              <Link
                href="#"
                className="bg-white py-4 px-8 rounded-full text-dark hover:bg-dark hover:text-white duration-300"
              >
                Консультация врача
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full py-5 bg-primary rounded-b-2xl overflow-hidden">
          <div className="flex items-center gap-40 animate-slide">
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              ЗАПИШИТЕСЬ НА БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ — ПОЗАБОТЬТЕСЬ О СВОЕМ
              ЗДОРОВЬЕ!
            </p>
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              СОВРЕМЕННАЯ ДИАГНОСТИКА И ЛЕЧЕНИЕ — ВАШЕ ЗДОРОВЬЕ В НАДЕЖНЫХ
              РУКАХ!
            </p>
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              ВРАЧ ОНЛАЙН 24/7 — ПОМОЩЬ В ЛЮБОЕ ВРЕМЯ!
            </p>
            <p className="text-white whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-3 after:-right-32">
              БЫСТРАЯ ЗАПИСЬ БЕЗ ОЧЕРЕДЕЙ — ПОЛУЧИТЕ ПОМОЩЬ УЖЕ СЕГОДНЯ!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
