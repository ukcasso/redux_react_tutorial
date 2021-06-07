import { combineReducers } from 'redux';
import subscribersReducer from './subscribers/reducer';
import viewsReduver from './views/reducer';
import commentsReducer from './comments/reducer';

const rootReducer = combineReducers({
  views: viewsReduver,
  subscribers: subscribersReducer,
  comments: commentsReducer
})

export default rootReducer