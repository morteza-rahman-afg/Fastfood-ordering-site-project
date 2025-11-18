import { useQuery } from "@tanstack/react-query";
import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
  HiChevronDoubleLeft,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import { fetchProduct } from "../server/api";
import CartProduct from "./CartProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "../index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

function ProductsContainer({ title }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { data, isLoading } = useQuery({
    queryKey: ["productList"],
    queryFn: fetchProduct,
  });
  if (isLoading) return <p>در حال پردازش....</p>;

  return (
    <div className=" w-[98%] lg:w-[90%] mx-auto my-4 sm:my-6 md:my-8 lg:my-12">
      <div className=" w-full flex justify-between items-center child:font-DanaMedium">
        <div className=" flex items-center gap-x-2">
          <button
            className=" bg-bg1 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14  lg:h-14 rounded-full flex justify-center items-center"
            ref={prevRef}
          >
            <HiArrowNarrowLeft className=" w-5 h-5 md:w-9 md:h-9 text-white" />
          </button>
          <button
            className=" bg-bg1 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14  lg:h-14 rounded-full flex justify-center items-center"
            ref={nextRef}
          >
            <HiArrowNarrowRight className=" w-5 h-5 md:w-9 md:h-9 text-white" />
          </button>
        </div>
        <h2 className=" font-bold font-DanaBold text-base md:text-xl lg:text-2xl">
          {title === "Main course" && "غذای اصلی"}
          {title === "Drink" && "نوشیدنی"}
          {title === "sauce" && "انواع سس"}
        </h2>
        <Link to={""} className=" flex items-center gap-x-1">
          <span className=" text-xs md:text-sm lg:text-base">نمایش همه</span>
          <HiChevronDoubleLeft className=" w-4 h-4 md:w-5 md:h-5" />
        </Link>
      </div>
      <div className="w-full mt-5">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView="auto"
          centeredSlides={false}
          spaceBetween={30}
          loop={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          onInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              // @ts-expect-error because Swiper expects HTMLButtonElement refs
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error because Swiper expects HTMLButtonElement refs
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          className="w-full"
        >
          <div className=" flex items-center">
            {data.map(
              (product) =>
                title === product.Category && (
                  <SwiperSlide className=" !w-[200px] sm:!w-[230px] md:!w-[260px] lg:!w-[280px] rounded-lg  shadow-Normul my-3">
                    <CartProduct dataProduct={product} key={product.id} />
                  </SwiperSlide>
                )
            )}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default ProductsContainer;
