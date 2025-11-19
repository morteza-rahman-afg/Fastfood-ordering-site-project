import { useQuery } from "@tanstack/react-query";
import { fetchProductCategory } from "../server/api";
import { NavLink, useParams } from "react-router-dom";
import CartProduct from "../Components/CartProduct";
import Spinner from "../ui/Spinner";
function Orders() {
  const { typeProduct } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["productFetchType", typeProduct],
    queryFn: () => fetchProductCategory(typeProduct),
  });

  return (
    <div className=" w-full">
      <div className="w-full h-40 flex items-center justify-center bg-bg1 child:font-DanaMedium child:text-sm sm:child:text-base md:child:text-xl child:text-white gap-x-3 md:gap-x-5">
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "border-b border-white" : ""}`
          }
          to={"/products/all"}
        >
          همه محصولات
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "border-b border-white" : ""}`
          }
          to={"/products/MainCourse"}
        >
          غذای اصلی
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "border-b border-white" : ""}`
          }
          to={"/products/Drink"}
        >
          نوشیدنی
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "border-b border-white" : ""}`
          }
          to={"/products/sauce"}
        >
          انواع سس
        </NavLink>
      </div>
      <div className=" w-[98%] md:w-[95%] lg:w-[90%] mx-auto flex items-center justify-center gap-x-5 gap-y-14 flex-wrap mt-8">
        {isLoading ? (
          <Spinner />
        ) : (
          data?.map((product) => (
            <div
              className=" w-[200px] sm:w-[230px] md:w-[260px] lg:w-[280px] shadow-Normul rounded-lg"
              key={product.id}
            >
              <CartProduct dataProduct={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Orders;
