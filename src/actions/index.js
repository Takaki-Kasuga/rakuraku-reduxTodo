export const COUNTPLUS = 'countPlus'
export const COUNTMINUS = 'countMinus'

// ActionCreater()でオブジェクトを返す
export const countPlus = () => ({
  type: COUNTPLUS
})
export const countMinus = () => ({
  type: COUNTMINUS
})