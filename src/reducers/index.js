import { combineReducers } from 'redux';
import { questions } from './questionReducer';
import { results } from './resultsReducer';

export default combineReducers({
	questions,
	results
});
