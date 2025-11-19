import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayote from "./ui/AppLayote";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import { CartProvider } from "./contexts/CartContext";
import Product from "./pages/Product";
import OrderConfirmation from "./pages/OrderConfirmation";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayote />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products/:typeProduct",
        element: <Products />,
      },
      {
        path: "product/:idProduct",
        element: <Product />,
      },
    ],
  },
  {
    path: "OrderConfirmation",
    element: <OrderConfirmation />,
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
