import { Field, Information } from "@components";
import PropTypes from "prop-types";
import { createUniqueNumber } from "@helpers";
import styles from "./game.module.css";

export const GameLayout = ({ resetGame }) => {
	return (
		<div className={styles.wrapper} key={createUniqueNumber()}>
			<Information />
			<div className={styles.field} key={createUniqueNumber()}>
				<Field />
			</div>
			<button className={styles.btnResetGame} onClick={() => resetGame()}>
				Начать с начала
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	resetGame: PropTypes.func,
};
