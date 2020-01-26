import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import counter, { CounterState } from './modules/counter'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const middlewares = [
  thunkMiddleware
]

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middlewares.push(require('redux-logger').createLogger())
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)

const rootReducer = combineReducers({
  counter
})

export default createStore(rootReducer, enhancer)

// types
export interface RootState {
  counter: CounterState,
}

interface Payload {
  [propname: string]: any,
}

export interface AppAction {
  type: string,
  payload?: Payload,
}

export type AppThunk<ActionType extends AppAction = AppAction, ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  null,
  ActionType
>
