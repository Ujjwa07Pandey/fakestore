import { combineReducers } from 'redux';
import { LOGIN, SIGNUP, UPDATE_EMAIL, UPDATE_PASSWORD } from '../actions/actions';
import ProductReducer from './productReducer';
import CartReducer from './cartReducer';
import OrderReducer from './orderReducer';

const user = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload
        case SIGNUP:
            return action.payload
        case UPDATE_EMAIL:
            return { ...state, email: action.payload }
        case UPDATE_PASSWORD:
            return { ...state, password: action.payload }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user,
    ProductReducer,
    CartReducer,
    OrderReducer,
})

export default rootReducer;