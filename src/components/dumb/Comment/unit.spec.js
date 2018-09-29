import React from 'react'
import setup from './specSetup'

import each from 'jest-each'
import { shouldRenderProps, shouldCallWith } from '../../../test-utils'

describe('<Comment />', () => {
	describe('render', () => {
		test('without crashing', () => {
			const { wrapper } = setup()
			expect(wrapper.exists()).toBe(true)
		})

		test('children', () => {
			const children = <div>some other comments</div>
			const { wrapper } = setup({ children })

			expect(wrapper.containsMatchingElement(children)).toBe(true)
		})

		describe('props', () => {
			const { wrapper, props } = setup()
			shouldRenderProps('text', 'by')(wrapper, props)
		})
	})

	describe('call handlers', () => {
		const { wrapper, props } = setup()
		shouldCallWith('onClick', 'click', props.kids)(wrapper, props)
	})
})
