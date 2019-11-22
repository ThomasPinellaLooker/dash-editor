export const editDashboardModeActions = {
  ENTER_EDIT_MODE: '[edit_dashboard_mode] enterEditMode',
  CANCEL_EDIT_MODE: '[edit_dashboard_mode] cancelEditMode',
  SAVE_EDIT_MODE: '[edit_dashboard_mode] saveEditMode',
  ADD_ELEMENT: '[elements] addElement',
  DELETE_ELEMENT: '[elements] deleteElement',
  ADD_ELEMENT_SUCCESS: '[elements] addElementSuccess',
}

export const enterEditMode = () => ({
  type: editDashboardModeActions.ENTER_EDIT_MODE,
})

export const cancelEditMode = () => ({
  type: editDashboardModeActions.CANCEL_EDIT_MODE,
})

export const saveEditMode = () => ({
  type: editDashboardModeActions.SAVE_EDIT_MODE,
})

export const deleteElement = (id) => ({
  type: editDashboardModeActions.DELETE_ELEMENT,
  payload: {
    id,
  }
})

export const addElement = () => ({
  type: editDashboardModeActions.ADD_ELEMENT,
})

export const addElementSuccess = (id) => ({
  type: editDashboardModeActions.ADD_ELEMENT_SUCCESS,
  payload: {
    id,
  }
})
