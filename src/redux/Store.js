import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";


const Store = configureStore({

    reducer: {
        cart: CartSlice.reducer
    }
})

export default Store