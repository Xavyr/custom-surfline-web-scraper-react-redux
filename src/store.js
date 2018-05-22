import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import form from 'redux-form'; //Verbose
import reducers  from './reducers/combinedReducers.js';


//the store, enhanced with thunk middleware to allow for async action in redux.
const store = createStore(
	reducers,
  form, //this is unnecessary- you don't have to explicitly drop in reducers
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);


export default store;