import { editDashboardModeActions } from "./action"

const initialState = {
  inEditMode: false,
  deletedElementIds: [],
  addedElementIds: [],
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
    case editDashboardModeActions.ADD_ELEMENT_SUCCESS:
      return {
        ...state,
        addedElementIds: [
          ...state.addedElementIds,
          action.payload.id
        ]
      }
    case editDashboardModeActions.DELETE_ELEMENT:
      console.log(state.deletedElementIds)
      return {
        ...state,
        deletedElementIds: [
          ...state.deletedElementIds,
          action.payload.id
        ]
      }
    default:
      return state
  }
}
