export const actionTypes = {
	RESET_GAME: "RESET_GAME",
	MAKE_MOVE: "MAKE_MOVE",
	SET_WINNER: "SET_WINNER",
	SET_DRAW: "SET_DRAW",
};

export const resetGame = () => ({ type: actionTypes.RESET_GAME });

export const makeMove = (index) => ({
	type: actionTypes.MAKE_MOVE,
	payload: { index },
});
