import { CartState,ShippingAddress  } from "./";
import { ICartProduct } from "../../interfaces/cart";

type CartActionType =
  | {
      type: "[Cart] - LoadCart from cookies | storage";
      payload: ICartProduct[];
    }
  | { type: "[Cart] - Update cart"; payload: ICartProduct[] }
  | { type: "[Cart] - Change product quantity"; payload: ICartProduct }
  | { type: '[Cart] - Update Address', payload: ShippingAddress }
  | { type: "[Cart] - Remove product"; payload: ICartProduct }
  | { type: '[Cart] - LoadAddress from Cookies', payload: ShippingAddress }
  | {
      type: "[Cart] - Update order summary";
      payload: {
        numberOfItems: number;
        subTotal: number;
        tax: number;
        total: number;
      };
    };

export const cartReducer = (state: CartState, action: CartActionType) => {
  switch (action.type) {
    case "[Cart] - LoadCart from cookies | storage":
      return { ...state, isLoaded:true,cart: [...action.payload] };
    case "[Cart] - Update cart":
      return { ...state, cart: [...action.payload] };
    case "[Cart] - Change product quantity":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product._id !== action.payload._id) return product;
          if (product.size !== action.payload.size) return product;

          return action.payload;
        }),
      };
    case "[Cart] - Remove product":
      return {
        ...state,
        cart: state.cart.filter((product) => {
          if (product._id !== action.payload._id) return product;
          if (product.size !== action.payload.size) return product;
        }),
      };
    case "[Cart] - Update order summary":
      return {
        ...state,
        ...action.payload,
      };
      case '[Cart] - Update Address':
      case '[Cart] - LoadAddress from Cookies':
         return {
            ...state,
            shippingAddress: action.payload
         }
    default:
      return state;
  }
};
