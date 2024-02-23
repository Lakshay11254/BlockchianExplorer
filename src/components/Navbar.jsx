import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
// import Transactions from "./Transactions";
function Navbar() {
  return (
    <>
      <nav className="flex justify-between bg-purple-900 text-white py-3  shadow-2xl ">


        <div className="logo">
          <span className="font-semibold flex gap-2 items-center justify-between text-xl mx-8 cursor-pointer hover:font-bold transition-all ">
          <SiEthereum />Blocks
          </span>
        </div>
        <ul className="flex justify-between item-center gap-4 mx-9">
          <li className="mt-1">
            <FaUserAlt />
          </li>
          {/* <Transactions/> */}
          <li className="cursor-pointer hover:font-bold transition-all">
            Lakshay Malhotra
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
