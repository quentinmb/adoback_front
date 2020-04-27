import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers/index";
import thunk from "redux-thunk";
import { apiMiddleware } from 'redux-api-middleware';
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// import devToolsEnhancer from 'remote-redux-devtools';
const store = createStore(
    reducers,
    storeEnhancers(applyMiddleware(apiMiddleware, thunk)));
export default store;


