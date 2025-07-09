const Hero = () => {
  return (
    <>
      <section className="relative bg-cover mt-1 text-white md:pt-40 md:pb-28 bg-no-repeat bg-[url('/images/hero/hero-4.avif')] ">
        <div className="container mx-auto px-4 grid grid-cols-12">
          <div
            className="bg-white rounded-md p-10 lg:col-span-5 md:col-span-7 sm:col-span-10 col-span-12 shadow-lg"
            data-aos="fade-right"
          >
            <div className="flex justify-between mb-6">
              <div className="px-4 py-2 bg-primary rounded-sm">
                <p className=" text-white text-sm font-semibold">
                  Adal Medicine
                </p>
              </div>
              <p className="text-muted text-xs font-medium">
                Ваш путь к здоровью
              </p>
            </div>
            <h3 className="text-midnight_text text-lg font-bold mb-6">
              Индивидуальный подход к лечению в Турции
            </h3>
            <p className="text-muted text-base mb-5">
              Мы сопровождаем вас на каждом этапе — от онлайн-консультации до
              возвращения домой. Надёжная медицина, проверенные врачи и забота
              24/7.
            </p>
            <div className="grid grid-cols-2 border-t border-border mb-5">
              <div className="col-span-1 border-r border-border px-5 py-4">
                <p className="text-xs text-muted mb-1">Опыт</p>
                <h4 className="text-2xl text-secondary">6+ лет</h4>
              </div>
              <div className="col-span-1 px-5 py-4">
                <p className="text-xs text-muted mb-1">Пациенты</p>
                <h4 className="text-2xl text-midnight_text">1000+</h4>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="text-white bg-gradient-to-r from-[#1a9c91] to-[#1ebba6] text-sm px-7 py-4 hover:from-white hover:to-white border font-semibold border-transparent hover:border-[#1ebba6] hover:text-[#1ebba6] rounded-md transition">
                Получить консультацию
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
