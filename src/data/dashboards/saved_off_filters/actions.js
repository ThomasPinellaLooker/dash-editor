export const savedOffFiltersActions = {
  ATTEMPT_SAVE_OFF: '[saved_off_filters] attemptSaveOff',
  SAVE_OFF_SUCCESS: '[saved_off_filers] saveOffSuccess',

  ATTEMPT_COPY_BACK: '[saved_off_filters] attemptCopyBack',
  COPY_BACK_SUCCESS: '[saved_off_filters] copyBackSuccess',

  ERASE: '[saved_off_filters] erase',
}

export const attemptSaveOff = () => ({
  type: savedOffFiltersActions.ATTEMPT_SAVE_OFF,
})

export const saveOffSuccess = (filters) => ({
  type: savedOffFiltersActions.SAVE_OFF_SUCCESS,
  payload: {
    filters
  }
})

export const attemptCopyBack = () => ({
  type: savedOffFiltersActions.ATTEMPT_COPY_BACK,
})

export const copyBackSuccess = () => ({
  type: savedOffFiltersActions.COPY_BACK_SUCCESS,
})

export const erase = () => ({
  type: savedOffFiltersActions.ERASE
})
