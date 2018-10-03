import React from 'react'
import { shallow } from 'enzyme'

import StoriesFeed from '.'

const defaultProps = {
	match: { params: { feed: 'new' } },
	feedList: [],
	requestFeedList: jest.fn()
}

const setup = (overrideProps, withDefault = true) => {
	const props = { ...(withDefault ? defaultProps : {}), ...overrideProps }
	const wrapper = shallow(<StoriesFeed {...props} />)

	return {
		wrapper,
		props
	}
}

export default setup
