import { HiOutlineX } from "react-icons/hi";
import { useCart } from "../../contexts/CartContext";

function CartDesktop() {
  const { dataCart, dispatch } = useCart();
  return (
    <table className=" w-[75%] lg:flex flex-col hidden">
      <thead className=" w-full">
        <tr className=" w-full h-20 flex items-center justify-between child:font-DanaMedium child:text-[18px] ">
          <th className="w-[40%] text-start pr-6">نام</th>
          <th className="w-[20%] text-center">قیمت</th>
          <th className="w-[20%] text-center">دسته بندی</th>
          <th className="w-[20%] text-center">تعداد</th>
        </tr>
      </thead>
      {dataCart.map((product) => (
        <tbody className=" w-full">
          <tr className=" w-full h-24 flex items-center justify-between child:font-DanaRegular text-center border-t border-textColor child:text-sm">
            <td className="w-[40%] flex items-center gap-x-2 font-DanaMedium">
              <span>
                <HiOutlineX
                  onClick={() => {
                    dispatch({ type: "DELETE_PRODUCT", payload: product.id });
                  }}
                  className="w-6 h-6 text-bg1"
                />
              </span>
              <img
                className="w-20 h-20 object-cover"
                src={product.image}
                alt={product.nameProduct}
              />
              <h4>{product.nameProduct}</h4>
            </td>
            <td className="w-[20%]">{product.price}</td>
            <td className="w-[20%]">
              {product.Category === "MainCourse" && "غذای اصلی"}
              {product.Category === "Drink" && "نوشیدنی"}
              {product.Category === "sauce" && "انواع سس"}
            </td>
            <td className=" w-[20%] flex items-center justify-center gap-x-2 child:text-white">
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
      ))}
    </table>
  );
}

export default CartDesktop;
