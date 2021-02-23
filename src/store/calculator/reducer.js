import { CLICKED_ALL_EXCEPT_EQUL_BUTTON, CLICKED_EQUL_BUTTON } from './type';

const calculatorReducer = (
  state = { input: '', isEqualClicked: false },
  action
) => {
  switch (action.type) {
    case CLICKED_EQUL_BUTTON:
      return {
        input: calculator(state.input),
        isEqualClicked: true,
      };
    case CLICKED_ALL_EXCEPT_EQUL_BUTTON:
      if (!state.isEqualClicked)
        return {
          input: state.input + action.event.target.innerHTML,
          isEqualClicked: false,
        };
      else
        return {
          input: action.event.target.innerHTML,
          isEqualClicked: false,
        };
    default:
      return state;
  }
};

function calculator(operator) {
  let result = 0;
  // arr = [1, 2, 3, 4 ,5]  // arr.forEach(i => {})
  const charArr = [...operator];
  charArr.forEach((char) => {
    if (char === '+') {
      const numbers = operator.split('+');
      const [leftNumber, rightNumber] = numbers;
      result = parseInt(leftNumber) + parseInt(rightNumber);
    } else if (char === '-') {
      const numbers = operator.split('-');
      const [leftNumber, rightNumber] = numbers;
      result = parseInt(leftNumber) - parseInt(rightNumber);
    }
  });

  /*
  for (let i = 0; i < operator.length; i++) {
    if (i - 1 < 0 || i + 1 > operator.length) {
      console.error();
    } else {
      if (operator[i] === '+') {
        const numbers = operator.split('+');
        const [leftNumber, rightNumber] = numbers;
        result = parseInt(leftNumber) + parseInt(rightNumber);
      } else if (operator[i] === '-') {
        result = parseInt(operator[i - 1]) - parseInt(operator[i + 1]);
      }
    }
  }
  */
  return result;
}
export default calculatorReducer;
