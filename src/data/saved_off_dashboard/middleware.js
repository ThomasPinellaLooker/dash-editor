import { savedOffDashboardActions, saveOffSuccess, copyBackSuccess } from './actions'
import { getDashboards } from '../dashboards/selectors'
import { getSavedOffDashboard } from './selectors'
import { setFilters } from '../dashboards/filters/actions'
import { setElements } from '../dashboards/elements/actions'

const saveOffDashboard = store => next => action => {
  next(action)

  if (action.type === savedOffDashboardActions.ATTEMPT_SAVE_OFF) {
    const dashboards = getDashboards(store.getState())
    store.dispatch(saveOffSuccess(dashboards))
  }
}

const copyBackDashboard = store => next => action => {
  next(action)

  if (action.type === savedOffDashboardActions.ATTEMPT_COPY_BACK) {
    const dashboard = getSavedOffDashboard(store.getState())
    store.dispatch(setFilters(dashboard.filters))
    store.dispatch(setElements(dashboard.elements))

    next(copyBackSuccess())
  }
}

export const middleware = [saveOffDashboard, copyBackDashboard]
