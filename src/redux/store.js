import { createStore, applyMiddleware } from "redux"
import { persistStore } from 'redux-persist'
import logger from "redux-logger"

import rootReducer from "./root.reducer"

const middelewares = [logger]
export const store = createStore(rootReducer, applyMiddleware(...middelewares))
export const persistor = persistStore(store)

export default { store, persistor }