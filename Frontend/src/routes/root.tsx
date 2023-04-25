import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";

export default function Root() {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
