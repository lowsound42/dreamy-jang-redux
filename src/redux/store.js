import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import shelterReducer from './reducers/shelterReducer';


const store = createStore(shelterReducer, applyMiddleware(thunkMiddleware));

export default store;