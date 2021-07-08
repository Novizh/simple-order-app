import { SET_NAMES, SET_ORDERS, SET_PRODUCT_DETAILS } from '../actionTypes';

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
    products: [
        {
            id: 1,
            product_name: 'Morning Dew Milk',
            units: [
                {
                    id: 1,
                    name: 'Karton',
                    price: 12000
                },
                {
                    id: 2,
                    name: 'Pak',
                    price: 8000
                },
                {
                    id: 3,
                    name: 'Pcs',
                    price: 4000
                }
            ]
        },
        {
            id: 2,
            product_name: 'Le Minerale 600ml',
            units: [
                {
                    id: 1,
                    name: 'Karton',
                    price: 9000
                },
                {
                    id: 2,
                    name: 'Pak',
                    price: 6000
                }
            ]
        },
        {
            id: 3,
            product_name: 'Greenfield Full Cream 1L',
            units: [
                {
                    id: 1,
                    name: 'Karton',
                    price: 12000
                },
                {
                    id: 2,
                    name: 'Pak',
                    price: 9000
                },
                {
                    id: 3,
                    name: 'Pcs',
                    price: 6000
                }
            ]
        }
    ],
    productDetails: {}
}

function orderReducer(state = initialState, action) {
    if (action.type === SET_NAMES) {
        return {...state, names: action.payload}
    } else if (action.type === SET_ORDERS) {
        return {...state, orders: action.payload}
    } else if (action.type === SET_PRODUCT_DETAILS) {
        return {...state, productDetails: action.payload}
    }
    return state
}

export default orderReducer;