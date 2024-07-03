import React, { Component } from "react";
import PropTypes from "prop-types";

class FieldLayout extends Component {
	render() {
		return (
			<button
				onClick={() => this.props.handleClick(this.props.id)}
				className="w-24 h-24 bg-amber-400 border border-green-700 text-green-700 cursor-pointer outline-none text-6xl hover:bg-amber-500 transition-all duration-300 flex items-center justify-center"
				id={this.props.id}
			>
				{this.props.value}
			</button>
		);
	}
}

FieldLayout.propTypes = {
	value: PropTypes.string,
	id: PropTypes.number.isRequired,
	handleClick: PropTypes.func.isRequired,
};

export default FieldLayout;
