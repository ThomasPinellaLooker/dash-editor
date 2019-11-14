export const draftFiltersActions = {
  SET_ALL_DRAFT_FILTERS: '[draft_filters] setAllDraftFilters',
  SET_DRAFT_FILTER: '[draft_filters] setDraftFilter',
  FILTERS_ACTION: '[draft_filters] filtersAction',

  ON_FILTER_EDITOR_OPEN: '[draft_filters] onFilterEditorOpen',
  ON_FILTER_EDITOR_CLOSE: '[draft_filters] onFilterEditorClose',

  ATTEMPT_SAVE_CHANGES: '[draft_filters] attemptSaveChanges',
  SAVE_CHANGES_SUCCESS: '[draft_filters] saveChangesSuccess',
}

export const setAllDraftFilters = (filters) => ({
  type: draftFiltersActions.SET_ALL_DRAFT_FILTERS,
  payload: {
    filters,
  }
})

export const setDraftFilter = (filterId, filter) => ({
  type: draftFiltersActions.SET_DRAFT_FILTER,
  payload: {
    filterId,
    filter,
  }
})

export const filtersAction = (action) => ({
  type: draftFiltersActions.FILTERS_ACTION,
  payload: action,
})

export const onFilterEditorOpen = (filterId) => ({
  type: draftFiltersActions.ON_FILTER_EDITOR_OPEN,
  payload: {
    filterId,
  }
})

export const onFilterEditorClose = () => ({
  type: draftFiltersActions.ON_FILTER_EDITOR_CLOSE,
})

export const attemptSaveChanges = () => ({
  type: draftFiltersActions.ATTEMPT_SAVE_CHANGES,
})

export const saveChangesSuccess = (filters) => ({
  type: draftFiltersActions.SAVE_CHANGES_SUCCESS,
  payload: {
    filters,
  }
})
