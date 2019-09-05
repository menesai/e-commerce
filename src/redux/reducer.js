import {combineReducers} from 'redux';


//import of the reducers
import userReducer from './users/userReducer';

export default combineReducers({
    user: userReducer
})