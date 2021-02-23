import { createStore, combineReducers } from 'redux'
import calculatorReducer from './calculator/reducer'

const reducers = combineReducers({
  calculator: calculatorReducer,
})

const calculate = createStore(reducers)

export default calculate
