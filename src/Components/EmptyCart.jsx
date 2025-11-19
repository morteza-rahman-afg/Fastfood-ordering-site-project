import { HiOutlineShoppingCart, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className=" flex items-center justify-center flex-col  gap-y-5 my-10 md:my-20">
      <div className=" relative flex items-center justify-center">
        <HiOutlineShoppingCart className=" w-28 h-28" />
        <HiX className=" absolute w-16 h-16 -top-2" />
      </div>
      <h2 className="font-DanaBold text-2xl">سبد خرید شما خالی است</h2>
      <p className="font-DanaMedium text-center">
        سبد خرید شما خالی است! از قسمت محصولات، اقلام مورد نظر خود را انتخاب
        کنید و به سبد خرید خود اضافه کنید.
      </p>
      <Link className="w-32 sm:w-40 md:w-44 h-9 sm:h-10 md:h-12 text-white border border-bg1 rounded-lg bg-bg1 font-DanaMedium text-center leading-[36px] sm:leading-[40px] md:leading-[48px] hover:bg-white hover:text-textColor transition-all duration-300">
        محصولات
      </Link>
    </div>
  );
}

export default EmptyCart;
