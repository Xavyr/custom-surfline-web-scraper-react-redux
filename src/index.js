import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import ScrapedBeachesContainer from './containers/ScrapedBeachesContainer.jsx';

const ocean = {
  fontSize: '100px',
  border: '5px solid pink'
};

ReactDOM.render(
  <Provider store={store}>
    <ScrapedBeachesContainer style={ocean}/>
  </Provider>, document.getElementById('root'));

module.hot.accept();