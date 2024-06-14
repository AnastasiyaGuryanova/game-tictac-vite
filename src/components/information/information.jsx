import { InformationLayout } from "@components";
import { MESSAGES } from "@constants";
import { store } from "@store";

export const Information = () => {
	const state = store.getState();
	const { isDraw, isGameEnded, currentPlayer } = state;

	let content;
	if (isDraw) {
		content = `${MESSAGES.DRAW}`;
	} else if (!isDraw) {
		content = isGameEnded
			? `${MESSAGES.VICTORY_PREFIX} ${currentPlayer}`
			: `${MESSAGES.TURN_PREFIX} ${currentPlayer}`;
	}

	return <InformationLayout>{content}</InformationLayout>;
};
