import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
function AppLayote() {
  return (
    <div className="w-full flex flex-col items-center">
      <Nav />
      <main className=" w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayote;
