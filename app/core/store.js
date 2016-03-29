import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'app/core/reducers'

const createStoreWithMiddleware = compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)

const store = createStoreWithMiddleware(rootReducer, {})
export default store
