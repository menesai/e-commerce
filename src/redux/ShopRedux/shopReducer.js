import shopData from './ShopData'

const initialState ={
    shopItems: shopData
}

const shopReducer = (state = initialState, action) => {
    switch(action.type){

        default:
            return state
    }
}

export default shopReducer;