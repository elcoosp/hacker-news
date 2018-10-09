import React, { PureComponent } from 'react'
import * as S from './style'
import P from 'prop-types'

class StoriesFeed extends PureComponent {
	static defaultProps = {
		feedList: []
	}
	state = {
		loading: false
	}
	componentDidMount = () => {
		const {
			feedList,
			requestFeedList,
			match: { params }
		} = this.props

		if (!feedList.length) requestFeedList(params.feed)
	}
	render() {
		const {
			match: { params }
		} = this.props
		return <main>{this.state.loading ? 'load' : 'loaded'}</main>
	}
}

StoriesFeed.propTypes = {
	requestFeedList: P.func.isRequired,
	match: P.shape({
		params: P.shape({
			feed: P.string.isRequired
		}).isRequired
	}).isRequired
}

export default StoriesFeed
