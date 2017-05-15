import { createStore ,applyMiddleware} from 'redux'
import rootReducer from '../reducers/index'
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import { createLogger } from 'redux-logger'
// import nextRootReducer from '../reducers'
export default function configureStore() {
    const store =
        createStore(rootReducer, applyMiddleware(createLogger(),thunk,promise()));

    return store;
}