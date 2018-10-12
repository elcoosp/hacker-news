import { all, put, takeLatest, call } from 'redux-saga/effects'

import * as Api from '../../api'
import * as T from './types'
import * as A from './actions'

export function* fetchFeedSaga({ payload: feedName }) {
	try {
		const data = yield call(Api.getFeed, feedName)
		yield put(A.fetchFeedResponse({ ...data, feedName }))
	} catch (error) {
		yield put(A.fetchFeedError(error))
	}
}

export function* watchFetchFeedSaga() {
	yield takeLatest(T.FETCH_FEED_REQUEST, fetchFeedSaga)
}

export default function* rootSaga() {
	yield all([watchFetchFeedSaga()])
}
