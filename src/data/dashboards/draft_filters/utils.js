import { getDraftFilters } from './selectors'
import { filterActions } from '../filters/actions'

export const isOpen = state => {
  return Object.keys(getDraftFilters(state)).length !== 0
}

export const isFiltersAction = (action) => {
  return Object.values(filterActions).includes(action.type) &&
    action.type.startsWith('[filters]')
}
