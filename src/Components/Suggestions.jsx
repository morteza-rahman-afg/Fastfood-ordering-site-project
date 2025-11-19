import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../server/api";
import { useCart } from "../contexts/CartContext";
import { useEffect, useState } from "react";
function Suggestions() {
  const { dispatch, dataCart } = useCart();
  const [suggestionItems, setSuggestionItems] = useState([]);
  const CATEGORIES_WE_WANT = ["Drink", "sauce"];
  function getRandomItems(arr, n) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }
  const { data, isLoading } = useQuery({
    queryKey: ["productList"],
    queryFn: fetchProduct,
  });
  useEffect(
    function () {
      if (!Array.isArray(data)) return;
      if (dataCart?.length > 0 && suggestionItems.length == 0) {
        const filtered = data.filter((p) =>
          CATEGORIES_WE_WANT.includes(p.Category)
        );
        setSuggestionItems(getRandomItems(filtered, 4));
      }
    },
    [data, CATEGORIES_WE_WANT, dataCart, suggestionItems]
  );

  console.log(suggestionItems);
  console.log(data);
  if (isLoading) return <p>در حال پردازش....</p>;

  return (
    <div className=" w-[98%] md:w-[90%] flex items-center justify-center flex-wrap gap-x-5 gap-y-4 md:gap-y-8 mb-10 ">
      {suggestionItems.map((product) => {
        const inCart = dataCart.some((item) => item.id == product.id);
        return (
          <div className=" flex items-center justify-between w-[400px] h-24 rounded-lg shadow-Normul px-1 sm:px-2  md:px-3">
            <div className=" flex items-center justify-center">
              <img
                className=" w-20 h-20 object-cover"
                src={product.image}
                alt={product.nameProduct}
              />
              <div>
                <h6 className=" font-DanaMedium text-xs sm:text-sm md:text-base">
                  {product.nameProduct}
                </h6>
                <p className=" child:font-DanaMedium text-[10px] md:child:text-xs">
                  <span>تومان</span> <span>{product.price}</span>
                </p>
              </div>
            </div>
            {inCart ? (
              <p className=" font-DanaMedium text-[10px] md:text-xs">
                این محصول در سبد خرید وجود دارد
              </p>
            ) : (
              <button
                className="bg-bg1 text-white font-DanaMedium w-12 md:w-14 h-8 md:h-9 rounded-lg text-center leading-[32px] md:leading-[36px] text-[10px] md:text-sm"
                onClick={() => {
                  dispatch({
                    type: "ADD_PRODUCT",
                    payload: {
                      dataProduct: product,
                      idProduct: product.id,
                      quantityProduct: 1,
                    },
                  });
                }}
              >
                افزودن
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Suggestions;
