import { editDashboardModeActions } from "./action"

const initialState = {
  inEditMode: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case editDashboardModeActions.ENTER_EDIT_MODE:
      return {
        ...state,
        inEditMode: true,
      }
    case editDashboardModeActions.CANCEL_EDIT_MODE:
    case editDashboardModeActions.SAVE_EDIT_MODE:
      return {
        ...state,
        inEditMode: false,
      }
    default:
      return state
  }
}
