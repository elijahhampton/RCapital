import { applyMiddleware, combineReducers, createStore } from "redux"
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import investReducer from "./invest/reducer";

const rootReducer = combineReducers({
    invest: investReducer
})

const storeEnhancers = [logger, thunk];
const store = createStore(rootReducer, applyMiddleware(...storeEnhancers));

export default store;