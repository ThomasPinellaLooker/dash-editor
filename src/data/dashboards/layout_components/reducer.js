import { layoutComponentsActions } from './actions'

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
    default:
      return state
  }
}
