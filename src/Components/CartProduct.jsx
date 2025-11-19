import { Link } from "react-router-dom";

function CartProduct({ dataProduct }) {
  return (
    <div className=" h-[280px] sm:h-[300px] md:h-[350px] lg:h-96 w-full">
      <div className="w-full h-[65%] p-3 md:p-0">
        <img
          className=" w-full h-full object-cover"
          src={dataProduct.image}
          alt={dataProduct.nameProduct}
        />
      </div>
      <div className=" flex items-center justify-start flex-col md:gap-y-2 p-1 sm:p-2 md:p-3 lg:p-4 child:font-DanaMedium">
        <h4 className=" lg:text-xl md:text-base text-sm">
          {dataProduct.nameProduct}
        </h4>
        <p className=" child:md:text-base child:text-xs">
          <span>تومان</span> <span>{dataProduct.price}</span>
        </p>
        <Link
          to={`/product/${dataProduct.id}`}
          className=" text-center lg:leading-[40px] md:leading-[32px] leading-[28px] bg-bg1 w-20 h-7 md:w-24 md:h-8 lg:w-28 lg:h-10 text-white rounded-lg text-[8px] lg:text-xs"
        >
          جزئیات محصول
        </Link>
      </div>
    </div>
  );
}

export default CartProduct;
