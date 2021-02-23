import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseAction, decreaseAction } from '../store/counter/actions'

const Counter = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>Count: {counter}</h3>
      <button onClick={() => dispatch(increaseAction())}>+</button>
      <button onClick={() => dispatch(decreaseAction())}>-</button>
    </div>
  )
}

export default Counter
