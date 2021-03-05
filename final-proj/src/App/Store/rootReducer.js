import {combineReducers} from 'redux'
import testReducer from '../Test/testReducer'
import asyncReducer from '../Logic/Async/asyncReducer'
import authReducer from '../Logic/Auth/authReducer'
import financialReducer from '../Logic/API/financialReducer'

const rootReducer = combineReducers({test: testReducer, async: asyncReducer, auth: authReducer, stocks: financialReducer})

export default rootReducer;
