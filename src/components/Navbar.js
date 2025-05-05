import React from "react";
import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="h-[4rem] w-full flex justify-around bg-blue-900 items-center fixed z-40">
      <div className="h-[120px] w-[130px] flex items-center">
        <Link to="/">
          <img src="./logo.png" />
        </Link>
      </div>

      <div className="flex justify-around gap-5 items-center text-white">
        <Link to="/">
          <p>Home</p>
        </Link>

        <Link to="/cart">
        <div className="text-2xl flex flex-col justify-center relative">
          {cart.length > 0 && (
            <p className="absolute text-xs font-bold pl-3 pb-3 animate-bounce text-green-500 rounded-full ">
              {cart.length}
            </p>
          )}

          
            <IoCart />
          
              </div>
              </Link>

      </div>
    </div>
  );
};

export default Navbar;
