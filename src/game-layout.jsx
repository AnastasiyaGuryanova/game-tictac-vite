import React, { Component } from "react";
import { Field, Information } from "@components";
import PropTypes from "prop-types";
import { createUniqueNumber } from "@helpers";

class GameLayout extends Component {
	render() {
		return (
			<div
				className="min-h-screen w-full bg-teal-500 flex flex-col justify-center items-center"
				key={createUniqueNumber()}
			>
				<Information />
				<div
					className="mb-5 grid grid-cols-3 gap-1 border border-teal-700"
					key={createUniqueNumber()}
				>
					<Field />
				</div>
				<button
					className="py-2 px-4 bg-amber-400 border border-teal-700 rounded text-xl font-bold text-green-700 hover:bg-amber-500 transition-all duration-300"
					onClick={this.props.onRestart}
				>
					Начать с начала
				</button>
			</div>
		);
	}
}

GameLayout.propTypes = {
	onRestart: PropTypes.func.isRequired,
};

export default GameLayout;
