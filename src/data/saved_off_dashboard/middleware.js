import { savedOffDashboardActions, saveOffSuccess } from './actions'
import { getDashboards } from '../dashboards/selectors'

const saveOffDashboard = store => next => action => {
  next(action)

  if (action.type === savedOffDashboardActions.ATTEMPT_SAVE_OFF) {
    const dashboards = getDashboards(store.getState())
    store.dispatch(saveOffSuccess(dashboards))
  }
}

export const middleware = [saveOffDashboard]
