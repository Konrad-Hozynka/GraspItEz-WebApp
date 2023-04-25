import Logo from "../assets/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

import { IdenticonImg } from "./avatar";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [showNav, setShowNav] = useState<boolean>(false);
  return (
    <header className="w-full h-14 shadow-md flex items-center justify-center">
      <nav className="w-full h-full flex justify-between items-center px-4">
        <CiMenuBurger
          className="text-xl cursor-pointer"
          onClick={() => {
            setShowNav(true);
          }}
        />
        <Link className="h-full" to="/">
          <img className="h-full" src={Logo} alt="Logo" />
        </Link>

        <IdenticonImg className="h-4/6" username="Here" />
      </nav>
      <div
        className={` ${
          showNav ? `left-0` : `-left-full`
        } transition-all duration-300 fixed top-0 w-4/5 lg:w-1/5 h-screen bg-blue-700 z-50 py-4 px-3`}
      >
        <AiOutlineClose
          className="text-white text-2xl cursor-pointer"
          onClick={() => {
            setShowNav(false);
          }}
        />
      </div>
    </header>
  );
}
