import { INCREASE_COUNT, DECREASE_COUNT } from './type';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return state + state;
    case DECREASE_COUNT:
      return state - state;
    default:
      return state;
  }
};

export default counterReducer;
