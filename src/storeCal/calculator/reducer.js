import { CLICKED_ALL_EXCEPT_EQUL_BUTTON, CLICKED_EQUL_BUTTON } from './type'

const calculatorReducer = (calculate = '', action) => {
  switch (action.type) {
    case CLICKED_EQUL_BUTTON:
      return calculator(calculate)
    case CLICKED_ALL_EXCEPT_EQUL_BUTTON:
      return calculate + action.e.target.innerHTML
    default:
      return calculate
  }
}

function calculator(operator) {
  let result = 0
  for (let i = 0; i < operator.length; i++) {
    if (i - 1 < 0 || i + 1 > operator.length) {
      console.error()
    } else {
      if (operator[i] === '+') {
        result = parseInt(operator[i - 1]) + parseInt(operator[i + 1])
      } else if (operator[i] === '-') {
        result = parseInt(operator[i - 1]) - parseInt(operator[i + 1])
      }
    }
  }
  return result
}
export default calculatorReducer
