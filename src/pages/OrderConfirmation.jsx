import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function OrderConfirmation() {
  const navigate = useNavigate();
  const { dataCart, dispatch } = useCart();
  const x = dataCart.reduce((acc, p) => acc + p.price, 0);

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-y-5">
      <h1 className=" font-DanaBold font-bold text-xl sm:text-2xl md:text-3xl text-bg1">
        خیلی ممنون از خرید شما!
      </h1>
      <p className=" font-DanaMedium text-sm sm:text-base md:text-xl">
        سفارش شما ثبت شد و در حال پردازش است.
      </p>
      <table className=" flex items-center flex-col px-2 md:px-0 w-full md:w-[700px]">
        <tbody className=" w-full child:w-full child:h-20 child:flex child:items-center child:justify-between child:border-b child:border-b-textColor/30">
          <tr className=" child:font-DanaBold md:child:text-base sm:child:text-sm child:text-xs">
            <td>مجموع</td>
            <td className=" text-bg1">
              <span>تومان</span> <span>{x}</span>
            </td>
          </tr>
        </tbody>
        {dataCart.map((product) => (
          <tbody className=" w-full child:w-full child:h-20 child:flex child:items-center child:justify-between child:border-b child:border-b-textColor/30">
            <tr className=" w-full sm:child:w-full child:font-DanaMedium child:text-xs md:child:text-base sm:child:text-sm">
              <td className=" flex items-center w-[50%]">
                <img
                  className="w-14 h-14 sm:w-16 sm:h-16 object-cover"
                  src={product.image}
                  alt={product.nameProduct}
                />
                <span>{product.nameProduct}</span>
              </td>
              <td className=" text-center w-[25%]">
                <span>تعداد</span> <span>{product.Quantity}</span>
              </td>
              <td className=" text-left w-[25%]">
                <span>تومان</span>
                <span>{product.price}</span>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <button
        onClick={() => {
          navigate("/");
          dispatch({ type: "DELETE_ALL_CART" });
        }}
        className="w-32 sm:w-40 md:w-44 h-9 sm:h-10 md:h-12 text-white border border-bg1 rounded-lg bg-bg1 font-DanaMedium text-center leading-[36px] sm:leading-[40px] md:leading-[48px] hover:bg-white hover:text-textColor transition-all duration-300"
      >
        صفحه اصلی
      </button>
    </div>
  );
}

export default OrderConfirmation;
