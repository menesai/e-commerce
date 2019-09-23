export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };

  export const adjustItemCart = (cartItems, cartItemToAdjust) => {

    const existingCart = cartItems.find(cartItems => cartItems.id === cartItemToAdjust.id)


    if(existingCart.quantity === 1){
      return cartItems.filter(item =>
       item.id !== cartItemToAdjust.id )
    }

    return cartItems.map(item => item.id === cartItemToAdjust.id
      ?
      {...item, quantity: item.quantity -1}
      :
      item
      )
  }