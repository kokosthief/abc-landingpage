import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import "../index.css";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-2 justify-between items-center navbar">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://t.me/AlphaBotCalls"
        className=""
      >
        <img src={logo} alt="AlphaBotCalls" className="w-[100px] h-[100px]" />
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1"></ul>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://app.uniswap.org/#/swap?outputCurrency=0xd4d4b7b55b30fb096c30ad202e746d010b47dc30&chain=ethereum"
        className="navbrutalbutton"
      >
        BUY $ABC
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://t.me/AlphaBotCalls"
        className="navaltbrutalbutton"
      >
        JOIN
      </a>

      {/* <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col"></ul>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
