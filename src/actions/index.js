import axios from 'axios';
import { FETCH_QUESTIONS, GET_SCORE } from './types';

// fetches all of the user data
export const fetchQuestions = () => async dispatch => {
	try {
		// set res to the return value of the call
		const res = await axios.get(
			'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'
		);
		let data = res.data.results.map((question, index) => {
			question.id = index;
			return question;
		});
		dispatch({ type: FETCH_QUESTIONS, payload: data });
	} catch (e) {
		console.log('Error:', e);
	}
};

export const getScore = (questions, state, callback) => {
	let correct = 0;

	questions.forEach((question, index) => {
		if (question.correct_answer === state.answers[index]) {
			correct++;
		}
	});

	const score = correct / questions.length * 100 + '%';
	const time = state.elapsed;
	callback()
	return { type: GET_SCORE, payload: { score, time } };
};
