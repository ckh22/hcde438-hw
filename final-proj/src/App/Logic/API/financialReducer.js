import {FETCH_FINANCES, GET_STOCK} from './financialConstants'
const initialState = {
    actives: [],
    gainers: [],
    losers: [],
    allStocks: [],
    currentStock: []
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
                allStocks: [
                    ...state.losers,
                    ...payload.losers,
                    ...state.gainers,
                    ...payload.actives,
                    ...state.actives,
                    ...payload.actives
                ]
            };
        case GET_STOCK:
            return {
                ...state,
                currentStock: [
                    ...state.stocks,
                    ...payload.stocks
                ]
            }
        default:
            return state;
    }
}
