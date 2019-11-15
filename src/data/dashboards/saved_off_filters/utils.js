import { getSavedOffFilters } from './selectors'

export const isFilterEditorOpen = state => {
  return Object.keys(getSavedOffFilters(state) || {}).length !== 0
}
