import React, { Component } from "react";
import { connect } from "react-redux";
import { restartGame } from "@actions";
import GameLayout from "./game-layout";

class Game extends Component {
	handleRestart = () => {
		this.props.restartGame();
	};

	render() {
		return <GameLayout onRestart={this.handleRestart} />;
	}
}

const mapDispatchToProps = {
	restartGame,
};

export default connect(null, mapDispatchToProps)(Game);
