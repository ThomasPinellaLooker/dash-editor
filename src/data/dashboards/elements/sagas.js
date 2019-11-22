import { takeEvery, put } from 'redux-saga/effects'
import { setElement } from './actions'
import { setLayoutComponent } from '../layout_components/actions'
import { editDashboardModeActions, addElementSuccess } from '../../edit_dashboard_mode/action'

// Should be in editDashboardMode
function* addElementSaga() {
  const layoutComponent = generateLayoutComponent()

  const { element, layoutComponent: newLayoutComponent } = yield addElement({
    element: {},
    layoutComponent,
  })

  yield put(setElement(element.id, element))
  yield put(setLayoutComponent(newLayoutComponent.id, newLayoutComponent))

  yield put(addElementSuccess(element.id))
}

function* watchAddElement() {
  yield takeEvery(editDashboardModeActions.ADD_ELEMENT, addElementSaga)
}

export const sagas = [watchAddElement]

// utils

const generateLayoutComponent = () => {
  const width = 2
  const height = 2

  const row = getRandomInt(0, 6)
  const column = getRandomInt(0, 15)

  return {
    width,
    height,
    row,
    column,
  }
}

const addElement = async (body) => {
  const val = fetch('/add_element', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(body)
  }).then(res => {
    return res.json()
  }).then(data => {
    return data
  })
  return val
}


const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
