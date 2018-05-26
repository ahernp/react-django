import {combineReducers} from 'redux';
import feedreaderReducer from './feedreaderReducer';
import pagesReducer from './pagesReducer';

const rootReducer = combineReducers({
  feedreaderReducer,
  pagesReducer
});

export default rootReducer;
