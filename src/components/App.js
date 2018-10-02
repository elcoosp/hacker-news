import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

/** Redux */
import { Provider } from 'react-redux'
import store from '../redux/store'

import StoriesFeed from './smart/StoriesFeed'

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Fragment>
				<Route exact path="/stories/:feed" component={StoriesFeed} />
			</Fragment>
		</BrowserRouter>
	</Provider>
)

export default App
