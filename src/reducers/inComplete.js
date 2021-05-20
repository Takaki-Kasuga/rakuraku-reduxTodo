import { ADDTASK } from '../actions'
import { DELETETASKS } from '../actions'
import { COMPLETETASKS } from '../actions'
import { BACKTOTASKS } from '../actions'

const initialState = {
  inCompleteTasksArray: [],
  completeTasksArray: [],
}

// state = initialはデフォルトの値
export default (state = initialState, action) => {
  console.log('counterが発火')
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ADDTASK:
      console.log('処理を走らせる')
      console.log(state.completeTasksArray)
      return {
        inCompleteTasksArray: [...state.inCompleteTasksArray, action.inCompleteTasks],
        completeTasksArray: state.completeTasksArray
      }
    case DELETETASKS:
      console.log('処理を走らせる')
      const newArray = [...state.inCompleteTasksArray]
      newArray.splice(action.deleteTasks, 1)
      return {
        inCompleteTasksArray: newArray,
        completeTasksArray: state.completeTasksArray
      }
    case COMPLETETASKS:
      console.log('処理を走らせる')
      // 完了押したら配列の中身が移動する
      // 現在の未完了のタスクをコピー
      const newIncompleteArray = [...state.inCompleteTasksArray]
      const newCompleteArray = [...state.completeTasksArray]
      newCompleteArray.push(newIncompleteArray[action.completeTasks])
      newIncompleteArray.splice(action.completeTasks, 1)
      console.log(action.completeTasks)
      console.log(newIncompleteArray[action.completeTasks])

      return {
        inCompleteTasksArray: newIncompleteArray,
        completeTasksArray: newCompleteArray
      }
    case BACKTOTASKS:
      const newCompleteTasksArray = [...state.completeTasksArray]
      const newInCompleteTasksArray = [...state.inCompleteTasksArray]
      newInCompleteTasksArray.push(newCompleteTasksArray[action.backToTasks])
      newCompleteTasksArray.splice(newCompleteTasksArray[action.backToTasks], 1)
      return {
        inCompleteTasksArray: newInCompleteTasksArray,
        completeTasksArray: newCompleteTasksArray
      }
    default:
      console.log('処理を走らせる')
      return state
  }
}