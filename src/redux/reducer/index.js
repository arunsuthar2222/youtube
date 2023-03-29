import { combineReducers } from 'redux';
import actionReducer from './reducer';

const reducer = combineReducers({
    action : actionReducer
})

export default reducer