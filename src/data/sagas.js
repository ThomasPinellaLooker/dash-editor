import { sagas as dashboardsSagas } from './dashboards/sagas'
import { sagas as savedOffDashboardSagas } from './saved_off_dashboard/sagas'

export const sagas = [...dashboardsSagas, ...savedOffDashboardSagas]
