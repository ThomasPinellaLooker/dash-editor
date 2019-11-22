import { elementsActions } from './actions'
import { editDashboardModeActions } from '../../edit_dashboard_mode/action'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case elementsActions.SET_ELEMENTS:
      return action.payload.elements
    case elementsActions.SET_ELEMENT:
      const { id, element } = action.payload
      return {
        ...state,
        [id]: {
          ...state[id],
          ...element,
        },
      }
    case editDashboardModeActions.DELETE_ELEMENT:
      console.log(state)
      const newState = Object.keys(state)
        .filter(key => key !== action.payload.id)
        .reduce((acc, key) => {
          return {
            ...acc,
            [key]: {
              ...state[key],
            }
          }
        }, {})
      console.log(newState)
      return newState
    default:
      return state
  }
}
