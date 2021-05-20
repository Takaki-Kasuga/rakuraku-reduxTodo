import { COUNTPLUS, COUNTMINUS } from '../actions'

const initialState = { val: 0 }

// state = initialはデフォルトの値
export default (state = initialState, action) => {
  console.log('counterが発火')
  console.log(action)
  switch (action.type) {
    case COUNTPLUS:
      return { val: state.val + 1 }
    case COUNTMINUS:
      return { val: state.val - 1 }
    default:
      return state
  }
}