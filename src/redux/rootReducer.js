import { INCREMENT, DECREMENT } from './types'

export function rootReducer(state, action){
  if(action.type === INCREMENT) {
    return {
      ...state,
      counter: state.counter + action.payload
    }
  } 
  else if (action.type === DECREMENT){
    return {
      ...state,
      counter: state.counter - 1
    }
  }
  else if (action.type === 'CHANGE_TEXT') {
    return {
      ...state,
      name: action.payload
    }
  }
  return state
}