import { dashboardsActions } from './actions'
import { setFilters } from './filters/actions'
import { setElements } from './elements/actions'
import { middleware as savedOffFiltersMiddleware } from './saved_off_filters/middleware'
import { setAllLayoutComponents } from './layout_components/actions'

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
    store.dispatch(setAllLayoutComponents(dashboard.layoutComponents))
  }
}

export const middleware = [
  dashboardSuccess,
  ...savedOffFiltersMiddleware,
]
