import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import * as a from './api'

a.getFeed('new').then(console.log)
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
