import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayote from "./ui/AppLayote";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: 60 * 1000,
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
        path: "products",
        element: <Products />,
      },
    ],
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
