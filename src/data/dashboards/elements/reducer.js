import { elementsActions } from './actions'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case elementsActions.SET_ELEMENTS:
      return action.payload.elements
    default:
      return state
  }
}
