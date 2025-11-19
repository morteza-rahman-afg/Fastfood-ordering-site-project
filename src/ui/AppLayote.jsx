import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "./Footer";
function AppLayote() {
  return (
    <div className="w-full flex flex-col items-center">
      <Nav />
      <main className=" w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayote;
