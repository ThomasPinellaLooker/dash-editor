import { applyMiddleware, createStore } from 'redux'
import { reducer } from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { sagas } from './sagas'
import createSagaMiddleware from 'redux-saga'
import { middleware } from './middleware'

const sagaMiddleware = createSagaMiddleware()

export const registerSagas = (callbacks) => {
  callbacks.forEach(callback => sagaMiddleware.run(callback))
}

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware, sagaMiddleware)))

registerSagas(sagas)
