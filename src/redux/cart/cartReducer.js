import {addItemToCart} from './cart.utils'


const initialState ={
    hidden: false,
    cartItems: [],
}

// action types

const TOGGLE_CART = 'TOGGLE_CART';
const ADD_ITEM = 'ADD_ITEM'


// action creators
export const toggleCart = () => ({
    type:TOGGLE_CART,
})

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
})


const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case 'TOGGLE_CART':
            return{
                ...state,
                hidden: !state.hidden
            }
        case 'ADD_ITEM':
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }    

        default:
            return state;
    }
}

export default cartReducer;