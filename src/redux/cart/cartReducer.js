const initialState ={
    hidden: false,

}

const TOGGLE_CART = 'TOGGLE_CART';

export const toggleCart = () => ({
    type:TOGGLE_CART,
})

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case 'TOGGLE_CART':
            return{
                ...state,
                hidden: !state.hidden
            }


        default:
            return state;
    }
}

export default cartReducer;