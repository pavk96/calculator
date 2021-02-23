import { INCREASE_COUNT, DECREASE_COUNT } from './type'

const counterReducer = (count = 0, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return count + count
    case DECREASE_COUNT:
      return count - count
    default:
      return count
  }
}

export default counterReducer
