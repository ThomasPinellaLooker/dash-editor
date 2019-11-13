import { combineReducers } from 'redux'
import { reducer as data } from './data/reducer'

export const reducer = combineReducers({
  data,
})
