import { createStore, combineReducers } from 'redux'
import counterReducer from './counter/reducer'

const reducers = combineReducers({
  counter: counterReducer,
})

const store = createStore(reducers)

export default store
