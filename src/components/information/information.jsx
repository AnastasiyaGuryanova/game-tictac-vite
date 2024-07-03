import React, { Component } from "react";
import { connect } from "react-redux";
import { MESSAGES } from "@constants";
import InformationLayout from "./information-layout";
import PropTypes from "prop-types";

class Information extends Component {
	render() {
		const { currentPlayer, isGameEnded, isDraw } = this.props;

		let status;
		if (isDraw) {
			status = `${MESSAGES.DRAW}`;
		} else if (isGameEnded) {
			status = `${MESSAGES.VICTORY_PREFIX} ${currentPlayer}`;
		} else {
			status = `${MESSAGES.TURN_PREFIX} ${currentPlayer}`;
		}

		return <InformationLayout>{status}</InformationLayout>;
	}
}

Information.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
});

export default connect(mapStateToProps)(Information);
