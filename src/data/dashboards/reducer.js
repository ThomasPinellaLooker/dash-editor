import { combineReducers } from 'redux'
import { reducer as layoutComponents } from './layout_components/reducer'
import { reducer as elements } from './elements/reducer'
import { reducer as titles } from './titles/reducer'
import { reducer as filters } from './filters/reducer'
import { reducer as queries } from './queries/reducer'

export const reducer = combineReducers({
  layoutComponents,
  elements,
  titles,
  filters,
  queries,
})
