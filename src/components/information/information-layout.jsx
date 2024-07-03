import React, { Component } from "react";
import PropTypes from "prop-types";

class InformationLayout extends Component {
	render() {
		return (
			<div className="mb-5 text-2xl font-bold text-green-700">
				{this.props.children}
			</div>
		);
	}
}

InformationLayout.propTypes = {
	children: PropTypes.string.isRequired,
};

export default InformationLayout;
