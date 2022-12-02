import {createStore , applyMiddleware} from 'redux'
import AppReducer from './Reducers/AppRedusers'
import thunk from 'redux-thunk'


let store = createStore(AppReducer , applyMiddleware(thunk));


export default store ;