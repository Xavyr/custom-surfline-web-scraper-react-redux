import { combineReducers } from 'redux';
import firstReducer from './firstReducer.js'
import { reducer as formReducer } from 'redux-form'


// combine reducers
const reducers = combineReducers({
	// we only have a single reducer, but if we had others we could combine them here,
  //by mapping them to a key.
  firstReducer: firstReducer,
  form: formReducer
});


export default reducers;