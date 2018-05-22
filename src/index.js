import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import ScrapedBeachesContainer from './containers/ScrapedBeachesContainer.jsx';

ReactDOM.render(
  <Provider store={store}>
    <ScrapedBeachesContainer />
  </Provider>, document.getElementById('root'));

module.hot.accept();