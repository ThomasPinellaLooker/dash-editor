import { filterActions, suggestionsLoaded } from './actions'
import { put, takeEvery } from 'redux-saga/effects'

function* fetchFilterSuggestionsSaga(action) {
  const { id, value } = action.payload
  const suggestions = yield findSuggestions(value)
  yield put(suggestionsLoaded(id, suggestions))
}

function* watchUpdateFilter() {
  yield takeEvery(filterActions.UPDATE_FILTER, fetchFilterSuggestionsSaga)
}

export const sagas = [watchUpdateFilter]

// utils

const findSuggestions = async value => {
  const numRandStrings = Math.floor(30 * Math.pow(0.75, value.length))

  const delay = getRandomInt(5, 200)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...Array(numRandStrings).keys()].map(x => Math.random().toString(36).substring(7)))
    }, delay)
  })
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
