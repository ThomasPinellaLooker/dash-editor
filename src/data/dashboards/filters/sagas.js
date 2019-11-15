import { filterActions, suggestionsLoaded } from './actions'
import { put, takeEvery } from 'redux-saga/effects'


function* fetchFilterSuggestionsSaga(action) {
  yield console.log('yo dawg')

  const { id, value } = action.payload
  const suggestions = findSuggestions(value)
  yield put(suggestionsLoaded(id, suggestions))
}


function* watchUpdateFilter() {
  yield takeEvery(filterActions.UPDATE_FILTER, fetchFilterSuggestionsSaga)
}






export const sagas = [watchUpdateFilter]


// utils

const findSuggestions = value => {
  const numRandStrings = Math.floor(30 * Math.pow(0.75, value.length))
  return [...Array(numRandStrings).keys()].map(x => Math.random().toString(36).substring(7))
}
