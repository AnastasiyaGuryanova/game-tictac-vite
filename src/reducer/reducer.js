import { actionTypes } from "@actions";
import { checkWinner } from "@helpers";
import { initialState, PLAYERS } from "@constants";

export const appReduser = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.MAKE_MOVE: {
			const { index } = payload;

			if (state.field[index] || state.isGameEnded) {
				return state;
			}

			const newField = [...state.field];
			newField[index] = state.currentPlayer;

			const isGameEnded = checkWinner(newField);
			const isDraw = !isGameEnded && !newField.includes("");

			return {
				...state,
				field: newField,
				isGameEnded: isGameEnded,
				isDraw: isDraw,
				currentPlayer:
					state.isGameEnded || isGameEnded
						? state.currentPlayer
						: state.currentPlayer === `${PLAYERS.X}`
							? `${PLAYERS.O}`
							: `${PLAYERS.X}`,
			};
		}
		case actionTypes.RESET_GAME:
			return initialState;

		default:
			return state;
	}
};
