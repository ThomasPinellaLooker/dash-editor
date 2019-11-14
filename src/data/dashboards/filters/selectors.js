export const getFilters = state => state.data.dashboards.filters

export const getFilter = state => filterId => getFilters(state)[filterId]
