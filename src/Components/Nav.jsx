import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
// sm	40rem (640px)	@media (width >= 40rem) { ... }
// md	48rem (768px)	@media (width >= 48rem) { ... }
// lg	64rem (1024px)	@media (width >= 64rem) { ... }
// xl	80rem (1280px)	@media (width >= 80rem) { ... }
// 2xl	96rem (1536px)	@media (width >= 96rem) { ... }
function Nav() {
  return (
    <div className=" absolute -top-4 md:top-1 lg:top-2 md:rounded-xl shadow-Normul bg-white lg:bg-[rgba(244,247,252,0.2)] border border-[rgba(255,255,255,0.125)]  flex items-center justify-between w-full md:w-[95%] lg:w-[90%] h-20 px-5 mt-4 backdrop-blur-[10px] mx-auto">
      <div className=" flex items-center justify-center gap-x-2 sm:gap-x-5 md:gap-x-6 lg:gap-x-8 child:font-DanaMedium child:text-textColor lg:child:text-white child:text-xs md:child:text-base">
        <Link to={"cart"}>
          <HiShoppingCart className=" w-5 h-5 md:w-7 md:h-7" />
        </Link>
        <Link to={"products"}>محصولات</Link>
        <Link to={"/"}>صفحه اصلی</Link>
      </div>
      <div className=" flex items-center justify-center gap-x-1 md:gap-2">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-DanaBold text-textColor lg:text-white">
          فودچی
        </h1>
        <img
          className=" w-14 h-14 md:w-20 md:h-20 object-cover"
          src="/logo.png"
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Nav;
