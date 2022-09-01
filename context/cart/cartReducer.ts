import { CartState } from "./";
import { ICartProduct } from "../../interfaces/cart";

type CartActionType =
  | {
      type: "[Cart] - LoadCart from cookies | storage";
      payload: ICartProduct[];
    }
  | { type: "[Cart] - Update cart"; payload: ICartProduct[] };

export const cartReducer = (state: CartState, action: CartActionType) => {
  switch (action.type) {
    case "[Cart] - LoadCart from cookies | storage":
      return { ...state };
    case "[Cart] - Update cart":
      return { ...state, cart: [...action.payload] };
    default:
      return state;
  }
};
