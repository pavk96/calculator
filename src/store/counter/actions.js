import { INCREASE_COUNT, DECREASE_COUNT } from './type'
export const increaseAction = () => {
  return {
    type: INCREASE_COUNT,
  }
}
export const decreaseAction = () => {
  return {
    type: DECREASE_COUNT,
  }
}
