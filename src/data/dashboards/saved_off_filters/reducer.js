import { savedOffFiltersActions } from './actions'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case savedOffFiltersActions.SAVE_OFF_SUCCESS:
      return action.payload.filters
    case savedOffFiltersActions.COPY_BACK_SUCCESS:
    case savedOffFiltersActions.ERASE:
      return {}
    default:
      return state
  }
}
