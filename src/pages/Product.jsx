import { useQuery } from "@tanstack/react-query";
import { fetchProductOne } from "../server/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";

function Product() {
  const { idProduct } = useParams();
  const { data: newData, isLoading } = useQuery({
    queryKey: ["productOne"],
    queryFn: () => fetchProductOne(idProduct),
  });
  const [quantity, setQuantity] = useState(0);
  const { dispatch, dataCart } = useCart();

  const exists = dataCart.some((item) => item.id == idProduct);
  const { Quantity } = exists && dataCart.find((item) => item.id === idProduct);
  useEffect(
    function () {
      if (exists) setQuantity(Quantity);
    },
    [exists, setQuantity, Quantity]
  );

  if (isLoading) return <p>در حال پردازش....</p>;
  // //////////////////////////////////

  return (
    <div className=" w-full md:w-[700px] md:h-[400px] md:rounded-lg md:shadow-Normul mx-auto mt-0 sm:mt-8 md:mt-20 flex items-center justify-center sm:flex-row flex-col-reverse p-7 ">
      <div className=" w-[95%] sm:w-[50%] flex items-start flex-col gap-y-1 md:gap-y-2">
        <h3 className=" font-DanaBold text-base md:text-xl">
          <span className=" text-bg1">نام محصول:</span>{" "}
          <span>{newData.nameProduct}</span>
        </h3>
        <p className=" font-DanaMedium text-xs md:text-base sm:text-right text-center">
          <span className=" text-bg1">دسته بندی:</span>{" "}
          <span>
            {newData.Category === "Main course" && "غذای اصلی"}
            {newData.Category === "Drink" && "نوشیدنی"}
            {newData.Category === "sauce" && "انواع سس"}
          </span>
        </p>
        <p className=" font-DanaMedium text-xs md:text-base text-right">
          <span className=" text-bg1">توضیحات:</span>{" "}
          <span>{newData.description}</span>
        </p>
        <p className=" child:font-DanaMedium text-xs child:md:text-base">
          <span className=" text-bg1">قیمت:</span> <span>تومان</span>{" "}
          <span className=" text-bg1">{newData.price}</span>
        </p>
        <div className=" flex items-center gap-3 md:gap-5">
          <button
            className={`${
              quantity >= 1 && "cursor-not-allowed bg-bg1/50"
            } bg-bg1 w-20 h-7 md:w-32 md:h-11 rounded-lg leading-[28px] md:leading-[40px] text-center text-white font-DanaMedium md:text-sm text-xs`}
            disabled={quantity >= 1}
            onClick={() => {
              const newQuantity = quantity + 1;
              setQuantity(newQuantity);
              dispatch({
                type: "ADD_PRODUCT",
                payload: {
                  dataProduct: newData,
                  idProduct: newData.id,
                  quantityProduct: newQuantity,
                },
              });
            }}
          >
            افزودن به سبد خرید
          </button>
          <div
            className={`${
              quantity >= 1 ? "opacity-100" : "opacity-0"
            } flex items-center gap-x-1  child:font-DanaRegular child:text-base child:text-white child:rounded-xl child:leading-[28px] md:child:leading-[40px] child:bg-bg1 child:text-center`}
          >
            <button
              className=" h-8 w-7 md:h-11 md:w-9"
              onClick={() => {
                setQuantity((q) => q + 1);
                dispatch({
                  type: "ADD_PRODUCT_QUANTITY",
                  payload: { idProduct: newData.id, quantityProduct: 1 },
                });
              }}
            >
              +
            </button>
            <span className=" h-8 w-7 md:h-11 md:w-9">{quantity}</span>
            <button
              className=" h-8 w-7 md:h-11 md:w-9"
              onClick={() => {
                quantity >= 1 && setQuantity((q) => q - 1);
                dispatch({
                  type: "DELETE_PRODUCT_QUANTITY",
                  payload: { idProduct: newData.id, quantityProduct: 1 },
                });
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center sm:w-[50%]">
        <img
          className=" w-[200px] h-[200px] sm:w-[350px] sm:h-[200px] md:w-[450px] md:h-[300px] object-cover"
          src={newData.image}
          alt={newData.nameProduct}
        />
      </div>
    </div>
  );
}

export default Product;
