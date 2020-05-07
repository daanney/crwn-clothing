import { createStore, applyMiddleware } from "redux"
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from "./root.reducer"
import rootSaga from './root.saga'

const sagaMiddleware = createSagaMiddleware()
const middelewares = [sagaMiddleware]
if(process.env.NODE_ENV === 'development') {
	middelewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middelewares))
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)

export default { store, persistor }