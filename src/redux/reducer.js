import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//import of the reducers
import userReducer from './users/userReducer';
import cartReducer from './cart/cartReducer';
import directoryReducer from './Directory/directoryReducer'
import shopReducer from './ShopRedux/shopReducer'

const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)