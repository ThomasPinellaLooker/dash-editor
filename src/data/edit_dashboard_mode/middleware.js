import { editDashboardModeActions } from './action'
import { attemptSaveOff, attemptCopyBack, erase } from '../saved_off_dashboard/actions'

const enterEditMode = store => next => action => {
  next(action)

  if (action.type === editDashboardModeActions.ENTER_EDIT_MODE) {
    store.dispatch(attemptSaveOff())
  }
}

const saveEditMode = store => next => action => {
  next(action)

  if (action.type === editDashboardModeActions.SAVE_EDIT_MODE) {
    // also save it to the backend. probably kick off saga here or something?
    store.dispatch(erase())
  }
}

const cancelEditMode = store => next => action => {
  next(action)

  if (action.type === editDashboardModeActions.CANCEL_EDIT_MODE) {
    store.dispatch(attemptCopyBack())
  }
}

export const middleware = [enterEditMode, saveEditMode, cancelEditMode]
