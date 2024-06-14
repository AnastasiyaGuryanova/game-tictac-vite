import { appReduser } from "@reduser";
import { initialState } from "@constants";

const createStore = (reducer) => {
	let state = initialState;
	const listeners = [];

	return {
		dispatch: (action) => {
			state = reducer(state, action);
			listeners.forEach((listener) => listener());
		},

		getState: () => state,

		subscribe: (listener) => {
			listeners.push(listener);

			return () => {
				const index = listeners.indexOf(listener);
				if (index > -1) {
					listeners.splice(index, 1);
				}
			};
		},
	};
};

export const store = createStore(appReduser);
