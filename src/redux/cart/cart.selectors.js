import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectSideBar = createSelector(
  [selectCart],
  side => side.sidebar
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (acc, cartItem) =>
        acc + cartItem.quantity,
      0
    )
);

export const cartItemTotal = createSelector(
  [selectCartItems],
    cartItems =>
      cartItems.reduce((acc, cartItems) => 
        acc + cartItems.quantity * cartItems.price
      ,0)
)