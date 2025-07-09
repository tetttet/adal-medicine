import React from "react";

const TopBar = () => {
  return (
    <section className="bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="w-full md:w-auto">
          <h2 className="text-gray-900 text-base sm:text-lg md:text-xl font-semibold text-center md:text-left">
            Запишитесь на{" "}
            <span className="font-bold text-[#007AFF]">
              первичную консультацию
            </span>{" "}
            — получите{" "}
            <span className="underline decoration-[#007AFF] underline-offset-2">
              бесплатную диагностику
            </span>
            !
          </h2>
        </div>

        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <button className="bg-primary text-white px-5 py-2 rounded-[4px] text-sm font-medium shadow-sm hover:shadow-lg hover:bg-[#005FCC] transition w-full sm:w-auto">
            Подробнее
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
