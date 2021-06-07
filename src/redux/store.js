import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
// action에서 dispatch를 return 해줄 수 있게 할 수 있다.
import thunk from 'redux-thunk'
// import subscribersReducer from './subscribers/reducer'
import rootReducer from './rootReducer'
import logger from 'redux-logger'

const middleware = [logger, thunk]
// actions 작성완료


// reducer 작성완료


// store
// const store = createStore(subscribersReducer)
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store