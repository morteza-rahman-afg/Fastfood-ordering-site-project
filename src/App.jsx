import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayote from "./ui/AppLayote";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
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
        path: "order",
        element: <Orders />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
