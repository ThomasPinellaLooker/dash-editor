import { dashboardsActions } from './actions'
import { setFilters } from './filters/actions'
import { setElements } from './elements/actions'
import { middleware as draftFiltersMiddleware } from './draft_filters/middleware'

const dashboardSuccess = store => next => action => {
  next(action)

  if (action.type === dashboardsActions.DASHBOARD_SUCCESS) {
    const dashboard = action.payload.dashboard
    // In helltool, this first one isn't needed as it's already
    // listening for DASHBOARD_SUCCESS.

    // What we want though is to call our transform utils function
    // here and then setFilters to that result
    store.dispatch(setFilters(dashboard.filters))
    store.dispatch(setElements(dashboard.elements))
  }
}

export const middleware = [
  dashboardSuccess,
  ...draftFiltersMiddleware,
]
