import { sagas as layoutComponentsSagas } from './layout_components/sagas'
import { sagas as elementsSagas } from './elements/sagas'
import { sagas as titlesSagas } from './titles/sagas'
import { sagas as filtersSagas } from './filters/sagas'
import { sagas as queriesSagas } from './queries/sagas'
import { takeEvery, put } from 'redux-saga/effects'
import { dashboardsActions, dashboardSuccess } from './actions'

function* getDashboardSaga() {
  const dashboard = yield getDashboard()
  yield put(dashboardSuccess(dashboard))
}

function* watchDashboardRequest() {
  yield takeEvery(dashboardsActions.DASHBOARD_REQUEST, getDashboardSaga)
}

export const sagas = [
  watchDashboardRequest,
  ...layoutComponentsSagas,
  ...elementsSagas,
  ...titlesSagas,
  ...filtersSagas,
  ...queriesSagas,
]

// api utils

const getDashboard = async () => {
  const dash = await fetch('/get_dashboard').then((res) => {
    return res.json()
  }).then((res) => {
    return res
  })
  return dash
}
