import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"

import rootReducer from "./root.reducer"

const middelewares = [logger]
const store = createStore(rootReducer, applyMiddleware(...middelewares))

export default store