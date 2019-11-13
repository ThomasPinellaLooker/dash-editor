export const editDashboardModeActions = {
  ENTER_EDIT_MODE: '[edit_dashboard_mode] enterEditMode',
  CANCEL_EDIT_MODE: '[edit_dashboard_mode] cancelEditMode',
  SAVE_EDIT_MODE: '[edit_dashboard_mode] saveEditMode',
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
