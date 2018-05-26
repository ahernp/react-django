import {combineReducers} from 'redux';
import feedreader from './feedreaderReducer';
import pages from './pagesReducer';

const rootReducer = combineReducers({
  feedreader,
  pages
});

export default rootReducer;
