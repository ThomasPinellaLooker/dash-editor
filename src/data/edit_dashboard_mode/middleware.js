import { editDashboardModeActions } from './action'
import { attemptSaveOff, erase } from '../saved_off_dashboard/actions'

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
    // ORRRRR, saga just directly listens in on same action. Don't really need this at all.
    store.dispatch(erase())
  }
}

export const middleware = [enterEditMode, saveEditMode]
