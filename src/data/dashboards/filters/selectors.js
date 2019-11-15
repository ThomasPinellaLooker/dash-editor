import { isFilterEditorOpen } from '../saved_off_filters/utils'

export const getFilters = state => state.data.dashboards.filters

export const getFilter = state => filterId => getFilters(state)[filterId]

export const getDashboardFilters = state =>
  isFilterEditorOpen(state)
    ? state.data.dashboards.savedOffFilters
    : state.data.dashboards.filters
