import { createStore, applyMiddleware, compose } from 'redux'
import { createMiddleware } from 'redux-api-middleware'

// middlewares
import createSagaMiddleware from 'redux-saga'

// helpers
import rootReducer from 'reducers'
// import rootSaga from 'sagas';

const initialState = {}

const enhancers = []
const sagaMiddleware = createSagaMiddleware()
const apiMiddleware = createMiddleware()
const middleware = [apiMiddleware, sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const store = createStore(rootReducer, initialState, composedEnhancers)

// sagaMiddleware.run(rootSaga);

export default store
