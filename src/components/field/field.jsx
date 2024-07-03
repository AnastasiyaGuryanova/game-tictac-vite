import React, { Component } from "react";
import { connect } from "react-redux";
import FieldLayout from "./field-layout";
import { createUniqueNumber } from "@helpers";
import { makeMove } from "@actions";
import PropTypes from "prop-types";

class Field extends Component {
	handleClick = (index) => {
		this.props.makeMove(index);
	};

	render() {
		const { field } = this.props;

		return field.map((item, index) => (
			<FieldLayout
				value={item}
				handleClick={() => this.handleClick(index)}
				id={index}
				key={createUniqueNumber()}
			/>
		));
	}
}

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	makeMove: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	field: state.field,
});

const mapDispatchToProps = {
	makeMove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
