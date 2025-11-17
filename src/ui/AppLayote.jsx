import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
function AppLayote() {
  return (
    <div className="">
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayote;
