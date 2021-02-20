import {toast} from 'react-toastify';

const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

const initialState = {
    data: 42
};

export function increment(amount) {
    return async function (dispatch) {
        try {
            dispatch({type: INCREMENT_COUNTER, payload: amount});
        } catch (error) {}
    };
}

export function decrement(amount) {
    return async function (dispatch) {
        try {
            dispatch({type: DECREMENT_COUNTER, payload: amount});
        } catch (error) {
            toast.error(error);
        }
    };
}


export default function testReducer(state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case INCREMENT_COUNTER: return {
                ...state,
                data: state.data + payload
            };
        case DECREMENT_COUNTER: return {
                ...state,
                data: state.data - payload
            };
        default:
            return state;
    }
}
