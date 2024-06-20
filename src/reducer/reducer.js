import { MAKE_MOVE, RESTART_GAME } from "@actions";
import { checkWinner } from "@helpers";
import { initialState, PLAYERS } from "@constants";

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case MAKE_MOVE: {
			const { index } = payload;

			if (state.field[index] || state.isGameEnded) {
				return state;
			}

			const newField = [...state.field];
			newField[index] = state.currentPlayer;

			const isGameEnded = checkWinner(newField);
			const isDraw = !isGameEnded && !newField.includes(null);

			return {
				...state,
				field: newField,
				isGameEnded: isGameEnded,
				isDraw: isDraw,
				currentPlayer: isGameEnded
					? state.currentPlayer
					: state.currentPlayer === PLAYERS.X
						? PLAYERS.O
						: PLAYERS.X,
			};
		}

		case RESTART_GAME:
			return initialState;

		default:
			return state;
	}
};
