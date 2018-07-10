import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import Reducer from './dux/Reducer';


export default createStore(
    Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ 
        && 
    window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(promiseMiddleware())
);