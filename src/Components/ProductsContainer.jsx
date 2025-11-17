import { useQuery } from "@tanstack/react-query";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { fetchProduct } from "../server/api";

function ProductsContainer({ title }) {
  const { data, isLoading } = useQuery({
    queryKey: ["productList"],
    queryFn: fetchProduct,
  });
  console.log(data);
  if (isLoading) return <p>در حال پردازش....</p>;
  return (
    <div className=" w-[90%] mx-auto">
      <div className=" w-full flex justify-between items-center child:font-DanaMedium">
        <Link to={""} className=" flex items-center gap-x-1">
          <HiChevronDoubleLeft className=" w-5 h-5" />
          <span>نمایش همه</span>
        </Link>
        <h2 className=" font-bold font-DanaBold text-xl">
          {title === "Main course" && "غذای اصلی"}
          {title === "Drink" && "نوشیدنی"}
          {title === "sauce" && "انواع سس"}
        </h2>
      </div>
      {data.map(
        (product) =>
          title === product.Category && (
            <div>
              <h4>{product.nameProduct}</h4>
            </div>
          )
      )}
    </div>
  );
}

export default ProductsContainer;
