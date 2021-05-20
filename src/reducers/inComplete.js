import { ADDTASK } from '../actions'

const initialState = { inCompleteTasks: ['タスク', 'タスク２'] }

// state = initialはデフォルトの値
export default (state = initialState, action) => {
  console.log('counterが発火')
  console.log(action)
  switch (action.type) {
    case ADDTASK:
      return { val: state.val + 1 }
    // case COUNTMINUS:
    //   return { val: state.val - 1 }
    default:
      return state
  }
}