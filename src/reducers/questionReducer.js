import { FETCH_QUESTIONS } from '../actions/types';

export const questions = (state = [], { type, payload }) => {
	// console.log('the payload is', payload);
	switch (type) {
		case FETCH_QUESTIONS:
			return payload;

		default:
			return state;
	}
};
