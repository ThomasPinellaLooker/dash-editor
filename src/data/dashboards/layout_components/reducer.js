import { layoutComponentsActions } from './actions'
import { editDashboardModeActions } from '../../edit_dashboard_mode/action'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case layoutComponentsActions.SET_ALL_LAYOUT_COMPONENTS:
      return action.payload.layoutComponents
    case layoutComponentsActions.SET_LAYOUT_COMPONENT:
      const { id, layoutComponent } = action.payload
      return {
        ...state,
        [id]: {
          ...state[id],
          ...layoutComponent,
        },
      }
    case editDashboardModeActions.DELETE_ELEMENT:
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
      return newState
    default:
      return state
  }
}
