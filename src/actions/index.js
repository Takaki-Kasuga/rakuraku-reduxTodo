export const ADDTASK = 'addTask'
export const DELETETASKS = 'deleteTasks'
export const COMPLETETASKS = 'completeTasks'
export const BACKTOTASKS = 'backToTasks'

// ActionCreater()でオブジェクトを返す
export const addTask = (inCompleteTasks) => ({
  type: ADDTASK,
  inCompleteTasks: inCompleteTasks
})

export const deleteTasks = (deleteTasks) => ({
  type: DELETETASKS,
  deleteTasks: deleteTasks
})

export const completeTasks = (completeTasks) => ({
  type: COMPLETETASKS,
  completeTasks: completeTasks
})

export const backToTasks = (backToTasks) => ({
  type: BACKTOTASKS,
  backToTasks: backToTasks
})