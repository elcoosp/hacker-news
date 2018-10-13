import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as S from './style'
import P from 'prop-types'
import { feedActions } from '../../../redux/Feed'

class StoriesFeed extends Component {
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
		console.log(feedList)

		if (feedList.length === 0)
			this.setState({ loading: true }, () => requestFeedList(params.feedName))
	}
	render() {
		const {
			match: { params }
		} = this.props
		return <main>{this.state.loading ? 'load' : 'loaded'}</main>
	}
}

StoriesFeed.propTypes = {
	feedList: P.arrayOf(
		P.exact({
			by: P.string.isRequired,
			descendants: P.number.isRequired,
			id: P.number.isRequired,
			score: P.number.isRequired,
			time: P.number.isRequired,
			title: P.string.isRequired,
			type: P.string.isRequired,
			kids: P.arrayOf(P.number),
			text: P.string,
			url: P.string
		})
	).isRequired,
	requestFeedList: P.func.isRequired,
	match: P.shape({
		params: P.shape({
			feedName: P.string.isRequired
		}).isRequired
	}).isRequired
}

const mapStateToProps = (state, { match: { params } }) => ({
	feedList: state.feed.feeds[params.feedName].all
})
const mapDispatchToProps = (dispatch, { match: { params } }) => ({
	requestFeedList: () => dispatch(feedActions.fetchFeedRequest(params.feedName))
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StoriesFeed)
