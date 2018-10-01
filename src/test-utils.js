import each from 'jest-each'
const entriesForKeys = (...keys) => obj =>
	Object.entries(obj).filter(([key]) => keys.includes(key))

export const shouldRenderProps = (...propsKeys) => (wrapper, props) => {
	const propsToRender = entriesForKeys(...propsKeys)(props)

	each(propsToRender).it('%s', (_, prop) =>
		expect(wrapper.contains(prop)).toBe(true)
	)
}

export const shouldCallWith = (handlerProp, event, ...withArgs) => (
	wrapper,
	props
) => {
	test(`${handlerProp} with ${withArgs}`, () => {
		expect(props[handlerProp]).not.toHaveBeenCalled()
		wrapper.simulate(event)
		expect(props.onClick).toHaveBeenCalledWith(...withArgs)
	})
}
