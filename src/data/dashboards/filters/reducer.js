import { filterActions } from './actions'

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
    case filterActions.SUGGESTIONS_LOADED:
      const { id: filterId, suggestions } = action.payload
      return {
        ...state,
        [filterId]: {
          ...state[filterId],
          suggestions,
        }
      }
    case filterActions.SET_TITLE:
      const { id: _id, title } = action.payload
      return {
        ...state,
        [_id]: {
          ...state[_id],
          title,
        }
      }
    case filterActions.SET_FILTERS:
      return action.payload.filters
    default:
      return state
  }
}
