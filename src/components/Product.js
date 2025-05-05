import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ item }) => {
  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  function addToCart() {
    dispatch(add(item));
  }

  function removeFromCart() {
    dispatch(remove(item.id));
  }

  let title =
    item.title.length > 15 ? item.title.slice(0, 15) + " ..." : item.title;

  let description =
    item.description.length > 100
      ? item.description.slice(0, 100) + "..."
      : item.description;

  return (
    <div className="product flex flex-col items-center w-[200px] h-auto pb-[10px]  ml-2 mb-3 rounded-xl shadow-sm shadow-gray-400 hover:scale-110 transition ease-in duration-300">
      <p className="font-bold pt-6">{title}</p>

      <p className="text-xs pl-7 pr-3 pt-3 text-slate-400">{description}</p>

      <img src={item.image}  className="h-[9rem] pt-3 w-[7rem]" />

      <div className="price w-full flex mt-10 justify-between">
        <p>
          <span className="text-green-600 font-bold text-sm pl-3">
            ${item.price}
          </span>
        </p>

              <div className=" border border-black rounded-full w-[7rem] h-[2rem] mr-2
        text-center pt-1 text-sm hover:bg-black hover:text-white">
          {cart.some((p) => p.id === item.id) ? (
                      <button className="text-sm"
                          onClick={removeFromCart}>
              Remove Item
            </button>
          ) : (
                          <button className="text-sm"
                              onClick={addToCart}>Add To Cart</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
