import { middleware as savedOffDashboardMiddleware } from './saved_off_dashboard/middleware'
import { middleware as editDashboardModeMiddleware } from './edit_dashboard_mode/middleware'
import { middleware as dashboardsMiddleware } from './dashboards/middleware'

export const middleware = [
  ...savedOffDashboardMiddleware,
  ...editDashboardModeMiddleware,
  ...dashboardsMiddleware,
]
