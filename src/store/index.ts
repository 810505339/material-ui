import {createStore, applyMiddleware} from 'redux';//redux
import thunk from "redux-thunk"; //处理异步reducer
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from "@/store/rootReducer";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type AppDispatch = typeof store.dispatch


export default store