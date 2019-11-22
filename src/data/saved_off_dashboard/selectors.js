export const getSavedOffDashboard = (state) => state.data.savedOffDashboard

export const inEditMode = (state) => Object.keys(getSavedOffDashboard(state) || {}).length > 0
