import {createStore, applyMiddleware} from 'redux';//redux
import thunk from "redux-thunk"; //处理异步reducer
import logger from 'redux-logger';
import {rootReducer} from "@/store/rootReducer";


const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export type AppDispatch = typeof store.dispatch


export default store