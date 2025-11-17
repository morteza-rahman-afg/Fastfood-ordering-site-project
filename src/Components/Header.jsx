import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="w-full h-screen lg:bg-[url('h-2.png')] bg-cover flex lg:flex-col items-center lg:items-end  justify-between lg:justify-center px-5 lg:px-0">
      <div className=" flex lg:hidden">
        <img
          src="/bg-mobile.png"
          alt="bg mobile"
          className=" w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] object-cover"
        />
      </div>
      <div className=" flex flex-col items-end lg:mr-16 gap-3 sm:gap-4 md:gap-y-5 lg:gap-y-6">
        <h1 className=" font-DanaBold text-base sm:text-xl md:text-3xl lg:text-5xl text-textColor lg:text-white text-right">
          به فودچی خوش امدید
        </h1>
        <p className=" text-right text-xs sm:text-sm md:text-base lg:text-xl  text-textColor lg:text-white font-DanaMedium">
          طعم‌های تازه و داغ، فقط چند کلیک فاصله دارن
        </p>
        <Link
          className=" bg-bg1 text-white lg:text-textColor lg:bg-white rounded-md text-sm md:text-base w-24 h-9 sm:w-28 sm:h-10 md:w-40 md:h-11 text-center leading-[36px] sm:leading-[40px] md:leading-[44px] font-DanaMedium hover:border-textColor hover:text-textColor hover:bg-inherit  lg:hover:text-white border lg:hover:border-white   transition-all duration-300"
          to={"products"}
        >
          محصولات
        </Link>
      </div>
    </div>
  );
}

export default Header;
