import { HiOutlineX } from "react-icons/hi";
import { useCart } from "../../contexts/CartContext";

function CartMobile() {
  const { dataCart, dispatch } = useCart();

  return (
    <table className="w-full lg:hidden flex items-center flex-col gap-y-8">
      {dataCart.map((product) => (
        <div className="w-full flex flex-col border-b border-b-textColor/40 ">
          <button
            onClick={() => {
              dispatch({ type: "DELETE_PRODUCT", payload: product.id });
            }}
            className=" w-20 h-8 bg-bg1 rounded-lg flex items-center justify-center gap-x-2 child:text-white child:font-DanaMedium my-3"
          >
            <HiOutlineX className="w-6 h-6" />
            <span>حذف</span>
          </button>
          <tbody className="w-full child:flex checked:items-center child:w-full child:justify-between child:h-[70px] md:child:h-20 child:border-t child:border-t-textColor/40  child:leading-[80px]">
            <tr>
              <td>
                <h4 className=" font-DanaBold">نام</h4>
              </td>
              <td className=" flex items-center gap-x-2">
                <span className=" font-DanaMedium">{product.nameProduct}</span>
                <img
                  className=" w-16 h-16 md:w-[75px] md:h-[75px] object-cover"
                  src={product.image}
                  alt={product.nameProduct}
                />
              </td>
            </tr>
          </tbody>
          <tbody className="w-full child:flex checked:items-center child:w-full child:justify-between child:h-[70px] md:child:h-20 child:border-t child:border-t-textColor/40 child:leading-[80px]">
            <tr>
              <td>
                <h4 className=" font-DanaBold">قیمت</h4>
              </td>
              <td className=" child:font-DanaMedium">
                <span>تومان</span>
                <span>{product.price}</span>
              </td>
            </tr>
          </tbody>
          <tbody className="w-full child:flex checked:items-center child:w-full child:justify-between child:h-[70px] md:child:h-20 child:border-t child:border-t-textColor/40 child:leading-[80px]">
            <tr>
              <td>
                <h4 className=" font-DanaBold">دسته بندی</h4>
              </td>
              <td className="font-DanaMedium">
                {product.Category === "MainCourse" && "غذای اصلی"}
                {product.Category === "Drink" && "نوشیدنی"}
                {product.Category === "sauce" && "انواع سس"}
              </td>
            </tr>
          </tbody>
          <tbody className="w-full child:flex checked:items-center child:w-full child:justify-between child:h-[70px] md:child:h-20 child:border-t child:border-t-textColor/40 child:leading-[80px]">
            <tr>
              <td>
                <h4 className=" font-DanaBold">تعداد</h4>
              </td>
              <td className=" flex items-center gap-x-2 child:text-white child:font-DanaMedium">
                <button
                  onClick={() => {
                    dispatch({
                      type: "ADD_PRODUCT_QUANTITY",
                      payload: { idProduct: product.id },
                    });
                  }}
                  className="w-9 h-10 bg-bg1 rounded-lg leading-[40px] text-center"
                >
                  +
                </button>
                <span className=" w-7 h-10 bg-bg1 rounded-lg leading-[40px] text-center">
                  {product.Quantity}
                </span>
                <button
                  onClick={() => {
                    dispatch({
                      type: "DELETE_PRODUCT_QUANTITY",
                      payload: { idProduct: product.id, quantityProduct: 1 },
                    });
                  }}
                  className="w-9 h-10 bg-bg1 rounded-lg leading-[40px] text-center"
                >
                  -
                </button>
              </td>
            </tr>
          </tbody>
        </div>
      ))}
    </table>
  );
}

export default CartMobile;
