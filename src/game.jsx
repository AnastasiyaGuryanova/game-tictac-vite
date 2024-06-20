import React from "react";
import { useDispatch } from "react-redux";
import { restartGame } from "@actions";
import { GameLayout } from "./game-layout";

export const Game = () => {
	const dispatch = useDispatch();

	const handleRestart = () => {
		dispatch(restartGame());
	};

	return <GameLayout onRestart={handleRestart} />;
};
