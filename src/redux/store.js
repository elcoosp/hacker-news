import { createStore, combineReducers, applyMiddleware } from 'redux'

/** Middlewares */
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
/** Reducers */
import feed, { feedSagas } from './Feed'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({ feed })

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
)

sagaMiddleware.run(feedSagas)

export default store
