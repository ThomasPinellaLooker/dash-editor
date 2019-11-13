export const savedOffDashboardActions = {
  ATTEMPT_SAVE_OFF: '[saved_off_dashboard] attemptSaveOff',
  SAVE_OFF_SUCCESS: '[saved_off_dashboard] saveOffSuccess',

  ATTEMPT_COPY_BACK: '[saved_off_dashboard] attemptCopyBack',
  COPY_BACK_SUCCESS: '[saved_off_dashboard] copyBackSuccess',

  ERASE: '[saved_off_dashboard] erase',
}

export const attemptSaveOff = () => ({
  type: savedOffDashboardActions.ATTEMPT_SAVE_OFF,
})

export const saveOffSuccess = (dashboard) => ({
  type: savedOffDashboardActions.SAVE_OFF_SUCCESS,
  payload: {
    dashboard
  }
})

export const attemptCopyBack = () => ({
  type: savedOffDashboardActions.ATTEMPT_COPY_BACK,
})

export const copyBackSuccess = () => ({
  type: savedOffDashboardActions.COPY_BACK_SUCCESS,
})

export const erase = () => ({
  type: savedOffDashboardActions.ERASE
})
