import { Link } from "react-router-dom";
import CartDesktop from "../Features/cart/CartDesktop";
import CartMobile from "../Features/cart/CartMobile";
import Title from "../ui/Title";
import { useCart } from "../contexts/CartContext";
import EmptyCart from "../Components/EmptyCart";

function Cart() {
  const { dataCart } = useCart();
  const x = dataCart.reduce((acc, p) => acc + p.price, 0);

  return (
    <div className=" flex flex-col items-center justify-center w-full">
      <Title>سبد خرید</Title>
      {dataCart.length <= 0 ? (
        <EmptyCart />
      ) : (
        <div className="w-[98%] md:w-[95%] flex items-start justify-between md:flex-row flex-col md:gap-x-6 gap-y-8 mt-10">
          <CartDesktop />
          <CartMobile />
          <div className=" w-full md:w-[35%] lg:w-[20%] h-32 rounded-lg shadow-Normul flex items-center flex-col justify-between p-4 mb-8">
            <div className="  w-full flex items-center justify-between child:font-DanaBold ">
              <h4>مجموع کل:</h4>
              <p className=" child:text-bg1">
                <span>تومان</span> <span>{x}</span>
              </p>
            </div>
            <Link
              to={"/OrderConfirmation"}
              className=" w-full h-11 font-DanaMedium text-center leading-[44px] rounded-lg text-white bg-bg1 border border-bg1 hover:bg-white hover:text-textColor transition-all duration-300"
            >
              نهایی کردن سفارش
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
