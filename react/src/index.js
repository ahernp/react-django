import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

import App from './App';
import { fetchAllPagesAction } from './actions/pageActions';
import { fetchAllFeedreaderDataAction } from './actions/feedreaderActions';
import './index.css';

const store = configureStore();

store.dispatch(fetchAllPagesAction());
store.dispatch(fetchAllFeedreaderDataAction());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
//registerServiceWorker();
