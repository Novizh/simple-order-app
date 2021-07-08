import { SET_NAMES, SET_PRODUCTS } from '../actionTypes';
import axios from 'axios';

export function setNames(data) {
    return {
        type: SET_NAMES,
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
            // console.log(response.data);
            dispatch(setNames(response.data.data))
        })
        .catch((error) => {
            console.log(error);
        })
    }
}