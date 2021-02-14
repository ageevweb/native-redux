import { INCREMENT, DECREMENT } from './types'

export function increment(){
  return {
    type: INCREMENT,
    payload: 5
  }
}

export function decrement(){
  return {
    type: DECREMENT,
    payload: 1
  }
}


export function changeText(text){
  return {
    type: 'CHANGE_TEXT',
    payload: text
  }
}