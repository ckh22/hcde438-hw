import {FETCH_FINANCES, GET_SHORT_INTEREST, GET_STOCK} from './financialConstants'
const initialState = {
    actives: [],
    gainers: [],
    losers: [],
    stockFinancials: [],
    stockShortInterest: []
}

export default function financialReducer(state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case FETCH_FINANCES:
            return {
                actives: [
                    ...state.actives,
                    ...payload.actives
                ],
                gainers: [
                    ...state.gainers,
                    ...payload.actives
                ],
                losers: [
                    ...state.losers,
                    ...payload.losers
                ],
            };
        case GET_STOCK:
            return {
                ...state,
                stockFinancials: {payload}
            }
        case GET_SHORT_INTEREST:
            return {
                ...state,
                stockShortInterest: {payload}
            }
        default:
            return state;
    }
}
