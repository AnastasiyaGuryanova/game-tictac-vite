export const MAKE_MOVE = "MAKE_MOVE";
export const RESTART_GAME = "RESTART_GAME";

export const makeMove = (index) => ({
	type: MAKE_MOVE,
	payload: { index },
});

export const restartGame = () => ({
	type: RESTART_GAME,
});
