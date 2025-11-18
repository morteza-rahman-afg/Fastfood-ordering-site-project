import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="shadow-lg bg-white flex items-center justify-between w-full h-24 px-2 lg:px-20 mx-auto">
      <div className=" flex items-center justify-center gap-x-1 md:gap-2">
        <img
          className=" w-14 h-14 md:w-20 md:h-20 object-cover"
          src="/logo.png"
          alt="logo"
        />
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-DanaBold text-textColor">
          فودچی
        </h1>
      </div>
      <div className=" flex items-center justify-center gap-x-2 sm:gap-x-5 md:gap-x-6 lg:gap-x-8 child:font-DanaMedium child:text-textColor child:text-xs md:child:text-base">
        <Link to={"/"}>صفحه اصلی</Link>
        <Link to={"products"}>محصولات</Link>
        <Link to={"cart"}>
          <HiShoppingCart className=" w-5 h-5 md:w-7 md:h-7" />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
