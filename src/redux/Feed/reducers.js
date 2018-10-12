import * as T from './types'

const rootReducer = (
	state = {
		meta: { isFetching: false, error: '' },
		feeds: { new: {}, top: {}, best: {} }
	},
	{ type, payload }
) => {
	switch (type) {
		case T.FETCH_FEED_RESPONSE:
			const { feedName, byIds, feed } = payload
			return {
				...state,
				meta: { isFetching: false, error: '' },
				feeds: { ...state.feeds, [feedName]: { byIds, feed } }
			}
		case T.FETCH_FEED_REQUEST:
			return { ...state, meta: { isFetching: true } }
		case T.FETCH_FEED_ERROR:
			return { ...state, meta: { isFetching: false, error: payload } }
		default:
			return state
	}
}
export default rootReducer
