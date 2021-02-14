import './styles.css'
import { defaultState } from './redux/defaultState'
import { createStore } from './redux/createStore'
import { rootReducer } from './redux/rootReducer'
import { increment, decrement, changeText} from './redux/actions'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')


const inp = document.getElementById('inp')
const textRender = document.getElementById('textRender')

const store = createStore(rootReducer, defaultState)


store.subscribe(()=> {
  const state = store.getState()
  console.log(state)
  counter.textContent = state.counter
  inp.value = state.name
  textRender.textContent = state.name
})

store.dispatch({type: 'INIT_APP'})



addBtn.addEventListener('click', ()=> {
  store.dispatch(increment())
})

subBtn.addEventListener('click', ()=> {
  store.dispatch(decrement())
})

asyncBtn.addEventListener('click', ()=> {

})

themeBtn.addEventListener('click', ()=> {

})



inp.addEventListener('input', (e)=> {
  store.dispatch(changeText(e.target.value))
})

