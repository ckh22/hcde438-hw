import axios from "axios";
import {APP_LOADED, asyncActionError} from "../Async/asyncReducer";
import {FETCH_FINANCES} from './financialConstants'

const options = {
    method: 'GET',
    url: 'https://morning-star.p.rapidapi.com/market/v2/get-movers',
    headers: {
        'x-rapidapi-key': '831cb6b458mshbb8093ff1396239p1d1ac7jsn916b6f5260a7',
        'x-rapidapi-host': 'morning-star.p.rapidapi.com'
    }
};


export function fetchFinances() {
    return async function (dispatch) {
        await axios.request(options).then(function (response) {
            dispatch({type: FETCH_FINANCES, payload: response.data});
        }).catch(function (error) {
            dispatch(asyncActionError(error))
        });
        dispatch({type: APP_LOADED})
    }
}
