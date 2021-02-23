// 어떤 액션이 필요할까?
// 버튼이 눌러졌을 때 하나의 수가 p태그에 입력되는 것
// =을 제외한 모든 버튼이 눌러졌을 때 string으로 추가가 됨
// =을 누르게 되면 추가된 string이 연산을 시작함
import { CLICKED_EQUL_BUTTON, CLICKED_ALL_EXCEPT_EQUL_BUTTON } from './type'
export const clickEqulButtonAction = () => {
  return { type: CLICKED_EQUL_BUTTON }
}
// 이벤트 객체를 가져오는 방법은 type 다음 형태는 dictionary가 아닌 그냥 원소로!@!@!@!@!@!@
export const clickAllExceptEqulButtonAction = (e) => {
  return { type: CLICKED_ALL_EXCEPT_EQUL_BUTTON, e }
}
