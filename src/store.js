import nodeFilterReducer from './reducers/nodeFilterReducer'
import postListReducer from './reducers/postListReducer'
import postReducer from './reducers/postReducer'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducers = combineReducers({
    nodeFilter: nodeFilterReducer,
    postList: postListReducer,
    post: postReducer
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
    )

export default store