import React from "react";
import { InformationLayout } from "@components";
import { MESSAGES } from "@constants";
import { useSelector } from "react-redux";

export const Information = () => {
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const isDraw = useSelector((state) => state.isDraw);

	let status;
	if (isDraw) {
		status = `${MESSAGES.DRAW}`;
	} else if (isGameEnded) {
		status = `${MESSAGES.VICTORY_PREFIX} ${currentPlayer}`;
	} else {
		status = `${MESSAGES.TURN_PREFIX} ${currentPlayer}`;
	}

	return <InformationLayout>{status}</InformationLayout>;
};
