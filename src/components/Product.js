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
    <div className="card-hover group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-violet-500/50">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/5 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Product Image */}
      <div className="aspect-square w-full overflow-hidden bg-gray-900/30 p-6">
        <div className="h-full w-full flex items-center justify-center">
          <img 
            src={item.image} 
            alt={title}
            className="h-[80%] w-auto object-contain object-center group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="relative p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/50">
        <div className="min-h-[4rem]">
          <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-violet-300 transition-colors duration-300">{title}</h3>
          <p className="text-sm text-gray-400 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-xl font-bold text-violet-400 group-hover:text-violet-300">
            ${item.price.toFixed(2)}
          </p>

          <button
            onClick={cart.some((p) => p.id === item.id) ? removeFromCart : addToCart}
            className={`cart-btn relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
              cart.some((p) => p.id === item.id)
                ? 'bg-red-500/90 hover:bg-red-600 text-white shadow-lg shadow-red-500/20 hover:shadow-red-500/40'
                : 'bg-violet-500/90 hover:bg-violet-600 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40'
            }`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {cart.some((p) => p.id === item.id) ? (
                <>
                  <span>Remove</span>
                  <span className="text-lg">×</span>
                </>
              ) : (
                <>
                  <span>Add to Cart</span>
                  <span className="text-lg">+</span>
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
