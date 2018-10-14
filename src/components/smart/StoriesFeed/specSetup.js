import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import { initialState } from '../../../redux/Feed/reducers'
import StoriesFeed from '.'

const mockStore = configureStore([])
const store = mockStore(initialState)

const defaultProps = {
	match: { params: { feed: 'new' } },
	feedList: [],
	requestFeedList: jest.fn()
}

const setup = (overrideProps, withDefault = true) => {
	const props = { ...(withDefault ? defaultProps : {}), ...overrideProps }
	const wrapper = shallow(<StoriesFeed {...props} />, {
		context: { store }
	}).dive()

	return {
		wrapper,
		props
	}
}

export default setup
