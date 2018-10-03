import React from 'react'
import setup from './specSetup'

import each from 'jest-each'
import { shouldRenderProps, shouldCallWith } from '../../../test-utils'

describe('<StoriesFeed />', () => {
	describe('render', () => {
		test('without crashing', () => {
			const { wrapper } = setup()
			expect(wrapper.exists()).toBe(true)
		})
	})

	describe('call handler', () => {
		test('requestFeedList with route param "feed" when feedList prop is empty', () => {
			const { wrapper, props } = setup()
			expect(props.requestFeedList).toHaveBeenCalledWith(
				props.match.params.feed
			)
		})
	})

	describe('does not call handler', () => {
		test('requestFeedList when feedList prop has items', () => {
			const { wrapper, props } = setup({ feedList: ['fooffz'] })

			// expect(props.requestFeedList).not.toBeCalled()
		})
	})
})
