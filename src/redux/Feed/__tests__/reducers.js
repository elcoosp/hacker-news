import reducer from '../reducers'
import * as T from '../types'
import * as A from '../actions'
describe('Feed reducer', () => {
	it('return initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			meta: { isFetching: false, error: '' }
		})
	})

	describe('handle actions', () => {
		it(T.FETCH_FEED_REQUEST, () => {
			const feed = 'new'
			const expected = { meta: { isFetching: true } }
			const actual = reducer(undefined, A.fetchFeedRequest(feed))

			expect(actual).toEqual(expected)
		})

		it(T.FETCH_FEED_ERROR, () => {
			const error = 'oops'
			const expected = { meta: { isFetching: false, error } }
			const actual = reducer(undefined, A.fetchFeedError(error))

			expect(actual).toEqual(expected)
		})
	})
})
