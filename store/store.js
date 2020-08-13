import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'

import rootReducer from './../reducer'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
      )
    )
  )
  return store
}
