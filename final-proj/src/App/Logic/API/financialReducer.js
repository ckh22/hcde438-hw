import {FETCH_FINANCES} from './financialConstants'
const initialState = {
    actives: [],
    gainers: [],
    losers: []
}

export default function financialReducer(state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case FETCH_FINANCES:
            console.log(type)
            console.log(payload)
            return {
                ...state,
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
                ]
            };
        default:
            return state;
    }
}
