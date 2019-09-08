import {combineReducers} from 'redux';


//import of the reducers
import userReducer from './users/userReducer';
import cartReducer from './cart/cartReducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})