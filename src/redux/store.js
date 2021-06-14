
import { createStore, combineReducers, applyMiddleware } from 'redux';
import user from './reduces/user';
import {getEmployes, setDetails} from './middelwear/middelwear';


const reducer= combineReducers({user});

const store= createStore(reducer, (applyMiddleware(getEmployes, setDetails)));

window.store= store;
export default store;
