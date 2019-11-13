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
    case filterActions.SET_FILTERS:
      return action.payload.filters
    default:
      return state
  }
}
