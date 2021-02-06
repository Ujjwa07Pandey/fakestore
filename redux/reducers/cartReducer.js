import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART  , VIEW_CART} from '../actions/actions';

const initialState = {
    cart: [],
    total: 0,
}

export default function CartReducer(state = initialState, action) {
    switch(action.type){
      
        case ADD_TO_CART:
            return {
                ...state,
                cart: [action.payload, ...state.cart],
                total: state.total 
            }
        case EMPTY_CART:
            return {
                ...state,
                cart: [],
                total: 0
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item, i) => i !== action.payload.index),
                total: state.total
            }
        default:
            return state
    }
}