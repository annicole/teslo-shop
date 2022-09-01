import { FC, useReducer } from "react";
import { ICartProduct } from "../../interfaces";
import { CartContext, cartReducer } from "./";

export interface CartState {
  cart: ICartProduct[];
}

const Cart_INITIAL_STATE: CartState = {
  cart: [],
};

interface Props {
  children: any;
}

export const CartProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cartReducer, Cart_INITIAL_STATE);

  const addProductToCart = ( product: ICartProduct ) => {
    //! Nivel 1
    // dispatch({ type: '[Cart] - Add Product', payload: product });

    //! Nivel 2
    // const productsInCart = state.cart.filter( p => p._id !== product._id && p.size !== product.size );
    // dispatch({ type: '[Cart] - Add Product', payload: [...productsInCart, product] })

    //! Nivel Final
    const productInCart = state.cart.some( p => p._id === product._id );
    if ( !productInCart ) return dispatch({ type: '[Cart] - Update cart', payload: [...state.cart, product ] })

    const productInCartButDifferentSize = state.cart.some( p => p._id === product._id && p.size === product.size );
    if ( !productInCartButDifferentSize ) return dispatch({ type: '[Cart] - Update cart', payload: [...state.cart, product ] })

    // Acumular
    const updatedProducts = state.cart.map( p => {
        if ( p._id !== product._id ) return p;
        if ( p.size !== product.size ) return p;

        // Actualizar la cantidad
        p.quantity += product.quantity;
        return p;
    });

    dispatch({ type: '[Cart] - Update cart', payload: updatedProducts });

}

  return (
    <CartContext.Provider
      value={{
        ...state,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
