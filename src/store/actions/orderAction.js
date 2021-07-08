import { SET_NAMES, SET_ORDERS, SET_PRODUCT_DETAILS } from '../actionTypes';
import axios from 'axios';

export function setNames(data) {
    return {
        type: SET_NAMES,
        payload: data
    }
}

export function setOrders(data) {
    return {
        type: SET_ORDERS,
        payload: data
    }
}

export function setProductDetails(data) {
    return {
        type: SET_PRODUCT_DETAILS,
        payload: data
    }
}

export function getNames() {
    return (dispatch, getState) => {
        axios({
            method: 'GET',
            url: `http://dummy.restapiexample.com/api/v1/employees`
        })
        .then((response) => {
            dispatch(setNames(response.data.data))
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export function addOrder(payload) {
    return (dispatch, getState) => {
        // logic here, no axios needed
        dispatch(setOrders(payload))
    }
}