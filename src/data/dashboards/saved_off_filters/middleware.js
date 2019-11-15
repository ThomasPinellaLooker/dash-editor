import { savedOffFiltersActions, saveOffSuccess, copyBackSuccess, erase } from './actions'
import { getSavedOffFilters } from './selectors'
import { setFilters } from '../filters/actions'
import { getFilters } from '../filters/selectors'

const saveOffFilters = store => next => action => {
  next(action)

  if (action.type === savedOffFiltersActions.ATTEMPT_SAVE_OFF) {
    const filters = getFilters(store.getState())
    store.dispatch(saveOffSuccess(filters))
  }
}

/**
 * Is called when canceling changes.
 */
const copyBackFilters = store => next => action => {
  next(action)

  if (action.type === savedOffFiltersActions.ATTEMPT_COPY_BACK) {
    const filters = getSavedOffFilters(store.getState())
    store.dispatch(setFilters(filters))
    store.dispatch(erase())

    next(copyBackSuccess())
  }
}

/**
 * Is called when saving changes.
 * Main motivation here is to replace keys of -1 with a unique key
 */
const attemptSaveChanges = store => next => action => {
  next(action)

  if (action.type === savedOffFiltersActions.ERASE) {
    const filters = getFilters(store.getState())

    const cleanedFilters = Object.keys(filters).reduce((acc, key) => {
      if (key === '-1') {
        const id = Math.random()+''
        return {
          ...acc,
          [id]: {
            ...filters[key],
            id,
          }
        }
      } else {
        return {
          ...acc,
          [key]: {
            ...filters[key],
          }
        }
      }
    }, {})

    store.dispatch(setFilters(cleanedFilters))
  }
}

export const middleware = [saveOffFilters, copyBackFilters, attemptSaveChanges]
