import { useContext, useEffect } from "react";
import { createContext, useReducer } from "react";

const CartContext = createContext();
const initialState = {
  dataCart: JSON.parse(localStorage.getItem("dataCart")) || [],
  orderData: JSON.parse(localStorage.getItem("orderData")) || [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const exists = state.dataCart.some(
        (item) => item.id == action.payload.idProduct
      );
      if (exists)
        return {
          ...state,
          dataCart: state.dataCart.map((item) =>
            item.id === action.payload.idProduct
              ? {
                  ...item,
                  Quantity: item.Quantity + action.payload.quantityProduct,
                }
              : item
          ),
        };
      return {
        ...state,
        dataCart: [
          ...state.dataCart,
          {
            ...action.payload.dataProduct,
            Quantity: action.payload.quantityProduct,
          },
        ],
      };
    }
    case "ADD_PRODUCT_QUANTITY":
      return {
        ...state,
        dataCart: state.dataCart.map((item) =>
          item.id === action.payload.idProduct
            ? {
                ...item,
                Quantity: item.Quantity + 1,
              }
            : item
        ),
      };
    case "DELETE_PRODUCT_QUANTITY":
      return {
        ...state,
        dataCart: state.dataCart
          .map((item) =>
            item.id === action.payload.idProduct
              ? {
                  ...item,
                  Quantity: item.Quantity - action.payload.quantityProduct,
                }
              : item
          )
          .filter((item) => item.Quantity > 0),
      };
    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [{ dataCart, orderData }, dispatch] = useReducer(
    cartReducer,
    initialState
  );
  useEffect(
    function () {
      localStorage.setItem("dataCart", JSON.stringify(dataCart));
    },
    [dataCart]
  );
  console.log(dataCart);
  return (
    <CartContext.Provider value={{ dataCart, orderData, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };
