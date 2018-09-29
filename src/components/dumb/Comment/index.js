import React, { PureComponent } from 'react'
import * as S from './style'
import P from 'prop-types'

class Comment extends PureComponent {
	onClick = () => this.props.onClick(this.props.kids)
	render() {
		const { by, text, children } = this.props
		return (
			<S.Wrapper onClick={this.onClick}>
				<S.Author>{by}</S.Author>
				<S.Text>{text}</S.Text>
				{children}
			</S.Wrapper>
		)
	}
}

Comment.propTypes = {
	by: P.string.isRequired,
	id: P.number.isRequired,
	kids: P.arrayOf(P.number).isRequired,
	parent: P.number.isRequired,
	text: P.string.isRequired,
	time: P.number.isRequired,
	type: P.string.isRequired
}

export default Comment
