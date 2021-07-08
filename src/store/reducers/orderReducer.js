import { SET_NAMES, SET_PRODUCTS } from '../actionTypes';

const initialState = {
    names: [],
    distributionCentres: [
        {
            id: 1,
            name: 'DC Tangerang'
        },
        {
            id: 2,
            name: 'DC Cikarang'
        }
    ],
    products: []
}

function orderReducer(state = initialState, action) {
    if (action.type === SET_NAMES) {
        return {...state, names: action.payload}
    } else if (action.type === SET_PRODUCTS) {
        return {...state, products: action.payload}
    }
    return state
}

export default orderReducer;