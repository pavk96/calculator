import { createStore, combineReducers } from 'redux';
import counterReducer from './counter/reducer';
import calculatorReducer from './calculator/reducer';

const reducers = combineReducers({
  counter: counterReducer,
  calculator: calculatorReducer,
});

const store = createStore(reducers);

export default store;
