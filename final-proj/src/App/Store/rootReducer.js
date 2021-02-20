import {combineReducers} from 'redux'
import testReducer from '../Test/testReducer'
import asyncReducer from '../Logic/Async/asyncReducer'
import authReducer from '../Logic/Auth/authReducer'

const rootReducer = combineReducers({test: testReducer, async: asyncReducer, auth: authReducer})

export default rootReducer;
