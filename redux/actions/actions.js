import React , {useState , useEffect} from 'react';
import Firebase, {db} from '../../config/firebase';

/************************
     AUTHENTICATION
************************/
 
export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'

export const updateEmail = email => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export const updatePassword = password => {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export const login = (email , password , navigation) => {
    return async (dispatch) => {
        try {
           
            
            const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
            navigation.navigate('Home');
            dispatch(getUser(response.user.uid))
        } catch (e) {
            alert(e)
        }
    }
}

export const signup = (email , password , fullName , phoneNumber) => {
    return async (dispatch) => {
        try {
            
            const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
            if (response.user.uid) {
                const user = {
                    uid: response.user.uid,
                    email: email,
                    fullName:fullName,
                    phoneNumber:phoneNumber
                }

                db.collection('users')
                    .doc(response.user.uid)
                    .set(user)

                dispatch({ type: SIGNUP, payload: user })
            }
        } catch (e) {
            alert(e)
        }
    }
}
export const getUser = uid => {
    return async (dispatch, getState) => {
        try {
            const user = await db
                .collection('users')
                .doc(uid)
                .get()

            dispatch({ type: LOGIN, payload: user.data() })
        } catch (e) {
            alert(e)
        }
    }
}
/************************
     SHOPPING CART
************************/

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const VIEW_CART = 'VIEW_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_ORDER = 'ADD_ORDER';
export const EMPTY_CART = 'EMPTY_CART';

export const fetchProducts = () =>   {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items , setItems] = useState([]);
    
    useEffect(() => {
        const apiEndPoint = `https://fakestoreapi.com/products`
        
        fetch(apiEndPoint).then((res) =>  res.json()
        ).then(result => {
            setItems(result);
            
        }).catch((err) => {
            setIsLoaded(true);
            setError(err)
        }).finally(() => setIsLoaded(false));

    }, []);

    return{
        type: FETCH_PRODUCTS,
        payload: items,
    }
       
    
}

export const addToCart = (item) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload: item
    })
}
export const removeItem = (item) => dispatch => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: item
    })
}
export const emptyCart = () => dispatch => {
    dispatch({
        type: EMPTY_CART
    })
}
export const addOrder = (data) => dispatch => {
    dispatch({
        type: ADD_ORDER,
        payload: data
    })
}