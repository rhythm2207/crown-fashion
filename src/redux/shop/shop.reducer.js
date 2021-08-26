import CartActionTypes from '../cart/cart.types';
import SHOP_DATA from './SHOP_DATA'

const INITIAL_STATE = {
    collections: SHOP_DATA,
}

const shopReducer = (state = INITIAL_STATE) => {
    switch (CartActionTypes.type) {
        default:
            return state;
    }
}

export default shopReducer
