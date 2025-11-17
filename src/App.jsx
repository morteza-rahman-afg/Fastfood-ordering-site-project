import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayote from "./ui/AppLayote";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
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
  return <RouterProvider router={router} />;
}

export default App;
