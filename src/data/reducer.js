import { combineReducers } from 'redux'
import { reducer as dashboards } from './dashboards/reducer'
import { reducer as savedOffDashboard } from './saved_off_dashboard/reducer'
import { reducer as editDashboardMode } from './edit_dashboard_mode/reducer'

export const reducer = combineReducers({
  dashboards,
  savedOffDashboard,
  editDashboardMode,
})
