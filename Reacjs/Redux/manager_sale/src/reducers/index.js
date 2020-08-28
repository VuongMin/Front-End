import {combineReducers} from 'redux'
import data from './LoadView_md'
import cart from './AddCart_md'
import msg from './MSG_md'
//This is state of store have save at here 
const appReducer = combineReducers({
     data,
     cart,
     msg
});
export default appReducer;