import reducer from './reducers'

import * as feedSelectors from './selectors'
import feedSagas from './sagas'
import * as feedTypes from './types'
import * as feedActions from './actions'

export { feedSelectors, feedSagas, feedTypes, feedActions }

export default reducer
