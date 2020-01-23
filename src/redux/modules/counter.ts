import { AppAction, AppThunk } from '../index'

const ADD = '/counter/add'
const MINUS = '/counter/minus'

export interface CounterState {
  num: number,
}

interface AddAction extends AppAction {
  type: typeof ADD,
}

interface MinusAction extends AppAction {
  type: typeof MINUS,
}

export const add = (): AddAction => {
  return {
    type: ADD,
  }
}
export const minus = (): MinusAction => {
  return {
    type: MINUS,
  }
}

// 异步的action
export function asyncAdd(): AppThunk<AddAction> {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}

const INITIAL_STATE: CounterState = {
  num: 0
}

export default function counter(state = INITIAL_STATE, action: AppAction): CounterState {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
     case MINUS:
       return {
         ...state,
         num: state.num - 1
       }
     default:
       return state
  }
}
