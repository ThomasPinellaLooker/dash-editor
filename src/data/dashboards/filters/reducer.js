import { filterActions } from './actions'
import { draftFiltersActions } from '../draft_filters/actions'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case filterActions.UPDATE_FILTER:
      const { id, value } = action.payload
      return {
        ...state,
        [id]: {
          ...state[id],
          value,
        },
      }
    case filterActions.SET_FILTERS:
      return action.payload.filters
    case draftFiltersActions.SAVE_CHANGES_SUCCESS:
      return {
        ...state,
        ...action.payload.filters,
      }
    default:
      return state
  }
}
