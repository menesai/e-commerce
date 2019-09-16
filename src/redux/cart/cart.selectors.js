// import {createSelector} from 'reselect'

// const selectCart = state => state.cart;

// export const selectCartItem = createSelector(
//     [selectCart],
//     (cart) => cart.cartItems
// );

// export const selectCartItemCount = createSelector(
//     [selectCartItems],
//     (cartItems) => cartItems.reduce((acc, cartItem,) => acc + cartItem.quantity, 0)
// )

import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (acc, cartItem) =>
        acc + cartItem.quantity,
      0
    )
);