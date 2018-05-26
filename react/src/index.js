import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

import App from './App';
import { fetchAllPages } from './actions/pageActions';
import './index.css';

const store = configureStore();

store.dispatch(fetchAllPages());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
//registerServiceWorker();
