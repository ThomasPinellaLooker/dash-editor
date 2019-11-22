import { editDashboardModeActions } from './action'
import { call, select, takeEvery, put } from 'redux-saga/effects'
import { getDashboards } from '../dashboards/selectors'
import { dashboardSuccess } from '../dashboards/actions'
import { getSavedOffDashboard } from '../saved_off_dashboard/selectors'
import { erase } from '../saved_off_dashboard/actions'
import { setFilters } from '../dashboards/filters/actions'
import { setAllLayoutComponents } from '../dashboards/layout_components/actions'
import { setElements } from '../dashboards/elements/actions'
import { getDeletedElementIds, getAddedElementIds } from './selectors'

function* saveChangesSaga() {
  const newDashboard = yield select(getDashboards)
  const responseDashboard = yield updateDashboard(newDashboard)

  yield put(dashboardSuccess(responseDashboard))
}

function* watchSaveEditMode() {
  yield takeEvery(editDashboardModeActions.SAVE_EDIT_MODE, saveChangesSaga)
}

function* cancelChangesSaga() {
  const oldDashboard = yield select(getSavedOffDashboard)

  const deletedElementIds = yield select(getDeletedElementIds)
  const addedElementIds = yield select(getAddedElementIds)

  const elementsToDelete = [...deletedElementIds, ...addedElementIds]

  yield call(deleteElements, elementsToDelete)
  yield call(deleteLayoutComponents, elementsToDelete)

  yield put(setFilters(oldDashboard.filters))
  yield put(setElements(oldDashboard.elements))
  yield put(setAllLayoutComponents(oldDashboard.layoutComponents))

  yield put(erase())
}

function* watchCancelEditMode() {
  yield takeEvery(editDashboardModeActions.CANCEL_EDIT_MODE, cancelChangesSaga)
}

export const sagas = [watchSaveEditMode, watchCancelEditMode]

// api utils

const updateDashboard = async (body) => {
  const val = fetch('/update_dashboard', {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(body)
  }).then(res => {
    return res.json()
  }).then(data => {
    return data
  })
  return val
}

const deleteElements = async (body) => {
  const val = fetch('/delete_elements', {
    method: 'DELETE',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(body)
  }).then(res => {
    return res.json()
  }).then(data => {
    return data
  })
  return val
}

const deleteLayoutComponents = async (body) => {
  const val = fetch('/delete_layout_components', {
    method: 'DELETE',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(body)
  }).then(res => {
    return res.json()
  }).then(data => {
    return data
  })
  return val
}
