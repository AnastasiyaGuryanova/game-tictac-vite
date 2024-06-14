import { useState, useEffect } from "react";
import { resetGame } from "@actions";
import { store } from "@store";
import { GameLayout } from "./game-layout";

export const Game = () => {
	const [, forceUpdate] = useState();

	useEffect(() => {
		const unsubscribe = store.subscribe(() => forceUpdate({}));
		return () => unsubscribe();
	}, []);

	return <GameLayout resetGame={() => store.dispatch(resetGame())} />;
};
