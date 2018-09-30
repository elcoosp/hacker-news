import * as T from './types'

export const fetchFeedRequest = (feedName = '') => ({
	type: T.FETCH_FEED_REQUEST,
	payload: feedName
})

export const fetchFeedResponse = (payload = {}) => ({
	type: T.FETCH_FEED_RESPONSE,
	payload
})

export const fetchFeedError = (error = '') => ({
	type: T.FETCH_FEED_ERROR,
	payload: error
})
