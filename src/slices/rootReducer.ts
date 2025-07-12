import {combineReducers} from "redux";
import {productsReducer} from "./productsSlice.ts";
import cartReducer from "./cartSlice.ts";


export const rootReducer = combineReducers({
        products: productsReducer,
        cart: cartReducer
    }
);

export type RootReducerState = ReturnType<typeof rootReducer>;