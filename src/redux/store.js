import { createStore, applyMiddleware } from "redux"
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from "./root.reducer"

const middelewares = [thunk]
if(process.env.NODE_ENV === 'development') {
	middelewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middelewares))
export const persistor = persistStore(store)

export default { store, persistor }