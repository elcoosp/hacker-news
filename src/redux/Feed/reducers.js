import * as T from './types'

export const initialState = {
	meta: { isFetching: false, error: '' },
	feeds: {
		new: { all: [], byIds: [] },
		top: { all: [], byIds: [] },
		best: { all: [], byIds: [] }
	}
}

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case T.FETCH_FEED_RESPONSE:
			const { feedName, byIds, all } = payload
			return {
				...state,
				meta: { isFetching: false, error: '' },
				feeds: { ...state.feeds, [feedName]: { byIds, all } }
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
