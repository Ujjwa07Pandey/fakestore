import { FETCH_PRODUCTS } from './../actions/actions';
const initialState = {
    items: []
};
export default function ProductReducer(state = initialState, action) {
    switch(action.type){
        case FETCH_PRODUCTS:
            return state;
        default:
            return state;
    }
}