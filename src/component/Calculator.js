// 상위에서 하위 클래스 컴포넌트 형식으로 넘어오고 있는 중
//   p태그에 해당하는 state를 바꿔야 한다.

//   state Reducer를 저장할 store를 만든다.
//   해당하는 action과 type을 지정한다.
//   state 값을 바꿀 Reducer를 만든다.
//   제일 상위 폴더인 src폴더에 해당하는 render함수에 store를 집어 넣는다.
//   react-redux 리액트와 리덕스를 이어주는 middle ware역할을 하는 모듈을 import하고
//   Provider를 사용하여 store를 하위컴포넌트들이 가져갈 수 있도록 넣는다.

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  clickAllExceptEqulButtonAction,
  clickEqulButtonAction,
} from '../storeCal/calculator/actions'
const Calculator = () => {
  const calculator = useSelector((state) => state.calculator)
  //useSelector을 하면 reducer로가서 분기한 action중 맞는 것을 골라서 그것을 수행하고 다시 돌아온다.
  const dispatch = useDispatch()
  const subCalBtnList = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '+',
    '-',
  ]
  const tr = () =>
    subCalBtnList.map((i) => {
      return (
        <button onClick={(e) => dispatch(clickAllExceptEqulButtonAction(e))}>
          {i}
        </button>
      )
    })
  return (
    <div>
      <h3>Result: {calculator}</h3>
      {tr()}
      <button onClick={() => dispatch(clickEqulButtonAction())}>=</button>
    </div>
  )
}

export default Calculator
