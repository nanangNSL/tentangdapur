import {applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./reducer";
import logger from 'redux-logger'


export const store = createStore(rootReducer, applyMiddleware(logger));
export const persistor = persistStore(store, {});