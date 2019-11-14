import { draftFiltersActions } from './actions'
import { reducer as filtersReducer } from '../filters/reducer'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case draftFiltersActions.SET_ALL_DRAFT_FILTERS:
      return action.payload.filters
    case draftFiltersActions.SET_DRAFT_FILTER:
      const { filterId, filter } = action.payload
      return {
        ...state,
        [filterId]: {
          ...state[filterId],
          ...filter,
        },
      }
    case draftFiltersActions.ON_FILTER_EDITOR_CLOSE:
      return {}
    case draftFiltersActions.FILTERS_ACTION:
      return filtersReducer(state, action.payload)
    default:
      return state
  }
}
