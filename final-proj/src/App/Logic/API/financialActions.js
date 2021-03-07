import axios from "axios";
import {APP_LOADED, asyncActionError, asyncActionFinish, asyncActionStart} from "../Async/asyncReducer";
import {FETCH_FINANCES} from './financialConstants'
import {getMoversOptions, getShortInterestOptions, getFinancialsOptions} from './apiOptions.js'


export function fetchFinances() {
    return async function (dispatch) {
        await axios.request(getMoversOptions).then(function (response) {
            dispatch({type: FETCH_FINANCES, payload: response.data});
        }).catch(function (error) {
            dispatch(asyncActionError(error))
        });
        dispatch({type: APP_LOADED})
    }
}

export function getStock(performanceID) {
    return async function (dispatch) {
        getFinancialsOptions['params']['performanceId'] = performanceID
        dispatch(asyncActionStart())
        await axios.request(getFinancialsOptions).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            dispatch(asyncActionError(error))
        });
        dispatch(asyncActionFinish())
    }
}

export function getShortInterest(performanceID) {
    return async function (dispatch) {
        getShortInterestOptions['params']['performanceId'] = performanceID
        dispatch(asyncActionStart())
        await axios.request(getShortInterestOptions).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            dispatch(asyncActionError(error))
        });
        dispatch(asyncActionFinish())
    }
}
