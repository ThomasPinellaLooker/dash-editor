export const filterActions = {
  UPDATE_FILTER: '[filters] updateFilter',
  SET_FILTERS: '[filters] setFilters',
  SUGGESTIONS_LOADED: '[filters] suggestionsLoaded'
}

export const updateFilter = (id, value) => ({
  type: filterActions.UPDATE_FILTER,
  payload: {
    id,
    value,
  }
})

export const setFilters = (filters) => ({
  type: filterActions.SET_FILTERS,
  payload: {
    filters,
  }
})

export const suggestionsLoaded = (id, suggestions) => ({
  type: filterActions.SUGGESTIONS_LOADED,
  payload: {
    id,
    suggestions,
  }
})
