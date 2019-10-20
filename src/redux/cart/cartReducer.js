import {addItemToCart, adjustItemCart} from './cart.utils'


const initialState ={
    sidebar: false,
    hidden: false,
    cartItems: [],
}

// action types

const TOGGLE_SIDE_BAR = 'TOGGLE_SIDE_BAR'
const TOGGLE_CART = 'TOGGLE_CART';
const ADD_ITEM = 'ADD_ITEM';
const CLEAR_ITEM = 'CLEAR_ITEM'
const ADJUST_ITEM = 'ADJUST_ITEM'


// action creators
export const toggleCart = () => ({
    type:TOGGLE_CART,
})

export const toggleSideBar = () => ({
    type: TOGGLE_SIDE_BAR,
})

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
})

export const clearItem = (item) => ({
    type: CLEAR_ITEM,
    payload: item
})

export const adjustItem = (item) => ({
    type: ADJUST_ITEM,
    payload: item
}) 


const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case 'TOGGLE_CART':
            return{
                ...state,
                hidden: !state.hidden
            }
        case 'TOGGLE_SIDE_BAR':
            return{
                ...state,
                sidebar: !state.sidebar
            }   
        case 'ADD_ITEM':
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case 'CLEAR_ITEM': 
            return{
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id)
            }
        case 'ADJUST_ITEM':
            return{
                ...state,
                cartItems: adjustItemCart(state.cartItems, action.payload)
            }            

        default:
            return state;
    }
}

export default cartReducer;