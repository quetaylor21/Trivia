import { GET_SCORE } from '../actions/types';

export const results = (state = [], { type, payload }) => {
	console.log('the payload is', payload);
	switch (type) {
		case GET_SCORE:
			return payload;

		default:
			return state;
	}
};
