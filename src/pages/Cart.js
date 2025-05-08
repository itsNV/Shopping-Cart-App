import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((State) => State);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
        
  return (
    <div className="cart w-full lg:h-screen mt-[4rem] lg:flex justify-center"> 
      <div className="">
        {cart.length > 0 ? ( 

          <div className="cartProduct flex  h-auto w-[70%] lg:gap-[2rem]">

            <div className="item">
              {cart.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
            </div>

            <div className="summary lg:fixed lg:right-[10rem]">

            <div className="summary_text">
              <p className="text-lg mt-[4rem] text-green-700 font-semibold">YOUR CART</p>
              <p className="text-3xl text-green-700 font-bold">SUMMARY</p>

              <p className="font-semibold mt-2">
                <span >Total items : {cart.length}</span>
              </p>
            </div>

            <div className=" mt-[20rem]">
              <p className="summary_price">Total Amount : <span className="font-semibold">${totalAmount}</span> </p>

                <div className="border h-8 lg:w-[20rem] text-center mt-3 bg-green-700 text-white rounded-md">
                <button>Checkout Now</button>
                </div>
              
            </div>

            </div>

            
          </div>
        ) : (
          <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center">
            <p className="text-2xl">Cart is Empty</p>

            <Link to="/">
              <button className="border border-black p-1 pl-[3rem] pr-[3rem] mt-4 bg-blue-600 hover:bg-blue-900 hover:text-white hover:scale-110 transiton duration-300 ease-in rounded-lg">
                Shop Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
