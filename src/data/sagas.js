import { sagas as dashboardsSagas } from './dashboards/sagas'
import { sagas as savedOffDashboardSagas } from './saved_off_dashboard/sagas'
import { sagas as editDashboardModeSagas } from './edit_dashboard_mode/sagas'

export const sagas = [
  ...dashboardsSagas,
  ...savedOffDashboardSagas,
  ...editDashboardModeSagas
]
