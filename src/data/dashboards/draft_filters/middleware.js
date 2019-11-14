import { filtersAction, draftFiltersActions, setAllDraftFilters, saveChangesSuccess } from './actions'
import { getFilter } from '../filters/selectors'
import { getDraftFilters } from './selectors'
import { isOpen, isFiltersAction } from './utils'

const onFilterEditorOpen = store => next => action => {
  next(action)

  if (action.type === draftFiltersActions.ON_FILTER_EDITOR_OPEN) {
    const draftFilters = {
      [action.payload.filterId]:
        getFilter(store.getState())(action.payload.filterId) || {}
    }
    store.dispatch(setAllDraftFilters(draftFilters))
  }
}

const rerouteFiltersActions = store => next => action => {
  const filterEditModalOpen = isOpen(store.getState())
  if (filterEditModalOpen && isFiltersAction(action)) {
      store.dispatch(filtersAction(action))
  } else {
    next(action)
  }
}

const attemptSaveChanges = store => next => action => {
  next(action)

  if (action.type === draftFiltersActions.ATTEMPT_SAVE_CHANGES) {
    const draftFilters = getDraftFilters(store.getState())

    let drf = draftFilters
    if (Object.keys(draftFilters)[0] === '-1') {
      const id = Math.random()+''
      drf = {
        [id]: {
          id,
          ...draftFilters['-1']
        }
      }
    }
    store.dispatch(saveChangesSuccess(drf))
  }
}

export const middleware = [onFilterEditorOpen, rerouteFiltersActions, attemptSaveChanges]
