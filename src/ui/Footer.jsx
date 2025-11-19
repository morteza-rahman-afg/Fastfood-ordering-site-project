import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div
      ref={ref}
      className={`${
        inView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
      } overflow-hidden relative  w-full h-[500px] mt-10 bg-bg1 flex items-center justify-between sm:flex-row flex-col transition-all duration-[1200ms]`}
    >
      <div className="h-full w-full flex items-center sm:items-start flex-col justify-center gap-y-2 md:gap-y-4 z-50 sm:mr-14 lg:mr-20">
        <h1 className=" font-DanaBold font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white">
          فود چی
        </h1>
        <p className=" font-DanaMedium text-sm sm:text-base md:text-xl text-white sm:text-right text-center">
          «با فودچی، هر وعده غذایی تبدیل به یک تجربه خوشمزه و لذت‌بخش می‌شود.
          سفارش دهید و لحظات خوشمزه‌تان را بسازید! 🍔✨»
        </p>
      </div>
      <div className="h-full w-full flex items-center flex-col justify-center gap-y-5 child:text-white  z-50">
        <h3 className=" font-DanaBold font-bold text-base sm:text-xl md:text-2xl">
          صفحات
        </h3>
        <Link
          className=" font-DanaMedium text-xs sm:text-sm md:text-base"
          to={"/"}
        >
          صفحه اصلی
        </Link>
        <Link
          className=" font-DanaMedium text-xs sm:text-sm md:text-base"
          to={"products/all"}
        >
          محصولات
        </Link>
        <Link
          className=" font-DanaMedium text-xs sm:text-sm md:text-base"
          to={"cart"}
        >
          سبد خرید
        </Link>
      </div>
      <div className="h-full w-full flex items-center flex-col justify-center gap-y-5 child:text-white  z-50">
        <h3 className=" font-DanaBold font-bold text-base sm:text-xl md:text-2xl">
          دسته بندی
        </h3>
        <Link
          className=" font-DanaMedium md:text-base sm:text-sm text-xs"
          to={`products/MainCourse`}
        >
          غذای اصلی
        </Link>
        <Link
          className=" font-DanaMedium md:text-base sm:text-sm text-xs"
          to={"products/Drink"}
        >
          نوشیدنی
        </Link>
        <Link
          className=" font-DanaMedium md:text-base sm:text-sm text-xs"
          to={`products/sauce`}
        >
          انواع سس
        </Link>
      </div>
      <img
        src="/bg-footer1.png"
        alt="bg footer"
        className=" absolute -left-[130px] bottom-[230px] sm:-left-[140px] sm:bottom-[200px] md:-left-[130px] md:bottom-[140px] lg:bottom-[80px] lg:-left-[150px] z-10 w-[350px] h-[350px] sm:w-[390px] sm:h-[390px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]"
      />
      <img
        src="/bg-footer2.png"
        alt="bg footer"
        className=" absolute z-10 -right-[105px] -bottom-[100px] w-[350px] h-[350px] sm:w-[390px] sm:h-[390px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]"
      />
      <span className="z-20 absolute bg-black/50 w-full h-full"></span>
    </div>
  );
}

export default Footer;
